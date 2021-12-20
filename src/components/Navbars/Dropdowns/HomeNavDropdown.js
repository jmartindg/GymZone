import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function HomeNavDropdown({ isOpen, toggle }) {
  return (
    <div className={isOpen ? "py-8 bg-secondary text-white px-4 lg:px-0 md:hidden" : "hidden"} onClick={toggle}>
      <ul className="space-y-6">
        <li className="link-hover cursor-pointer uppercase text-sm font-semibold">
          <ScrollLink to="hero" smooth={true} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li className="link-hover cursor-pointer uppercase text-sm font-semibold">
          <ScrollLink to="about" smooth={true} duration={500}>
            About
          </ScrollLink>
        </li>
        <li className="link-hover cursor-pointer uppercase text-sm font-semibold">
          <ScrollLink to="trainers" smooth={true} duration={500}>
            Trainers
          </ScrollLink>
        </li>
        <li className="link-hover cursor-pointer uppercase text-sm font-semibold">
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contact Us
          </ScrollLink>
        </li>
        <li className="uppercase text-sm">
          <Link
            to="/login"
            className="btn-hover inline-block bg-primary text-secondary font-bold py-3 px-4 w-full text-center"
          >
            Member Login
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HomeNavDropdown;
