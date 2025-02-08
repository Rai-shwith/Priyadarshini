import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-11/12 self-center md:w-3/4">
        <video
          src="/video/PEMS.mp4"
          autoPlay
          loop
          muted
          className="w-full rounded-lg"
        ></video>
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div> */}
          <div className="md:absolute md:top-1/6 p-5 flex flex-col gap-2 justify-start">
            <h3 className="text-2xl md:text-4xl font-semibold text-amber-400 md:text-amber-200">
              Priyadarshini School
            </h3>
            <h1 className="text-4xl md:text-7xl font-bold text-black md:text-white">
              Material, Human & Divine Education
            </h1>
            <p className="text-slate-500 md:text-2xl">
              The mission of PEMS is to create a better future for all children.
              We achieve this by maximizing opportunities for children through
              holistic, values-based education of the highest quality and
              through initiatives that promote unity and meaningful social
              action for development.
            </p>
          </div>
            <div className="flex w-full justify-between mt-10">
                <button className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded-full">
                    About Us
                </button>
                <button className="border-amber-400 text- hover:bg-amber-500 border text-white font-bold py-2 px-4 rounded-full">
                    Online Admission
                </button>
            </div>
      </div>
    </div>
  );
};

export default HeroSection;
