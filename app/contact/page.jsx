import NavBar from "@/components/NavBar";
import { provideText } from "@/utils/provideText";
import { cookies } from "next/headers";
import ContactForm from "./ContactForm";

const AdmissionForm = async () => {
  const cookieStore = cookies();
  const lang = (await cookieStore).get("lang")?.value || "kn"; // Await the cookies
  const languageData = await provideText(lang);
  

  return (
    <>
      <NavBar text={languageData} language={lang} />
      <ContactForm text={languageData["ContactPage"]} />
    </>
  );
};

export default AdmissionForm;
