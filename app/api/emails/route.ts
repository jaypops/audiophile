import { Resend } from 'resend';
import OrderVerificationEmail from '@/app/emails/OrderVerification';
import { NextRequest } from 'next/server';
import { fetchQuery } from 'convex/nextjs';
import { api } from '@/convex/_generated/api';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderId } = body;

    if (!orderId) {
      return Response.json(
        { error: "Missing orderId" },
        { status: 400 }
      );
    }

    const order = await fetchQuery(
      api.form.getOrderByOrderId,
      { orderId }
    );

    if (!order) {
      return Response.json(
        { error: "Order not found" },
        { status: 404 }
      );
    }

    const verificationLink = `${process.env.NEXT_PUBLIC_APP_URL}/verify?order=${orderId}`;

    const { data, error } = await resend.emails.send({
      from: 'Audiophile <onboarding@resend.dev>',
      to: [order.email],
      subject: `Verify your email and confirm your order #${orderId}`,
      react: OrderVerificationEmail({
        order,
        verificationLink,
      }),
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Email send error:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
