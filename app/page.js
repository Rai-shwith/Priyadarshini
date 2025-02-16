import ContactUs from "@/components/ContactUs";
import Education from "@/components/Education";
import Facilities from "@/components/Facilities";
import HeroSection from "@/components/HeroSection";
import NumberSection from "@/components/NumberSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <NumberSection />
      <Education/>
      <Facilities />
      <ContactUs />
    </div>
  );
}
