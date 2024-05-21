import React from "react";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { advantages } from "@/constants";

const Hero = () => {
  const checkicon = <CheckCircle2 />;

  return (
    <main className="w-full h-screen flex flex-col lg:flex-row mt-24 lg:mt-0 items-center justify-between px-6 lg:px-24 py-24 space-y-8 lg:space-y-0">
      <div className="flex flex-col items-start justify-center flex-1">
        <h1 className="text-4xl lg:text-7xl text-sky-950 font-semibold text-center lg:text-left">
          We have the ideal <span className="text-green-500">cleaning</span>{" "}
          service for your work!
        </h1>
        <div className="flex w-full items-center justify-center lg:justify-start gap-4 my-8">
          <Button size={"lg"} className="bg-green-500 text-lg">
            Our Pricings
          </Button>
          <Button
            variant={"outline"}
            size={"lg"}
            className="bg-green-200 text-green-500 text-lg border-none"
          >
            How it works
          </Button>
        </div>
        <div className="space-y-1 ">
          {advantages.map((f) => (
            <div key={f.adv} className="text-green-500 flex gap-2 my-1">
              {checkicon}
              <h1 className="text-sky-950/70 font-medium">{f.adv}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex justify-center lg:justify-end">
        <Image
          src={"/hero.jpg"}
          alt="Hero Image"
          width={500}
          height={500}
          className="w-full max-w-lg lg:max-w-none"
          priority
        />
      </div>
    </main>
  );
};

export default Hero;
