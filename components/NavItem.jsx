"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import DesktopLanguageSwitcher from "./DesktopLanguageSwitcher";
import MobileLanguageSwitcher from "./MobileLanguageSwitcher";

const NavItem = ({ items, language }) => {
  const [showMenu, setShowMenu] = useState(false);
  // const [isLangOpen, setIsLangOpen] = useState(false);
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
    <div >
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
        <DesktopLanguageSwitcher language={language} />
      </div>
      {/* <div className="md:hidden relative"> */}
      <div className="md:hidden relative top-5 flex flex-col items-end gap-5">
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
        <MobileLanguageSwitcher language={language} />
      </div>
    </div>
  );
};

export default NavItem;
