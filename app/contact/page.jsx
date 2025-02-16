import NavBar from "@/components/NavBar";
import { provideText } from "@/utils/provideText";
import React from "react";

const ContactPage = async ({ searchParams }) => {
  const resolvedParams = await searchParams;
  const lang = resolvedParams?.lang || "kn"; // Now safely access it
  const languageData = await provideText(lang);

  return (
    <>
      <NavBar text={languageData} language={lang} />
      <div className="min-h-[50vh] flex justify-center items-center">
        <h1 className="text-4xl font-bold">This page is not yet built!</h1>
      </div>
    </>
  );
};

export default ContactPage;
