"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    {
      name: "Web Development",
      href: "/services/web-development",
    },
    {
      name: "AI Solutions",
      href: "/services/ai-solutions",
    },
    {
      name: "Automation",
      href: "/services/automation",
    },
    {
      name: "Brand Systems",
      href: "/services/brand-systems",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-9999 w-full transition-all duration-700 ${
        scrolled
          ? "border-b border-white/10 bg-black/50 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1800px] items-center justify-between px-6 py-3 md:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/aadhnikwhite.png"
            alt="Aadhnik Logo"
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="text-base font-medium text-white transition hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-base font-medium text-white transition hover:text-blue-400"
          >
            About
          </Link>

          <Link
            href="/services"
            className="text-base font-medium text-white transition hover:text-blue-400"
          >
            Services
          </Link>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white transition hover:text-blue-400"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 lg:block"
          >
            Let's Connect
          </Link>

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
          mobileMenu ? "max-h-[700px]" : "max-h-0"
        }`}
      >
        <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-black/80 p-5 backdrop-blur-xl">
          <Link
            href="/"
            onClick={() => setMobileMenu(false)}
            className="block py-3 text-base font-medium text-white"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setMobileMenu(false)}
            className="block py-3 text-base font-medium text-white"
          >
            About
          </Link>

          <div className="border-t border-white/10 pt-2 mt-2">
            <p className="px-1 py-2 text-xs uppercase tracking-wider text-white/50">
              Services
            </p>

            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                onClick={() => setMobileMenu(false)}
                className="block py-2 pl-4 text-sm text-white/90"
              >
                {service.name}
              </Link>
            ))}
          </div>

          <Link
            href="/work"
            onClick={() => setMobileMenu(false)}
            className="block py-3 text-base font-medium text-white"
          >
            Work
          </Link>

          

          <Link
            href="/contact"
            onClick={() => setMobileMenu(false)}
            className="block py-3 text-base font-medium text-white"
          >
            Contact
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenu(false)}
            className="mt-4 block w-full rounded-full bg-blue-600 px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-blue-700"
          >
            Let's Connect
          </Link>
        </div>
      </div>
    </header>
  );
}