import React from "react";
import aboutImg from "../assets/about-img.png";
import checkIcon from "../assets/green-check.svg";

function About() {
  const services = [
    {
      service: "Personal Training",
    },
    {
      service: "Group Training",
    },
    {
      service: "Online Training",
    },
    {
      service: "Nutrition Consultation",
    },
    {
      service: "Workout Plans",
    },
  ];

  return (
    <section className="font-inter" id="about">
      <section className="container min-h-screen mx-auto flex items-center flex-col py-20 px-4 md:flex-row md:py-0 lg:px-0 gap-x-10">
        <section className="flex-1">
          <img src={aboutImg} className="w-96 mx-auto" alt="Workout" />
        </section>
        <section className="flex-1 pt-16 md:pt-0">
          <header className="border-l-4 border-primary">
            <h2 className="font-black uppercase text-3xl md:text-4xl pl-2 w-1/2">Introducing GymZone</h2>
          </header>
          <p className="font-medium py-6 md:text-lg md:w-4/5">
            Welcome to GymZone where you start your journey and unleash your full potential. We offer quality services
            such as:
          </p>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service.service} className="font-bold uppercase flex items-center">
                <img src={checkIcon} className="w-10 mr-2" alt="Check Icon" />
                {service.service}
              </li>
            ))}
          </ul>
        </section>
      </section>
      <section className="container min-h-screen mx-auto px-4 pb-20 lg:px-0" id="trainers">
        <header>
          <h2 className="font-black text-center uppercase text-3xl md:text-4xl">Meet our Professional Trainers</h2>
          <div className="border-b-4 border-primary w-2/12 mx-auto mt-3"></div>
        </header>
        <section className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-9">
          <article>
            <div className="bg-trainer-1 bg-style border-primary border-8 w-5/6 h-96 mx-auto relative">
              <span className="bg-primary px-6 py-3 absolute bottom-5 left-0 font-bold">Jane Doe</span>
            </div>
          </article>
          <article>
            <div className="bg-trainer-2 bg-style border-primary border-8 w-5/6 h-96 mx-auto relative">
              <span className="bg-primary px-6 py-3 absolute bottom-5 left-0 font-bold">John Smith</span>
            </div>
          </article>
          <article>
            <div className="bg-trainer-3 bg-style border-primary border-8 w-5/6 h-96 mx-auto relative">
              <span className="bg-primary px-6 py-3 absolute bottom-5 left-0 font-bold">Mark Williams</span>
            </div>
          </article>
          <article>
            <div className="bg-trainer-4 bg-style border-primary border-8 w-5/6 h-96 mx-auto relative">
              <span className="bg-primary px-6 py-3 absolute bottom-5 left-0 font-bold">Sue Marsh</span>
            </div>
          </article>
        </section>
      </section>
    </section>
  );
}

export default About;
