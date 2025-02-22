import Activities from "@/components/Activities";
import ContactUs from "@/components/ContactUs";
import Education from "@/components/Education";
import Facilities from "@/components/Facilities";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import NumberSection from "@/components/NumberSection";
import { provideText } from "@/utils/provideText";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = cookies();
  const lang = (await cookieStore).get("lang")?.value || "en"; // Await the cookies
  const languageData = await provideText(lang);
  
  return (
    <div className={`${lang === "en" ? "font-english" : "font-kannada"} w-full flex flex-col items-center`}>
      <NavBar text={languageData} language={lang} />
      <HeroSection text={languageData["HeroSection"]} />
      <NumberSection text={languageData["NumberSection"]} />
      <Education text={languageData["EducationSection"]} />
      <Facilities text={languageData["FacilitySection"]} />
      <Activities text={languageData["ActivitySection"]} />
      <ContactUs text={languageData["ContactSection"]} />
    </div>
  );
}
