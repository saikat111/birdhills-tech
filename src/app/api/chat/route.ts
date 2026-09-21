import { NextRequest, NextResponse } from "next/server";
import { BirdHillsAIService } from "@/lib/ai/service";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { sessionId, message } = body;

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const currentSessionId =
      sessionId && typeof sessionId === "string"
        ? sessionId
        : `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    const response = await BirdHillsAIService.processMessage(
      currentSessionId,
      message.trim()
    );

    return NextResponse.json({
      sessionId: currentSessionId,
      reply: response.reply,
      qualification: response.qualification,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error processing chat request" },
      { status: 500 }
    );
  }
}
