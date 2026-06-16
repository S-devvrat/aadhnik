"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

/* ─── SVG icons ─── */
const ShopifyIcon = () => (
  <svg width="52" height="52" viewBox="0 0 80 80" fill="none">
    <rect
      x="10"
      y="22"
      width="60"
      height="44"
      rx="4"
      stroke="#3b82f6"
      strokeWidth="1.8"
    />
    <path d="M10 34h60" stroke="#3b82f6" strokeWidth="1.8" />
    <circle cx="22" cy="28" r="2.5" fill="#3b82f6" />
    <circle cx="32" cy="28" r="2.5" fill="#3b82f6" opacity=".5" />
    <path
      d="M28 46h24M28 54h16"
      stroke="#3b82f6"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <circle cx="58" cy="50" r="7" stroke="#3b82f6" strokeWidth="1.8" />
    <path
      d="M55 50h6M58 47v6"
      stroke="#3b82f6"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M40 14c-3 0-5 2-5 5h10c0-3-2-5-5-5z"
      stroke="#3b82f6"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);
const MagentoIcon = () => (
  <svg width="52" height="52" viewBox="0 0 80 80" fill="none">
    <polygon
      points="40,10 68,24 68,56 40,70 12,56 12,24"
      stroke="#3b82f6"
      strokeWidth="1.8"
      fill="none"
    />
    <polyline
      points="40,10 40,70"
      stroke="#3b82f6"
      strokeWidth="1.5"
      strokeDasharray="3 3"
    />
    <polyline points="12,24 40,38 68,24" stroke="#3b82f6" strokeWidth="1.5" />
    <circle cx="40" cy="38" r="4" fill="#3b82f6" opacity=".7" />
    <circle cx="12" cy="24" r="3" fill="#3b82f6" opacity=".4" />
    <circle cx="68" cy="24" r="3" fill="#3b82f6" opacity=".4" />
    <circle cx="40" cy="70" r="3" fill="#3b82f6" opacity=".4" />
  </svg>
);
const MobileIcon = () => (
  <svg width="52" height="52" viewBox="0 0 80 80" fill="none">
    <rect
      x="24"
      y="8"
      width="32"
      height="56"
      rx="6"
      stroke="#3b82f6"
      strokeWidth="1.8"
    />
    <path d="M24 20h32M24 60h32" stroke="#3b82f6" strokeWidth="1.5" />
    <circle cx="40" cy="66" r="2.5" fill="#3b82f6" opacity=".6" />
    <rect
      x="32"
      y="28"
      width="16"
      height="10"
      rx="2"
      stroke="#3b82f6"
      strokeWidth="1.4"
    />
    <path
      d="M35 44h10M37 49h6"
      stroke="#3b82f6"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M54 30 Q60 40 54 50"
      stroke="#3b82f6"
      strokeWidth="1.4"
      strokeLinecap="round"
      opacity=".5"
      fill="none"
    />
    <path
      d="M58 26 Q67 40 58 54"
      stroke="#3b82f6"
      strokeWidth="1.4"
      strokeLinecap="round"
      opacity=".25"
      fill="none"
    />
  </svg>
);

const services = [
  {
    num: "01",
    title: "Shopify Development",
    desc: "Custom themes, headless storefronts, app integrations, and conversion-tuned checkout flows built for growth.",
    back: "From Shopify Basic to Shopify Plus — we architect stores that scale with your business, not against it.",
    icon: <ShopifyIcon />,
  },
  {
    num: "02",
    title: "Magento Development",
    desc: "Enterprise-grade Magento 2 stores with custom modules, multi-store setups, and performance-optimised architecture.",
    back: "Complex catalogues, B2B portals, multi-currency — Magento built right means it scales without breaking.",
    icon: <MagentoIcon />,
  },
  {
    num: "03",
    title: "Mobile App Development",
    desc: "iOS & Android apps with React Native — native-feel, commerce-ready, and designed to convert.",
    back: "Shopping apps, loyalty programs, order tracking — mobile commerce that keeps customers coming back.",
    icon: <MobileIcon />,
  },
];

