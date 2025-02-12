import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { TbLanguage } from "react-icons/tb";

const NavItem = ({ items }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language, switchLanguage, text } = useLanguage();

  return (
    <div>
      <div className="hidden md:flex gap-16">
        {items.map((item) => {
          return (
            <div className="flex gap-2 items-center">
              {item.icon}
              <Link
                to={item.link}
                key={item.value}
                className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
              >
                {item.value}
              </Link>
            </div>
          );
        })}
        {/* Desktop Dropdown */}
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="relative"
        >
          <button className="cursor-pointer flex items-center gap-1">
            <TbLanguage />
            <div className="">
            {language === "en" ? "English" : "ಕನ್ನಡ"}
            </div>
            
          </button>
          {isOpen && (
            <div className="absolute right-3 top-6 z-50 w-32 bg-white shadow-lg rounded-lg overflow-hidden">
              <button
                onClick={() => {
                  switchLanguage("en");
                  setIsOpen(false);
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                English
              </button>
              <button
                onClick={() => {
                  switchLanguage("kn");
                  setIsOpen(false);
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                ಕನ್ನಡ
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="md:hidden">
        {!showMenu ? (
          <button
            className="appearance-none"
            onClick={() => setShowMenu(!showMenu)}
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        ) : (
          <div className="">
            <button
              className="appearance-none"
              onClick={() => setShowMenu(!showMenu)}
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
            <div className="flex flex-col gap-4 z-50 absolute  right-5 bg-white p-4 rounded-lg shadow-md">
              {items.map((item) => {
                return (
                  <Link
                    to={item.link}
                    key={item.value}
                    className="appearance-none"
                  >
                    {item.value}
                  </Link>
                );
              })}
              <div className="self-center font-semibold ">
                <button
                  onClick={() =>
                    switchLanguage(language === "en" ? "kn" : "en")
                  }
                  className="flex gap-1 items-center"
                >
                  <TbLanguage />
                  <div className="">
                    {language === "en" ? "English" : "ಕನ್ನಡ"}
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavItem;
