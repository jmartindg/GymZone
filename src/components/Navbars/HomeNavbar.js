import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/Logo.svg";

function HomeNavbar({ toggle }) {
  return (
    <>
      <nav className="font-inter bg-secondary text-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-0">
          <div>
            <img src={logo} className="w-36" alt="Logo" />
          </div>
          <div className="hidden md:flex">
            <ul className="flex items-center space-x-9">
              <li className="link-hover uppercase text-sm font-semibold">
                <ScrollLink className="cursor-pointer" to="hero" smooth={true} duration={500}>
                  Home
                </ScrollLink>
              </li>
              <li className="link-hover uppercase text-sm font-semibold">
                <ScrollLink className="cursor-pointer" to="about" smooth={true} duration={500}>
                  About
                </ScrollLink>
              </li>
              <li className="link-hover uppercase text-sm font-semibold">
                <ScrollLink className="cursor-pointer" to="trainers" smooth={true} duration={500} offset={-50}>
                  Trainers
                </ScrollLink>
              </li>
              <li className="link-hover uppercase text-sm font-semibold">
                <ScrollLink className="cursor-pointer" to="contact" smooth={true} duration={500}>
                  Contact Us
                </ScrollLink>
              </li>
              <li className="uppercase text-sm">
                <Link to="/login" className="btn-hover bg-primary text-secondary font-bold py-3 px-4">
                  Member Login
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button onClick={toggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-primary transition duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HomeNavbar;
