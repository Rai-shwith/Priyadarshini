import React from "react";
import NavItem from "./NavItem";
import { AiFillHome } from "react-icons/ai";
import { FaInfoCircle, FaPhoneAlt, FaUserGraduate } from "react-icons/fa";
import Image from "next/image";

const NavBar = ({ text, language, switchLanguage }) => {
  return (
    <div className="w-full h-20 px-6 mb-6">
      <div className="flex justify-between items-center h-full md:px-8 md:mx-8 rounded-2xl">
        <div className="flex items-center">
          <div className="w-24 min-h-20 relative">
            <Image
              fill
              sizes="(max-width: 768px) 50vw,
           (max-width: 1200px) 33vw,
           25vw"
              src="/images/logo.png"
              className="mix-blend-multiply"
              alt="logo"
            />
          </div>
          <div className="relative inset-0">
            <div className="absolute bottom-1/2 translate-y-1/2  font-semibold text-2xl md:text-6xl text-[#644a39]">
              {text.schoolName}
            </div>
          </div>
        </div>
        <NavItem
        switchLanguage = {switchLanguage}
          language={language}
          items={[
            { link: "/", value: text.NavBar.home, icon: <AiFillHome /> },
            {
              link: "/about",
              value: text.NavBar.aboutUs,
              icon: <FaInfoCircle />,
            },
            {
              link: "/admission",
              value: text.NavBar.admission,
              icon: <FaUserGraduate />,
            },
            {
              link: "/contact",
              value: text.NavBar.contact,
              icon: <FaPhoneAlt />,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default NavBar;
