// Serverless function to send emails
// This works with Vercel, Netlify, or similar platforms

const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, phone, email, companyName, option, otherOption, message } = req.body;

    // Validate required fields
    if (!firstName || !email || !phone || !option || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create transporter using Gmail App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail: karinternationalinfotech@gmail.com
        pass: process.env.EMAIL_PASSWORD // Your App Password (16 characters)
      }
    });

    // Prepare email content
    const fullName = `${firstName} ${lastName || ''}`.trim();
    const selectedService = option === 'Other' ? otherOption : option;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'karinternationalinfotech@gmail.com',
      replyTo: email,
      subject: `New Contact Form: ${fullName} - ${selectedService}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f86a04 0%, #e65c00 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { color: #333; margin-top: 5px; }
            .message-box { background: white; padding: 15px; border-left: 4px solid #f86a04; margin-top: 20px; }
            .footer { text-align: center; margin-top: 20px; color: #888; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🔔 New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0;">KAR International InfoTech</p>
            </div>
            <div class="content">
              <h2 style="color: #f86a04; margin-top: 0;">Contact Details</h2>
              
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${fullName}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">📱 Phone:</div>
                <div class="value">${phone}</div>
              </div>
              
              ${companyName ? `
              <div class="field">
                <div class="label">🏢 Company:</div>
                <div class="value">${companyName}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">🎯 Service Interest:</div>
                <div class="value"><strong>${selectedService}</strong></div>
              </div>
              
              <div class="message-box">
                <div class="label">💬 Message:</div>
                <div class="value" style="margin-top: 10px;">${message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div class="footer">
                <p>This email was sent from the KAR International website contact form.</p>
                <p>Click reply to respond directly to the customer.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });

  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
};
