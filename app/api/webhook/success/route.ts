// pages/api/success.ts
import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import Stripe from 'stripe';
import emailjs from 'emailjs-com';
import connectToDatabase from '@/lib/db/connectdb';
import Booking from '@/lib/models/Booking';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { session_id, email, phone, rooms, description, location, date } = req.query;

  if (typeof session_id !== 'string' || 
      typeof email !== 'string' || 
      typeof phone !== 'string' || 
      typeof rooms !== 'string' || 
      typeof description !== 'string' || 
      typeof location !== 'string' || 
      typeof date !== 'string') {
    res.status(400).json({ message: 'Invalid query parameters' });
    return;
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session.payment_status === 'paid') {
      await connectToDatabase();

      const booking = new Booking({
        email,
        phone,
        rooms,
        description,
        location,
        date: new Date(date),
      });

      await booking.save();

      const templateParams = {
        to_name: 'Admin',
        from_name: email,
        message: `Booking confirmed for ${rooms} room(s). Description: ${description}. Location: ${location}. Contact: ${phone}. Date: ${date}`,
      };

      await emailjs.send(process.env.EMAILJS_SERVICE_ID!, process.env.EMAILJS_TEMPLATE_ID!, templateParams, process.env.EMAILJS_USER_ID!);

      res.status(200).json({ message: 'Payment successful and booking saved!' });
    } else {
      res.status(400).json({ message: 'Payment not successful!' });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
