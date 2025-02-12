import { createContext, useState, useContext } from "react";
import languageData from "../utils/translations.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("kn");
  const switchLanguage = (lang) => setLanguage(lang);
  return (
    <LanguageContext.Provider
      value={{ language, switchLanguage, text: languageData[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
