import React from "react";
import SocialLinks from "./SocialIcons";
import Link from "next/link";

const HeroSection = ({text}) => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-11/12 self-center md:w-3/4">
        <video
          src="video/PEMS.mp4"
          autoPlay
          loop
          muted
          className="w-full rounded-lg"
        ></video>
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div> */}
        <div className="md:absolute md:inset-0 p-5 flex flex-col gap-2 justify-start">
          <h3 className="text-2xl md:text-4xl font-bold text-amber-400 md:text-amber-200">
            {text.school}
          </h3>
          <h1 className="text-4xl md:text-7xl font-bold text-black md:text-white">
            {text.mainLine}
          </h1>
          <p className="md:text-white md:text-2xl text-xs">{text.para}</p>
          {/* Buttons */}
          <div className="flex w-full justify-between mt-5 md:mt-28 md:text-2xl">
            {/* TODO: add Navigation */}
            <Link
              href={"/about"}
              className="bg-amber-500 text-white hover:bg-transparent active:bg-transparent cursor-pointer border-amber-500 border hover:text-amber-500 active:text-amber-500   py-2 px-4 rounded-full"
            >
              {text.aboutUs}
            </Link>
            <Link
              href={"/admission"}
              className="border-amber-500 border text-amber-500 cursor-pointer active:bg-amber-500 hover:bg-amber-500 active:text-white hover:text-white py-2 px-4 rounded-full"
            >
              {text.onlineAdmission}
            </Link>
          </div>
        </div>
        <SocialLinks />
      </div>
    </div>
  );
};

export default HeroSection;
