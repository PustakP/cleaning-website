import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import Booking from '@/lib/models/user.model';
import connectToDatabase from '@/lib/db/connectdb';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req: Request) {
  const { date, email, token } = await req.json();

  try {
    await connectToDatabase();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2000, // $20.00
      currency: 'usd',
      payment_method: token.id,
      confirm: true,
    });

    const existingBooking = await Booking.findOne({ date });

    if (existingBooking) {
      return NextResponse.json({ message: 'Date is already booked' }, { status: 400 });
    }

    const booking = new Booking({ date, email });
    await booking.save();

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: `${error}` }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();

    const bookings = await Booking.find({});
    return NextResponse.json(bookings, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `${error}` }, { status: 500 });
  }
}
