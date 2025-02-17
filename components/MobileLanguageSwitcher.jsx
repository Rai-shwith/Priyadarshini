"use client";

import { TbLanguage, TbLoader } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MobileLanguageSwitcher = ({ language }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const switchLanguage = (lang) => {
    setLoading(true);
    document.cookie = `lang=${lang}; path=/`; // Set language cookie
    router.refresh(); // Soft refresh to apply new language
  };
  useEffect(() => {
    setLoading(false);
  }, [language]); // Runs when "language" changes

  return (
    <div className="text-xs font-semibold bg-slate-300 px-3 py-1 rounded-full min-w-[5rem]">
      <button
        onClick={() => {
          switchLanguage(language === "en" ? "kn" : "en");
        }}
        className="flex gap-2 items-center"
      >
        {loading ? <TbLoader /> : <TbLanguage />}
        <div className="">
          {loading ? "Switching..." : language !== "en" ? "English" : "ಕನ್ನಡ"}
        </div>
      </button>
    </div>
  );
};

export default MobileLanguageSwitcher;
