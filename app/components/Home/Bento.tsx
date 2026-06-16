"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  BarChart2,
  Camera,
  Zap,
  Flag,
  ArrowUpRight,
  TrendingUp,
  ShoppingCart,
  Cloud,
  Users,
  Package,
  Store,
  Brain,
  Globe,
  Smartphone,
  Apple,
} from "lucide-react";

/* ─────────────────────────── DATA ─────────────────────────── */
const services = [
  {
    num: "01",
    tag: "E-Commerce",
    title: "E-Commerce Development",
    desc: "Scalable online stores with custom features, secure payments, inventory management, and seamless shopping experiences.",
    icon: ShoppingCart,
    accent: "#3b82f6",
    glow: "rgba(59,130,246,0.25)",
    grad: "linear-gradient(135deg,rgba(59,130,246,0.14),rgba(37,99,235,0.03))",
  },
  {
    num: "02",
    tag: "SaaS",
    title: "SaaS Product Development",
    desc: "End-to-end SaaS solutions with subscription management, user roles, dashboards, APIs, and cloud scalability.",
    icon: Cloud,
    accent: "#8b5cf6",
    glow: "rgba(139,92,246,0.25)",
    grad: "linear-gradient(135deg,rgba(139,92,246,0.14),rgba(124,58,237,0.03))",
  },
  {
    num: "03",
    tag: "CRM",
    title: "CRM & VMS Solutions",
    desc: "Custom CRM and Vendor Management Systems for lead tracking, sales automation, vendor onboarding, and reporting.",
    icon: Users,
    accent: "#06b6d4",
    glow: "rgba(6,182,212,0.25)",
    grad: "linear-gradient(135deg,rgba(6,182,212,0.14),rgba(8,145,178,0.03))",
  },
  {
    num: "04",
    tag: "Magento",
    title: "Magento Development",
    desc: "Enterprise-grade Magento stores with custom modules, integrations, performance optimization, and multi-store support.",
    icon: Package,
    accent: "#f97316",
    glow: "rgba(249,115,22,0.25)",
    grad: "linear-gradient(135deg,rgba(249,115,22,0.14),rgba(234,88,12,0.03))",
  },
  {
    num: "05",
    tag: "Shopify",
    title: "Shopify Development",
    desc: "Custom Shopify stores, theme development, app integrations, checkout optimization, and conversion-focused experiences.",
    icon: Store,
    accent: "#10b981",
    glow: "rgba(16,185,129,0.25)",
    grad: "linear-gradient(135deg,rgba(16,185,129,0.14),rgba(5,150,105,0.03))",
  },
  {
    num: "06",
    tag: "AI",
    title: "AI Solutions & Automation",
    desc: "AI-powered chatbots, workflow automation, intelligent recommendations, predictive analytics, and business automation.",
    icon: Brain,
    accent: "#ec4899",
    glow: "rgba(236,72,153,0.25)",
    grad: "linear-gradient(135deg,rgba(236,72,153,0.14),rgba(219,39,119,0.03))",
  },
  {
    num: "07",
    tag: "Web",
    title: "Web Development",
    desc: "Modern websites and web applications built with scalable architectures, responsive design, and high performance.",
    icon: Globe,
    accent: "#14b8a6",
    glow: "rgba(20,184,166,0.25)",
    grad: "linear-gradient(135deg,rgba(20,184,166,0.14),rgba(13,148,136,0.03))",
  },
  {
    num: "08",
    tag: "Mobile",
    title: "Mobile App Development",
    desc: "Cross-platform Android and iOS applications with seamless user experiences and enterprise-grade performance.",
    icon: Smartphone,
    accent: "#6366f1",
    glow: "rgba(99,102,241,0.25)",
    grad: "linear-gradient(135deg,rgba(99,102,241,0.14),rgba(79,70,229,0.03))",
  },
  {
    num: "09",
    tag: "iOS",
    title: "iOS App Development",
    desc: "Native iPhone and iPad applications built for performance, security, and exceptional user experiences.",
    icon: Apple,
    accent: "#64748b",
    glow: "rgba(100,116,139,0.25)",
    grad: "linear-gradient(135deg,rgba(100,116,139,0.14),rgba(71,85,105,0.03))",
  },
];

