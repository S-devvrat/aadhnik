"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "../ui/marquee";
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

  // Prevent server-client mismatch by only rendering particles on client
  const renderParticles = () => {
    if (!isClient) return null;
    
    return [...Array(15)].map((_, i) => {
      const size = Math.random() * 4 + 1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;
      
      return (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/10"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            top: `${top}%`,
            animation: `float ${duration}s linear infinite`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden min-w-[320px]">
      {/* Fixed: Full width black background behind everything */}
      <div className="absolute inset-0 z-[-1] bg-black" />
      
      {/* Enhanced Radial Gradient with Parallax Effect - Only animate on client */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-300 ease-out"
        style={{
          transform: isClient ? `translate(${mousePosition.x}px, ${mousePosition.y}px)` : 'none',
          background: `radial-gradient(125% 125% at 50% 10%, 
            rgba(0,0,0,0.95) 30%, 
            rgba(20,0,40,0.9) 60%,
            rgba(124,58,237,0.6) 90%,
            rgba(124,58,237,0.3) 100%)`,
          width: '100vw',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
        }}
      />

      {/* Animated Particles Background - Rendered only on client */}
      <div className="absolute inset-0 z-0 overflow-hidden w-screen">
        {renderParticles()}
      </div>

      {/* Gradient Orbs - Static on server, same on client */}
      <div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl sm:w-64 sm:h-64" 
        style={{ 
          animation: isClient ? 'pulse-slow 4s ease-in-out infinite' : 'none',
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl sm:w-96 sm:h-96"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-2 sm:px-4 w-full">
        {/* Animated Badge */}
        <div
          data-aos="fade-down"
          data-aos-delay="100"
          className="mb-6 sm:mb-8 inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-purple-900/30 to-blue-900/20 border border-white/10 backdrop-blur-sm"
        >
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-300" 
            style={{ animation: isClient ? 'pulse 2s ease-in-out infinite' : 'none' }} 
          />
          <span className="text-xs sm:text-sm text-purple-200">
            Intelligent Automation Experts
          </span>
        </div>

        {/* Enhanced Main Heading - Fixed for mobile */}
        <h1
          data-aos="fade-up"
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 sm:mt-4 leading-snug sm:leading-tight font-bold tracking-tight px-2 sm:px-4 max-w-[95vw]"
        >
          <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
            We craft modern systems
          </span>
          <br className="hidden xs:block" />
          <span
            className="relative inline-block mt-1 sm:mt-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span
              className={`bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent transition-all duration-500 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ${
                isHovered ? "drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]" : ""
              }`}
            >
              powered by intelligent automation
            </span>
            <div
              className={`absolute -bottom-1 sm:-bottom-2 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 ${
                isHovered ? "w-full" : "w-0"
              }`}
            />
          </span>
        </h1>

        {/* Subtitle - Fixed for mobile */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-4 sm:mt-6 md:mt-8 text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 max-w-[90vw] sm:max-w-2xl leading-relaxed px-2 sm:px-4"
        >
          Transforming businesses with cutting-edge automation solutions
          <span className="text-purple-300"> that drive efficiency</span> and{" "}
          <span className="text-blue-300">accelerate growth</span>
        </p>

        {/* Enhanced Buttons - Fixed for mobile */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-6 sm:mt-8 md:mt-12 flex flex-col xs:flex-row gap-3 sm:gap-4 md:gap-6 w-full max-w-[90vw] xs:max-w-md sm:max-w-xl items-center justify-center px-2 sm:px-4"
        >
          <button
            className="group relative px-4 xs:px-6 sm:px-8 md:px-10 py-2.5 xs:py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-white to-gray-100 text-black rounded-lg sm:rounded-xl font-semibold 
              hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-[1.02] 
              hover:from-gray-100 hover:to-white overflow-hidden w-full xs:w-auto min-w-[140px] xs:min-w-[160px] sm:min-w-[180px] md:min-w-[200px] text-sm xs:text-base"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 
              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative flex items-center justify-center gap-1 xs:gap-2 sm:gap-3">
              Start a Project
              <ArrowRight className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 xs:group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button
            className="group relative px-4 xs:px-6 sm:px-8 md:px-10 py-2.5 xs:py-3 sm:py-3.5 md:py-4 bg-transparent border border-white/30 sm:border-2 text-white rounded-lg sm:rounded-xl 
              font-semibold hover:border-purple-400/50 hover:bg-gradient-to-r hover:from-purple-500/10 
              hover:to-blue-500/10 transition-all duration-500 hover:scale-[1.02] 
              hover:shadow-xl hover:shadow-purple-500/10 overflow-hidden w-full xs:w-auto min-w-[140px] xs:min-w-[160px] sm:min-w-[180px] md:min-w-[200px] text-sm xs:text-base"
          >
            <span className="relative flex items-center justify-center gap-1 xs:gap-2 sm:gap-3">
              Explore Services
              <div className="relative w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <ArrowRight className="relative w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-300" />
              </div>
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Gradient Fade - Extended to full width */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-black via-black/50 to-transparent z-10 w-screen" />

      
    </div>
  );
};

export default Hero;