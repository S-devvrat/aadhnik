"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

/* ─────────────────────────────────────────────
   Product data  — products by Aadhnik
───────────────────────────────────────────── */
const products = [
  {
    id: "vms",
    tag: "Vendor Management",
    title: "eSyncora VMS",
    subtitle: "Next-Gen Vendor Ecosystem",
    description:
      "Streamline vendor interactions, manage purchase orders, and track invoices from one centralized platform. Built for modern procurement teams.",
    url: "https://vms.esyncora.com/",
    previewUrl: "https://api.microlink.io/?url=https%3A%2F%2Fvms.esyncora.com%2F&screenshot=true&meta=false&embed=screenshot.url",
    tags: ["Procurement", "B2B", "SaaS"],
    accentColor: "#a78bfa",
    gradientFrom: "#7c3aed",
    gradientTo: "#2563eb",
    stats: [
      { value: "2,400+", label: "Companies" },
      { value: "1,500+", label: "Vendors" },
      { value: "4.8/5", label: "CSAT" },
    ],
  },
  {
    id: "crm",
    tag: "CRM Platform",
    title: "eSyncora CRM",
    subtitle: "Relationship Intelligence Engine",
    description:
      "Custom CRM ecosystems designed to streamline customer relationships, track pipelines, and accelerate compounding business growth.",
    url: "https://crm.esyncora.com/",
    previewUrl: "https://api.microlink.io/?url=https%3A%2F%2Fcrm.esyncora.com%2F&screenshot=true&meta=false&embed=screenshot.url",
    tags: ["Sales", "Automation", "SaaS"],
    accentColor: "#60a5fa",
    gradientFrom: "#2563eb",
    gradientTo: "#06b6d4",
    stats: [
      { value: "3×", label: "Retention" },
      { value: "10×", label: "Faster ops" },
      { value: "99%", label: "Uptime" },
    ],
  },
];

