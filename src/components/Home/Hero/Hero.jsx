import React from "react";

function Hero() {
  return (
    <>
      <div className=" items-center justify-center grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className=" flex flex-col items-start gap-10 px-0 lg:justify-center lg:h-screen mt-6">
          <div className="">
            <img src="/star-5.svg" className="w-32 sm:w-40" alt="" />
          </div>
          <div className="text-white font-[900] text-[50px] leading-[1.15]">
            <p>
              Fastest <span className="text-accent">Performance</span> Web
              Hosting
            </p>
          </div>
          <div className="text-white font-semibold lg:text-lg">
            <p className="mb-2">
              Touch the success! Secure Web Hosting <br />
              from
              <span className="text-accent"> $0.95</span>{" "}
              <span className="line-through"> $2.95</span> per month
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-gradient">
              <span>Get Started</span>
            </button>
            <button className="btn-secondary">Contact Us</button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img src="/hero-img.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero;
