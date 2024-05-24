import React from "react";
import { Button } from "../ui/button";

const Boost = () => {
  return (
    <section className="lg:mx-auto p-5 w-full px-12 md:px-16 lg:px-24 py-5 md:py-8">
      <div className="w-full flex flex-col lg:flex-row gap-12 items-center justify-between bg-sky-900 rounded-2xl px-8 sm:px-14 md:px-18 xl:px-32  py-20">
        <div className="flex flex-col items-start justify-center gap-6 text-center md:text-start">
          <h1 className="h2-medium md:text-5xl text-white font-semibold xl:max-w-2xl tracking-tight">
            Dumpster delivery when you need it
          </h1>
          <p className="p-medium-18 text-white/70 xl:max-w-2xl tracking-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            nam perspiciatis doloribus porro error nisi eaque velit, tempore
            excepturi officiis facere quia odio dolores eos dolore sit saepe.
            Molestias, tempore.
          </p>
        </div>
        <div className="gap-8 flex items-center justify-center flex-col">
          <Button size={'lg'} className="px-16 py-6 text-xl">Schedule Now</Button>
          <p className="text-lg text-white/70 font-medium xl:max-w-2xl tracking-tight">
            Or Call
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-3xl text-green-400 font-semibold xl:max-w-2xl tracking-tight whitespace-nowrap">+353 083 025 9171</h2>
        </div>
      </div>
    </section>
  );
};

export default Boost;
