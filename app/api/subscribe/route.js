import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return Response.json({ success: false, message: "Email is required" });
    }

    // Create your mail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Email content
    await transporter.sendMail({
      from: `"AADHNIK Newsletter" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Thank you for subscribing!",
      html: `
        <h2>Welcome to AADHNIK 🚀</h2>
        <p>Thank you for subscribing to our newsletter.</p>
        <p>You will now receive updates, insights, and announcements!</p>
      `,
    });

    return Response.json({
      success: true,
      message: "Subscription successful! Check your inbox.",
    });
  } catch (error) {
    console.error("Subscribe Error:", error);
    return Response.json({
      success: false,
      message: "Something went wrong. Try again.",
    });
  }
}
