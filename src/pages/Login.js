import React from "react";
import { Link } from "react-router-dom";
import LoginNav from "../components/Navbars/LoginNav";
import loginBg from "../assets/login-img-min.jpg";

function Login() {
  return (
    <>
      <LoginNav />
      <section className="flex font-inter">
        <section
          style={{ backgroundImage: `url('${loginBg}')` }}
          className="min-h-screen bg-cover bg-no-repeat bg-center flex-1 p-12 hidden md:flex"
        ></section>
        <section className="flex-1 bg-secondary min-h-screen p-5 md:p-12 self-center">
          <header>
            <h1 className="font-black uppercase text-white text-3xl mt-12">
              <span className="text-primary">Membership</span> Login
            </h1>
          </header>
          <form className="mt-11 max-w-xl">
            <div className="flex flex-col mb-5">
              <label htmlFor="email" className="uppercase font-semibold text-white text-sm mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="focus:ring-2 focus:ring-primary focus:outline-none border-0"
                name="email"
                id="email"
                required
                autoComplete="username"
              />
            </div>
            <section className="flex flex-col mb-5">
              <label htmlFor="password" className="uppercase font-semibold text-white text-sm mb-1">
                Password
              </label>
              <input
                type="password"
                className="focus:ring-2 focus:ring-primary focus:outline-none border-0"
                name="passoword"
                id="password"
                required
                autoComplete="current-password"
              />
            </section>
            <section className="flex items-center my-6">
              <input
                type="checkbox"
                className="text-primary focus:ring-1 focus:ring-primary"
                name="rememberMe"
                id="rememberMe"
              />
              <span className="text-white uppercase font-medium text-sm pl-3">Remember Me</span>
            </section>
            <div className="w-full">
              <button className="bg-primary font-bold uppercase py-3 w-full hover:bg-primaryHover transition duration-150">
                Login to GymZone
              </button>
            </div>
          </form>
          <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:justify-between max-w-xl mt-3">
            <div>
              <p className="text-white font-medium uppercase text-sm cursor-pointer hover:text-primary transition duration-150">
                Forgot Password?
              </p>
            </div>
            <div>
              <Link
                to="/register"
                className="text-white font-medium uppercase text-sm hover:text-primary transition duration-150"
              >
                Apply for Membership
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Login;
