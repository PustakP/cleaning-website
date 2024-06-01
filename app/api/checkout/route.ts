import { NextResponse } from "next/server";
import Stripe from "stripe";
import connectToDatabase from "@/lib/db/connectdb";
import Booking from "@/lib/models/Booking";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
});

export async function POST(req: Request) {
  try {
    const { amount, formValues } = await req.json();
    await connectToDatabase(); // Connect to the MongoDB database

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Booking Fee",
            },
            unit_amount: amount, // Amount in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/checkout-success`,
      cancel_url: `${req.headers.get("origin")}/checkout-failed`,
    })
    .then(async (session) => {
      // Create a new booking document in the database after a successful payment
      const newBooking = await Booking.create(formValues);
      console.log("Booking created successfully:", newBooking);
      return NextResponse.json(session);
    })
    .catch((error) => {
      console.error(error);
      return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}