
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { buffer } from "micro";
import connectToDatabase from "@/lib/db/connectdb";
import Booking from "@/lib/models/Booking";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
});

export const config = {
  api: {
    bodyParser: true,
  },
};

export async function POST(request: Request) {
	const payload = await request.text();
	const res = JSON.parse(payload);
	const sig = request.headers.get("stripe-signature") as string;
  	const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
	console.log(event?.type);
  } catch (err) {
    return NextResponse.json({ message: "Webhook error", error: err }, { status: 400 });
  }


  console.log(
	res?.data?.object?.billing_details?.email, // email
	res?.data?.object?.amount, // amount
	JSON.stringify(res), // payment info
	res?.type, // type
	res?.data?.object?.receipt_email, // email
	res?.data?.object?.receipt_url, // url
	JSON.stringify(res?.data?.object?.payment_method_details), // Payment method details
	JSON.stringify(res?.data?.object?.billing_details), // Billing details
	res?.data?.object?.currency // Currency
  );

  console.log(event.type)
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const metadata = session.metadata;

    if (metadata) {
      await connectToDatabase();

      const newBooking = new Booking({
        rooms: metadata.rooms,
        type: metadata.type,
        description: metadata.description,
        location: metadata.location,
        date: new Date(metadata.date),
        email: metadata.email,
        phone: metadata.phone,
      });

      try {
        await newBooking.save();
        console.log("Booking saved:", newBooking);
      } catch (error) {
        console.error("Error saving booking:", error);
      }
    } else {
      console.error("Metadata is null in the checkout session.");
    }
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
