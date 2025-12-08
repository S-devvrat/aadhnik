import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // 1️⃣ EMAIL TRANSPORTER (GMAIL)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "devvratshukla77469@gmail.com",
        pass: "hpeu moih dryo szgz", // Google App Password (16-digit)
      },
    });

    // Enhanced HTML Template for Admin Email
    const adminEmailHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            }
            
            body {
                background-color: #f5f7fa;
                padding: 20px;
            }
            
            .email-container {
                max-width: 600px;
                margin: 0 auto;
                background: white;
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
            }
            
            .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 40px 30px;
                text-align: center;
            }
            
            .logo {
                font-size: 32px;
                font-weight: 700;
                margin-bottom: 10px;
                letter-spacing: 1px;
            }
            
            .logo-accent {
                color: #fbbf24;
            }
            
            .subtitle {
                font-size: 16px;
                opacity: 0.9;
                font-weight: 400;
            }
            
            .content {
                padding: 40px 30px;
            }
            
            .alert-badge {
                display: inline-block;
                background: linear-gradient(135deg, #f59e0b, #d97706);
                color: white;
                padding: 8px 20px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 600;
                margin-bottom: 30px;
            }
            
            .section-title {
                font-size: 20px;
                color: #1f2937;
                margin-bottom: 20px;
                font-weight: 600;
                border-left: 4px solid #667eea;
                padding-left: 12px;
            }
            
            .details-card {
                background: #f8fafc;
                border-radius: 12px;
                padding: 25px;
                border: 1px solid #e5e7eb;
                margin-bottom: 30px;
            }
            
            .detail-row {
                display: flex;
                margin-bottom: 16px;
                padding-bottom: 16px;
                border-bottom: 1px solid #e5e7eb;
            }
            
            .detail-row:last-child {
                border-bottom: none;
                margin-bottom: 0;
                padding-bottom: 0;
            }
            
            .detail-label {
                width: 120px;
                font-weight: 600;
                color: #4b5563;
                font-size: 14px;
            }
            
            .detail-value {
                flex: 1;
                color: #1f2937;
                font-weight: 500;
            }
            
            .message-box {
                background: #fef3c7;
                border-left: 4px solid #f59e0b;
                padding: 20px;
                border-radius: 8px;
                margin-top: 10px;
                color: #92400e;
                line-height: 1.6;
            }
            
            .stats-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 15px;
                margin-top: 30px;
            }
            
            .stat-item {
                text-align: center;
                padding: 15px;
                background: #f8fafc;
                border-radius: 10px;
                border: 1px solid #e5e7eb;
            }
            
            .stat-number {
                font-size: 24px;
                font-weight: 700;
                color: #667eea;
                margin-bottom: 5px;
            }
            
            .stat-label {
                font-size: 12px;
                color: #6b7280;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            
            .footer {
                background: #1f2937;
                color: white;
                padding: 30px;
                text-align: center;
            }
            
            .footer-text {
                font-size: 14px;
                opacity: 0.8;
                margin-bottom: 15px;
                line-height: 1.6;
            }
            
            .action-button {
                display: inline-block;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 12px 30px;
                text-decoration: none;
                border-radius: 8px;
                font-weight: 600;
                margin: 20px 0;
                transition: transform 0.2s;
            }
            
            .action-button:hover {
                transform: translateY(-2px);
            }
            
            .timestamp {
                font-size: 12px;
                color: #9ca3af;
                margin-top: 20px;
                text-align: center;
            }
            
            @media (max-width: 600px) {
                .email-container {
                    border-radius: 12px;
                }
                
                .header {
                    padding: 30px 20px;
                }
                
                .content {
                    padding: 30px 20px;
                }
                
                .detail-row {
                    flex-direction: column;
                }
                
                .detail-label {
                    width: 100%;
                    margin-bottom: 5px;
                }
                
                .stats-grid {
                    grid-template-columns: 1fr;
                    gap: 10px;
                }
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <!-- Header -->
            <div class="header">
                <div class="logo">Aadhnik<span class="logo-accent"></span></div>
                <div class="subtitle">New Contact Form Submission</div>
            </div>
            
            <!-- Content -->
            <div class="content">
                <div class="alert-badge">📨 NEW LEAD RECEIVED</div>
                
                <h2 class="section-title">Lead Information</h2>
                
                <div class="details-card">
                    <div class="detail-row">
                        <div class="detail-label">Name</div>
                        <div class="detail-value">
                            <strong>${name}</strong>
                        </div>
                    </div>
                    
                    <div class="detail-row">
                        <div class="detail-label">Email</div>
                        <div class="detail-value">
                            <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">
                                ${email}
                            </a>
                        </div>
                    </div>
                    
                    <div class="detail-row">
                        <div class="detail-label">Phone</div>
                        <div class="detail-value">
                            <a href="tel:${phone}" style="color: #667eea; text-decoration: none;">
                                ${phone}
                            </a>
                        </div>
                    </div>
                    
                    <div class="detail-row">
                        <div class="detail-label">Submitted</div>
                        <div class="detail-value">
                            ${new Date().toLocaleString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </div>
                    </div>
                </div>
                
                <h2 class="section-title">Message</h2>
                <div class="message-box">
                    ${message}
                </div>
                
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-number">${new Date().getHours()}:${new Date().getMinutes().toString().padStart(2, '0')}</div>
                        <div class="stat-label">Time Received</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">${email.split('@')[1]}</div>
                        <div class="stat-label">Email Domain</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">${message.length}</div>
                        <div class="stat-label">Message Length</div>
                    </div>
                </div>
                
                <a href="mailto:${email}" class="action-button">
                    ✉️ Reply to ${name.split(' ')[0]}
                </a>
            </div>
            
            <!-- Footer -->
            <div class="footer">
                <p class="footer-text">
                    This email was generated automatically.
                    Please respond within 24 hours for best results.
                </p>
                <div class="timestamp">
                    Generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
                </div>
            </div>
        </div>
    </body>
    </html>
    `;

    // Enhanced HTML Template for User Confirmation Email
    const userEmailHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting Us</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            }
            
            body {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 20px;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .email-container {
                max-width: 550px;
                margin: 0 auto;
                background: white;
                border-radius: 24px;
                overflow: hidden;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
                position: relative;
            }
            
            .confetti {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 8px;
                background: linear-gradient(90deg, 
                    #667eea, #764ba2, #f59e0b, #10b981, #ef4444, #8b5cf6
                );
            }
            
            .header {
                background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                padding: 50px 30px;
                text-align: center;
                border-bottom: 1px solid #e5e7eb;
            }
            
            .logo {
                font-size: 36px;
                font-weight: 700;
                color: #1f2937;
                margin-bottom: 15px;
                letter-spacing: 1px;
            }
            
            .logo-accent {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            
            .welcome-icon {
                width: 80px;
                height: 80px;
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 25px;
                font-size: 40px;
                color: white;
                box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
            }
            
            .content {
                padding: 40px 30px;
            }
            
            .greeting {
                font-size: 28px;
                color: #1f2937;
                margin-bottom: 15px;
                font-weight: 700;
                text-align: center;
            }
            
            .thank-you-text {
                font-size: 16px;
                color: #4b5563;
                text-align: center;
                line-height: 1.6;
                margin-bottom: 30px;
            }
            
            .highlight-box {
                background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
                border-radius: 16px;
                padding: 30px;
                margin: 30px 0;
                border: 1px solid #bae6fd;
                text-align: center;
            }
            
            .highlight-text {
                font-size: 18px;
                color: #0369a1;
                font-weight: 600;
                margin-bottom: 10px;
            }
            
            .highlight-subtext {
                font-size: 14px;
                color: #0ea5e9;
            }
            
            .details-section {
                background: #f8fafc;
                border-radius: 16px;
                padding: 25px;
                margin: 30px 0;
            }
            
            .section-title {
                font-size: 18px;
                color: #1f2937;
                margin-bottom: 20px;
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .detail-item {
                display: flex;
                padding: 12px 0;
                border-bottom: 1px solid #e5e7eb;
            }
            
            .detail-item:last-child {
                border-bottom: none;
            }
            
            .detail-label {
                width: 120px;
                font-weight: 600;
                color: #4b5563;
                font-size: 14px;
            }
            
            .detail-value {
                flex: 1;
                color: #1f2937;
            }
            
            .next-steps {
                background: #fef3c7;
                border-radius: 12px;
                padding: 25px;
                margin: 30px 0;
                border-left: 4px solid #f59e0b;
            }
            
            .steps-title {
                color: #92400e;
                font-weight: 600;
                margin-bottom: 15px;
                font-size: 16px;
            }
            
            .steps-list {
                list-style: none;
                padding-left: 20px;
            }
            
            .steps-list li {
                padding: 8px 0;
                color: #92400e;
                position: relative;
            }
            
            .steps-list li:before {
                content: "✓";
                color: #f59e0b;
                font-weight: bold;
                position: absolute;
                left: -20px;
            }
            
            .contact-info {
                text-align: center;
                padding: 25px;
                background: #f8fafc;
                border-radius: 16px;
                margin: 30px 0;
            }
            
            .contact-method {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                margin: 0 15px;
                color: #4b5563;
                text-decoration: none;
                padding: 10px 20px;
                border-radius: 10px;
                transition: all 0.3s;
            }
            
            .contact-method:hover {
                background: white;
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            }
            
            .footer {
                background: #1f2937;
                color: white;
                padding: 30px;
                text-align: center;
                border-top: 1px solid #374151;
            }
            
            .social-links {
                display: flex;
                justify-content: center;
                gap: 20px;
                margin: 20px 0;
            }
            
            .social-icon {
                width: 40px;
                height: 40px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                text-decoration: none;
                transition: all 0.3s;
            }
            
            .social-icon:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: translateY(-3px);
            }
            
            .footer-text {
                font-size: 14px;
                opacity: 0.8;
                line-height: 1.6;
                margin-top: 15px;
            }
            
            .reference-id {
                background: rgba(255, 255, 255, 0.1);
                padding: 10px 20px;
                border-radius: 10px;
                display: inline-block;
                margin: 15px 0;
                font-family: monospace;
                letter-spacing: 1px;
            }
            
            @media (max-width: 600px) {
                .email-container {
                    border-radius: 16px;
                }
                
                .header {
                    padding: 30px 20px;
                }
                
                .content {
                    padding: 30px 20px;
                }
                
                .greeting {
                    font-size: 24px;
                }
                
                .detail-item {
                    flex-direction: column;
                }
                
                .detail-label {
                    width: 100%;
                    margin-bottom: 5px;
                }
                
                .contact-method {
                    display: block;
                    margin: 10px 0;
                }
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="confetti"></div>
            
            <!-- Header -->
            <div class="header">
                <div class="logo">Aadhnik<span class="logo-accent"></span></div>
                <div class="welcome-icon">✓</div>
                <h1 class="greeting">Thank You, ${name}!</h1>
                <p class="thank-you-text">
                    We've received your message and our team will get back to you shortly.
                </p>
            </div>
            
            <!-- Content -->
            <div class="content">
                <div class="highlight-box">
                    <div class="highlight-text">🎯 What Happens Next?</div>
                    <div class="highlight-subtext">
                        Our team will review your inquiry and respond within 24-48 hours
                    </div>
                </div>
                
                <div class="details-section">
                    <div class="section-title">
                        📋 Your Submission Details
                    </div>
                    
                    <div class="detail-item">
                        <div class="detail-label">Reference ID</div>
                        <div class="detail-value">
                            <span class="reference-id">PF-${Date.now().toString().slice(-8)}</span>
                        </div>
                    </div>
                    
                    <div class="detail-item">
                        <div class="detail-label">Submitted</div>
                        <div class="detail-value">
                            ${new Date().toLocaleString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </div>
                    </div>
                    
                    <div class="detail-item">
                        <div class="detail-label">Name</div>
                        <div class="detail-value"><strong>${name}</strong></div>
                    </div>
                    
                    <div class="detail-item">
                        <div class="detail-label">Email</div>
                        <div class="detail-value">${email}</div>
                    </div>
                    
                    <div class="detail-item">
                        <div class="detail-label">Phone</div>
                        <div class="detail-value">${phone}</div>
                    </div>
                </div>
                
                <div class="next-steps">
                    <div class="steps-title">⏳ Next Steps</div>
                    <ul class="steps-list">
                        <li>Your inquiry has been logged in our system</li>
                        <li>Our team will review your request</li>
                        <li>You'll receive a detailed response via email</li>
                        <li>We may follow up for additional information</li>
                    </ul>
                </div>
                
                <div class="contact-info">
                    <div class="section-title" style="justify-content: center;">
                        📞 Need Immediate Assistance?
                    </div>
                    <div style="margin-top: 20px;">
                        <a href="tel:+15551234567" class="contact-method">
                            📱 +1 (555) 123-4567
                        </a>
                        <a href="mailto:support@Aadhnik.com" class="contact-method">
                            ✉️ support@Aadhnik.com
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Footer -->
            <div class="footer">
                <div class="social-links">
                    <a href="#" class="social-icon">f</a>
                    <a href="#" class="social-icon">in</a>
                    <a href="#" class="social-icon">t</a>
                    <a href="#" class="social-icon">ig</a>
                </div>
                
                <p class="footer-text">
                    Aadhnik Technologies Pvt. Ltd.<br>
                    123 Business Avenue, Suite 500<br>
                    San Francisco, CA 94107
                </p>
                
                <p class="footer-text" style="margin-top: 20px; font-size: 12px;">
                    This is an automated confirmation email. Please do not reply to this message.<br>
                    Need help? Contact our support team at support@Aadhnik.com
                </p>
            </div>
        </div>
    </body>
    </html>
    `;

    // 2️⃣ EMAIL SENT TO ADMIN
    await transporter.sendMail({
      from: `"Aadhnik Website" <devvratshukla77469@gmail.com>`,
      to: "devvratshukla77469@gmail.com",
      subject: "📨 New Lead Alert: Contact Form Submission",
      html: adminEmailHTML,
    });

    // 3️⃣ EMAIL CONFIRMATION TO USER
    await transporter.sendMail({
      from: `"Aadhnik Support" <devvratshukla77469@gmail.com>`,
      to: email,
      subject: "✅ Thank You for Contacting Aadhnik!",
      html: userEmailHTML,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });

  } catch (err) {
    console.log(err);
    return NextResponse.json({ 
      success: false, 
      message: "Failed to send email",
      error: err.message 
    });
  }
}