import { HowitWorks } from "@/constants";
import { HowItWorks } from "@/components/shared/how-it-works";
import Image from "next/image";

const WorkingSection = () => {
  return (
    <section id="how-it-works" className="w-full flex flex-col lg:flex-row justify-center gap-36 items-center bg-primary-50 mt-20 px-6 md:px-24 py-20">
      <div>
        <div className="pb-12">
          <h1 className="text-5xl font-bold text-sky-950 mb-1 text-center md:text-start">
            How it Works
          </h1>
          <p className="text-sm md:text-lg text-center md:text-start font-medium text-gray-400">
            What can you expect when you order from us
          </p>
        </div>

        <div className="pb-8 gap-8 md:gap-0 flex flex-col">
          {HowitWorks.map((item) => (
            <HowItWorks
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>

      <div className="">
        <Image src={"/houseimage.jpg"} alt="" width={500} height={500} className="aspect-square rounded-lg"/>
        {/* <Image src={"/cleaning.jpg"} alt="" width={600} height={630} className=""/> */}
      </div>
    </section>
  );
};

export default WorkingSection;
