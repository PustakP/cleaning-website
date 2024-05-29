// /app/api/webhook/stripe/route.ts

import { NextResponse } from "next/server";
import stripe from "stripe";
import { buffer } from "micro";
import connectToDatabase from "@/lib/db/connectdb";
import Booking from "@/lib/models/Booking";


export async function POST(request: Request) {
	const payload = await request.text();
	const res = JSON.parse(payload);
	const sig = request.headers.get("stripe-signature") as string;
	const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

	let event;

	try {
		event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
	} catch (err) {
		return NextResponse.json(
			{ message: "Webhook error", error: err },
			{ status: 400 }
		);
	}

	console.log(event.type);
	if (event.type === "checkout.session.completed") {
		const session = event.data.object;
		const metadata = session.metadata;

		if (metadata) {
			const { rooms, type, description, location, date, email, phone } =
				metadata;
			await connectToDatabase();

			const newBooking = new Booking({
				rooms,
				type,
				description,
				location,
				date,
				email,
				phone,
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
