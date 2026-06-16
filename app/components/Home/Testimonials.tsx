"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "Aadhnik completely transformed our workflow. The system is incredibly fast, reliable, and easy for our team to use daily.",
    name: "Rahul Mehta",
    role: "Founder at Nexora",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    quote:
      "The team ships updates rapidly and the platform scales beautifully. We noticed major improvements in operational efficiency.",
    name: "Sophia Carter",
    role: "Operations Head at Elevix",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    quote:
      "From deployment to monitoring, everything feels seamless. Aadhnik delivers a premium experience with real performance gains.",
    name: "Daniel Brooks",
    role: "CTO at Syncronix",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5,
  },
  {
    quote:
      "The pipeline automation alone saved us 20+ hours a week. Exceptional engineering and an incredibly attentive team throughout.",
    name: "Priya Nair",
    role: "Head of Engineering at Vortela",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
  {
    quote:
      "We scaled from zero to 100k users without a single outage. Aadhnik's infrastructure is genuinely world-class.",
    name: "Marcus Lee",
    role: "Co-founder at Driftware",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 5,
  },
  {
    quote:
      "Honestly the best tech partner we've ever worked with. Proactive communication, clean code, and flawless delivery every time.",
    name: "Amara Singh",
    role: "Product Lead at Lumiq",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    rating: 5,
  },
];

const particles = [
  { left: "15%", delay: "0s", duration: "8s", size: 4 },
  { left: "30%", delay: "2s", duration: "11s", size: 3 },
  { left: "50%", delay: "4s", duration: "9s", size: 5 },
  { left: "70%", delay: "1s", duration: "12s", size: 3 },
  { left: "85%", delay: "6s", duration: "10s", size: 4 },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-[13px] h-[13px]"
          viewBox="0 0 20 20"
          fill="#4f8fff"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div
      className="relative rounded-2xl p-5 mb-3 flex-shrink-0 group transition-transform duration-300 hover:scale-[1.02] cursor-default"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
        border: "1px solid rgba(255,255,255,0.09)",
        transition: "border-color 0.3s, transform 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(79,143,255,0.35)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(255,255,255,0.09)";
      }}
    >
      {/* shimmer accent line */}
      <div
        className="absolute top-0 left-5 right-5 h-px rounded-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(79,143,255,0.5), transparent)",
          animation: "accentShimmer 3s ease-in-out infinite",
        }}
      />

      {/* stars + quote icon */}
      <div className="flex items-start justify-between">
        <StarRating count={t.rating} />
        <svg
          className="w-7 h-7 flex-shrink-0"
          viewBox="0 0 32 32"
          fill="#4f8fff"
          style={{ opacity: 0.18 }}
        >
          <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.5c0-1.38 1.12-2.5 2.5-2.5h1V8h-1zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-6.5c0-1.38 1.12-2.5 2.5-2.5h1V8h-1z" />
        </svg>
      </div>

      {/* quote */}
      <p
        className="text-xs leading-relaxed mb-4"
        style={{ color: "rgba(255,255,255,0.7)" }}
      >
        "{t.quote}"
      </p>

      {/* person */}
      <div className="flex items-center gap-3">
        <img
          src={t.image}
          alt={t.name}
          className="w-9 h-9 rounded-full object-cover"
          style={{ border: "2px solid rgba(79,143,255,0.3)" }}
        />
        <div>
          <p className="text-xs font-semibold" style={{ color: "#fff" }}>
            {t.name}
          </p>
          <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>
            {t.role}
          </p>
        </div>
      </div>
    </div>
  );
}

