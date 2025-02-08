import React from "react";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <div className="w-full h-20 px-6">
      <div className="flex justify-between items-center h-full md:px-8 md:mx-8 rounded-2xl">
        <div className="size-24 flex items-end">
          <img src="/images/logo.png" className="w-full mix-blend-multiply" alt="logo" />
        </div>
          <NavItem
            items={[
              { link: "#", value: "Home" },
              { link: "#", value: "About us" },
              { link: "#", value: "Admission" },
              { link: "#", value: "Contact" },
            ]}
          />
      </div>
    </div>
  );
};

export default NavBar;
