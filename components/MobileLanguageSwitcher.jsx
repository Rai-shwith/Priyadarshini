"use client";

import { TbLanguage } from "react-icons/tb";
import { useRouter } from "next/navigation";

const MobileLanguageSwitcher = ({ language }) => {
  const router = useRouter();

  const switchLanguage = (lang) => {
    document.cookie = `lang=${lang}; path=/`; // Set language cookie
    router.refresh(); // Soft refresh to apply new language
  };
  return (
    <div className="text-xs font-semibold bg-slate-300 px-3 py-1 rounded-full w-[5rem]">
      <button
        onClick={() => {
          switchLanguage(language === "en" ? "kn" : "en");
        }}
        className="flex gap-2 items-center"
      >
        <TbLanguage />
        <div className="">{language !== "en" ? "English" : "ಕನ್ನಡ"}</div>
      </button>
    </div>
  );
};

export default MobileLanguageSwitcher;
