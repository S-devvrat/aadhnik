"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Stats = () => {
  // Generate stable random positions AFTER hydration
  const [particles, setParticles] = useState<
    { left: number; top: number; opacity: number }[]
  >([]);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });

    // generate randoms only in the client
    const arr = Array.from({ length: 14 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: 0.3 + Math.random() * 0.4,
    }));

    setParticles(arr);
  }, []);

  return (
    <section className="relative w-full bg-linear-to-b from-black via-[#0a0017] to-black text-white py-24 px-6 overflow-hidden">
      {/* Background Blur Lights */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-700 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #8b5cf6 1px, transparent 1px),
              linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Logo Motion */}
      <div className="flex justify-center mb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 1.5 }}
          className="relative"
        >
          {/* Glow Pulse */}
          <motion.div
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-5 bg-purple-500/40 rounded-full blur-xl"
          />
          <img
            src="/aadhniklogo.png"
            alt="Aadhnik Logo"
            className="relative w-20 h-20 brightness-125 drop-shadow-[0_0_18px_rgba(168,85,247,0.7)]"
          />
        </motion.div>
      </div>

      {/* Text */}
      <h2
        data-aos="fade-up"
        className="text-center text-3xl md:text-5xl font-medium leading-snug max-w-5xl mx-auto relative z-10"
      >
        AADHNIK builds{" "}
        <span className="bg-linear-to-r from-purple-300 to-purple-600 bg-clip-text text-transparent">
          intelligent systems
        </span>{" "}
        powering the future of digital experiences.
      </h2>

      {/* Stats Boxes */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-14 max-w-6xl mx-auto text-center relative z-10"
      >
        {[
          {
            label: "secure architecture",
            value: "3M+",
            desc: "requests processed monthly",
          },
          {
            label: "reliability & uptime",
            value: "99.98%",
            desc: "real-world production uptime",
          },
          {
            label: "enterprise scalability",
            value: "10K+",
            desc: "concurrent active users",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i, duration: 0.5 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-linear-to-br from-purple-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative bg-linear-to-b from-gray-900/40 to-black/50 backdrop-blur-md border border-gray-800 rounded-2xl p-8 hover:border-purple-500/40 transition duration-300">
              <p className="uppercase tracking-[0.15em] text-purple-300/80 text-sm mb-3">
                {item.label}
              </p>

              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-5xl font-bold bg-linear-to-r from-purple-300 to-purple-600 bg-clip-text text-transparent"
              >
                {item.value}
              </motion.h3>

              <p className="mt-2 text-gray-300 text-lg">{item.desc}</p>

              <div className="mt-6 h-0.5 w-0 group-hover:w-full bg-linear-to-r from-transparent via-purple-500 to-transparent transition-all duration-500 mx-auto"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stable Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;
