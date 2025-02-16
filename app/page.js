import ContactUs from "@/components/ContactUs";
import Education from "@/components/Education";
import Facilities from "@/components/Facilities";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import NumberSection from "@/components/NumberSection";
import { provideText } from "@/utils/provideText";

export default async function Home({ searchParams }) {
  const resolvedParams = await searchParams;
  const lang = resolvedParams?.lang || "kn"; // Now safely access it
  const languageData = await provideText(lang);

  return (
    <div className="">
      <NavBar text={languageData} language={lang} />
      <HeroSection text={languageData["HeroSection"]} />
      <NumberSection text={languageData["NumberSection"]} />
      <Education text={languageData["EducationSection"]} />
      <Facilities text={languageData["FacilitySection"]} />
      <ContactUs text={languageData["ContactSection"]} />
    </div>
  );
}
