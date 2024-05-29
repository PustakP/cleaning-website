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
				<div className="flex-between wrapper max-h-screen">
					<main className="mt-13 flex flex-col flex-1 lg:flex-row lg:justify-between py-20 lg:px-8">
						<div className="flex flex-col px-2 py-6 rounded-xl max-lg:flex-center">
							<h1 className="h2-bold text-sky-950 max-lg:text-center">Book The Service</h1>
							<h2 className="font-medium mt-1 text-grey-600 text-sm max-lg:text-center mb-5">Schedule an quick cleaning seession with our Team</h2>
							<BookingForm />
						</div>
						<div className="hidden lg:flex justify-center items-center w-auto min-w-lg">
							<Image
								src={"/booking.svg"}
								alt=""
								height={500}
								width={500}
								className="object-cover"
							/>
						</div>
					</main>
				</div>
			</section>
		</>
	);
};

export default BookingPage;
