import ContactUs from "@/components/ContactUs";
import Education from "@/components/Education";
import Facilities from "@/components/Facilities";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import NumberSection from "@/components/NumberSection";
import { LanguageProvider } from "@/context/LanguageProvider";

export default function Home() {

  return (
    <LanguageProvider>
      <HeroSection />
      <NumberSection />
      <Education />
      <Facilities />
      <ContactUs />
    </LanguageProvider>
  );
}
