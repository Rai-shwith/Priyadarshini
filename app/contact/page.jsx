import NavBar from "@/components/NavBar";
import { provideText } from "@/utils/provideText";
import { cookies } from "next/headers";
import React from "react";

const ContactPage = async ({ searchParams }) => {
  const cookieStore = cookies();
  const lang = (await cookieStore).get("lang")?.value || "kn"; // Await the cookies
  const languageData = await provideText(lang);
  

  return (
    <>
    <NavBar text={languageData} language={lang} />
    <div className="min-h-[50vh] flex justify-center">
      <h1 className="text-4xl font-bold text-center">This page is not yet built!</h1>
    </div>
  </>
  );
};

export default ContactPage;
