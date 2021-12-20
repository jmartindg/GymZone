import React, { useState } from "react";
import About from "../components/About";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import HomeNavbar from "../components/Navbars/HomeNavbar";
import Footer from "../components/Footer";
import HomeNavDropdown from "../components/Navbars/Dropdowns/HomeNavDropdown";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HomeNavbar toggle={toggle} />
      <HomeNavDropdown isOpen={isOpen} toggle={toggle} />
      <Hero />
      <About />
      <Faq />
      <Footer />
    </>
  );
}

export default Home;
