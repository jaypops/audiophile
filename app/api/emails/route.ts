import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import OrderVerificationEmail from "@/app/emails/OrderVerification";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

export async function POST(request: NextRequest) {
  try {
    const { orderId } = await request.json();

    if (!orderId) {
      return Response.json({ error: "Missing orderId" }, { status: 400 });
    }

    const order = await fetchQuery(api.form.getOrderByOrderId, { orderId });

    if (!order) {
      return Response.json({ error: "Order not found" }, { status: 404 });
    }

    const verificationLink = `${process.env.NEXT_PUBLIC_APP_URL}/verify?order=${orderId}`;

    // Convert React Email → HTML (await the render)
    const emailHtml = await render(
      OrderVerificationEmail({
        order,
        verificationLink,
      })
    );

    // Gmail SMTP transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,     // your gmail
        pass: process.env.GMAIL_APP_PASS, // app password (NOT your login password)
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Audiophile" <${process.env.GMAIL_USER}>`,
      to: order.email,
      subject: `Verify your email and confirm your order #${orderId}`,
      html: emailHtml,
    });

    return Response.json({ success: true });
  } catch (error: any) {
    console.error("Email send error:", error);
    return Response.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}