// i tried creating the stripe but seems to not working properly


// make sure if u create the webhooks use this path <https://localhost:3000/api/webhook/stripe>
// under that create the route.ts file to listen to stripe events

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-04-10',
});

export async function POST(req: NextRequest) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Booking Fee',
          },
          unit_amount: 2000, // $20.00
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${req.nextUrl.origin}/checkout-success`,
      cancel_url: `${req.nextUrl.origin}/checkout-failed`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
