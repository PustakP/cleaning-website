import Link from "next/link";
import React from "react";
import 'remixicon/fonts/remixicon.css'

const ContactNav = () => {
  return (
    <header className="w-full h-8 md:h-12 bg-sky-950 hidden md:flex items-center justify-between px-6 md:px-32">
      <div className="flex items-center justify-center gap-5 text-white text-sm md:text-2xl">
        <Link href={"/"}>
          <i className="ri-facebook-fill"></i>
        </Link>
        <Link href={"/"}>
          <i className="ri-instagram-fill"></i>
        </Link>
        <Link href={"/"}>
            <i className="ri-chat-1-fill"></i>
        </Link>
      </div>

      <div className="flex items-center justify-center text-white text-sm md:text-xl gap-3">
      <i className="ri-phone-fill"></i>
      <h3 className="hidden sm:block text-lg tracking-tight">+353 083 025 9171</h3>
      <h3 className="block sm:hidden">Call Us</h3>
      </div>
    </header>
  );
};

export default ContactNav;
