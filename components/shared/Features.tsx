import { features } from "@/constants";
import React from "react";
import { FeatureCards } from "./feature-cards";

const Features = () => {
  return (
    <section className="flex flex-col w-full items-center justify-center px-2 md:px-14 py-8">
      <h1 className="text-sky-950 text-4xl font-bold tracking-tight">
        Why Choose Us?
      </h1>
      <p className="text-black/40 font-semibold">Reasons why we are the best</p>

      <div className="w-full flex gap-12 items-center justify-center mt-12 flex-wrap">
        {features.map((item) => (
          <FeatureCards
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
