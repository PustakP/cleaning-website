import React from "react";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { advantages } from "@/constants";
import Link from "next/link";

const Hero = () => {
  const checkicon = <CheckCircle2 />;

  return (
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="text-5xl tracking-tighter sm:text-6xl md:text-7xl lg:text-7xl text-sky-950 font-semibold text-center lg:text-left">
            We have the ideal <span className="text-green-500">cleaning</span>{" "}
            service for your work!
          </h1>
          <div className="flex w-full items-center lg:items-start flex-col gap-4">
            <div className="space-y-1 my-6">
              {advantages.map((f) => (
                <div key={f.adv} className="text-green-500 flex gap-2 my-1">
                  {checkicon}
                  <h1 className="text-sky-950/70 font-medium text-lg">
                    {f.adv}
                  </h1>
                </div>
              ))}
            </div>
            <div className="flex w-full items-center justify-center lg:justify-start gap-4">
              <Button size={"lg"} className="bg-green-500 text-lg inline-flex">
                Our Pricings
              </Button>
              <Link href={'#how-it-works'}>
              <Button
                variant={"outline"}
                size={"lg"}
                className="bg-green-200 text-green-500 text-lg border-none inline-flex"
                >
                How it works
              </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <Image
            src={"/hero.png"}
            alt="Hero Image"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
