import NavBar from "@/components/NavBar";
import { provideText } from "@/utils/provideText";
import Form from "./Form";
import { cookies } from "next/headers";

const AdmissionForm = async () => {
  const cookieStore = cookies();
  const lang = (await cookieStore).get("lang")?.value || "kn"; // Await the cookies
  const languageData = await provideText(lang);
  

  return (
    <>
      <NavBar text={languageData} language={lang} />
      <Form text={languageData["AdmissionPage"]} />
    </>
  );
};

export const metadata = {
  title: "Admissions | Priyadarshini English Medium School - Bettampady",
  icons: {
    icon: "/images/logo.png",
  },
  description: "Join Priyadarshini English Medium School in Bettampady! Explore our admission process, eligibility, and key dates. Empower your child with holistic, values-based education.",
};


export default AdmissionForm;
