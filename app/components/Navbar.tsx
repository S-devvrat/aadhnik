"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ChevronDown, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Services dropdown items
  const services = [
    { name: "Web Development", href: "/services/web" },
    { name: "Mobile Apps", href: "/services/mobile" },
    { name: "UI/UX Design", href: "/services/design" },
    { name: "Digital Marketing", href: "/services/marketing" },
    { name: "Consultation", href: "/services/consultation" },
  ];

  return (
    <header className="w-full fixed top-0 z-50">
      {/* TOP STRIP */}
      <div className="w-full bg-gradient-to-r from-gray-900 to-black px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm">
          <div className="flex items-center gap-4 mb-2 sm:mb-0">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-purple-400" />
              <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-purple-400" />
              <a href="mailto:support@aadhnik.com" className="text-gray-300 hover:text-white transition-colors">
                support@aadhnik.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-gray-300">Let us make your business grow</span>
            <Link 
              href="/contact" 
              className="group flex items-center gap-1 text-white hover:text-purple-300 transition-all"
            >
              <span className="underline">Start building today</span>
              <Sparkles className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className={`
        w-full transition-all duration-300 border-b
        ${isScrolled 
          ? "bg-black/95 backdrop-blur-xl border-white/10 shadow-xl" 
          : "bg-gradient-to-b from-black/95 to-black/80 backdrop-blur-sm border-white/5"
        }
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          
          {/* LOGO */}
          <Link 
            href="/" 
            className="group flex items-center space-x-2"
            onClick={closeMenu}
          >
            <img
              src="/aadhnikwhite.png"
              alt="Aadhnik Logo"
              className="h-8 w-auto object-contain group-hover:scale-105 transition-transform"
            />
           
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-1">
            <NavItem label="Home" href="/" pathname={pathname} />
            <NavItem label="About" href="/about" pathname={pathname} />
            <NavItem label="Services" href="/services" pathname={pathname} />
            <NavItem label="Contact" href="/contact" pathname={pathname} />
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex items-center gap-4">
            
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all hover:shadow-lg hover:shadow-purple-500/25"
            >
              Start a Project
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg  hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            md:hidden w-full bg-gradient-to-b from-black via-black to-gray-900 
            border-t border-white/10 transition-all duration-300 overflow-hidden
            ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="px-6 py-8">
            {/* Mobile Nav Items */}
            <div className="flex flex-col gap-1 mb-6">
              <MobileNavItem label="Home" href="/" pathname={pathname} onClick={closeMenu} />
              <MobileNavItem label="About" href="/about" pathname={pathname} onClick={closeMenu} />
              <MobileNavItem label="Services" href="/services" pathname={pathname} onClick={closeMenu} />

              <MobileNavItem label="Contact" href="/contact" pathname={pathname} onClick={closeMenu} />
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block w-full text-center py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Start a Project
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="space-y-3 text-center">
                <a
                  href="tel:+1234567890"
                  className="flex items-center justify-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +1 (234) 567-890
                </a>
                <a
                  href="mailto:hello@aadhnik.com"
                  className="flex items-center justify-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@aadhnik.com
                </a>
                <p className="text-sm text-gray-400 pt-2">
                  Ready to build something amazing?
                  <br />
                  Let's talk.
                </p>
              </div>
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
    <Link
      href={href}
      className={`
        px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
        ${isActive 
          ? "text-purple-300 bg-white/5 shadow-inner" 
          : "text-gray-300 hover:text-white hover:bg-white/5"
        }
      `}
    >
      {label}
    </Link>
  );
};

const MobileNavItem = ({
  label,
  href,
  pathname,
  onClick,
}: {
  label: string;
  href: string;
  pathname: string;
  onClick?: () => void;
}) => {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        py-4 border-b border-white/10 text-lg font-medium transition-colors
        ${isActive ? "text-purple-300" : "text-white hover:text-purple-300"}
      `}
    >
      {label}
    </Link>
  );
};