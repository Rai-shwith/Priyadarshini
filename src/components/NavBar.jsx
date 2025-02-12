import React from "react";
import NavItem from "./NavItem";
import { AiFillHome } from "react-icons/ai";
import { FaInfoCircle, FaPhoneAlt, FaUserGraduate } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const NavBar = () => {
    const {text } = useLanguage();

  return (
    <div className="w-full h-20 px-6">
      <div className="flex justify-between items-center h-full md:px-8 md:mx-8 rounded-2xl">
        <div className="size-24 flex items-center">
          <img src="images/logo.png" className="w-full mix-blend-multiply" alt="logo" />
        <div className="font-semibold text-2xl md:text-6xl text-[#644a39]">{text.schoolName}</div>
        </div>
          <NavItem
            items={[
              { link: "/", value: text.NavBar.home ,icon: <AiFillHome/> },
              { link: "/about", value: text.NavBar.aboutUs , icon : <FaInfoCircle />},
              { link: "/admission", value: text.NavBar.admission,icon : <FaUserGraduate /> },
              { link: "/contact", value: text.NavBar.contact , icon: <FaPhoneAlt /> },
            ]}
          />
      </div>
    </div>
  );
};

export default NavBar;
