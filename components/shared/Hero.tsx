import React from "react";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";

const Hero = () => {
  const checkicon = <CheckCircle2 />;

  const advantages = [
    {
      adv: "We provide House, Office, Deep Cleaning",
    },
    {
      adv: "We are Quick- Same day pick up and Drop Off",
    },
    {
      adv: "We're affordable - Flat Rates no hidden fees",
    },
    {
      adv: "AfterBuilding Cleaning and Move in and Out support",
    },
  ];

  
  return (
    <main className="w-full px-14 py-14">
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-6xl text-sky-950 font-semibold">
          We have the ideal <span className="text-green-500">cleaning</span>{" "}
          <br /> service for you!
        </h1>
        <div className="flex items-center justify-center gap-4 my-8">
          <Button size={"lg"} className="bg-green-500 text-lg">
            Our Pricings
          </Button>
          <Button
            variant={"outline"}
            size={"lg"}
            className="bg-green-200 text-green-500 text-lg"
          >
            How it works
          </Button>
        </div>

        <div></div>

        {advantages.map((f) => (
          <div className="text-green-500 flex gap-2">
            {checkicon} <h1 key={f.adv} className="text-sky-950/70 font-medium">{f.adv}</h1>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Hero;
