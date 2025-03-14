"use client";

import { TbLanguage, TbLoader } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DesktopLanguageSwitcher = ({ language }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const switchLanguage = (lang) => {
    setLoading(true);
    document.cookie = `lang=${lang}; path=/`; // Set language cookie
    router.refresh(); // Soft refresh to apply new language
    // setLoading(false);
  };

  useEffect(() => {
    setLoading(false);
  }, [language]); // Runs when "language" changes

  return (
    <div
      // onMouseEnter={() => setIsLangOpen(true)}
      // onMouseLeave={() => setIsLangOpen(false)}
      className="hover:scale-110 transition-transform ease-in-out duration-300 hover:text-blue-500"
    >
      <button
        onClick={() => switchLanguage(language === "en" ? "kn" : "en")}
        className="cursor-pointer flex items-center gap-1"
      >
        {loading? <TbLoader />:<TbLanguage />}
        
        <div className="">
          {loading ? "Switching..." : language !== "en" ? "English" : "ಕನ್ನಡ"}
        </div>
      </button>
      {/* {isLangOpen && (
      <div className="absolute right-3 top-6 z-50 w-32 bg-white shadow-lg rounded-lg overflow-hidden">
        <button
          onClick={() => {
            switchLanguage("en");
            setIsLangOpen(false);
          }}
          className="block w-full px-4 py-2 text-left hover:bg-gray-100"
        >
          English
        </button>
        <button
          onClick={() => {
            switchLanguage("kn");
            setIsLangOpen(false);
          }}
          className="block w-full px-4 py-2 text-left hover:bg-gray-100"
        >
          ಕನ್ನಡ
        </button>
      </div>
    )} */}
    </div>
  );
};

export default DesktopLanguageSwitcher;
