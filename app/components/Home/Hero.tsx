"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "../ui/marquee";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="relative w-full h-screen overflow-visible">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 mt-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-5xl mt-12 leading-tight font-semibold"
        >
          We craft modern systems <br /> powered by intelligent automation
        </h1>

        <div
  data-aos="fade-up"
  data-aos-delay="200"
  className="mt-10 flex flex-col sm:grid sm:grid-cols-2 gap-4 w-full max-w-xl"
>
  <button className="w-full px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-white/80 transition">
    Start a Project
  </button>

  <button className="w-full px-8 py-3 border border-white/40 text-white rounded-lg hover:bg-white/10 transition">
    Explore Services
  </button>
</div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20">
        <Marquee />
      </div>
    </div>
  );
};

export default Hero;
