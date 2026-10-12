import { ChatMessageDto, QualificationData, AIResponse } from "./types";
import { prisma } from "../prisma";

/**
 * Bird Hills Tech AI Service Layer
 * Supports offline intelligent lead qualification and pluggable external LLMs (Gemini / OpenAI).
 */
export class BirdHillsAIService {
  /**
   * Process a user message in a conversation session, generate a response,
   * extract qualification parameters, and update the database.
   */
  public static async processMessage(
    sessionId: string,
    userText: string
  ): Promise<AIResponse> {
    // 1. Fetch or create conversation
    let conversation = await prisma.chatConversation.findUnique({
      where: { sessionId },
      include: {
        messages: {
          orderBy: { createdAt: "asc" },
        },
      },
    });

    if (!conversation) {
      conversation = await prisma.chatConversation.create({
        data: {
          sessionId,
          status: "active",
        },
        include: {
          messages: true,
        },
      });
    }

    // 2. Save incoming user message
    await prisma.chatMessage.create({
      data: {
        conversationId: conversation.id,
        sender: "user",
        text: userText,
      },
    });

    // 3. Re-fetch history for context
    const history = await prisma.chatMessage.findMany({
      where: { conversationId: conversation.id },
      orderBy: { createdAt: "asc" },
    });

    // 4. Extract data and generate response
    const aiResult = await this.generateResponse(history, {
      leadName: conversation.leadName || undefined,
      leadEmail: conversation.leadEmail || undefined,
      leadPhone: conversation.leadPhone || undefined,
      leadCompany: conversation.leadCompany || undefined,
      isQualified: conversation.status === "qualified",
    });

    // 5. Save assistant reply
    await prisma.chatMessage.create({
      data: {
        conversationId: conversation.id,
        sender: "assistant",
        text: aiResult.reply,
      },
    });

    // 6. Update conversation state and sync with Leads table if qualified
    const updatedName = aiResult.qualification.leadName || conversation.leadName;
    const updatedEmail = aiResult.qualification.leadEmail || conversation.leadEmail;
    const updatedPhone = aiResult.qualification.leadPhone || conversation.leadPhone;
    const updatedCompany = aiResult.qualification.leadCompany || conversation.leadCompany;

    const isNewlyQualified =
      !conversation.leadEmail &&
      updatedEmail &&
      (updatedName || updatedPhone);

    await prisma.chatConversation.update({
      where: { id: conversation.id },
      data: {
        leadName: updatedName,
        leadEmail: updatedEmail,
        leadPhone: updatedPhone,
        leadCompany: updatedCompany,
        status: isNewlyQualified || conversation.status === "qualified" ? "qualified" : "active",
      },
    });

    if (isNewlyQualified && updatedEmail) {
      // Auto-create or update Lead entry in CRM
      try {
        await prisma.lead.create({
          data: {
            name: updatedName || "Website Visitor",
            email: updatedEmail,
            phone: updatedPhone || null,
            company: updatedCompany || null,
            service: aiResult.qualification.serviceInterest || "General Inquiry",
            budget: aiResult.qualification.budgetEstimated || "To be discussed",
            source: "AI Chatbot",
            status: "Qualified",
            message: `Lead qualified via AI Assistant.\nRequirement Summary: ${userText}\nFull session: ${sessionId}`,
            notes: "Automatic lead generated from intelligent chat qualification flow.",
          },
        });
      } catch (err) {
        console.error("Failed to auto-create lead from chat:", err);
      }
    }

    return aiResult;
  }

  /**
   * Internal response generation router
   */
  private static async generateResponse(
    messages: { sender: string; text: string }[],
    currentQual: QualificationData
  ): Promise<AIResponse> {
    const geminiKey = process.env.GEMINI_API_KEY;
    const openAIKey = process.env.OPENAI_API_KEY;

    // Check if external API key is configured
    if (geminiKey) {
      try {
        return await this.callGeminiAPI(messages, currentQual, geminiKey);
      } catch (e) {
        console.warn("Gemini API fallback to internal engine:", e);
      }
    } else if (openAIKey) {
      try {
        return await this.callOpenAIAPI(messages, currentQual, openAIKey);
      } catch (e) {
        console.warn("OpenAI API fallback to internal engine:", e);
      }
    }

    // Default intelligent rule-based corporate qualifier
    return this.generateHeuristicResponse(messages, currentQual);
  }

