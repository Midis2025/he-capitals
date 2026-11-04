import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, service, industry, message } = body;

    // Basic validation
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "First name, last name, and email are required fields." },
        { status: 400 }
      );
    }

    // Log the enquiry for backend tracking
    console.log("[HE Capital Markets] New Contact Form Submission:", {
      name: `${firstName} ${lastName}`,
      email,
      phone: phone || "N/A",
      service: service || "N/A",
      industry: industry || "N/A",
      message: message || "N/A",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you. Your enquiry has been received. Our advisory team will reach out shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[HE Capital Markets] Contact Form Error:", error);
    return NextResponse.json(
      { error: "Failed to process message. Please try again later." },
      { status: 500 }
    );
  }
}

