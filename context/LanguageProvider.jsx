"use client";
import { useState, useContext, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const LanguageProvider = ({ children,languageData }) => {
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

  const text = languageData[language];

  return (
    <>
    <NavBar text={text} language={language} switchLanguage={switchLanguage} />
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { text })
          : child
      )}
      <Footer />
    </>
  );
};

export const useLanguage = () => useContext(LanguageContext);
