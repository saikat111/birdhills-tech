import nodemailer from "nodemailer";

const host = process.env.SMTP_HOST || "smtp.hostinger.com";
const port = Number(process.env.SMTP_PORT) || 465;
const secure = process.env.SMTP_SECURE !== "false";
const user = process.env.SMTP_USER || "support@birdhillstech.com";
const pass = process.env.SMTP_PASS || "AnIs@6900";
const defaultFrom = process.env.MAIL_FROM || `"Bird Hills Tech" <support@birdhillstech.com>`;
const adminNotificationEmail = process.env.ADMIN_NOTIFICATION_EMAIL || "birdhillstech@gmail.com";

export const mailTransporter = nodemailer.createTransport({
  host,
  port,
  secure,
  auth: {
    user,
    pass,
  },
});

export interface BookingEmailData {
  bookingId?: string;
  name: string;
  company?: string | null;
  email: string;
  phone: string;
  service: string;
  date: string;
  timeSlot: string;
  message?: string | null;
}

export interface ContactEmailData {
  contactId?: string;
  name: string;
  company?: string | null;
  email: string;
  phone?: string | null;
  service: string;
  budget?: string | null;
  message: string;
}

/**
 * Sends a booking notification email to the admin (birdhillstech@gmail.com)
 * and an acknowledgement confirmation email to the client.
 */
