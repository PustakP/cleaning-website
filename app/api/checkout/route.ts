// pages/api/create-checkout-session.ts
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, phone, rooms, description, location, date } = req.body;
    
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
        success_url: `${req.headers.origin}/api/webhook/success?session_id={CHECKOUT_SESSION_ID}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&rooms=${encodeURIComponent(rooms)}&description=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&date=${encodeURIComponent(date)}`,
        cancel_url: `${req.headers.origin}/cancel`,
      });

      res.status(200).json({ url: session.url });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};
