import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // 1️⃣ EMAIL TRANSPORTER USING ENV VARIABLES
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER, // Gmail
        pass: process.env.MAIL_PASS, // App Password
      },
    });

    // ADMIN EMAIL TEMPLATE
    const adminEmailHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <body style="font-family:Arial, sans-serif; padding:20px; background:#f7f7f7;">
      <div style="max-width:600px;margin:auto;background:white;padding:20px;border-radius:10px;">
        <h2 style="color:#4f46e5;">📨 New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>

        <h3 style="margin-top:20px;">Message:</h3>
        <div style="background:#fef3c7;padding:15px;border-left:4px solid #f59e0b;">
            ${message}
        </div>

        <p style="margin-top:30px;font-size:12px;color:#888;">Aadhnik Technologies Pvt. Ltd.</p>
      </div>
    </body>
    </html>
    `;

    // USER EMAIL TEMPLATE
    const userEmailHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <body style="font-family:Arial, sans-serif; padding:20px; background:#eef2ff;">
      <div style="max-width:550px;margin:auto;background:white;padding:30px;border-radius:20px;">
        <h1 style="color:#4f46e5;text-align:center;">Thank You, ${name}! 🎉</h1>
        <p style="text-align:center;color:#555;margin-top:10px;">
          We've received your message. Our team will get back to you within 24–48 hours.
        </p>

        <h3 style="margin-top:25px;color:#1f2937;">Your Details</h3>
        <p><strong>Reference ID:</strong> PF-${Date.now().toString().slice(-8)}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>

        <div style="margin-top:25px;padding:20px;background:#fef3c7;border-left:4px solid #f59e0b;">
            <strong>Your Message:</strong>
            <p>${message}</p>
        </div>


        <p style="margin-top:30px;font-size:12px;color:#666;text-align:center;">
          This is an automated confirmation email — please do not reply.
        </p>
      </div>
    </body>
    </html>
    `;

    // 2️⃣ SEND EMAIL TO ADMIN
    await transporter.sendMail({
      from: `"Aadhnik Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER, // admin email
      subject: "📨 New Lead Alert: Contact Form Submission",
      html: adminEmailHTML,
    });

    // 3️⃣ SEND CONFIRMATION TO USER
    await transporter.sendMail({
      from: `"support@aadhniktech.com" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "✅ We Received Your Message",
      html: userEmailHTML,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });

  } catch (err) {
    console.error("EMAIL ERROR:", err);

    return NextResponse.json({
      success: false,
      message: "Failed to send email",
      error: err.message,
    });
  }
}
