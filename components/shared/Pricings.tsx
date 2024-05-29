import React from "react";
import { Button } from "../ui/button";
import { Check, X } from "lucide-react";
import { price } from "@/constants";

const Pricings = () => {
  return (
    <section className="wrapper flex-center">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 sm:px-8">
            <h2 className="h4-medium font-medium text-gray-900">Starter</h2>
            <p className="mt-2 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {" "}
                20${" "}
              </strong>
            </p>

            <Button size={"lg"} className="w-full mt-1 rounded-sm">
              Get Started
            </Button>
          </div>
          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-gray-900 sm:text-xl">
              What&apos;s included:
            </p>
            <ul className="mt-2 space-y-2 sm:mt-4">
              {price.map((price, idx) => {
                return (
                  <>
                    <li key={idx} className="flex items-center gap-1">
                      {price.starter ? (
                        <Check className="text-green-500" />
                      ) : (
                        <X className="text-red-500" />
                      )}
                      <span className={price.starter ? "text-gray-700" : "text-gray-500"}> {price.label} </span>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Pricings;
