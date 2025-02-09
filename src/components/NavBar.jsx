import React from "react";
import NavItem from "./NavItem";

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
              { link: "/", value: "Home" },
              { link: "/about", value: "About us" },
              { link: "/admission", value: "Admission" },
              { link: "/contact", value: "Contact" },
            ]}
          />
      </div>
    </div>
  );
};

export default NavBar;
