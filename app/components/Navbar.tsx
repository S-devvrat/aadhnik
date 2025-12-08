"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full fixed top-0 z-50 text-white">
      {/* TOP STRIP */}
      <div className="w-full bg-[#1D1D1D] flex justify-center px-4 py-2 text-sm border-b border-white/10">
        <span className="text-neutral-300">Let us make your business grow</span>
        <Link href="/contact" className="ml-2 underline text-white hover:text-purple-300">
          Start building today →
        </Link>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="w-full bg-black/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/aadhnikwhite.png"
              alt="logo"
              className="h-7 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <NavItem label="Home" href="/" pathname={pathname} />
            <NavItem label="About" href="/about" pathname={pathname} />
            <NavItem label="Services" href="/services" pathname={pathname} />
            <NavItem label="Blogs" href="/blogs" pathname={pathname} />
            <NavItem label="Contact" href="/contact" pathname={pathname} />
          </ul>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="px-4 py-1.5 rounded-md border border-white/30 text-white hover:bg-white/10 duration-200 text-sm"
            >
              Start a Project
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            md:hidden w-full bg-black/95 backdrop-blur-xl border-t border-white/10 
            transition-all duration-300 overflow-hidden
            ${isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="px-6 py-8 flex flex-col items-center gap-6">
            <MobileNavItem label="Home" href="/" onClick={closeMenu} />
            <MobileNavItem label="About" href="/about" onClick={closeMenu} />
            <MobileNavItem label="Services" href="/services" onClick={closeMenu} />
            <MobileNavItem label="Blogs" href="/blogs" onClick={closeMenu} />
            <MobileNavItem label="Contact" href="/contact" onClick={closeMenu} />

            {/* CTA */}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-4 px-6 py-3 rounded-lg border border-white/30 text-white hover:bg-white/10 duration-200 text-lg font-medium"
            >
              Start a Project
            </Link>

            <div className="text-center text-gray-400 text-sm pt-4">
              <p>Ready to build something amazing?</p>
              <p>Let’s talk.</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

const NavItem = ({
  label,
  href,
  pathname,
}: {
  label: string;
  href: string;
  pathname: string;
}) => {
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={`transition-colors ${
          isActive ? "text-purple-300 font-semibold" : "hover:text-purple-300"
        }`}
      >
        {label}
      </Link>
    </li>
  );
};

const MobileNavItem = ({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-xl font-semibold hover:text-purple-300 transition-colors"
  >
    {label}
  </Link>
);
