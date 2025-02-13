import React from "react";
import HeroSection from "./components/HeroSection";
import NumberSection from "./components/NumberSection";
import Education from "./components/Education";
import Facilities from "./components/Facilities";
import ContactUs from "./components/ContactUs";
import ScrollToTop from "./components/ScrollToTop";

const Home = () => {
  return (
    <>
      <HeroSection />
      <NumberSection />
      <Education />
      <Facilities />
      <ContactUs />
      <ScrollToTop />
    </>
  );
};

export default Home;
