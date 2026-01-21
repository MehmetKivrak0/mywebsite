import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Ensure this route always runs on the Node.js runtime (not Edge),
// so nodemailer and TCP sockets work in production (e.g., Vercel).
export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const subject = (body.subject ?? "").trim();
    const message = (body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "missing_fields" },
        { status: 400 },
      );
    }

    // E-posta gönderme işlevselliği
    const contactEmail = process.env.CONTACT_EMAIL;
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!contactEmail || !smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      console.error("[contact] E-posta ayarları eksik. Lütfen .env dosyasını kontrol edin.", {
        hasContactEmail: Boolean(contactEmail),
        hasSmtpHost: Boolean(smtpHost),
        hasSmtpPort: Boolean(smtpPort),
        hasSmtpUser: Boolean(smtpUser),
        hasSmtpPass: Boolean(smtpPass),
      });
      return NextResponse.json(
        { ok: false, error: "email_config_missing" },
        { status: 500 },
      );
    }

    // Nodemailer transporter oluştur
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort, 10),
      secure: parseInt(smtpPort, 10) === 465, // 465 için SSL, diğerleri için false
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // E-posta içeriği
    const mailOptions = {
      from: `"${name}" <${smtpUser}>`,
      replyTo: email,
      to: contactEmail,
      subject: subject || `İletişim Formu: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Yeni İletişim Formu Mesajı
          </h2>
          <div style="margin-top: 20px;">
            <p><strong>Gönderen:</strong> ${name}</p>
            <p><strong>E-posta:</strong> <a href="mailto:${email}">${email}</a></p>
            ${subject ? `<p><strong>Konu:</strong> ${subject}</p>` : ""}
          </div>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
            <h3 style="color: #333; margin-top: 0;">Mesaj:</h3>
            <p style="white-space: pre-wrap; color: #555;">${message}</p>
          </div>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #888;">
            <p>Bu mesaj web sitenizdeki iletişim formundan gönderilmiştir.</p>
          </div>
        </div>
      `,
      text: `
Yeni İletişim Formu Mesajı

Gönderen: ${name}
E-posta: ${email}
${subject ? `Konu: ${subject}` : ""}

Mesaj:
${message}
      `.trim(),
    };

    // E-postayı gönder
    await transporter.sendMail(mailOptions);

    console.log("[contact] E-posta başarıyla gönderildi", {
      name,
      email,
      subject,
      to: contactEmail,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] E-posta gönderme hatası:", error);
    return NextResponse.json(
      { ok: false, error: "email_send_failed" },
      { status: 500 },
    );
  }
}

