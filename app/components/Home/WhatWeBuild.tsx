"use client";

import React, { useEffect, useRef, useState } from "react";
import { Bot, LayoutDashboard, Workflow, Globe, Database, Cpu } from "lucide-react";

const builds = [
  {
    number: "01",
    title: "AI Powered Systems",
    category: "Intelligence",
    description:
      "Intelligent AI-driven platforms engineered to automate workflows and scale operations with unprecedented precision.",
    icon: Bot,
    gradient: "from-violet-500 via-purple-400 to-blue-500",
    accentColor: "#a78bfa",
    stat: "10×",
    statLabel: "faster workflow",
  },
  {
    number: "02",
    title: "CRM Platforms",
    category: "Relationships",
    description:
      "Custom CRM ecosystems designed to streamline customer relationships and accelerate compounding business growth.",
    icon: LayoutDashboard,
    gradient: "from-blue-500 via-cyan-400 to-teal-400",
    accentColor: "#60a5fa",
    stat: "3×",
    statLabel: "customer retention",
  },
  {
    number: "03",
    title: "VMS Solutions",
    category: "Operations",
    description:
      "Advanced vendor management systems built for enterprise-level operational efficiency and real-time visibility.",
    icon: Workflow,
    gradient: "from-amber-400 via-yellow-300 to-orange-400",
    accentColor: "#fbbf24",
    stat: "60%",
    statLabel: "ops overhead saved",
  },
  {
    number: "04",
    title: "E-Commerce Platforms",
    category: "Commerce",
    description:
      "Scalable online commerce systems crafted for modern digital brands — built to convert, engineered to scale.",
    icon: Globe,
    gradient: "from-pink-500 via-rose-400 to-purple-500",
    accentColor: "#f472b6",
    stat: "4×",
    statLabel: "avg store revenue",
  },
  {
    number: "05",
    title: "Shopify Development",
    category: "Storefront",
    description:
      "Premium Shopify storefronts optimised for conversions, page speed, and compounding organic growth.",
    icon: Database,
    gradient: "from-emerald-400 via-green-300 to-cyan-400",
    accentColor: "#34d399",
    stat: "99",
    statLabel: "lighthouse score",
  },
  {
    number: "06",
    title: "Magento Solutions",
    category: "Enterprise",
    description:
      "Enterprise-grade Magento experiences built for high-scale e-commerce operations across global markets.",
    icon: Cpu,
    gradient: "from-blue-400 via-indigo-400 to-violet-500",
    accentColor: "#818cf8",
    stat: "500ms",
    statLabel: "avg load time",
  },
];

