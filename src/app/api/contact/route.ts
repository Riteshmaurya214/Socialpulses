import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing Resend API Key" },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    const body = await req.json();
    const { name, email, subject, message, services } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const servicesList =
      services && services.length > 0 ? services.join(", ") : "None selected";

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "rishabh@socialpulsestudios.com", // Replace with user's email
      subject: subject || `New Contact Form Submission from ${name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "N/A"}</p>
        <p><strong>Services Interested In:</strong> ${servicesList}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
