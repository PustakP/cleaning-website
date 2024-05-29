// /app/api/webhook/stripe/route.ts

import { NextResponse } from "next/server";
import stripe from "stripe";



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
			const { rooms, type, description, location, date, email, phone } = metadata;
			
			console.log(rooms , type , description , location , date , email , phone)
			try {
				console.log(metadata)
				console.log("Booking saved:", metadata);
			} catch (error) { 
				//test dont mess around here bitch go to app>book>page.tsx and do the layouts dem
				console.error("Error saving booking:", error);
			}
		} else {
			console.error("Metadata is null in the checkout session.");
		}
	}

	return NextResponse.json({ received: true }, { status: 200 });
}