function useScrollProgress(ref: React.RefObject<HTMLElement>) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      setProgress(Math.min(1, Math.max(0, scrolled / total)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

function useInView(ref: React.RefObject<HTMLElement>, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return visible;
}

function ServiceRow({ item, index }: { item: typeof builds[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null!);
  const visible = useInView(ref, 0.1);
  const Icon = item.icon;

  return (
    <div
      ref={ref}
      className="relative flex items-start gap-8 md:gap-16 py-20 md:py-28 border-b border-white/[0.05] group"
      style={{ paddingLeft: "60px" }}
    >
      {/* Row number dot on the vertical line */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all duration-700 z-10"
        style={{
          borderColor: visible ? item.accentColor : "rgba(255,255,255,0.15)",
          background: visible ? item.accentColor : "transparent",
          boxShadow: visible ? `0 0 16px ${item.accentColor}88` : "none",
          left: "-6px",
          transitionDelay: `${index * 60}ms`,
        }}
      />

      {/* Number */}
      <div
        className="hidden md:block flex-shrink-0 transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transitionDelay: `${index * 60 + 80}ms`,
        }}
      >
        <span
          className="font-mono text-sm tracking-[0.3em] font-light"
          style={{ color: item.accentColor }}
        >
          {item.number}
        </span>
      </div>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        {/* Category */}
        <div
          className="transition-all duration-700 mb-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: `${index * 60 + 120}ms`,
          }}
        >
          <span
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.35em] uppercase font-semibold font-sans"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            <span
              className="inline-block w-4 h-px"
              style={{ background: item.accentColor }}
            />
            {item.category}
          </span>
        </div>

        {/* Title */}
        <div
          className="transition-all duration-700 mb-5"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-24px)",
            transitionDelay: `${index * 60 + 160}ms`,
          }}
        >
          <h3
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.0] tracking-tight text-white"
            style={{ letterSpacing: "-2px" }}
          >
            {item.title}
          </h3>
        </div>

        {/* Description + stat row */}
        <div
          className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transitionDelay: `${index * 60 + 220}ms`,
          }}
        >
          <p
            className="font-sans text-base leading-relaxed max-w-lg"
            style={{ color: "rgba(255,255,255,0.42)" }}
          >
            {item.description}
          </p>

          {/* Stat */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <div>
              <div
                className="font-serif text-4xl md:text-5xl font-bold leading-none"
                style={{ color: item.accentColor }}
              >
                {item.stat}
              </div>
              <div
                className="font-sans text-[10px] tracking-[0.25em] uppercase mt-1.5 font-semibold"
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                {item.statLabel}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Icon — far right, subtle */}
      <div
        className="hidden lg:flex flex-shrink-0 items-center justify-center w-20 h-20 rounded-2xl transition-all duration-700 self-center"
        style={{
          opacity: visible ? 0.6 : 0,
          background: `${item.accentColor}10`,
          border: `1px solid ${item.accentColor}20`,
          transitionDelay: `${index * 60 + 280}ms`,
          transform: visible ? "scale(1)" : "scale(0.85)",
        }}
      >
        <Icon size={28} color={item.accentColor} strokeWidth={1.3} />
      </div>

      {/* Hover glow line at bottom */}
      <div
        className={`absolute bottom-0 left-0 h-px bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default function WhatWeBuild() {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const progress = useScrollProgress(sectionRef);
  const headerRef = useRef<HTMLDivElement>(null!);
  const headerVisible = useInView(headerRef, 0.3);

  // Line height: maps 0→1 scroll to 0→100% of the inner track
  const lineHeight = `${Math.min(100, progress * 110)}%`;

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ background: "#000000", minHeight: "100vh" }}
    >
      {/* ── Ambient background blobs ── */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{ mixBlendMode: "screen", opacity: 0.045 }}
        aria-hidden
      >
        <div
          className="absolute rounded-full"
          style={{
            width: 700,
            height: 700,
            top: "10%",
            left: "-15%",
            background: "radial-gradient(circle, #7c3aed, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 600,
            height: 600,
            top: "40%",
            right: "-10%",
            background: "radial-gradient(circle, #2563eb, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            bottom: "5%",
            left: "30%",
            background: "radial-gradient(circle, #d97706, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* ── Dot grid ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      {/* ── Content wrapper ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-16 pb-32">

        {/* ── Section header ── */}
        <div
          ref={headerRef}
          className="pt-28 pb-16 md:pb-24"
        >
          <div
            className="flex items-center gap-4 mb-8 transition-all duration-700"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="w-8 h-px bg-white/25" />
            <span
              className="font-sans text-[10px] tracking-[0.4em] uppercase font-semibold"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              What We Build
            </span>
          </div>

          <h2
            className="font-serif font-bold leading-[1.0] transition-all duration-700"
            style={{
              fontSize: "clamp(48px, 7vw, 96px)",
              letterSpacing: "-3px",
              color: "#fff",
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(32px)",
              transitionDelay: "120ms",
            }}
          >
            We engineer
            <br />
            <span
              className="font-serif"
              style={{
                background: "linear-gradient(90deg, #a78bfa, #60a5fa, #f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              technology
            </span>
          </h2>

          <p
            className="font-sans text-lg md:text-xl leading-relaxed mt-8 max-w-2xl transition-all duration-700"
            style={{
              color: "rgba(255,255,255,0.4)",
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "240ms",
            }}
          >
            — that performs, scales & delivers. Empowering future-focused brands
            with AI pipelines, high-performance web systems, and custom operational infrastructure.
          </p>
        </div>

        {/* ── Vertical line + service rows ── */}
        <div className="relative" style={{ paddingLeft: "1px" }}>

          {/* Track (full height gray line) */}
          <div
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: 0,
              background: "rgba(255,255,255,0.07)",
            }}
          />

          {/* Progress line (animated fill) */}
          <div
            className="absolute top-0 w-px transition-none"
            style={{
              left: 0,
              height: lineHeight,
              background: "linear-gradient(180deg, #a78bfa 0%, #60a5fa 40%, #f472b6 80%, #fbbf24 100%)",
              boxShadow: "0 0 12px rgba(167,139,250,0.6)",
              willChange: "height",
            }}
          />

          {/* Glowing tip */}
          <div
            className="absolute w-2 h-2 rounded-full -translate-x-[3px] -translate-y-1 z-20 transition-none"
            style={{
              left: 0,
              top: lineHeight,
              background: "#a78bfa",
              boxShadow: "0 0 20px 6px rgba(167,139,250,0.7)",
              willChange: "top",
            }}
          />

          {/* Service rows */}
          {builds.map((item, i) => (
            <ServiceRow key={i} item={item} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="pt-20 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <button
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-sans text-sm font-semibold tracking-wide transition-all duration-300 hover:gap-5 group"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #2563eb)",
              color: "#fff",
              boxShadow: "0 0 40px rgba(124,58,237,0.3)",
            }}
          >
            Explore all work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span
            className="font-sans text-sm"
            style={{ color: "rgba(255,255,255,0.22)", letterSpacing: "0.05em" }}
          >
            06 services · scroll to explore
          </span>
        </div>
      </div>

      {/* ── Marquee ticker ── */}
      <div
        className="border-t overflow-hidden py-4"
        style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
      >
        <style>{`
          @keyframes marquee-b {
            from { transform: translateX(0); }
            to { transform: translateX(-33.333%); }
          }
          .wwb-ticker { display: flex; animation: marquee-b 26s linear infinite; white-space: nowrap; }
          .wwb-ticker:hover { animation-play-state: paused; }
        `}</style>
        <div className="wwb-ticker">
          {[...builds, ...builds, ...builds].map((b, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 pr-14 font-sans text-xs tracking-widest"
              style={{ color: "rgba(255,255,255,0.22)" }}
            >
              <span
                className="inline-block w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: b.accentColor }}
              />
              {b.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}