  /**
   * Built-in intelligent conversational qualifier engine.
   * Understands Dubai market context, services, and seamlessly captures visitor lead details.
   */
  private static generateHeuristicResponse(
    messages: { sender: string; text: string }[],
    qual: QualificationData
  ): AIResponse {
    const lastUserMessage = [...messages].reverse().find((m) => m.sender === "user")?.text || "";
    const lower = lastUserMessage.toLowerCase();

    // Regex extraction for email, phone, name
    const emailMatch = lastUserMessage.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    const phoneMatch = lastUserMessage.match(/(?:\+?\d{1,4}[\s-]?)?\(?\d{2,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{3,5}/);

    const updatedQual = { ...qual };
    if (emailMatch && !updatedQual.leadEmail) {
      updatedQual.leadEmail = emailMatch[0];
    }
    if (phoneMatch && !updatedQual.leadPhone && phoneMatch[0].replace(/\D/g, "").length >= 7) {
      updatedQual.leadPhone = phoneMatch[0];
    }

    // Check for service keywords
    if (lower.includes("website") || lower.includes("web dev") || lower.includes("landing page")) {
      updatedQual.serviceInterest = "Web Development";
    } else if (lower.includes("software") || lower.includes("app") || lower.includes("portal") || lower.includes("saas")) {
      updatedQual.serviceInterest = "Web Applications";
    } else if (lower.includes("ecommerce") || lower.includes("e-commerce") || lower.includes("store") || lower.includes("shop")) {
      updatedQual.serviceInterest = "E-commerce Solutions";
    } else if (lower.includes("brand") || lower.includes("logo") || lower.includes("identity") || lower.includes("design")) {
      updatedQual.serviceInterest = "Branding & Design";
    } else if (lower.includes("market") || lower.includes("ads") || lower.includes("google") || lower.includes("lead")) {
      updatedQual.serviceInterest = "Digital Marketing";
    } else if (lower.includes("seo") || lower.includes("search") || lower.includes("ranking")) {
      updatedQual.serviceInterest = "SEO Solutions";
    } else if (lower.includes("ai") || lower.includes("automation") || lower.includes("bot")) {
      updatedQual.serviceInterest = "AI Solutions";
    }

    // Step-by-step qualification flow
    if (!updatedQual.leadEmail) {
      if (emailMatch) {
        return {
          reply: `Thank you for sharing your email (${emailMatch[0]}). Could you also provide your name and phone or WhatsApp number so our senior consultant in Dubai can get in touch with you?`,
          qualification: updatedQual,
        };
      }

      if (lower.includes("website") || lower.includes("web development")) {
        return {
          reply: `At Bird Hills Tech, we engineer high-performance websites built on modern frameworks like Next.js, optimized for ultra-fast load times and maximum conversion.\n\nTo recommend the best architecture and scope for your project, could you share your name and company email address?`,
          qualification: updatedQual,
        };
      }

      if (lower.includes("marketing") || lower.includes("grow") || lower.includes("traffic")) {
        return {
          reply: `Our growth practice in Dubai focuses on qualified B2B customer acquisition and measurable ROI—not vanity metrics. We run high-intent Google Ads, targeted LinkedIn campaigns, and authority SEO.\n\nCould you share your business email or WhatsApp number so we can review your current digital footprint?`,
          qualification: updatedQual,
        };
      }

      if (lower.includes("brand") || lower.includes("design") || lower.includes("ui") || lower.includes("ux")) {
        return {
          reply: `We craft authoritative corporate identities and digital design systems that build immediate trust in the Dubai and Gulf business landscape.\n\nWhat is your company or project name, and where can our creative team send an introductory brief?`,
          qualification: updatedQual,
        };
      }

      if (lower.includes("software") || lower.includes("custom") || lower.includes("saas") || lower.includes("portal")) {
        return {
          reply: `We build bespoke web applications, enterprise portals, and SaaS systems with robust role-based security, scalable database architecture, and frictionless UI.\n\nWhat is the best email and WhatsApp number to connect with your technical team?`,
          qualification: updatedQual,
        };
      }

      if (lower.includes("ai") || lower.includes("automation")) {
        return {
          reply: `We help UAE enterprises implement practical AI solutions—such as 24/7 intelligent customer qualifiers, automated workflows, and internal knowledge assistants.\n\nCould you share your work email so we can share relevant enterprise case studies?`,
          qualification: updatedQual,
        };
      }

      // Default prompt
      return {
        reply: `Thank you for reaching out to Bird Hills Tech. We combine technology, creative strategy, and digital marketing to build powerful digital experiences in Dubai.\n\nWhat kind of digital initiative are you looking to launch, and what is your business email or WhatsApp number?`,
        qualification: updatedQual,
      };
    }

    // We have email, need name/phone or requirement confirmation
    if (updatedQual.leadEmail && !updatedQual.leadPhone) {
      return {
        reply: `Got it! What is the best phone or WhatsApp number for you, and your name? We can arrange an introductory consultation or meeting at our Deira office.`,
        qualification: updatedQual,
      };
    }

    // Fully qualified
    updatedQual.isQualified = true;
    return {
      reply: `Thank you! I have recorded your inquiry for our senior team at Bird Hills Tech Dubai. A dedicated growth consultant will review your requirements and follow up within 2 to 4 business hours.\n\nYou can also book a specific calendar time via our 'Book a Meeting' page or reach us immediately on WhatsApp at +971 52 440 5785.`,
      qualification: updatedQual,
    };
  }

  /**
   * External Gemini integration stub with error-safe fallback
   */
  private static async callGeminiAPI(
    messages: { sender: string; text: string }[],
    qual: QualificationData,
    apiKey: string
  ): Promise<AIResponse> {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const systemPrompt = `You are the executive AI assistant for Bird Hills Tech, a Dubai-based technology, creative and digital growth company (Deira, Dubai, UAE; phone: +971 52 440 5785). Position: Technology × Creative × Growth. Be professional, concise, corporate, and helpful. Guide the visitor to share their project requirements, name, company, email, and WhatsApp number so our senior team can prepare a proposal.`;

    const contents = messages.map((m) => ({
      role: m.sender === "user" ? "user" : "model",
      parts: [{ text: m.text }],
    }));

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          { role: "user", parts: [{ text: `System Instruction: ${systemPrompt}` }] },
          ...contents,
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Gemini API returned status ${response.status}`);
    }

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Thank you for reaching out to Bird Hills Tech.";
    const heuristic = this.generateHeuristicResponse(messages, qual);

    return {
      reply,
      qualification: heuristic.qualification,
    };
  }

  /**
   * External OpenAI integration stub with error-safe fallback
   */
  private static async callOpenAIAPI(
    messages: { sender: string; text: string }[],
    qual: QualificationData,
    apiKey: string
  ): Promise<AIResponse> {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `You are the executive AI assistant for Bird Hills Tech, a Dubai-based technology, creative and digital growth company (Deira, Dubai, UAE; phone: +971 52 440 5785). Position: Technology × Creative × Growth. Be professional, concise, corporate, and helpful. Help qualify the visitor for web development, branding, digital marketing, or AI solutions, and politely collect their name, company, email, and WhatsApp number.`,
          },
          ...messages.map((m) => ({
            role: m.sender === "user" ? "user" : "assistant",
            content: m.text,
          })),
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API returned status ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Thank you for contacting Bird Hills Tech.";
    const heuristic = this.generateHeuristicResponse(messages, qual);

    return {
      reply,
      qualification: heuristic.qualification,
    };
  }
}
