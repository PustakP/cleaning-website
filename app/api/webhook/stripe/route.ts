import { NextApiRequest, NextApiResponse } from 'next';
import { buffer } from 'micro';
import Stripe from 'stripe';
import Booking, { IBooking } from '@/lib/models/Booking';
import mongoose from 'mongoose';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-04-10',
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!mongoose.connection.readyState) {
    await mongoose.connect(process.env.MONGODB_URI!);
  }

  const buf = await buffer(req);
  const sig = req.headers['stripe-signature'] as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(buf.toString(), sig, endpointSecret);
  } catch (err) {
    console.log(`⚠️  Webhook signature verification failed.`, err);
    return res.status(400).send(`Webhook Error: ${err}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    // Create booking record
    const newBooking = new Booking({
      rooms: parseInt(session.metadata?.rooms || "0", 10),
      type: session.metadata?.type,
      description: session.metadata?.description,
      location: session.metadata?.location,
      date: session.metadata?.date ? new Date(session.metadata.date) : new Date(),
      email: session.metadata?.email,
      phone: session.metadata?.phone,
      stripeSessionId: session.id,
    });

    await newBooking.save();
  }

  res.status(200).json({ received: true });
};

export default handler;