export async function sendBookingNotification(data: BookingEmailData) {
  try {
    const cleanPhone = data.phone.replace(/[^0-9+]/g, "");
    const waLink = cleanPhone.startsWith("+")
      ? `https://wa.me/${cleanPhone.replace("+", "")}`
      : `https://wa.me/${cleanPhone}`;

    // 1. Admin Email HTML
    const adminHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Consultation Booking</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 24px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
          .header { background-color: #070B14; padding: 32px 28px; text-align: center; border-bottom: 3px solid #C59B27; }
          .header h1 { margin: 0 0 8px; color: #ffffff; font-size: 22px; font-weight: 700; letter-spacing: -0.5px; }
          .header p { margin: 0; color: #D4AF37; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
          .content { padding: 32px 28px; }
          .badge { display: inline-block; padding: 6px 14px; background-color: #FEF3C7; color: #92400E; border-radius: 20px; font-size: 12px; font-weight: 700; margin-bottom: 20px; }
          .details-card { background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 12px; padding: 20px; margin-bottom: 24px; }
          .message-box { background-color: #f8fafc; border-left: 4px solid #C59B27; padding: 14px 18px; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #334155; margin-top: 10px; font-style: italic; }
          .cta-group { margin-top: 28px; text-align: center; }
          .btn-gold { display: inline-block; background: linear-gradient(135deg, #D4AF37, #B38728); color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; margin: 6px; }
          .btn-outline { display: inline-block; background: #070B14; color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; margin: 6px; }
          .footer { background-color: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <p>Bird Hills Tech · Booking Notification</p>
            <h1>New Consultation Booking</h1>
          </div>
          <div class="content">
            <span class="badge">📅 Appointment Requested</span>
            <p style="font-size: 15px; line-height: 1.5; color: #475569; margin-top: 0;">
              A new consultation booking has been scheduled through the website. Here are the meeting details:
            </p>

            <div class="details-card">
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #f0eee9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 500; font-size: 14px;">Client Name</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 700; font-size: 14px; text-align: right;">${data.name}</td>
                </tr>
                ${data.company ? `
                <tr style="border-bottom: 1px solid #f0eee9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 500; font-size: 14px;">Company</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 600; font-size: 14px; text-align: right;">${data.company}</td>
                </tr>` : ""}
                <tr style="border-bottom: 1px solid #f0eee9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 500; font-size: 14px;">Email</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 600; font-size: 14px; text-align: right;">
                    <a href="mailto:${data.email}" style="color: #B38728; text-decoration: none;">${data.email}</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #f0eee9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 500; font-size: 14px;">Phone / WhatsApp</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 600; font-size: 14px; text-align: right;">
                    <a href="tel:${cleanPhone}" style="color: #0f172a; text-decoration: none;">${data.phone}</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #f0eee9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 500; font-size: 14px;">Service</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 700; font-size: 14px; text-align: right;">${data.service}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f0eee9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 500; font-size: 14px;">Preferred Date</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 700; font-size: 14px; text-align: right;">${data.date}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #64748b; font-weight: 500; font-size: 14px;">Preferred Time</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 700; font-size: 14px; text-align: right;">${data.timeSlot}</td>
                </tr>
              </table>

              ${data.message ? `
              <div style="margin-top: 16px; padding-top: 14px; border-top: 1px dashed #e2e8f0;">
                <div style="color: #64748b; font-size: 13px; font-weight: 600; margin-bottom: 6px;">Client Message / Notes:</div>
                <div class="message-box">"${data.message}"</div>
              </div>` : ""}
            </div>

            <div class="cta-group">
              <a href="mailto:${data.email}?subject=Confirming%20Your%20Consultation%20with%20Bird%20Hills%20Tech" class="btn-gold">
                Reply via Email
              </a>
              <a href="${waLink}" target="_blank" class="btn-outline">
                Message on WhatsApp
              </a>
            </div>
          </div>
          <div class="footer">
            © 2026 Bird Hills Tech Dubai · Operational CRM & Lead Notification System
          </div>
        </div>
      </body>
      </html>
    `;

    // Send to Admin (birdhillstech@gmail.com)
    const adminResult = await mailTransporter.sendMail({
      from: defaultFrom,
      to: adminNotificationEmail,
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `📅 New Booking: ${data.name} — ${data.service} (${data.date} ${data.timeSlot})`,
      html: adminHtml,
      text: `New consultation booking from ${data.name} (${data.email}, ${data.phone}). Service: ${data.service}. Preferred Date: ${data.date} at ${data.timeSlot}. Message: ${data.message || "N/A"}`,
    });

    console.log("Admin booking notification sent:", adminResult.messageId);

    // 2. Client Acknowledgement Email HTML
    const clientHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Consultation Request Received - Bird Hills Tech</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; }
          .header { background-color: #070B14; padding: 32px 28px; text-align: center; border-bottom: 3px solid #C59B27; }
          .header h1 { margin: 0 0 6px; color: #ffffff; font-size: 20px; font-weight: 700; }
          .header p { margin: 0; color: #D4AF37; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
          .content { padding: 32px 28px; }
          .card { background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 12px; padding: 20px; margin: 20px 0; }
          .footer { background-color: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <p>Bird Hills Tech Dubai</p>
            <h1>Consultation Request Received</h1>
          </div>
          <div class="content">
            <p style="font-size: 16px; color: #0f172a; margin-top: 0;">Dear <strong>${data.name}</strong>,</p>
            <p style="font-size: 14px; line-height: 1.6; color: #475569;">
              Thank you for scheduling a strategic consultation with Bird Hills Tech. We have received your booking request for <strong>${data.service}</strong>.
            </p>

            <div class="card">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr style="border-bottom: 1px solid #f0eee9;">
                  <td style="padding: 8px 0; color: #64748b;">Requested Date:</td>
                  <td style="padding: 8px 0; color: #0f172a; font-weight: 700; text-align: right;">${data.date}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f0eee9;">
                  <td style="padding: 8px 0; color: #64748b;">Preferred Time:</td>
                  <td style="padding: 8px 0; color: #0f172a; font-weight: 700; text-align: right;">${data.timeSlot} (GST)</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b;">Service Area:</td>
                  <td style="padding: 8px 0; color: #0f172a; font-weight: 700; text-align: right;">${data.service}</td>
                </tr>
              </table>
            </div>

            <p style="font-size: 14px; line-height: 1.6; color: #475569;">
              Our senior technology and digital growth team in Dubai will review your brief and send you a calendar invitation and meeting link shortly.
            </p>
            <p style="font-size: 14px; line-height: 1.6; color: #475569;">
              If you have urgent questions, you can also reach us directly via WhatsApp at <strong>+971 52 440 5785</strong> or reply directly to this email.
            </p>
            
            <p style="margin-top: 24px; font-size: 14px; color: #0f172a; font-weight: 600;">
              Warm regards,<br>
              <span style="color: #B38728;">The Bird Hills Tech Team</span><br>
              <span style="font-size: 12px; color: #64748b; font-weight: 400;">Dubai, United Arab Emirates</span>
            </p>
          </div>
          <div class="footer">
            © 2026 Bird Hills Tech. All rights reserved. Registered in Dubai, UAE.
          </div>
        </div>
      </body>
      </html>
    `;

    // Send confirmation to client
    await mailTransporter.sendMail({
      from: defaultFrom,
      to: data.email,
      subject: `Consultation Confirmed: ${data.service} with Bird Hills Tech`,
      html: clientHtml,
      text: `Dear ${data.name}, thank you for booking a consultation with Bird Hills Tech for ${data.service} on ${data.date} at ${data.timeSlot}. Our Dubai team will send you the calendar invite shortly.`,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send booking notification email:", error);
    return { success: false, error };
  }
}

/**
 * Sends a contact inquiry notification email to the admin (birdhillstech@gmail.com).
 */
export async function sendContactNotification(data: ContactEmailData) {
  try {
    const cleanPhone = data.phone ? data.phone.replace(/[^0-9+]/g, "") : "";
    const waLink = cleanPhone ? (cleanPhone.startsWith("+") ? `https://wa.me/${cleanPhone.replace("+", "")}` : `https://wa.me/${cleanPhone}`) : null;

    const adminHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Project Inquiry</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 24px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
          .header { background-color: #070B14; padding: 32px 28px; text-align: center; border-bottom: 3px solid #C59B27; }
          .header h1 { margin: 0 0 8px; color: #ffffff; font-size: 22px; font-weight: 700; letter-spacing: -0.5px; }
          .header p { margin: 0; color: #D4AF37; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
          .content { padding: 32px 28px; }
          .badge { display: inline-block; padding: 6px 14px; background-color: #E0F2FE; color: #0369A1; border-radius: 20px; font-size: 12px; font-weight: 700; margin-bottom: 20px; }
          .details-card { background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 12px; padding: 20px; margin-bottom: 24px; }
          .cta-group { margin-top: 28px; text-align: center; }
          .btn-gold { display: inline-block; background: linear-gradient(135deg, #D4AF37, #B38728); color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; margin: 6px; }
          .btn-outline { display: inline-block; background: #070B14; color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; margin: 6px; }
          .footer { background-color: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <p>Bird Hills Tech · Contact Notification</p>
            <h1>New Client Project Inquiry</h1>
          </div>
          <div class="content">
            <span class="badge">💬 New Message</span>
            <p style="font-size: 15px; line-height: 1.5; color: #475569; margin-top: 0;">
              A new project inquiry has been received through the website contact form:
            </p>

            <div class="details-card">
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #f0eee9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 500; font-size: 14px;">Prospect Name</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 700; font-size: 14px; text-align: right;">${data.name}</td>
                </tr>
                ${data.company ? `
                <tr style="border-bottom: 1px solid #f0eee9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 500; font-size: 14px;">Company</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 600; font-size: 14px; text-align: right;">${data.company}</td>
                </tr>` : ""}
                <tr style="border-bottom: 1px solid #f0eee9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 500; font-size: 14px;">Email</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 600; font-size: 14px; text-align: right;">
                    <a href="mailto:${data.email}" style="color: #B38728; text-decoration: none;">${data.email}</a>
                  </td>
                </tr>
                ${data.phone ? `
                <tr style="border-bottom: 1px solid #f0eee9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 500; font-size: 14px;">Phone</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 600; font-size: 14px; text-align: right;">
                    <a href="tel:${cleanPhone}" style="color: #0f172a; text-decoration: none;">${data.phone}</a>
                  </td>
                </tr>` : ""}
                <tr style="border-bottom: 1px solid #f0eee9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 500; font-size: 14px;">Service</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 700; font-size: 14px; text-align: right;">${data.service}</td>
                </tr>
                ${data.budget ? `
                <tr style="border-bottom: 1px solid #f0eee9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 500; font-size: 14px;">Estimated Budget</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 700; font-size: 14px; text-align: right;">${data.budget}</td>
                </tr>` : ""}
              </table>

              <div style="margin-top: 16px; padding-top: 14px; border-top: 1px dashed #e2e8f0;">
                <div style="color: #64748b; font-size: 13px; font-weight: 600; margin-bottom: 6px;">Client Message:</div>
                <div style="background-color: #f8fafc; border-left: 4px solid #C59B27; padding: 14px 18px; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #334155;">
                  ${data.message}
                </div>
              </div>
            </div>

            <div class="cta-group">
              <a href="mailto:${data.email}?subject=Re:%20Inquiry%20regarding%20${encodeURIComponent(data.service)}%20-%20Bird%20Hills%20Tech" class="btn-gold">
                Reply via Email
              </a>
              ${waLink ? `
              <a href="${waLink}" target="_blank" class="btn-outline">
                WhatsApp Client
              </a>` : ""}
            </div>
          </div>
          <div class="footer">
            © 2026 Bird Hills Tech Dubai · Operational CRM & Lead Notification System
          </div>
        </div>
      </body>
      </html>
    `;

    await mailTransporter.sendMail({
      from: defaultFrom,
      to: adminNotificationEmail,
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `💼 New Inquiry: ${data.name} — ${data.service}`,
      html: adminHtml,
      text: `New contact inquiry from ${data.name} (${data.email}, ${data.phone || "No phone"}). Service: ${data.service}. Budget: ${data.budget || "N/A"}. Message: ${data.message}`,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send contact notification email:", error);
    return { success: false, error };
  }
}
