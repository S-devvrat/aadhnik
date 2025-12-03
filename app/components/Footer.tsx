"use client";

import React from "react";
import Link from "next/link";
import { 
  FaTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaDiscord,
  FaYoutube,
  FaInstagram 
} from "react-icons/fa";
import { 
  FiMail, 
  FiPhone, 
  FiMapPin,
  FiArrowRight
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-gray-900">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 lg:py-20">
        {/* Top Section with Logo and CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 pb-12 border-b border-gray-900">
          {/* Logo Section */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              {/* Your Logo */}
              <div className="relative">
                <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-md"></div>
                <img 
                  src="/aadhniklogo.png" 
                  alt="AADHNIK Logo" 
                  className="relative w-12 h-12 md:w-14 md:h-14"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  AADHNIK
                </h2>
                <p className="text-gray-400 text-sm">Building the future, today</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md mt-4">
              We create intelligent digital systems that empower businesses 
              and delight users through innovation and technical excellence.
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="flex-1 max-w-md">
            <h3 className="text-lg font-semibold mb-4">Stay ahead with insights</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-500"
              />
              <button className="px-6 py-3 bg-linear-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap">
                Subscribe
                <FiArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-2">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Product</h4>
            <ul className="space-y-3">
              {[
                { name: "AI Solutions", href: "#" },
                { name: "Web Development", href: "#" },
                { name: "Mobile Apps", href: "#" },
                { name: "APIs & Integrations", href: "#" },
                { name: "Analytics", href: "#" },
                { name: "Enterprise", href: "#" },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-3">
              {[
                { name: "Consulting", href: "#" },
                { name: "UI/UX Design", href: "#" },
                { name: "Development", href: "#" },
                { name: "DevOps", href: "#" },
                { name: "Maintenance", href: "#" },
                { name: "Support", href: "#" },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-3">
              {[
                { name: "About", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Blog", href: "#" },
                { name: "Press", href: "#" },
                { name: "Partners", href: "#" },
                { name: "Contact", href: "#" },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiMail className="w-5 h-5 text-purple-400 mt-0.5" />
                <div>
                  <p className="text-white">Email</p>
                  <a 
                    href="mailto:hello@aadhnik.com" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    hello@aadhnik.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiPhone className="w-5 h-5 text-purple-400 mt-0.5" />
                <div>
                  <p className="text-white">Phone</p>
                  <a 
                    href="tel:+11234567890" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiMapPin className="w-5 h-5 text-purple-400 mt-0.5" />
                <div>
                  <p className="text-white">Location</p>
                  <p className="text-gray-400">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-900">
          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AADHNIK. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300"
              aria-label="Discord"
            >
              <FaDiscord className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300"
              aria-label="YouTube"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link 
              href="#" 
              className="text-gray-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="#" 
              className="text-gray-500 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link 
              href="#" 
              className="text-gray-500 hover:text-white transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="relative h-1">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-purple-500 to-transparent opacity-20"></div>
      </div>
    </footer>
  );
}