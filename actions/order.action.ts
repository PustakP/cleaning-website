"use server";
import Stripe from "stripe";
import connectToDatabase from "@/lib/db/connectdb";
import Booking from "@/lib/models/Booking";
import { redirect } from "next/navigation";

export const checkoutOrder = async () => {
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

	const price = 20 * 100; // Assuming price is $20

	try {
		const session = await stripe.checkout.sessions.create({
			line_items: [
				{
					price_data: {
						currency: "usd",
						unit_amount: price,
						product_data: {
							name: "Cleaning",
						},
					},
					quantity: 1,
				},
			],
			mode: "payment",
			success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/checkout-success`,
			cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
		});

		redirect(session.url!);
	} catch (error) {
		throw error;
	}
};

export const createOrder = async (values: any) => {
	const { rooms, type, description, location, date, email, phone } = values;
	try {
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
		await newBooking.save();
	} catch (error) {
		console.log(error);
	}
};
