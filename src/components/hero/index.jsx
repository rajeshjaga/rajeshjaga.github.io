import React from "react";

const Hero = () => {
  return (
    <section className="hero h-screen py-28">
      <div className="hero-description h-full">
        <h1 className="text-9xl font-light">
          Web Developer. <br />
          UI Designer. <br />
        </h1>
        <div className="flex w-full justify-start pt-16 ">
          <p className="text-xl font-medium w-2/4 border-l border-gray-300 pl-5 py-5">
            Rajesh Jaga
          </p>
          <p className="text-lg  w-2/4 border-l border-gray-300 pl-5 py-5">
            Based of Bangalore, <br /> India
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
