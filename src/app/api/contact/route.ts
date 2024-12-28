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

    console.log(' name, email, phone, message:',  name, email, phone, message)

    // Validate data
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER!, // Use environment variables for email credentials
        pass: process.env.EMAIL_PASS!, // Never hardcode sensitive info in the code
      },
    });

    // Set up email details
    const mailOptions = {
      from: process.env.EMAIL_USER!,
      to: process.env.RECIPIENT_EMAIL!,
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
    console.error(error);
    return NextResponse.json(
      { error: 'There was an error processing your request.' },
      { status: 500 }
    );
  }
}
