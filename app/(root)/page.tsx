import Features from "@/components/shared/Features";
import Hero from "@/components/shared/Hero";
import Navbar from "@/components/shared/Navbar";
import WorkingSection from "@/components/shared/WorkingSection";
import ContactNav from "@/components/shared/contactNav";

export default function Home() {
  return (
    <>
    {/* <ContactNav/> */}
    <Navbar/>
    <Hero/>
    <Features/>
    <WorkingSection/>
    </>
  );
}
