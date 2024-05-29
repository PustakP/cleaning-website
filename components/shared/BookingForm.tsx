"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { bookingschema } from "@/lib/validations/bookingform";
import { z } from "zod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "./Dropdown";
import { Calendar, ChefHatIcon, Map } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useState } from "react";
import { Textarea } from "../ui/textarea";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const BookingForm = () => {
	const [loading, setLoading] = useState(false);
	// const [bookedDates, setBookedDates] = useState<Date[]>([]);

	// useEffect(() => {
	//   const fetchBookedDates = async () => {
	//     try {
	//       const response = await axios.get('/api/book');
	//       setBookedDates(response.data.bookedDates.map((date:string )=> new Date(date)));
	//     } catch (error) {
	//       console.error('Failed to fetch booked dates:', error);
	//     }
	//   };

	//   fetchBookedDates();
	// }, []);

	const form = useForm<z.infer<typeof bookingschema>>({
		resolver: zodResolver(bookingschema),
		defaultValues: {
			rooms: "",
			type: "",
			description: "",
			location: "",
			date: undefined,
			email: "",
			phone: "",
		},
	});

	async function onSubmit(values: z.infer<typeof bookingschema>) {
		form.reset();
		setLoading(true);
		console.log("Form submitted");
		console.log(values);

		try {
			const stripe = await stripePromise;

			const response = await axios.post("/api/checkout", values);

			if (response.status === 200) {
				const sessionId = response.data.id;
				stripe?.redirectToCheckout({ sessionId });
			} else {
				console.error("Error creating checkout session:", response.data);
			}
		} catch (error) {
			console.error("Error submitting form:", error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-5 wrapper"
			>
				<FormField
					control={form.control}
					name="rooms"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormControl>
								<Input
									type="number"
									placeholder="No of Rooms"
									{...field}
									className="input-field"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="type"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormControl>
								<Dropdown
									onChangeHandler={field.onChange}
									value={field.value}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormControl>
								<Textarea placeholder="Description" {...field} className="textarea rounded-2xl" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="location"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormControl>
								<div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
									<Map />
									<Input
										type="text"
										placeholder="Location"
										{...field}
										className="input-field"
									/>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="date"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormControl>
								<div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
									<Calendar />
									<p className="ml-3 whitespace-nowrap text-grey-600">
										Start Date:
									</p>
									<DatePicker
										selected={field.value}
										onChange={(date: Date) => field.onChange(date)}
										showTimeSelect
										dateFormat="MM/dd/yyyy h:mm aa"
										minDate={new Date()}
										// excludeDates={bookedDates}
										wrapperClassName="datePicker"
									/>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormControl>
								<div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
									<ChefHatIcon />
									<Input
										type="email"
										placeholder="Email Contact"
										{...field}
										className="p-regular-16 border-0 bg-grey-50 outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
									/>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormControl>
								<div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
									<ChefHatIcon />
									<Input
										type="text"
										placeholder="Phone number"
										{...field}
										className="p-regular-16 border-0 bg-grey-50 outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
									/>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type={`submit`} size="lg" className="button col-span-2 w-full">
					Book for 20$
				</Button>
			</form>
		</Form>
	);
};

export default BookingForm;
