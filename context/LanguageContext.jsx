"use client";
import { createContext, useState, useContext, useEffect } from "react";
import languageData from "../utils/translations.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("kn");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("lang");
      if (stored) setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", language);
    }
  }, [language]);

  const switchLanguage = (lang) => setLanguage(lang);
  return (
    <LanguageContext.Provider
      value={{ language, switchLanguage, text: languageData[language] }}
    >
        <div className="">
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
