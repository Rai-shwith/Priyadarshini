import NavBar from "@/components/NavBar";
import { provideText } from "@/utils/provideText";
import Form from "./Form";

const AdmissionForm = async ({ searchParams }) => {
  const resolvedParams = await searchParams;
  const lang = resolvedParams?.lang || "kn"; // Now safely access it
  const languageData = await provideText(lang);

  return (
    <>
      <NavBar text={languageData} language={lang} />
      <Form text={languageData["AdmissionPage"]} />
    </>
  );
};

export default AdmissionForm;
