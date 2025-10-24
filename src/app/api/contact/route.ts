import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // For now, we'll log the contact form submission
    // In production, you would integrate with an email service
    console.log("Contact Form Submission:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending (replace with actual email service)
    // You can integrate with services like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Resend
    // - EmailJS (client-side)

    return NextResponse.json(
      {
        message: "Contact form submitted successfully",
        data: {
          name,
          email,
          message,
          timestamp: new Date().toISOString(),
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process contact form" },
      { status: 500 },
    );
  }
}
