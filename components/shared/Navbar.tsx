"use client";
import { navItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";



const Navbar = () => {
  const path = usePathname();
  const [activePath, setActivePath] = useState(path);

  const handleClick = (url: string) => {
    setActivePath(url);
  };
  return (
    <header className={`w-full border-b`}>
      <div className="wrapper flex items-center justify-between">
        <Link href="/">
          <Image src={"/logo.svg"} alt="Logo" width={80} height={80} />
        </Link>

        <div className="lg:flex-between hidden w-full max-w-xs text-xl gap-10">
          {navItems.map((items) => (
            <Link
              key={items.url}
              className={
                activePath === items.url
                  ? "text-green-500 underline-animation active"
                  : "text-black underline-animation"
              }
              onClick={() => handleClick(items.url)}
              href={items.url}
            >
              {items.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <Link href="/book">
            <Button
              size={"lg"}
              className="bg-green-500 text-xl px-3 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4"
            >
              Book Now
            </Button>
          </Link>
          <div className="flex lg:hidden">
            <Sheet>
              <SheetTrigger className="align-middle">
                <Menu />
              </SheetTrigger>
              <SheetContent className="flex flex-col gap-6 bg-white lg:hidden">
                <SheetHeader>
                  <Image src={"/logo.svg"} alt="Logo" width={90} height={80} />

                  <div className="flex w-full flex-col text-2xl gap-4 items-start justify-center uppercase font-bold">
                    {navItems.map((items) => (
                      <Link
                        key={items.url}
                        className={
                          path === items.url ? "text-green-500" : "text-black"
                        }
                        onClick={() => handleClick(items.url)}
                        href={items.url}
                      >
                        {items.name}
                      </Link>
                    ))}
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