/* ─── Flip Card ─── */
function FlipCard({
  svc,
  delay,
  visible,
}: {
  svc: (typeof services)[0];
  delay: number;
  visible: boolean;
}) {
  return (
    <div
      className="relative h-[320px] md:h-[360px]"
      style={{
        perspective: "1000px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.85s cubic-bezier(.16,1,.3,1) ${delay}ms, transform 0.85s cubic-bezier(.16,1,.3,1) ${delay}ms`,
      }}
    >
      <style>{`
        .fc-${svc.num} .fc-inner { transition: transform 0.7s cubic-bezier(.4,0,.2,1); transform-style: preserve-3d; }
        .fc-${svc.num}:hover .fc-inner { transform: rotateY(180deg); }
        .fc-front, .fc-back { position:absolute; inset:0; backface-visibility:hidden; -webkit-backface-visibility:hidden; border-radius:4px; }
        .fc-back { transform: rotateY(180deg); }
        .arr-${svc.num} { transition: background 0.25s, transform 0.25s; }
        .fc-${svc.num}:hover .arr-${svc.num} { background:#3b82f6; transform:rotate(45deg); }
      `}</style>
      <div className={`fc-${svc.num} w-full h-full`}>
        <div className="fc-inner w-full h-full relative">
          {/* FRONT */}
          <div
            className="fc-front flex flex-col justify-between p-6 md:p-8"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div>
              <p
                className="text-[11px] font-semibold tracking-[0.14em]"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                {svc.num}
              </p>
              <div className="mt-5 mb-5">{svc.icon}</div>
              <h3
                className="text-[18px] md:text-[20px] font-bold leading-snug mb-3"
                style={{
                  fontFamily: "Georgia, serif",
                  letterSpacing: "-0.02em",
                }}
              >
                {svc.title}
              </h3>
              <p
                className="text-[13px] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.38)" }}
              >
                {svc.desc}
              </p>
            </div>
            <div className="mt-5">
              <div
                className={`arr-${svc.num} w-10 h-10 rounded-full flex items-center justify-center`}
                style={{
                  border: "1.5px solid rgba(59,130,246,0.5)",
                  color: "#3b82f6",
                }}
              >
                <ArrowUpRight size={15} />
              </div>
            </div>
          </div>
          {/* BACK */}
          <div
            className="fc-back flex flex-col justify-between p-6 md:p-8"
            style={{
              background:
                "linear-gradient(135deg,#1e3a8a 0%,#1d4ed8 60%,#2563eb 100%)",
              border: "1px solid rgba(59,130,246,0.35)",
            }}
          >
            <div>
              <p
                className="text-[11px] font-semibold tracking-[0.14em]"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {svc.num}
              </p>
              <div
                className="mt-5 mb-5"
                style={{ filter: "brightness(10)", opacity: 0.9 }}
              >
                {svc.icon}
              </div>
              <h3
                className="text-[18px] md:text-[20px] font-bold leading-snug mb-3 text-white"
                style={{
                  fontFamily: "Georgia, serif",
                  letterSpacing: "-0.02em",
                }}
              >
                {svc.title}
              </h3>
              <p
                className="text-[13.5px] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                {svc.back}
              </p>
            </div>
            <button
              type="button"
              className="mt-5 flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold text-white w-fit"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              Learn more <ArrowUpRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
