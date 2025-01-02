// app/api/contact/route.ts
import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    // Parse incoming JSON request body
    const { name, email, phone, message }: ContactFormData = await req.json();

    console.log('Received data:', name, email, phone, message);

    // Validate data
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Create Nodemailer transporter for GoDaddy SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtpout.secureserver.net', // GoDaddy SMTP server
      port: 465, // Secure SSL port
      secure: true, // Use SSL
      auth: {
        user: process.env.GODADDY_EMAIL, // Your GoDaddy email address
        pass: "Goodvibes@123", // Your GoDaddy email password
      },
    });

    // Set up email details
    const mailOptions = {
      from: process.env.GODADDY_EMAIL!, // Sender email address
      to: process.env.RECIPIENT_EMAIL!, // Recipient email address
      subject: 'Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success
    return NextResponse.json(
      { success: true, message: 'Submission successful' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'There was an error processing your request.' },
      { status: 500 }
    );
  }
}
