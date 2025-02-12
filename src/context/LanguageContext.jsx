import { createContext, useState, useContext, useEffect } from "react";
import languageData from "../utils/translations.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("lang") || "kn"
  );
  const switchLanguage = (lang) => setLanguage(lang);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, switchLanguage, text: languageData[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
