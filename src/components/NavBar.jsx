import React from "react";
import NavItem from "./NavItem";
import { AiFillHome, AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineHowToReg } from "react-icons/md";
import { FaInfoCircle, FaPhoneAlt, FaSchool, FaUserGraduate } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="w-full h-20 px-6">
      <div className="flex justify-between items-center h-full md:px-8 md:mx-8 rounded-2xl">
        <div className="size-24 flex items-center">
          <img src="images/logo.png" className="w-full mix-blend-multiply" alt="logo" />
        <div className="font-semibold text-2xl md:text-6xl text-[#644a39]">PRIYADARSHINI</div>
        </div>
          <NavItem
            items={[
              { link: "/", value: "Home" ,icon: <AiFillHome/> },
              { link: "/about", value: "About us" , icon : <FaInfoCircle />},
              { link: "/admission", value: "Admission",icon : <FaUserGraduate /> },
              { link: "/contact", value: "Contact" , icon: <FaPhoneAlt /> },
            ]}
          />
      </div>
    </div>
  );
};

export default NavBar;