/* ─────────────────────────── CARD ─────────────────────────── */
function ServiceCard({
  svc,
  delay,
  visible,
}: {
  svc: (typeof services)[0];
  delay: number;
  visible: boolean;
}) {
  const Icon = svc.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hov, setHov] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  const tilt = () => {
    if (!hov || !cardRef.current)
      return "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
    const r = cardRef.current.getBoundingClientRect();
    const rx = ((mouse.y - r.height / 2) / r.height) * -8;
    const ry = ((mouse.x - r.width / 2) / r.width) * 8;
    return `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? hov
            ? tilt()
            : "perspective(900px) rotateX(0) rotateY(0) scale(1)"
          : "translateY(40px) scale(0.95)",
        transition: hov
          ? `opacity .7s cubic-bezier(.16,1,.3,1) ${delay}ms, transform .12s ease`
          : `opacity .7s cubic-bezier(.16,1,.3,1) ${delay}ms, transform .65s cubic-bezier(.16,1,.3,1) ${delay}ms`,
        position: "relative",
        borderRadius: 18,
        padding: "30px 26px 26px",
        background: hov ? "rgba(14,16,28,0.98)" : "rgba(9,11,20,0.85)",
        border: hov
          ? `1px solid ${svc.accent}55`
          : "1px solid rgba(255,255,255,0.065)",
        overflow: "hidden",
        minHeight: 290,
        display: "flex",
        flexDirection: "column" as const,
        willChange: "transform",
        boxShadow: hov
          ? `0 0 0 1px ${svc.accent}18, 0 24px 70px rgba(0,0,0,0.65), 0 0 50px ${svc.glow}`
          : "0 4px 28px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)",
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        cursor: "default",
      }}
    >
      {/* Card gradient bg */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: svc.grad,
          borderRadius: 18,
          opacity: hov ? 1 : 0,
          transition: "opacity .4s ease",
          zIndex: 0,
        }}
      />

      {/* Mouse spotlight */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(320px circle at ${mouse.x}px ${mouse.y}px, ${svc.glow}, transparent 68%)`,
          borderRadius: 18,
          opacity: hov ? 1 : 0,
          transition: "opacity .3s ease",
          zIndex: 1,
        }}
      />

      {/* Corner accent glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: -55,
          right: -55,
          width: 190,
          height: 190,
          borderRadius: "50%",
          background: svc.accent,
          filter: "blur(65px)",
          opacity: hov ? 0.22 : 0.05,
          transition: "opacity .5s ease",
          zIndex: 0,
        }}
      />

      {/* Top edge shimmer */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0"
        style={{
          height: 1,
          background: `linear-gradient(90deg, transparent, ${svc.accent}90 50%, transparent)`,
          opacity: hov ? 1 : 0,
          transition: "opacity .4s ease",
          borderRadius: "18px 18px 0 0",
          zIndex: 10,
        }}
      />

      {/* ── Card content ── */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: 22,
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 15,
              background: hov ? `${svc.accent}20` : `${svc.accent}0e`,
              border: `1px solid ${svc.accent}${hov ? "50" : "28"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: hov
                ? `0 0 24px ${svc.accent}35, inset 0 1px 0 ${svc.accent}25`
                : "none",
              transition: "all .35s ease",
              flexShrink: 0,
            }}
          >
            <Icon
              size={19}
              color={hov ? svc.accent : `${svc.accent}bb`}
              strokeWidth={1.55}
              style={{ transition: "color .3s ease" }}
            />
          </div>

          {/* Num + tag */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 6,
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "rgba(255,255,255,0.12)",
                fontFamily: "system-ui,sans-serif",
              }}
            >
              {svc.num}
            </span>
            <span
              style={{
                fontSize: 8,
                fontWeight: 800,
                letterSpacing: "0.2em",
                color: svc.accent,
                background: `${svc.accent}14`,
                border: `1px solid ${svc.accent}30`,
                borderRadius: 99,
                padding: "3px 10px",
                textTransform: "uppercase" as const,
                fontFamily: "system-ui,sans-serif",
                opacity: hov ? 1 : 0.65,
                transition: "opacity .3s ease",
              }}
            >
              {svc.tag}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: 17,
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.3,
            letterSpacing: "-0.022em",
            fontFamily: "'Georgia','Times New Roman',serif",
            margin: "0 0 10px",
          }}
        >
          {svc.title}
        </h3>

        {/* Desc */}
        <p
          style={{
            fontSize: 13,
            lineHeight: 1.82,
            color: "rgba(255,255,255,0.36)",
            fontFamily: "system-ui,sans-serif",
            margin: "0 0 auto",
            flexGrow: 1,
          }}
        >
          {svc.desc}
        </p>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
            paddingTop: 16,
            borderTop: `1px solid rgba(255,255,255,${hov ? ".07" : ".035"})`,
            transition: "border-color .3s ease",
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: hov ? svc.accent : "rgba(255,255,255,0.18)",
              fontFamily: "system-ui,sans-serif",
              textTransform: "uppercase" as const,
              transition: "color .3s ease",
            }}
          >
            Explore Service
          </span>
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: hov ? `${svc.accent}20` : "rgba(255,255,255,0.04)",
              border: `1px solid ${hov ? `${svc.accent}45` : "rgba(255,255,255,0.08)"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all .3s ease",
              transform: hov ? "rotate(-45deg)" : "rotate(0deg)",
              boxShadow: hov ? `0 0 14px ${svc.accent}40` : "none",
            }}
          >
            <ArrowUpRight
              size={12}
              color={hov ? svc.accent : "rgba(255,255,255,0.28)"}
              style={{ transition: "color .3s ease" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── HELIX SVG ─────────────────────── */
function HelixDecor() {
  const lines = Array.from({ length: 32 });
  return (
    <svg
      viewBox="0 0 180 340"
      fill="none"
      style={{ width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient
          id="hxA"
          x1="0"
          y1="0"
          x2="0"
          y2="340"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
          <stop offset="25%" stopColor="#3b82f6" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#818cf8" stopOpacity="0.85" />
          <stop offset="78%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient
          id="hxB"
          x1="0"
          y1="0"
          x2="0"
          y2="340"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
          <stop offset="35%" stopColor="#3b82f6" stopOpacity="0.75" />
          <stop offset="65%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
        </linearGradient>
        <filter id="hxBlur">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>

      {/* Cross bars */}
      {lines.map((_, i) => {
        const t = i / 31;
        const y = 15 + t * 310;
        const phase = t * Math.PI * 5.5;
        const x1 = 90 + Math.sin(phase) * 58;
        const x2 = 90 + Math.sin(phase + Math.PI) * 58;
        const op = 0.18 + Math.abs(Math.sin(phase)) * 0.55;
        const r = i % 3;
        const col =
          r === 0 ? "255,255,255" : r === 1 ? "96,165,250" : "167,139,250";
        return (
          <line
            key={i}
            x1={x1}
            y1={y}
            x2={x2}
            y2={y}
            stroke={`rgba(${col},${op})`}
            strokeWidth={0.5 + Math.abs(Math.sin(phase)) * 1.4}
          />
        );
      })}

      {/* Strand A — blurred glow copy */}
      <path
        d={Array.from({ length: 80 })
          .map((_, i) => {
            const t = i / 79;
            const y = 15 + t * 310;
            const x = 90 + Math.sin(t * Math.PI * 5.5) * 58;
            return `${i === 0 ? "M" : "L"} ${x} ${y}`;
          })
          .join(" ")}
        stroke="url(#hxA)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        filter="url(#hxBlur)"
        opacity="0.5"
      />
      {/* Strand A — sharp */}
      <path
        d={Array.from({ length: 80 })
          .map((_, i) => {
            const t = i / 79;
            const y = 15 + t * 310;
            const x = 90 + Math.sin(t * Math.PI * 5.5) * 58;
            return `${i === 0 ? "M" : "L"} ${x} ${y}`;
          })
          .join(" ")}
        stroke="url(#hxA)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Strand B — blurred */}
      <path
        d={Array.from({ length: 80 })
          .map((_, i) => {
            const t = i / 79;
            const y = 15 + t * 310;
            const x = 90 + Math.sin(t * Math.PI * 5.5 + Math.PI) * 58;
            return `${i === 0 ? "M" : "L"} ${x} ${y}`;
          })
          .join(" ")}
        stroke="url(#hxB)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        filter="url(#hxBlur)"
        opacity="0.5"
      />
      {/* Strand B — sharp */}
      <path
        d={Array.from({ length: 80 })
          .map((_, i) => {
            const t = i / 79;
            const y = 15 + t * 310;
            const x = 90 + Math.sin(t * Math.PI * 5.5 + Math.PI) * 58;
            return `${i === 0 ? "M" : "L"} ${x} ${y}`;
          })
          .join(" ")}
        stroke="url(#hxB)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ─────────────────────── MAIN SECTION ─────────────────────── */
export default function ServicesBentoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animRef = useRef<number>(0);
  const [visible, setVisible] = useState(false);

  /* Canvas — multi-layer animated waves */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);
    let t = 0;
    const waves = [
      {
        a: 55,
        f: 0.0022,
        s: 0.005,
        y: 0.22,
        c: "rgba(59,130,246,0.05)",
        lw: 1.6,
      },
      {
        a: 38,
        f: 0.003,
        s: 0.008,
        y: 0.36,
        c: "rgba(168,85,247,0.04)",
        lw: 1.3,
      },
      {
        a: 60,
        f: 0.0018,
        s: 0.004,
        y: 0.5,
        c: "rgba(59,130,246,0.032)",
        lw: 1.1,
      },
      {
        a: 28,
        f: 0.004,
        s: 0.01,
        y: 0.63,
        c: "rgba(6,182,212,0.028)",
        lw: 0.85,
      },
      {
        a: 42,
        f: 0.0016,
        s: 0.006,
        y: 0.76,
        c: "rgba(168,85,247,0.022)",
        lw: 1,
      },
      {
        a: 22,
        f: 0.005,
        s: 0.012,
        y: 0.87,
        c: "rgba(59,130,246,0.018)",
        lw: 0.65,
      },
      {
        a: 50,
        f: 0.0012,
        s: 0.003,
        y: 0.15,
        c: "rgba(236,72,153,0.018)",
        lw: 0.8,
      },
    ];
    const draw = () => {
      const w = canvas.offsetWidth,
        h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      waves.forEach(({ a, f, s, y, c, lw }) => {
        ctx.beginPath();
        ctx.moveTo(0, h * y);
        for (let x = 0; x <= w; x += 2) {
          const yy =
            h * y +
            Math.sin(x * f + t * s) * a +
            Math.sin(x * f * 0.55 + t * s * 1.4 + 1.6) * (a * 0.42) +
            Math.sin(x * f * 1.5 + t * s * 0.75 + 2.9) * (a * 0.18);
          ctx.lineTo(x, yy);
        }
        ctx.strokeStyle = c;
        ctx.lineWidth = lw;
        ctx.stroke();
      });
      t++;
      animRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  /* Intersection observer */
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
      { threshold: 0.04 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const fade = (d = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(32px)",
    transition: `opacity .9s cubic-bezier(.16,1,.3,1) ${d}ms, transform .9s cubic-bezier(.16,1,.3,1) ${d}ms`,
  });

  return (
    <section
      ref={sectionRef}
      className="relative text-white"
      style={{
        background: "#000",
        padding: "80px 0 130px",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes floatUp   { 0%,100%{transform:translateY(0)scale(1)}50%{transform:translateY(-20px)scale(1.03)} }
        @keyframes floatDown { 0%,100%{transform:translateY(0)scale(1)}50%{transform:translateY(16px)scale(.97)} }
        @keyframes spinCW    { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes spinCCW   { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
        @keyframes pulseDot  { 0%,100%{opacity:.35;box-shadow:0 0 6px 2px rgba(59,130,246,.4)} 50%{opacity:1;box-shadow:0 0 16px 5px rgba(59,130,246,.75)} }
        @keyframes shimmer   { 0%{transform:translateX(-100%)} 100%{transform:translateX(400%)} }
        @keyframes gridBlink { 0%,100%{opacity:.01} 50%{opacity:.02} }
        @keyframes arcA      { 0%{stroke-dashoffset:0} 100%{stroke-dashoffset:-100} }
        @keyframes arcB      { 0%{stroke-dashoffset:0} 100%{stroke-dashoffset:100} }
        @keyframes hxGlow    { 0%,100%{opacity:.75;filter:brightness(1)} 50%{opacity:1;filter:brightness(1.5)} }
        @keyframes hxGlow2   { 0%,100%{opacity:.6;filter:brightness(1)} 50%{opacity:.95;filter:brightness(1.6)} }
        @keyframes scanline  { 0%{top:-4px} 100%{top:100%} }
        @keyframes borderRun {
          0%  { background-position: 0% 0% }
          100%{ background-position: 300% 0% }
        }
        @keyframes countUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      {/* ── Canvas waves ── */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0"
        style={{ width: "100%", height: "100%", zIndex: 0 }}
      />

      {/* ── Animated dot grid ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.9) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          animation: "gridBlink 9s ease-in-out infinite",
          zIndex: 0,
        }}
      />

      {/* ── Noise grain ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
          opacity: 0.024,
          zIndex: 0,
        }}
      />

      {/* ── CORNER ARC STROKES — LEFT ── */}
      <div
        className="pointer-events-none absolute"
        style={{ top: 0, left: 0, width: 360, height: 360, zIndex: 2 }}
      >
        <svg
          viewBox="0 0 360 360"
          fill="none"
          style={{ width: "100%", height: "100%" }}
        >
          <defs>
            <linearGradient
              id="alA"
              x1="0"
              y1="360"
              x2="360"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3b82f6" stopOpacity="0" />
              <stop offset=".45" stopColor="#3b82f6" stopOpacity=".8" />
              <stop offset="1" stopColor="#60a5fa" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="alB"
              x1="0"
              y1="360"
              x2="360"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#a855f7" stopOpacity="0" />
              <stop offset=".5" stopColor="#c084fc" stopOpacity=".6" />
              <stop offset="1" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="alC"
              x1="0"
              y1="360"
              x2="360"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#06b6d4" stopOpacity="0" />
              <stop offset=".5" stopColor="#06b6d4" stopOpacity=".4" />
              <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="alD"
              x1="0"
              y1="360"
              x2="360"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3b82f6" stopOpacity="0" />
              <stop offset=".5" stopColor="#3b82f6" stopOpacity=".25" />
              <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 340 Q0 0 340 0"
            stroke="url(#alA)"
            strokeWidth="1.4"
            fill="none"
            strokeDasharray="9 7"
            style={{ animation: "arcA 5s linear infinite" }}
          />
          <path
            d="M0 265 Q0 0 265 0"
            stroke="url(#alB)"
            strokeWidth="1.1"
            fill="none"
            strokeDasharray="6 9"
            style={{ animation: "arcB 7s linear infinite" }}
          />
          <path
            d="M0 190 Q0 0 190 0"
            stroke="url(#alC)"
            strokeWidth=".8"
            fill="none"
            strokeDasharray="4 11"
            style={{ animation: "arcA 9s linear infinite reverse" }}
          />
          <path
            d="M0 115 Q0 0 115 0"
            stroke="url(#alD)"
            strokeWidth=".6"
            fill="none"
            strokeDasharray="3 13"
            style={{ animation: "arcB 11s linear infinite" }}
          />
        </svg>
      </div>

      {/* ── CORNER ARC STROKES — RIGHT ── */}
      <div
        className="pointer-events-none absolute"
        style={{ top: 0, right: 0, width: 360, height: 360, zIndex: 2 }}
      >
        <svg
          viewBox="0 0 360 360"
          fill="none"
          style={{ width: "100%", height: "100%" }}
        >
          <defs>
            <linearGradient
              id="arA"
              x1="360"
              y1="360"
              x2="0"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3b82f6" stopOpacity="0" />
              <stop offset=".45" stopColor="#3b82f6" stopOpacity=".8" />
              <stop offset="1" stopColor="#60a5fa" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="arB"
              x1="360"
              y1="360"
              x2="0"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#a855f7" stopOpacity="0" />
              <stop offset=".5" stopColor="#c084fc" stopOpacity=".6" />
              <stop offset="1" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="arC"
              x1="360"
              y1="360"
              x2="0"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#06b6d4" stopOpacity="0" />
              <stop offset=".5" stopColor="#06b6d4" stopOpacity=".4" />
              <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="arD"
              x1="360"
              y1="360"
              x2="0"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3b82f6" stopOpacity="0" />
              <stop offset=".5" stopColor="#3b82f6" stopOpacity=".25" />
              <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M360 340 Q360 0 20 0"
            stroke="url(#arA)"
            strokeWidth="1.4"
            fill="none"
            strokeDasharray="9 7"
            style={{ animation: "arcB 5s linear infinite" }}
          />
          <path
            d="M360 265 Q360 0 95 0"
            stroke="url(#arB)"
            strokeWidth="1.1"
            fill="none"
            strokeDasharray="6 9"
            style={{ animation: "arcA 7s linear infinite" }}
          />
          <path
            d="M360 190 Q360 0 170 0"
            stroke="url(#arC)"
            strokeWidth=".8"
            fill="none"
            strokeDasharray="4 11"
            style={{ animation: "arcB 9s linear infinite reverse" }}
          />
          <path
            d="M360 115 Q360 0 245 0"
            stroke="url(#arD)"
            strokeWidth=".6"
            fill="none"
            strokeDasharray="3 13"
            style={{ animation: "arcA 11s linear infinite" }}
          />
        </svg>
      </div>

      {/* ── Decorative spinning rings ── */}
      <div
        className="pointer-events-none absolute"
        style={{
          right: "4%",
          top: "18%",
          width: 150,
          height: 150,
          animation: "spinCW 28s linear infinite",
          zIndex: 1,
          opacity: 0.16,
        }}
      >
        <svg viewBox="0 0 150 150" fill="none">
          <defs>
            <linearGradient
              id="rg1"
              x1="0"
              y1="0"
              x2="150"
              y2="150"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3b82f6" />
              <stop offset="1" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle
            cx="75"
            cy="75"
            r="65"
            stroke="url(#rg1)"
            strokeWidth="1"
            strokeDasharray="5 9"
          />
          <circle
            cx="75"
            cy="75"
            r="45"
            stroke="url(#rg1)"
            strokeWidth=".6"
            strokeDasharray="3 7"
          />
          <circle
            cx="75"
            cy="75"
            r="25"
            stroke="url(#rg1)"
            strokeWidth=".4"
            strokeDasharray="2 5"
          />
        </svg>
      </div>
      <div
        className="pointer-events-none absolute"
        style={{
          left: "3%",
          bottom: "14%",
          width: 110,
          height: 110,
          animation: "spinCCW 20s linear infinite",
          zIndex: 1,
          opacity: 0.13,
        }}
      >
        <svg viewBox="0 0 110 110" fill="none">
          <circle
            cx="55"
            cy="55"
            r="48"
            stroke="#06b6d4"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          <circle
            cx="55"
            cy="55"
            r="30"
            stroke="#a855f7"
            strokeWidth=".5"
            strokeDasharray="2 6"
          />
        </svg>
      </div>

      {/* ── Floating micro dots ── */}
      {(
        [
          { bottom: "22%", left: "9%", color: "#06b6d4", s: 3, d: "0s" },
          { bottom: "12%", right: "18%", color: "#10b981", s: 4, d: "0.8s" },
          { top: "30%", right: "6%", color: "#a855f7", s: 3, d: "2s" },
        ] as any[]
      ).map((dot, i) => (
        <div
          key={i}
          className="pointer-events-none absolute"
          style={{
            ...dot,
            width: dot.s * 2,
            height: dot.s * 2,
            borderRadius: "50%",
            background: dot.color,
            boxShadow: `0 0 ${dot.s * 4}px ${dot.s}px ${dot.color}60`,
            animation: `pulseDot 3.5s ease-in-out infinite ${dot.d}`,
            zIndex: 1,
          }}
        />
      ))}

      {/* ════════════════ CONTENT ════════════════ */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-14 max-w-[1260px] mx-auto">
        {/* ── HEADER — outside the card, full-width centered ── */}
        <div className="text-center mb-12" style={fade(0)}>
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div
              style={{
                width: 32,
                height: 1,
                background:
                  "linear-gradient(90deg,transparent,rgba(59,130,246,.9))",
              }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#3b82f6",
                  boxShadow: "0 0 10px 3px rgba(59,130,246,.65)",
                  animation: "pulseDot 2.5s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: ".35em",
                  color: "#3b82f6",
                  textTransform: "uppercase" as const,
                  fontFamily: "system-ui,sans-serif",
                }}
              >
                CAPABILITIES
              </span>
            </div>
            <div
              style={{
                width: 32,
                height: 1,
                background:
                  "linear-gradient(90deg,rgba(59,130,246,.9),transparent)",
              }}
            />
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: "clamp(44px,6vw,76px)",
              fontWeight: 800,
              lineHeight: 1.03,
              letterSpacing: "-.038em",
              fontFamily: "'Georgia','Times New Roman',serif",
              color: "#fff",
              margin: "0 0 20px",
            }}
          >
            Services We{" "}
            <span
              style={{
                background:
                  "linear-gradient(100deg,#60a5fa 0%,#a78bfa 50%,#f0abfc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Provide
            </span>
          </h2>

          {/* Subline */}
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.9,
              color: "rgba(255,255,255,.33)",
              maxWidth: 500,
              margin: "0 auto",
              fontFamily: "system-ui,sans-serif",
            }}
          >
            From growth strategy to digital execution — every service your brand
            needs to dominate, engineered end&#8209;to&#8209;end.
          </p>
        </div>

        {/* ── OUTER GLASS CARD ── */}
        <div style={fade(120)}>
          <div
            style={{
              background: "rgba(7,9,18,0.78)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 26,
              padding: "48px 44px 52px",
              position: "relative",
              overflow: "hidden",
              boxShadow: [
                "0 0 0 1px rgba(255,255,255,.022)",
                "0 40px 110px rgba(0,0,0,.8)",
                "inset 0 1px 0 rgba(255,255,255,.055)",
                "inset 0 -1px 0 rgba(255,255,255,.018)",
              ].join(", "),
              backdropFilter: "blur(26px)",
              WebkitBackdropFilter: "blur(26px)",
            }}
          >
            {/* Running shimmer line at top of card */}
            <div
              className="pointer-events-none absolute top-0 left-0 right-0 overflow-hidden"
              style={{ height: 1, borderRadius: "26px 26px 0 0" }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "20%",
                  background:
                    "linear-gradient(90deg,transparent,rgba(120,180,255,.9),transparent)",
                  animation: "shimmer 5s ease-in-out infinite 1.2s",
                }}
              />
            </div>

            {/* Inner fine grid */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(59,130,246,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,.018) 1px,transparent 1px)`,
                backgroundSize: "55px 55px",
                borderRadius: 26,
                zIndex: 0,
              }}
            />

            {/* Inner corner glows */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: [
                  "radial-gradient(ellipse at 0% 0%,rgba(59,130,246,.08) 0%,transparent 42%)",
                  "radial-gradient(ellipse at 100% 100%,rgba(168,85,247,.06) 0%,transparent 42%)",
                  "radial-gradient(ellipse at 50% 0%,rgba(59,130,246,.05) 0%,transparent 32%)",
                ].join(","),
                borderRadius: 26,
                zIndex: 0,
              }}
            />

            {/* Scanline sweep */}
            <div
              className="pointer-events-none absolute"
              style={{
                left: 0,
                right: 0,
                height: 2,
                background:
                  "linear-gradient(90deg,transparent,rgba(59,130,246,.06) 30%,rgba(168,85,247,.06) 70%,transparent)",
                animation: "scanline 8s linear infinite",
                zIndex: 0,
              }}
            />

            {/* ── 3×2 CARD GRID ── */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((svc, i) => (
                <ServiceCard
                  key={svc.num}
                  svc={svc}
                  delay={160 + i * 95}
                  visible={visible}
                />
              ))}
            </div>

          
            {/* ── Bottom accent ── */}
            <div className="relative z-10 flex flex-col items-center gap-4 mt-10">
              <div
                style={{
                  width: "100%",
                  height: 1,
                  background:
                    "linear-gradient(90deg,transparent,rgba(255,255,255,.055) 28%,rgba(59,130,246,.14) 50%,rgba(255,255,255,.055) 72%,transparent)",
                }}
              />
              <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <div
                  style={{
                    width: 3,
                    height: 3,
                    borderRadius: "50%",
                    background: "rgba(59,130,246,.3)",
                  }}
                />
                <div
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "rgba(168,85,247,.4)",
                  }}
                />
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#3b82f6",
                    boxShadow: "0 0 16px 5px rgba(59,130,246,.55)",
                    animation: "pulseDot 3s ease-in-out infinite",
                  }}
                />
                <div
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "rgba(168,85,247,.4)",
                  }}
                />
                <div
                  style={{
                    width: 3,
                    height: 3,
                    borderRadius: "50%",
                    background: "rgba(59,130,246,.3)",
                  }}
                />
              </div>
            </div>

            {/* Bottom edge shimmer */}
            <div
              className="pointer-events-none absolute bottom-0 left-[10%] right-[10%]"
              style={{
                height: 1,
                background:
                  "linear-gradient(90deg,transparent,rgba(59,130,246,.18) 40%,rgba(168,85,247,.18) 60%,transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
