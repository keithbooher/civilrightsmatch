import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const body = `
New Attorney Listing Application
=================================
Name: ${data.firstName} ${data.lastName}
Firm: ${data.firmName}
Email: ${data.email}
Phone: ${data.phone || "not provided"}
Website: ${data.website || "not provided"}
State: ${data.state}
City: ${data.city}

Bar Number: ${data.barNumber || "not provided"}
Years in Practice: ${data.yearsInPractice || "not provided"}
Referral Fee: ${data.referralFee || "not provided"}%

Specialties: ${data.specialties || "not provided"}
Plan Selected: ${data.plan || "Basic (Free)"}

Submitted: ${new Date().toISOString()}
`.trim();

    await transporter.sendMail({
      from: `"RightsMatch" <${process.env.GMAIL_USER}>`,
      to: "civilrightsmatch@gmail.com",
      subject: `[RightsMatch Signup] ${data.firstName} ${data.lastName} — ${data.state}`,
      text: body,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Signup email failed:", err);
    return NextResponse.json({ success: false, error: "Failed to send" }, { status: 500 });
  }
}
