import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
export async function POST(request: Request) {
  const data = await request.json();
  console.log('Contact form submission:', data);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Replace with your Gmail address or use environment variables
      pass: process.env.GMAIl_PASS, // Replace with your Gmail application-specific password or use environment variables
    },
  });
  const mailOptions = {
    from: process.env.GMAIL_USER, // Sender address
    to: 'mondalankt619@gmail.com', // Replace with your Gmail address
    subject: `New message from ${data.name}`,
    text: `Name: ${data.name}
Email: ${data.email}
${data.message}`,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return NextResponse.json({ message: 'Message received and email sent!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Message received, but email sending failed.' }, { status: 500 });
  }
}