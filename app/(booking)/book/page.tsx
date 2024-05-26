import BookingForm from "@/components/shared/BookingForm";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookingPage = () => {
  return (
    <>
      <section className="bg-primary">
        {/* <Navbar/> */}
        <div className="flex-between max-h-screen">
          <main className="border flex flex-1 justify-center items-center flex-col py-10 bg-white">
          <h1 className="h2-bold text-sky-950">Book The Service</h1>
          <Link href={'/'}><p className="p-semibold">Go Back</p></Link>
          <BookingForm />
          </main>
        </div>
      </section>
    </>
  );
};

export default BookingPage;
