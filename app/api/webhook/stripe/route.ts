import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import connectToDatabase from "@/lib/db/connectdb";
import Booking from "@/lib/models/Booking";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: '2024-04-10',
});

export const config = {
	api: {
		bodyParser: false,
	},
};

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	const buf = await buffer(req);
	const sig = req.headers['stripe-signature']!;

	let event: Stripe.Event;

	try {
		event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET!);
	} catch (err) {
		return res.status(400).send(`Webhook Error: ${err.message}`);
	}

	// Handle the event
	switch (event.type) {
		case 'checkout.session.completed':
			const session = event.data.object as Stripe.Checkout.Session;

			// Save the booking to the database
			try {
				await connectToDatabase();

				const { rooms, type, description, location, date, email, phone } = session.metadata;

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
				console.error('Error saving booking:', error);
				return res.status(500).send('Internal Server Error');
			}

			break;
		// Handle other event types
		default:
			console.log(`Unhandled event type ${event.type}`);
	}

	res.status(200).json({ received: true });
};

export default webhookHandler;

async function buffer(readable: NextApiRequest) {
	const chunks = [];
	for await (const chunk of readable) {
		chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
	}
	return Buffer.concat(chunks);
}
