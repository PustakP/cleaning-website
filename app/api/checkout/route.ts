// /app/api/create-checkout-session/route.ts

import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
});

export async function POST(request: Request) {
  const body = await request.json();
  const { rooms, type, description, location, date, email, phone } = body;

  const price = 20 * 100;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: price,
            product_data: {
              name: "Cleaning",
            },
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/checkout-success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
      metadata: {
        rooms,
        type,
        description,
        location,
        date: date.toString(),
        email,
        phone,
      },
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json({ error: "Error creating checkout session" }, { status: 500 });
  }
}
