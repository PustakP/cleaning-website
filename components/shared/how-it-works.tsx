import React from "react";

interface Working {
  icon: React.ElementType;
  title: string;
  description: string;
}

export const HowItWorks = ({ icon: Icon, title, description }: Working) => {
  return (
    <div className="flex flex-col items-start justify-center gap-6 p-2 md:p-6">
      <div className="flex items-center justify-center gap-3">
        <div className="bg-white rounded-2xl p-3">
          <Icon className="w-8 h-8 text-green-700" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-xl font-bold text-sky-950/90 mb-1">{title}</h3>
          <p className="text-sm md:text-lg leading-tight text-black/40 font-medium text-start">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
