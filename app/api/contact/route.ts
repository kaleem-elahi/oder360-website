import { NextRequest, NextResponse } from 'next/server'
import { addSubmission } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, businessAge, serviceOfInterest, contactPreference } = body

    // Validate required fields (at least name, message, and either email or phone)
    if (!name || (!email && !phone) || !message) {
      return NextResponse.json(
        { error: 'Name, message, and either email or phone are required.' },
        { status: 400 }
      )
    }

    // Validate email format if provided
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: 'Please provide a valid email address' },
          { status: 400 }
        )
      }
    }

    // Check if Gmail credentials are configured
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Gmail credentials are not configured')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      )
    }

    // Save submission to local DB
    try {
      addSubmission({
        name: name || '',
        email: email || '',
        phone: phone || '',
        message: message || '',
        businessAge: businessAge || '',
        serviceOfInterest: serviceOfInterest || '',
        contactPreference: contactPreference || ''
      })
    } catch (dbErr) {
      console.error('Failed to save submission to DB:', dbErr)
      // Continue even if DB save fails to not block email
    }

    // Recipient email
    const recipientEmail = 'contact@oder360.com'
    const subject = `New Contact Form Submission from ${name} - Oder360`

    // Use Brevo (Sendinblue) transactional API to send email
    if (!process.env.BREVO_API_KEY) {
      console.error('BREVO_API_KEY is not configured')
      return NextResponse.json({ error: 'Email service is not configured. Please contact the administrator.' }, { status: 500 })
    }

    // HTML email body
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
            .header h2 { margin: 0; font-size: 24px; }
            .header p { margin: 10px 0 0 0; opacity: 0.9; font-size: 14px; }
            .content { 
              background: #f9f9f9; 
              padding: 30px 20px; 
              border: 1px solid #e0e0e0; 
              border-top: none; 
              border-radius: 0 0 8px 8px; 
            }
            .grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px;
              margin-bottom: 20px;
            }
            .field { margin-bottom: 15px; }
            .label { 
              font-weight: 600; 
              color: #007AFF; 
              font-size: 13px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 6px;
            }
            .value { 
               padding: 10px 15px; 
               background: white; 
               border-radius: 6px; 
               border-left: 4px solid #007AFF;
               font-size: 14px;
            }
            .message-box { 
              margin-top: 25px; 
              padding: 20px; 
              background: white; 
              border-radius: 6px; 
              border-left: 4px solid #5856D6; 
            }
            .message-box .label { margin-bottom: 12px; }
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
          </style>
        </head>
        <body>
          <div class="header">
            <h2>📧 New Application / Inquiry</h2>
            <p>Oder360 Website</p>
          </div>
          <div class="content">
            <div class="grid">
                <div class="field">
                    <div class="label">👤 Name</div>
                    <div class="value">${name}</div>
                </div>
                ${email ? `
                <div class="field">
                    <div class="label">✉️ Email</div>
                    <div class="value"><a href="mailto:${email}" style="color: #007AFF; text-decoration: none;">${email}</a></div>
                </div>
                ` : ''}
                ${phone ? `
                <div class="field">
                    <div class="label">📞 Phone</div>
                    <div class="value"><a href="tel:${phone}" style="color: #007AFF; text-decoration: none;">${phone}</a></div>
                </div>
                ` : ''}
                ${businessAge ? `
                <div class="field">
                    <div class="label">🏢 Business Age</div>
                    <div class="value">${businessAge}</div>
                </div>
                ` : ''}
                ${contactPreference ? `
                <div class="field">
                    <div class="label">🎯 Preference</div>
                    <div class="value">${contactPreference}</div>
                </div>
                ` : ''}
                ${serviceOfInterest ? `
                <div class="field">
                    <div class="label">🛠️ Service</div>
                    <div class="value">${serviceOfInterest}</div>
                </div>
                ` : ''}
            </div>
            
            <div class="message-box">
              <div class="label">💬 Message / Details</div>
              <div class="message-content">${message.replace(/\n/g, '<br>')}</div>
            </div>
            ${email ? `
            <div style="background: #e3f2fd; padding: 12px; border-radius: 6px; margin-top: 15px; font-size: 13px; color: #1976d2;">
              💡 <strong>Tip:</strong> Reply directly to this email to respond to ${name}
            </div>
            ` : ''}
          </div>
          <div class="footer">
            <p>This email was sent from the Oder360 Typeform Contact Form.</p>
            <p style="margin-top: 5px;">Timestamp: ${new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })}</p>
          </div>
        </body>
      </html>
    `

    const textBody = `
New Contact Form Submission - Oder360
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${name}
Email: ${email || 'N/A'}
Phone: ${phone || 'N/A'}
Business Age: ${businessAge || 'N/A'}
Service of Interest: ${serviceOfInterest || 'N/A'}
Prefers to be contacted via: ${contactPreference || 'N/A'}

Message:
${message}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Timestamp: ${new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })}
    `.trim()

    const senderEmail = process.env.SENDER_EMAIL || process.env.GMAIL_USER || 'no-reply@oder360.com'

    const brevoPayload = {
      sender: { name: 'Oder360 Contact Form', email: senderEmail },
      to: [{ email: recipientEmail }],
      replyTo: { email: email || senderEmail },
      subject: subject,
      htmlContent: htmlBody,
      textContent: textBody,
    }

    // Call Brevo SMTP API
    const resp = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY || '',
      },
      body: JSON.stringify(brevoPayload),
    })

    if (!resp.ok) {
      const bodyText = await resp.text()
      console.error('Brevo send failed:', resp.status, bodyText)
      if (process.env.NODE_ENV !== 'production') {
        return NextResponse.json({ error: `Brevo send failed: ${resp.status} ${bodyText}` }, { status: 502 })
      }
      return NextResponse.json({ error: 'Failed to send message.' }, { status: 502 })
    }

    return NextResponse.json({ success: true, message: 'Thank you! Your message has been sent.' }, { status: 200 })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
