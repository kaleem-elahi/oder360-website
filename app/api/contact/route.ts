import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Check if Gmail credentials are configured
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Gmail credentials are not configured')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      )
    }

    // Recipient email (Abdul Rasheed's email)
    const recipientEmail = 'itsmeabdulrasheed@gmail.com'
    const subject = `New Contact Form Submission from ${name} - O'der360`

    // Create Nodemailer transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password (not your regular password)
      },
    })

    // HTML email body with nice formatting
    const htmlBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; 
              line-height: 1.6; 
              color: #333; 
              max-width: 600px; 
              margin: 0 auto; 
              padding: 20px; 
            }
            .header { 
              background: linear-gradient(135deg, #007AFF, #5856D6); 
              color: white; 
              padding: 30px 20px; 
              border-radius: 8px 8px 0 0; 
              text-align: center;
            }
            .header h2 { 
              margin: 0; 
              font-size: 24px;
            }
            .header p { 
              margin: 10px 0 0 0; 
              opacity: 0.9; 
              font-size: 14px;
            }
            .content { 
              background: #f9f9f9; 
              padding: 30px 20px; 
              border: 1px solid #e0e0e0; 
              border-top: none; 
              border-radius: 0 0 8px 8px; 
            }
            .field { 
              margin-bottom: 20px; 
            }
            .label { 
              font-weight: 600; 
              color: #007AFF; 
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 8px;
            }
            .value { 
              margin-top: 5px; 
              padding: 12px 15px; 
              background: white; 
              border-radius: 6px; 
              border-left: 4px solid #007AFF;
              font-size: 15px;
            }
            .message-box { 
              margin-top: 25px; 
              padding: 20px; 
              background: white; 
              border-radius: 6px; 
              border-left: 4px solid #5856D6; 
            }
            .message-box .label {
              margin-bottom: 12px;
            }
            .message-content {
              margin-top: 10px; 
              white-space: pre-wrap; 
              line-height: 1.8;
              color: #555;
            }
            .footer { 
              margin-top: 30px; 
              padding-top: 20px; 
              border-top: 2px solid #e0e0e0; 
              font-size: 12px; 
              color: #666; 
              text-align: center; 
            }
            .reply-note {
              background: #e3f2fd;
              padding: 12px;
              border-radius: 6px;
              margin-top: 15px;
              font-size: 13px;
              color: #1976d2;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>📧 New Contact Form Submission</h2>
            <p>O'der360 Website</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Name</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">✉️ Email</div>
              <div class="value">
                <a href="mailto:${email}" style="color: #007AFF; text-decoration: none;">${email}</a>
              </div>
            </div>
            ${phone ? `
            <div class="field">
              <div class="label">📞 Phone</div>
              <div class="value">
                <a href="tel:${phone}" style="color: #007AFF; text-decoration: none;">${phone}</a>
              </div>
            </div>
            ` : ''}
            <div class="message-box">
              <div class="label">💬 Message</div>
              <div class="message-content">${message.replace(/\n/g, '<br>')}</div>
            </div>
            <div class="reply-note">
              💡 <strong>Tip:</strong> Reply directly to this email to respond to ${name}
            </div>
          </div>
          <div class="footer">
              <p>This email was sent from the O'der360 website contact form.</p>
            <p style="margin-top: 5px;">Timestamp: ${new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })}</p>
          </div>
        </body>
      </html>
    `

    // Plain text version for email clients that don't support HTML
    const textBody = `
New Contact Form Submission - O'der360

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : 'Phone: Not provided'}

Message:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This email was sent from the O'der360 website contact form.
Reply directly to this email to respond to ${name} at ${email}

Timestamp: ${new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })}
    `.trim()

    // Send email using Nodemailer
    const mailOptions = {
      from: {
        name: 'O\'der360 Contact Form',
        address: process.env.GMAIL_USER,
      },
      to: recipientEmail,
      replyTo: email, // So you can reply directly to the sender
      subject: subject,
      html: htmlBody,
      text: textBody,
    }

    const info = await transporter.sendMail(mailOptions)

    console.log('Email sent successfully:', {
      messageId: info.messageId,
      to: recipientEmail,
      from: email,
    })

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! Your message has been sent. We\'ll get back to you soon.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    
    // More specific error messages
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        return NextResponse.json(
          { error: 'Email service authentication failed. Please check your credentials.' },
          { status: 500 }
        )
      }
      if (error.message.includes('ECONNECTION')) {
        return NextResponse.json(
          { error: 'Failed to connect to email service. Please try again later.' },
          { status: 500 }
        )
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