/* ─────────────────────────────────────────────
   Cursor arrow (follows mouse on hovered card)
───────────────────────────────────────────── */
function CursorArrow({
  visible,
  x,
  y,
  accent,
}: {
  visible: boolean;
  x: number;
  y: number;
  accent: string;
}) {
  return (
    <div
      style={{
        position: "fixed",
        left: x,
        top: y,
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.2s ease",
        willChange: "transform",
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: accent,
          boxShadow: `0 0 24px ${accent}99`,
        }}
      >
        {/* Arrow up-right */}
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path
            d="M5 17L17 5M17 5H8M17 5V14"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Single product card
───────────────────────────────────────────── */
function ProductCard({
  product,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
}: {
  product: (typeof products)[0];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onMouseMove: (e: React.MouseEvent) => void;
}) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      className="group block"
      style={{ cursor: "none", textDecoration: "none" }}
    >
      {/* Preview image */}
      <div
        className="relative w-full overflow-hidden rounded-2xl mb-6"
        style={{
          aspectRatio: "16/9",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Gradient overlay on hover */}
        <div
          className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${product.gradientFrom}22 0%, ${product.gradientTo}22 100%)`,
          }}
        />

        {/* Bottom gradient always */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/3 z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
          }}
        />

        {/* Website screenshot via microlink */}
        {!imgError ? (
          <img
            src={product.previewUrl}
            alt={`${product.title} preview`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            style={{
              opacity: imgLoaded ? 1 : 0,
              transition: "opacity 0.5s ease, transform 0.7s ease",
            }}
          />
        ) : null}

        {/* Fallback / loading state */}
        {(!imgLoaded || imgError) && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-4"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            {/* Animated mock browser chrome */}
            <div
              className="w-4/5 rounded-xl overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              {/* Browser bar */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex gap-1.5">
                  {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
                    <div
                      key={i}
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <div
                  className="flex-1 mx-3 rounded-full px-3 py-1"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    fontSize: 10,
                    color: "rgba(255,255,255,0.3)",
                    fontFamily: "system-ui",
                  }}
                >
                  {product.url.replace("https://", "")}
                </div>
              </div>
              {/* Content shimmer */}
              <div className="p-4 space-y-2">
                {[80, 60, 90, 50, 70].map((w, i) => (
                  <div
                    key={i}
                    className="h-2 rounded-full animate-pulse"
                    style={{
                      width: `${w}%`,
                      background: "rgba(255,255,255,0.06)",
                      animationDelay: `${i * 120}ms`,
                    }}
                  />
                ))}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-14 rounded-lg animate-pulse"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        animationDelay: `${i * 150}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <span
              style={{
                fontFamily: "system-ui",
                fontSize: 11,
                color: "rgba(255,255,255,0.2)",
                letterSpacing: "0.1em",
              }}
            >
              {imgError ? product.url : "Loading preview…"}
            </span>
          </div>
        )}

        {/* Live badge */}
        <div
          className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full"
          style={{
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#22c55e" }}
          />
          <span
            style={{
              fontFamily: "system-ui",
              fontSize: 10,
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.1em",
              fontWeight: 600,
            }}
          >
            LIVE
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="px-1">
        {/* Tag row */}
        <div className="flex items-center gap-3 mb-3">
          <span
            className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.3em] uppercase font-semibold font-sans"
            style={{ color: product.accentColor }}
          >
            <span
              className="inline-block w-3 h-px"
              style={{ background: product.accentColor }}
            />
            {product.tag}
          </span>
          <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 10 }}>·</span>
          <span
            style={{
              fontFamily: "system-ui",
              fontSize: 10,
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.1em",
            }}
          >
            AADHNIK TECHNOLOGIES
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-serif font-bold mb-1 transition-colors duration-300"
          style={{
            fontSize: "clamp(24px, 3vw, 36px)",
            letterSpacing: "-1px",
            color: "#fff",
            lineHeight: 1.1,
          }}
        >
          {product.title}
        </h3>

        {/* Subtitle */}
        <p
          className="font-sans mb-4 transition-colors duration-300 group-hover:text-white/60"
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.38)",
            letterSpacing: "0.01em",
          }}
        >
          {product.subtitle}
        </p>

        {/* Description */}
        <p
          className="font-sans mb-6"
          style={{
            fontSize: 14,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.42)",
            maxWidth: 440,
          }}
        >
          {product.description}
        </p>

        {/* Stats row */}
        <div className="flex items-center gap-8 mb-6">
          {product.stats.map((s, i) => (
            <div key={i}>
              <div
                className="font-serif font-bold"
                style={{
                  fontSize: 22,
                  color: product.accentColor,
                  letterSpacing: "-0.5px",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                className="font-sans mt-1"
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.28)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tags chips */}
        <div className="flex flex-wrap gap-2">
          {product.tags.map((t) => (
            <span
              key={t}
              className="inline-block px-3 py-1 rounded-full font-sans text-[11px] font-medium tracking-wide"
              style={{
                background: `${product.accentColor}14`,
                border: `1px solid ${product.accentColor}28`,
                color: product.accentColor,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

/* ─────────────────────────────────────────────
   Main section
───────────────────────────────────────────── */
export default function OurProducts() {
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false, accent: "#a78bfa" });
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  // Smooth cursor lerp
  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, 0.12);
      currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, 0.12);
      setCursor((prev) =>
        prev.visible
          ? { ...prev, x: currentRef.current.x, y: currentRef.current.y }
          : prev
      );
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent, accent: string) => {
    targetRef.current = { x: e.clientX, y: e.clientY };
    setCursor((prev) => ({ ...prev, visible: true, accent }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setCursor((prev) => ({ ...prev, visible: false }));
  }, []);

  // Intersection observer for header
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setHeaderVisible(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="relative w-full"
      style={{ background: "#000000", overflow: "hidden" }}
    >
      {/* Global cursor */}
      <CursorArrow
        visible={cursor.visible}
        x={cursor.x}
        y={cursor.y}
        accent={cursor.accent}
      />

      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div
          className="absolute rounded-full"
          style={{
            width: 600,
            height: 600,
            top: "-10%",
            right: "-5%",
            background: "radial-gradient(circle, #2563eb18, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            bottom: "0%",
            left: "-10%",
            background: "radial-gradient(circle, #7c3aed18, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-28 md:py-36">
        {/* ── Header ── */}
        <div ref={headerRef} className="mb-16 md:mb-20">
          <div
            className="flex items-center gap-3 mb-6 transition-all duration-700"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(16px)",
            }}
          >
            {/* Plus icon like your screenshot */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1v12M1 7h12" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span
              className="font-sans text-[11px] tracking-[0.35em] uppercase font-semibold"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              Our Products
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-serif font-bold leading-[1.0] transition-all duration-700"
              style={{
                fontSize: "clamp(40px, 6vw, 80px)",
                letterSpacing: "-2.5px",
                color: "#fff",
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: "100ms",
              }}
            >
              Built by{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #a78bfa, #60a5fa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Aadhnik
              </span>
            </h2>

            <div
              className="transition-all duration-700"
              style={{
                opacity: headerVisible ? 1 : 0,
                transitionDelay: "200ms",
              }}
            >
              <a
                href="#"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-sans text-sm font-semibold transition-all duration-300 hover:gap-5 group"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Explore Our Works
                <span
                  className="inline-flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 10L10 2M10 2H4M10 2V8"
                      stroke="#fff"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <p
            className="font-sans mt-5 max-w-2xl transition-all duration-700"
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.38)",
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(16px)",
              transitionDelay: "180ms",
            }}
          >
            Selected products built in-house — spanning vendor management, CRM automation,
            and enterprise operational infrastructure.
          </p>
        </div>

        {/* Divider */}
        <div
          className="w-full mb-14"
          style={{ height: "1px", background: "rgba(255,255,255,0.06)" }}
        />

        {/* ── Product grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onMouseEnter={() =>
                setCursor((prev) => ({ ...prev, visible: true, accent: product.accentColor }))
              }
              onMouseLeave={handleMouseLeave}
              onMouseMove={(e) => handleMouseMove(e, product.accentColor)}
            />
          ))}
        </div>

        {/* ── Bottom strip ── */}
        <div
          className="mt-20 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#22c55e" }}
            />
            <span
              className="font-sans text-sm"
              style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}
            >
              Both products are live & actively maintained
            </span>
          </div>
          <span
            className="font-sans text-sm"
            style={{ color: "rgba(255,255,255,0.18)", letterSpacing: "0.05em" }}
          >
            A product of Aadhnik Technologies
          </span>
        </div>
      </div>
    </section>
  );
}