export default function ServicesAboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px 0px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0px)" : "translateY(36px)",
    transition: `opacity 0.85s cubic-bezier(.16,1,.3,1) ${delay}ms, transform 0.85s cubic-bezier(.16,1,.3,1) ${delay}ms`,
  });

  const fadeLeft = (): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0px)" : "translateX(-40px)",
    transition: `opacity 0.9s cubic-bezier(.16,1,.3,1) 80ms, transform 0.9s cubic-bezier(.16,1,.3,1) 80ms`,
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden text-white"
      style={{ background: "#000000", position: "relative", zIndex: 99999 }}
    >
      {/* dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.025) 1px,transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* glows */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "-8%",
          right: "-4%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(37,99,235,0.18) 0%,transparent 65%)",
        }}
      />

      {/* ═══════════════════════════════════
          TOP: SERVICE CARDS
      ══════════════════════════════════════ */}
      <div className="relative z-99999 px-4 sm:px-8 md:px-14 lg:px-20 pt-20 pb-4">
        {/* cards — 3 col on lg, 1 col on mobile, with dividers */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 rounded-lg overflow-hidden -mt-22"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {services.map((svc, i) => (
            <div
              key={svc.num}
              className={i < services.length - 1 ? "md:border-r" : ""}
              style={{ borderColor: "rgba(255,255,255,0.07)" }}
            >
              <FlipCard svc={svc} delay={80 + i * 100} visible={visible} />
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════
          BOTTOM: ABOUT / STRATEGIC SECTION
      ══════════════════════════════════════ */}
      <div className="relative z-10 px-4 sm:px-8 md:px-14 lg:px-20 pb-20 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT — image */}
          <div style={fadeLeft()} className="relative flex justify-center">
            <div
              className="relative"
              style={{
                width: "100%",
                maxWidth: 650,
                height: 620,
              }}
            >
              <Image
                src="/people.png"
                alt="Aadhnik team"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="flex flex-col gap-7">
            <div style={fadeUp(80)}>
              <span
                className="text-[11px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: "#3b82f6" }}
              >
                ✦ AADHNIK PVT. LTD.
              </span>
            </div>

            <h2
              style={{
                ...fadeUp(160),
                fontSize: "clamp(30px,4vw,50px)",
                fontWeight: 800,
                lineHeight: 1.07,
                letterSpacing: "-0.03em",
                fontFamily: "Georgia, 'Times New Roman', serif",
                margin: 0,
              }}
            >
              Strategic partners in{" "}
              <span
                style={{
                  background:
                    "linear-gradient(95deg,#60a5fa 0%,#a78bfa 55%,#f0abfc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                e-commerce
              </span>{" "}
              &amp; mobile
            </h2>

            <p
              style={{
                ...fadeUp(240),
                color: "rgba(255,255,255,0.45)",
                fontSize: 15,
                lineHeight: 1.85,
                maxWidth: 500,
                margin: 0,
                fontFamily: "system-ui,sans-serif",
              }}
            >
              Most agencies stop at delivery. Aadhnik stays for outcomes. We
              build Shopify &amp; Magento stores and craft iOS/Android apps that
              convert, scale, and last.
            </p>

            {/* feature bullets — 2-col grid of cards */}
            <div
              style={fadeUp(320)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {[
                {
                  title: "Mission-critical commerce",
                  body: "Build, adapt, and grow with compounding storefronts and scalable pipelines.",
                },
                {
                  title: "Modern Stack",
                  body: "Next.js, React Native, Shopify Hydrogen, Magento 2 — the stack that ships.",
                },
                {
                  title: "Engineering discipline",
                  body: "Every metric is tied to conversions, retention, and lifetime value.",
                },
                {
                  title: "End-to-end delivery",
                  body: "From wireframe to launch to ongoing support — one team, full ownership.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl p-4"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 size={13} color="#3b82f6" />
                    <p
                      className="text-[13px] font-bold text-white"
                      style={{ fontFamily: "system-ui,sans-serif" }}
                    >
                      {item.title}
                    </p>
                  </div>
                  <p
                    className="text-[12px] leading-relaxed pl-5"
                    style={{
                      color: "rgba(255,255,255,0.35)",
                      fontFamily: "system-ui,sans-serif",
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            {/* bottom row: years + CTA */}
            <div
              style={fadeUp(420)}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              {/* mini stat */}
              <div
                className="flex items-center gap-4 rounded-xl px-5 py-3 flex-shrink-0"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="relative w-12 h-12 overflow-hidden rounded-lg flex-shrink-0"
                  style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <Image
                    src="/aadhniklogo.png"
                    alt=""
                    fill
                    className="object-cover opacity-70"
                  />
                </div>
                <div>
                  <p
                    className="font-extrabold text-white leading-none"
                    style={{
                      fontSize: 22,
                      letterSpacing: "-0.04em",
                      fontFamily: "Georgia,serif",
                    }}
                  >
                    8+
                  </p>
                  <p
                    className="text-[10px] tracking-widest mt-0.5"
                    style={{
                      color: "rgba(255,255,255,0.3)",
                      fontFamily: "system-ui,sans-serif",
                    }}
                  >
                    YEARS IN DOMAIN
                  </p>
                </div>
                <button
                  type="button"
                  className="flex items-center gap-1.5 rounded-full px-4 py-2 text-[12px] font-semibold text-white ml-2"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  About <ArrowUpRight size={11} />
                </button>
              </div>
            </div>

            {/* CTA buttons */}
            <div style={fadeUp(480)} className="flex flex-wrap gap-4">
              <button
                type="button"
                className="group flex cursor-pointer items-center gap-2.5 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] active:scale-95"
                style={{
                  background: "linear-gradient(135deg,#1d4ed8,#3b82f6)",
                  boxShadow:
                    "0 0 32px 6px rgba(59,130,246,0.28), inset 0 1px 0 rgba(255,255,255,0.15)",
                  fontFamily: "system-ui,sans-serif",
                }}
              >
                See Our Work
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-45"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                  }}
                >
                  <ArrowUpRight size={12} />
                </span>
              </button>

              <button
                type="button"
                className="group flex cursor-pointer items-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-medium transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:bg-blue-500/10 hover:text-white active:scale-95"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.03)",
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "system-ui,sans-serif",
                }}
              >
                Book a Demo
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
