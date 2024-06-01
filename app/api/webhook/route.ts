import { NextResponse } from "next/server";
import Stripe from "stripe";
import connectToDatabase from "@/lib/db/connectdb";
import Booking from "@/lib/models/Booking";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
});

export async function POST(req: Request) {
  const signature = req.headers.get("stripe-signature");
  const body = await req.text();

  if (!signature || !body) {
    return NextResponse.json({ error: "Missing signature or request body" }, { status: 400 });
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Webhook signature verification failed" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;
      const formValues = JSON.parse(session.metadata.formValues);

      await connectToDatabase(); // Connect to the MongoDB database
      const newBooking = await Booking.create(formValues);
      console.log("Booking created successfully:", newBooking);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}