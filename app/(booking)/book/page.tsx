import BookingForm from "@/components/shared/BookingForm";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import './book.module.css';

const BookingPage = () => {
	return (
		<>
			<section className="">
				<Navbar />
				<div className="flex-between wrapper max-h-screen mt-16">
					<main className="flex flex-col flex-1 lg:flex-row lg:justify-between py-12 lg:px-8">
						<div className="absolute bg-white flex flex-col border-2 px-8 py-8 rounded-xl border-primary">
							<h1 className="h2-bold text-sky-950">Book The Service</h1>
							<Link href={"/"}>
								<p className="p-semibold">Go Back</p>
							</Link>
							<BookingForm />
						</div>

						{/* <div className="bg-white flex flex-col px-8 py-8 rounded-xl border-primary">
							<h1 className="h2-bold text-sky-950">Ideal Cleaning Service</h1>
							<Link href={"/"}>
								<p className="p-semibold">Brought Together</p>
							</Link>
						</div>
						<div className="hidden lg:flex justify-center items-center w-auto min-w-lg">
							<Image
								src={"/booking.svg"}
								alt=""
								height={500}
								width={500}
								className="object-cover"
							/>
						</div> */}
					</main>
					{/* here is ur workspace file this is the page take a look at it and fix it ur self im fixing the stripe payment backend */}
				</div>
			</section>
		</>
	);
};

export default BookingPage;
