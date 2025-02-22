import NavBar from "@/components/NavBar";
import { provideText } from "@/utils/provideText";
import { cookies } from "next/headers";
import React from "react";
import AboutUsPage from "./AboutUsPage";

const AboutPage = async ({ text }) => {
  const cookieStore = cookies();
  const lang = (await cookieStore).get("lang")?.value || "en"; // Await the cookies
  const languageData = await provideText(lang);

  return (
    <div className={`${lang === "en" ? "font-english" : "font-kannada"} w-full flex flex-col items-center`}>
      <NavBar text={languageData} language={lang} />
      <AboutUsPage text={languageData["AboutPage"]} />
    </div>
  );
};
export const metadata = {
  title: "About Us | Priyadarshini English Medium School - Bettampady",
  icons: {
    icon: "/images/logo.png",
  },
  description: "Learn about Priyadarshini English Medium School in Bettampady — our mission, values, and commitment to providing top-quality, holistic education for children.",
};

export default AboutPage;
