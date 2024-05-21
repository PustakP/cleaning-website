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
    <nav className="w-full flex items-center justify-between py-4 md:py-8 px-3 md:px-14 ">
      <Image src={"/logo.svg"} alt="" width={80} height={80} className="" />

      <div className="hidden lg:flex text-xl gap-12">
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
        <Button
          size={"lg"}
          className="bg-green-500 text-xl px-3 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4"
        >
          Book Now
        </Button>
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                  <div className="flex w-full flex-col text-2xl gap-4 items-start justify-center">
                    {navItems.map((items) => (
                      <Link
                        key={items.url}
                        className={
                          path === items.url
                            ? "text-green-500"
                            : "text-black"
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
    </nav>
  );
};

export default Navbar;
