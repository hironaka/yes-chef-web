import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const {
      EMAIL_SERVER_HOST,
      EMAIL_SERVER_PORT,
      EMAIL_USE_TLS,
      EMAIL_USERNAME,
      EMAIL_PASSWORD,
    } = process.env;

    if (
      !EMAIL_SERVER_HOST ||
      !EMAIL_SERVER_PORT ||
      !EMAIL_USE_TLS || // Check presence even though it's a boolean string
      !EMAIL_USERNAME ||
      !EMAIL_PASSWORD
    ) {
      console.error('Missing email configuration environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const port = parseInt(EMAIL_SERVER_PORT, 10);
    const secure = EMAIL_USE_TLS === 'true'; // Convert string 'true'/'false' to boolean

    const transporter = nodemailer.createTransport({
      host: EMAIL_SERVER_HOST,
      port: port,
      secure: secure, // true for 465, false for other ports (like 587 for STARTTLS)
      auth: {
        user: EMAIL_USERNAME,
        pass: EMAIL_PASSWORD,
      },
      // Add tls options if needed, e.g., for self-signed certs (uncommon for providers)
      // tls: {
      //   rejectUnauthorized: false // Use only if necessary and understand the risks
      // }
    });

    const mailOptions = {
      from: EMAIL_USERNAME, // Sender address (must be your authenticated user)
      to: 'hi.yes.chef@gmail.com', // List of recipients
      replyTo: email, // Set reply-to to the user's email
      subject: `Contact Form: ${subject}`, // Subject line
      text: `You received a new message from your contact form:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`, // plain text body
      // html: "<b>Hello world?</b>", // You could generate HTML body as well
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Failed to send email:', error);
    // Provide a generic error message to the client
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}