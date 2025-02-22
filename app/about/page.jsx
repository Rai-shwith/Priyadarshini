import NavBar from "@/components/NavBar";
import { provideText } from "@/utils/provideText";
import { cookies } from "next/headers";
import React from "react";
import AboutUsPage from "./AboutUsPage";

const AboutPage = async ({ text }) => {
  const cookieStore = cookies();
  const lang = (await cookieStore).get("lang")?.value || "kn"; // Await the cookies
  const languageData = await provideText(lang);

  return (
    <>
      <NavBar text={languageData} language={lang} />
      <AboutUsPage text={languageData["AboutPage"]} />
    </>
  );
};

export default AboutPage;
