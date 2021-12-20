import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <main className="font-inter bg-hero-bg bg-cover bg-no-repeat bg-center lg:bg-top" id="hero">
      <section className="min-h-screen container mx-auto flex items-center px-4 lg:px-0">
        <section className="w-full md:w-4/5 lg:w-2/4">
          <h1 className="font-black uppercase text-white text-3xl md:text-4xl lg:text-5xl">
            Be the <span className="text-primary">Best Version</span> of Yourself
          </h1>
          <p className="text-white text-base md:text-lg pt-5 pb-8 w-full md:w-3/4">
            Start your journey at our gym and unleash your full potential from as low as $35
          </p>
          <Link
            to="/register"
            className="btn-hover bg-primary text-secondary font-bold uppercase inline-block py-4 px-6"
          >
            Start Membership
          </Link>
        </section>
      </section>
    </main>
  );
}

export default Hero;
