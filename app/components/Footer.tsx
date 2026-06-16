"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Send, Facebook, Linkedin, Github, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050508] px-4 sm:px-6 py-16 sm:py-24 -mb-20">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-black blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-black blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        

        {/* Main Footer Grid */}
        <div className="overflow-hidden rounded-[28px] border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 sm:p-10 md:p-14 backdrop-blur-xl">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-8">

            {/* LEFT — Brand + Newsletter */}
            <div className="flex flex-col">
              {/* Logo */}
<div className="mb-10 flex items-center gap-4">
  <Image
    src="/aadhnikwhite.png"
    alt="Aadhnik"
    width={180}
    height={180}
    className="object-contain"
  />
</div>

              <p className="mb-3 text-sm text-white/50 leading-relaxed max-w-xs">
                Helping ambitious brands grow faster with smart digital strategy, automation, and modern software.
              </p>

              {/* Divider */}
              <div className="my-6 h-px w-16 bg-white/10" />

              <p className="mb-3 text-sm font-medium text-white/70">
                Stay in the loop
              </p>

              {/* Newsletter */}
              <div className="flex max-w-[420px] items-center overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] ring-1 ring-inset ring-white/[0.04] transition-all focus-within:border-blue-500/40 focus-within:ring-blue-500/20">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent px-5 py-3.5 text-sm text-white outline-none placeholder:text-white/25"
                />
                <button
                  aria-label="Subscribe"
                  className="mr-1.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 transition hover:bg-blue-500 active:scale-95"
                >
                  <Send size={14} className="text-white" />
                </button>
              </div>

              {/* Contact chips */}
              <div className="mt-8 flex flex-wrap gap-2">
                <a
                  href="mailto:hello@aadhnik.com"
                  className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-white/50 transition hover:border-white/20 hover:text-white/80"
                >
                  <Mail size={13} />
                  hello@aadhnik.com
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-white/50 transition hover:border-white/20 hover:text-white/80"
                >
                  <Phone size={13} />
                  +91 98765 43210
                </a>
              </div>
            </div>

            {/* EXPLORE */}
            <div>
              <p className="mb-6 text-xs font-semibold tracking-[0.18em] text-white/30 uppercase">
                Explore
              </p>
              <nav className="flex flex-col gap-1">
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Portfolio", href: "/work" },
                  { label: "Contact", href: "/contact" },
                ].map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group flex w-fit items-center gap-1.5 py-1.5 text-[15px] text-white/50 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-blue-500 transition-all group-hover:w-4" />
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* SERVICES */}
            <div>
              <p className="mb-6 text-xs font-semibold tracking-[0.18em] text-white/30 uppercase">
                Services
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Web Development",
                  "SEO Optimization",
                  "Performance Marketing",
                  "CRM Integration",
                  "Business Automation",
                  "Brand Strategy",
                  "AI Solutions",
                  "Custom Software",
                ].map((service) => (
                  <span
                    key={service}
                    className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-xs text-white/45 transition hover:border-white/15 hover:text-white/70 cursor-default"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Bottom bar */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/25">
              © 2025 Aadhnik. All rights reserved.
            </p>

            {/* Social links */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: Github, label: "GitHub", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex h-9 items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.03] px-4 text-xs text-white/40 transition hover:border-white/15 hover:text-white/75"
                >
                  <Icon size={13} className="transition group-hover:text-blue-400" />
                  {label}
                </a>
              ))}
            </div>

            {/* Legal */}
            <div className="flex gap-5 text-xs text-white/25">
              <Link href="/privacy-policy" className="transition hover:text-white/60">Privacy</Link>
              <Link href="/terms" className="transition hover:text-white/60">Terms</Link>
              <Link href="/cookies" className="transition hover:text-white/60">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}