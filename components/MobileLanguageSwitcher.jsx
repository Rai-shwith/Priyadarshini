"use client";

import { TbLanguage } from "react-icons/tb";
import { useSearchParams, useRouter } from "next/navigation";

const MobileLanguageSwitcher = ({ language, switchLanguage }) => {
  // const router = useRouter();
  // const searchParams = useSearchParams();

  // const switchLanguage = (lang) => {
  //   const newParams = new URLSearchParams(searchParams.toString());
  //   newParams.set("lang", lang);
  //   router.push(`?${newParams.toString()}`); // Triggers re-render
  // };
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
