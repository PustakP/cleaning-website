import Boost from "@/components/shared/Boost";
import Features from "@/components/shared/Features";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import Navbar from "@/components/shared/Navbar";
import Pricings from "@/components/shared/Pricings";
import WorkingSection from "@/components/shared/WorkingSection";
import ContactNav from "@/components/shared/contactNav";

export default function Home() {
  return (
    <>
    {/* <ContactNav/> */}
    <Hero/>
    <Features/>
    <WorkingSection/>
    {/* Pricings */}
    <Pricings/> 
    <Boost/>
    {/* Footer */}
    </>
  );
}