function ScrollColumn({
  items,
  direction,
}: {
  items: typeof testimonials;
  direction: "up" | "down";
}) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden" style={{ height: "520px" }}>
      {/* fades */}
      <div
        className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: "70px",
          background: "linear-gradient(to bottom, #000, transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: "70px",
          background: "linear-gradient(to top, #000, transparent)",
        }}
      />

      <div
        className={`scroll-col-inner scroll-${direction}`}
        style={{
          display: "flex",
          flexDirection: "column",
          willChange: "transform",
        }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>

      <style jsx>{`
        .scroll-up {
          animation: scrollUp 12s linear infinite;
        }

        .scroll-down {
          animation: scrollDown 12s linear infinite;
        }

        @keyframes scrollUp {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }

        @keyframes scrollDown {
          from {
            transform: translateY(-50%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

function AnimatedRating() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const end = 4.8;
    const duration = 1500;
    const startTime = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = (ease * end).toFixed(1);
      if (p < 1) requestAnimationFrame(tick);
    };
    const timer = setTimeout(() => requestAnimationFrame(tick), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span
      ref={ref}
      style={{
        fontSize: "64px",
        color: "#4f8fff",
        fontWeight: 700,
        lineHeight: 1,
      }}
    >
      0.0
    </span>
  );
}

export default function Testimonials() {
  const col1 = testimonials.slice(0, 3);
  const col2 = testimonials.slice(3, 6);

  return (
    <section
      className="relative w-full overflow-hidden py-16 px-6 md:px-16"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(15,25,55,0.95) 0%, #000 60%)",
      }}
    >
      {/* particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            bottom: 0,
            background: "rgba(79,143,255,0.3)",
            animation: `floatParticle ${p.duration} linear ${p.delay} infinite`,
          }}
        />
      ))}

      {/* bg glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "60%",
          height: "180px",
          background:
            "radial-gradient(ellipse, rgba(79,143,255,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "glowPulse 4s ease-in-out infinite",
        }}
      />
      {/* bg glow bottom-right */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: "350px",
          height: "350px",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "glowPulse 5s ease-in-out infinite reverse",
        }}
      />
      {/* dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.03,
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          animation: "gridDrift 20s linear infinite",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* ── LEFT ── */}
          <div className="lg:w-[38%] flex-shrink-0 lg:sticky lg:top-24">
            {/* eyebrow */}
            <div
              className="flex items-center gap-2 mb-5"
              style={{ animation: "fadeUp 0.7s ease both" }}
            >
              <svg
                className="w-3 h-3"
                viewBox="0 0 12 12"
                fill="#4f8fff"
                style={{
                  animation: "spinStar 6s linear infinite",
                  transformOrigin: "center",
                }}
              >
                <path d="M6 0l1.5 4.5H12L8.25 7.28 9.75 12 6 9.22 2.25 12l1.5-4.72L0 4.5h4.5z" />
              </svg>
              <span
                className="font-mono text-[11px] tracking-[0.25em] uppercase"
                style={{ color: "rgba(79,143,255,0.9)" }}
              >
                Testimonials
              </span>
            </div>

            <h2
              className="leading-[1.05] tracking-[-1px]"
              style={{
                fontFamily: "serif",
                fontSize: "clamp(28px,4vw,42px)",
                color: "#fff",
                animation: "fadeUp 0.7s 0.1s ease both",
              }}
            >
              What our clients say
            </h2>
            <h2
              className="leading-[1.05] tracking-[-1px] mb-6"
              style={{
                fontFamily: "serif",
                fontSize: "clamp(28px,4vw,42px)",
                background: "linear-gradient(135deg, #4f8fff 0%, #7b6fff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "fadeUp 0.7s 0.2s ease both",
              }}
            >
              about working with us
            </h2>

            {/* divider */}
            <div
              className="h-px mb-6"
              style={{
                background: "rgba(79,143,255,0.4)",
                animation: "expandWidth 1s 0.5s ease both",
              }}
            />

            {/* rating */}
            <div
              className="flex items-end gap-5 mb-6"
              style={{ animation: "fadeUp 0.7s 0.35s ease both" }}
            >
              <AnimatedRating />
              <div style={{ paddingBottom: "6px" }}>
                <div className="flex gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-[14px] h-[14px]"
                      viewBox="0 0 20 20"
                      fill={i <= 4 ? "#4f8fff" : "rgba(79,143,255,0.3)"}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  Average Satisfaction
                </p>
                <p
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  From Project Reviews
                </p>
              </div>
            </div>

            {/* rotating badge */}
            <div
              className="relative w-24 h-24"
              style={{ animation: "fadeUp 0.7s 0.5s ease both" }}
            >
              <svg
                viewBox="0 0 120 120"
                className="w-full h-full"
                style={{ animation: "rotateBadge 20s linear infinite" }}
              >
                <defs>
                  <path
                    id="circle-text"
                    d="M 60,60 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  />
                </defs>
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="rgba(79,143,255,0.2)"
                  strokeWidth="1"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="rgba(79,143,255,0.06)"
                  strokeWidth="8"
                />
                <text
                  fontSize="10"
                  fill="rgba(255,255,255,0.4)"
                  fontFamily="monospace"
                  letterSpacing="3"
                >
                  <textPath href="#circle-text">
                    TRUSTED BY CLIENTS • TRUSTED BY CLIENTS •
                  </textPath>
                </text>
                <text
                  x="60"
                  y="68"
                  textAnchor="middle"
                  fontSize="26"
                  fill="#4f8fff"
                >
                  "
                </text>
              </svg>
            </div>

            <p
              className="mt-3 text-xs leading-relaxed max-w-[220px]"
              style={{
                color: "rgba(255,255,255,0.35)",
                animation: "fadeUp 0.7s 0.6s ease both",
              }}
            >
              Real feedback from brands, institutions, and businesses that
              trusted Aadhnik for growth.
            </p>
          </div>

          {/* ── RIGHT: scrolling columns ── */}
          <div className="flex-1 grid grid-cols-2 gap-3 overflow-hidden">
            <ScrollColumn items={col1} direction="up" />
            <ScrollColumn items={col2} direction="down" />
          </div>
        </div>
      </div>

      {/* global keyframes */}
      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spinStar {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes expandWidth {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 64px;
            opacity: 1;
          }
        }
        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes glowPulse {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes gridDrift {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 28px 28px;
          }
        }
        @keyframes rotateBadge {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes accentShimmer {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes floatParticle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-200px) translateX(30px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
