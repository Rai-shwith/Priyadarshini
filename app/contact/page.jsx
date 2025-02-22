import NavBar from "@/components/NavBar";
import { provideText } from "@/utils/provideText";
import { cookies } from "next/headers";
import ContactForm from "./ContactForm";
import ContactUs from "@/components/ContactUs";

const AdmissionForm = async () => {
  const cookieStore = cookies();
  const lang = (await cookieStore).get("lang")?.value || "kn"; // Await the cookies
  const languageData = await provideText(lang);
  

  return (
    <>
      <NavBar text={languageData} language={lang} />
      <ContactUs text={languageData["ContactSection"]} />
      <ContactForm text={languageData["ContactPage"]} />
    </>
  );
};

export const metadata = {
  title: "Contact Us | Priyadarshini English Medium School - Bettampady",
  icons: {
    icon: "/images/logo.png",
  },
  description: "Get in touch with Priyadarshini English Medium School. Find our address, phone number, email, and reach out for admission inquiries or school information in Bettampady.",
};


export default AdmissionForm;
