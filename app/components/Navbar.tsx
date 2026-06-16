"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-700 ${
        scrolled
          ? "bg-black/50 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1800px] items-center justify-between px-6 py-3 md:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/aadhnikwhite.png"
            alt="Aadhnik Logo"
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <button className="text-base font-medium text-white transition hover:text-blue-400">
            Home
          </button>

          <button className="text-base font-medium text-white transition hover:text-blue-400">
            About
          </button>

          {/* Services Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-base font-medium text-white transition hover:text-blue-400">
              Services
              <ChevronDown className="h-4 w-4 transition duration-300 group-hover:rotate-180" />
            </button>

            <div className="invisible absolute left-1/2 top-10 w-60 -translate-x-1/2 rounded-2xl border border-white/10 bg-black/80 p-3 opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
              {[
                "Web Development",
                "AI Solutions",
                "Automation",
                "Brand Systems",
              ].map((item) => (
                <div
                  key={item}
                  className="cursor-pointer rounded-xl px-4 py-3 text-sm text-white transition hover:bg-white hover:text-black"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <button className="text-base font-medium text-white transition hover:text-blue-400">
            Work
          </button>

          <button className="text-base font-medium text-white transition hover:text-blue-400">
            Blogs
          </button>

          <button className="text-base font-medium text-white transition hover:text-blue-400">
            Contact
          </button>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* CTA Button */}
          <button className="hidden rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 lg:block">
            Let's Connect
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
          >
            {mobileMenu ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          mobileMenu ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-black/80 p-5 backdrop-blur-xl">
          {["Home", "About", "Services", "Work", "Blogs", "Contact"].map(
            (item) => (
              <button
                key={item}
                className="block w-full py-3 text-left text-base font-medium text-white"
              >
                {item}
              </button>
            )
          )}

          <button className="mt-4 w-full rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white">
            Let's Connect
          </button>
        </div>
      </div>
    </header>
  );
}