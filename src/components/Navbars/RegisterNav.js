import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";

function RegisterNav() {
  return (
    <>
      <nav className="font-inter bg-secondary text-white">
        <div className="container mx-auto flex items-center justify-center md:justify-between py-4 px-4 lg:px-0">
          <div>
            <Link to="/">
              <img src={logo} className="w-36" alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:flex">
            <ul className="flex items-center space-x-9">
              <li className="uppercase text-sm">
                <Link to="/login" className="btn-hover bg-primary text-secondary font-bold py-3 px-4">
                  Member Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default RegisterNav;
