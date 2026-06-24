import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  restaurant?: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload;

    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return NextResponse.json(
        { error: "name, email, and message are required" },
        { status: 400 }
      );
    }

    // Wire this up to your email provider (Resend, Postmark, SendGrid, etc.)
    // or a CRM webhook. Logging for now so the route works out of the box.
    console.log("[contact] new submission", {
      ...body,
      to: process.env.CONTACT_TO_EMAIL,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json(
      { error: "Could not send message" },
      { status: 500 }
    );
  }
}
