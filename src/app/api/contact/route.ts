// app/api/contact/route.ts
import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';
import { emailTemplate } from '@/utils/mail';

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
      host: "smtp-mail.outlook.com",
      port: 587,
      auth: {
        user: process.env.GODADDY_EMAIL, // Your GoDaddy email address
        pass: process.env.GODADDY_PASSWORD, // Your GoDaddy email password
      },
    });

    // Set up email details
    const mailOptions = {
      from: `"Good Vibes IT Solutions" <${process.env.GODADDY_EMAIL}>`, // Name and email address
      to: email, // Recipient email address
      bcc: 'jitendrajain76@gmail.com', // BCC recipient email address
      subject: 'Thanks for Connecting with Good Vibes IT Solutions!',
      html: emailTemplate(name, email, phone, message), // Your email template
    };

    // Send the email
    transporter.sendMail(mailOptions);

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
