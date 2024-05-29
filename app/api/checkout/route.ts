import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-04-10',
});

export async function POST(req: NextRequest) {
  const { email, phone, rooms, description, location, date } = await req.json();

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
      success_url: `${req.nextUrl.origin}/api/success?session_id={CHECKOUT_SESSION_ID}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&rooms=${encodeURIComponent(rooms)}&description=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&date=${encodeURIComponent(date)}`,
      cancel_url: `${req.nextUrl.origin}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
