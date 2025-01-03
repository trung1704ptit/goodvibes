const emailTemplate = (
  name: string,
  email: string,
  phone: string,
  message: string
) => {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          }
          .email-container {
            width: 100%;
            background-color: #ffffff;
            max-width: 100%;
            margin: 0 auto;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .email-header {
            background-color: #17a2b7;
            color: #ffffff;
            padding: 15px;
            text-align: center;
            font-size: 24px !important;
            border-radius: 8px;
          }
          .email-body {
            padding: 20px;
            font-size: 16px;
            line-height: 1.6;
            color: #333;
          }
          .footer {
            text-align: center;
            padding: 15px;
            font-size: 12px;
            color: #888;
            border-top: 1px solid #ddd;
          }
          .footer a {
            color: #17a2b7;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-header">
            <h3>Good Vibes IT Solutions</h3>
          </div>
          <div class="email-body">
            <p>Hi ${name},</p>
            <p>Thank you for contacting us! We've received your message, and we'll be in touch as soon as possible.</p>
            <p>Here’s the information you sent:</p>
            <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Phone:</strong> ${phone}</li>
              <li><strong>Message:</strong> ${message}</li>
            </ul>
            <p>We’ll get back to you soon.</p>
          </div>
          <div class="footer">
            <p>If you need immediate assistance, feel free to reply to this email or contact us directly.</p>
            <p><a href="mailto:${process.env.GODADDY_EMAIL}">Reply to this email</a></p>
          </div>
        </div>
      </body>
      </html>
    `;
};

export { emailTemplate };
