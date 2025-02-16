"use client"
import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";
import { TbLanguage } from "react-icons/tb";

const NavItem = ({ items }) => {
  const [showMenu, setShowMenu] = useState(false);
  // const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, switchLanguage } = useLanguage();
  const phoneMenuNav = useRef(null);

  const handleClickOutside = (event) => {
    if (phoneMenuNav.current && !phoneMenuNav.current.contains(event.target)) {
      setShowMenu(false);
    }
  };
  useEffect(() => {
    if (showMenu) {
      window.addEventListener("pointerdown", handleClickOutside);
    } else {
      window.removeEventListener("pointerdown", handleClickOutside);
    }
    return () => {
      window.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div>
      <div className="hidden md:flex gap-16">
        {items.map((item) => {
          return (
            <div
              className="flex gap-2 items-center hover:scale-110 transition-transform ease-in-out duration-300"
              key={item.value}
            >
              {item.icon}
              <Link
                href={item.link}
                className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
              >
                {item.value}
              </Link>
            </div>
          );
        })}
        {/* Desktop Dropdown */}
        <div
          // onMouseEnter={() => setIsLangOpen(true)}
          // onMouseLeave={() => setIsLangOpen(false)}
          className="hover:scale-110 transition-transform ease-in-out duration-300 hover:text-blue-500"
        >
          <button
            onClick={() => switchLanguage(language === "en" ? "kn" : "en")}
            className="cursor-pointer flex items-center gap-1"
          >
            <TbLanguage />
            <div className="">{language !== "en" ? "English" : "ಕನ್ನಡ"}</div>
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
      </div>
      {/* <div className="md:hidden relative"> */}
      <div className="md:hidden relative top-5 flex flex-col items-end gap-5 right-8">
        {!showMenu ? (
          <button className="appearance-none" onClick={() => setShowMenu(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        ) : (
          // </div>
          <div className="" ref={phoneMenuNav}>
            <button
              className="appearance-none"
              onClick={() => setShowMenu(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col gap-4 z-50 absolute  right-0 bg-white p-4 rounded-lg shadow-md">
              {items.map((item) => {
                return (
                  <div className="flex gap-2 items-center" key={item.value}>
                    {item.icon}
                    <Link
                      href={item.link}
                      className="appearance-none"
                      onClick={() => setShowMenu(false)}
                    >
                      {item.value}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className="text-xs font-semibold bg-slate-300 px-3 py-1 rounded-full w-[5rem]">
          <button
            onClick={() => {
              switchLanguage(language === "en" ? "kn" : "en");
              setShowMenu(false);
            }}
            className="flex gap-2 items-center"
          >
            <TbLanguage />
            <div className="">{language !== "en" ? "English" : "ಕನ್ನಡ"}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavItem;
