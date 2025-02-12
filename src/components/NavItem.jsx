import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavItem = ({ items }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div className="hidden md:flex gap-20">
        {items.map((item) => {
          return (
            <Link
              to={item.link}
              key={item.value}
              className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
            >
              {item.value}
            </Link>
          );
        })}
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavItem;
