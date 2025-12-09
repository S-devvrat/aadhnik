"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isClient]);

  const renderParticles = () => {
    if (!isClient) return null;

    return [...Array(15)].map((_, i) => {
      const size = Math.random() * 4 + 1;
      return (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/10"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      );
    });
  };

  return (
    <div className="relative  mt-0 lg:mt-20 w-full h-screen overflow-hidden min-w-[320px]">
      <div className="absolute inset-0 z-[-1] bg-black" />

      <div
        className="absolute inset-0 z-0 transition-transform duration-300 ease-out"
        style={{
          transform: isClient
            ? `translate(${mousePosition.x}px, ${mousePosition.y}px)`
            : "none",
          background: `radial-gradient(125% 125% at 50% 10%, 
            rgba(0,0,0,0.95) 30%, 
            rgba(20,0,40,0.9) 60%,
            rgba(124,58,237,0.6) 90%,
            rgba(124,58,237,0.3) 100%)`,
          width: "100vw",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
        }}
      />

      <div className="absolute inset-0 z-0 overflow-hidden w-screen">
        {renderParticles()}
      </div>

      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl sm:w-64 sm:h-64"
        style={{
          animation: isClient ? "pulse-slow 4s ease-in-out infinite" : "none",
        }}
      />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl sm:w-96 sm:h-96" />

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-2 sm:px-4 w-full">
        {/* Badge */}
        <div
          data-aos="fade-down"
          data-aos-delay="100"
          className="mb-6 sm:mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/30 to-blue-900/20 border border-white/10 backdrop-blur-sm"
        >
          <Sparkles
            className="w-4 h-4 text-purple-300"
            style={{
              animation: isClient ? "pulse 2s ease-in-out infinite" : "none",
            }}
          />
          <span className="text-sm text-purple-200">
            Intelligent Automation Experts
          </span>
        </div>

        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-snug px-4 max-w-[95vw]"
        >
          <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
            We craft modern systems
          </span>
          <br />
          <span
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span
              className={`bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent transition-all duration-500 ${
                isHovered ? "drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]" : ""
              }`}
            >
              powered by intelligent automation
            </span>
            <div
              className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 ${
                isHovered ? "w-full" : "w-0"
              }`}
            />
          </span>
        </h1>

        

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="
    mt-10 
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    gap-4 md:gap-6 
    w-full max-w-xl 
    mx-auto 
    px-4
  "
        >
          {/* Start a Project */}
          <Link href="/contact">
            <button
              className="
        group relative 
        px-6 py-3 
        bg-gradient-to-r from-white to-gray-100 text-black 
        rounded-xl font-semibold 
        hover:shadow-2xl hover:shadow-purple-500/30 
        transition-all duration-500 hover:scale-[1.02] 
        w-full
      "
            >
              <span className="flex items-center justify-center gap-2">
                Start a Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </Link>

          {/* Explore Services */}
          <Link href="/services">
            <button
              className="
        group relative 
        px-6 py-3 
        bg-transparent border border-white/30 
        text-white rounded-xl 
        font-semibold 
        hover:border-purple-400/50 
        hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-blue-500/10 
        transition-all duration-500 hover:scale-[1.02] 
        w-full
      "
            >
              <span className="flex items-center justify-center gap-2">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  );
};

export default Hero;
