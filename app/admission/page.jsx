import NavBar from "@/components/NavBar";
import { provideText } from "@/utils/provideText";
import Form from "./Form";
import { cookies } from "next/headers";

const AdmissionForm = async ({ searchParams }) => {
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

export default AdmissionForm;
