import React from "react";
import HeroSection from "./components/HeroSection";
import NumberSection from "./components/NumberSection";
import Education from "./components/Education";
import Facilities from "./components/Facilities";
import ContactUs from "./components/ContactUs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <NumberSection />
      <Education />
      <Facilities />
      <ContactUs />
    </>
  );
};

export default Home;
