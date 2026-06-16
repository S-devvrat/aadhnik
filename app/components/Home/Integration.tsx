"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";

// ─── Pipeline stages ──────────────────────────────────────────────────────────

const stages = [
  {
    id: "plan",
    label: "Plan",
    sub: "Strategy and design",
    detail:
      "Define project goals, scope, and technical approach before development begins.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    accent: "#4f8fff",
    number: "01",
  },
  {
    id: "build",
    label: "Build",
    sub: "Production build generated",
    detail:
      "Dependency resolution, tree-shaking, and optimised asset bundling happen in parallel.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 3H8l-2 4h12l-2-4Z" />
      </svg>
    ),
    accent: "#c9a84c",
    number: "02",
  },
  {
    id: "test",
    label: "Test",
    sub: "Security & performance checks",
    detail:
      "Automated test suites, CVE scans, and Lighthouse audits run before any byte ships.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    accent: "#7b6fff",
    number: "03",
  },
  {
    id: "deploy",
    label: "Deploy",
    sub: "Global deployment in seconds",
    detail:
      "Zero-downtime rollout across 18 edge regions with instant rollback on anomaly.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    accent: "#4f8fff",
    number: "04",
  },
  {
    id: "monitor",
    label: "Monitor",
    sub: "Realtime analytics & auto-scaling",
    detail:
      "Live dashboards, alert routing, and adaptive scaling keep your platform at peak.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    accent: "#c9a84c",
    number: "05",
  },
];

// ─── Animated connector line ──────────────────────────────────────────────────

function GlowLine({ filled, active }: { filled: boolean; active: boolean }) {
  return (
    <div className="relative h-px flex-1 mx-1" style={{ minWidth: 16 }}>
      {/* base track */}
      <div
        className="absolute inset-0 rounded-full"
        style={{ background: "rgba(255,255,255,0.06)" }}
      />
      {/* fill */}
      <motion.div
        className="absolute left-0 top-0 h-full rounded-full"
        style={{
          background: "linear-gradient(90deg,#4f8fff,#c9a84c)",
          boxShadow: "0 0 10px 2px rgba(79,143,255,0.5)",
        }}
        initial={{ width: "0%" }}
        animate={{ width: filled ? "100%" : "0%" }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />
      {/* travelling dot */}
      {active && (
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full"
          style={{
            background: "#4f8fff",
            boxShadow: "0 0 12px 4px rgba(79,143,255,0.9)",
          }}
          animate={{ left: ["0%", "100%"] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
      )}
    </div>
  );
}

// ─── Stage node ───────────────────────────────────────────────────────────────

function StageNodeH({
  stage,
  isActive,
  isDone,
  index,
  onClick,
}: {
  stage: (typeof stages)[0];
  isActive: boolean;
  isDone: boolean;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center gap-2.5 group cursor-pointer focus:outline-none relative"
      style={{ minWidth: 72 }}
    >
      {/* outer glow halo */}
      {isActive && (
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: "-18px",
            background: `radial-gradient(circle, ${stage.accent}22 0%, transparent 70%)`,
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      {/* 3D node circle */}
      <div
        className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500"
        style={
          isActive
            ? {
                background: `radial-gradient(circle at 35% 35%, ${stage.accent}ff, ${stage.accent}44)`,
                boxShadow: `
                  0 0 0 1px ${stage.accent}80,
                  0 0 20px 4px ${stage.accent}50,
                  0 0 40px 8px ${stage.accent}20,
                  inset 0 1px 0 rgba(255,255,255,0.25),
                  inset 0 -2px 4px rgba(0,0,0,0.4)
                `,
              }
            : isDone
            ? {
                background:
                  "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.1)",
              }
            : {
                background:
                  "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.06)",
              }
        }
      >
        <span
          className={`transition-colors duration-300 ${
            isActive
              ? "text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
              : isDone
              ? "text-white/50"
              : "text-white/25 group-hover:text-white/45"
          }`}
        >
          {isDone ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-4 h-4"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            stage.icon
          )}
        </span>

        {/* ripple ring */}
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-full border"
            style={{ borderColor: `${stage.accent}90` }}
            animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
          />
        )}
      </div>

      {/* step number */}
      <span
        className={`font-mono text-[9px] tracking-[0.2em] uppercase transition-colors duration-300
          ${isActive ? "text-white/35" : "text-white/15"}`}
      >
        {stage.number}
      </span>

      {/* label */}
      <span
        className={`font-mono text-xs font-semibold tracking-widest uppercase transition-colors duration-300
          ${isActive ? "text-white" : isDone ? "text-white/45" : "text-white/22 group-hover:text-white/45"}`}
      >
        {stage.label}
      </span>
    </motion.button>
  );
}

// ─── Mobile vertical pipeline ─────────────────────────────────────────────────

function MobilePipeline({ active }: { active: number }) {
  return (
    <div className="flex flex-col items-start w-full gap-0">
      {stages.map((stage, i) => {
        const isDone = i < active;
        const isActive = i === active;
        return (
          <div key={stage.id} className="flex gap-5 w-full">
            <div className="flex flex-col items-center" style={{ width: 40 }}>
              <div
                className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full transition-all duration-500"
                style={
                  isActive
                    ? {
                        background: `radial-gradient(circle at 35% 35%, ${stage.accent}ff, ${stage.accent}44)`,
                        boxShadow: `0 0 20px 4px ${stage.accent}50, inset 0 1px 0 rgba(255,255,255,0.25)`,
                      }
                    : isDone
                    ? {
                        background: "rgba(255,255,255,0.08)",
                        boxShadow: "0 0 0 1px rgba(255,255,255,0.1)",
                      }
                    : {
                        background: "rgba(255,255,255,0.04)",
                        boxShadow: "0 0 0 1px rgba(255,255,255,0.07)",
                      }
                }
              >
                <span
                  className={`${isActive ? "text-white" : isDone ? "text-white/45" : "text-white/25"}`}
                >
                  {isDone ? (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="w-3.5 h-3.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <span className="w-4 h-4 block">{stage.icon}</span>
                  )}
                </span>
              </div>
              {i < stages.length - 1 && (
                <div
                  className="relative w-px flex-1 my-1.5 overflow-hidden"
                  style={{
                    minHeight: 36,
                    background: "rgba(255,255,255,0.06)",
                  }}
                >
                  <motion.div
                    className="absolute top-0 left-0 w-full rounded-full"
                    style={{
                      background: "linear-gradient(180deg,#4f8fff,#c9a84c)",
                      boxShadow: "0 0 6px 1px rgba(79,143,255,0.5)",
                    }}
                    initial={{ height: "0%" }}
                    animate={{
                      height: isDone ? "100%" : isActive ? "55%" : "0%",
                    }}
                    transition={{ duration: 0.65, ease: "easeInOut" }}
                  />
                </div>
              )}
            </div>

            <div
              className={`pb-7 pt-0.5 transition-opacity duration-300 ${isActive || isDone ? "opacity-100" : "opacity-30"}`}
            >
              <p className="font-mono text-[10px] tracking-widest uppercase text-white/30 mb-0.5">
                {stage.number}
              </p>
              <p className="font-mono text-sm font-semibold tracking-widest uppercase text-white/80">
                {stage.label}
              </p>
              <p className="mt-1 text-xs text-white/45 leading-snug max-w-[220px]">
                {stage.sub}
              </p>
              {isActive && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-[11px] text-white/30 leading-relaxed max-w-[220px]"
                >
                  {stage.detail}
                </motion.p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function Integration() {
  const [activeStage, setActiveStage] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const pipelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setActiveStage((s) => (s >= stages.length - 1 ? 0 : s + 1));
    }, 2200);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-30"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(20,30,60,0.9) 0%, #000 60%)",
      }}
    >
      {/* ── BACKGROUND LAYERS ──────────────────────────────────────────── */}

      {/* top border line */}
      <div
        className="absolute left-1/2 top-0 z-20 h-px w-[88%] -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(79,143,255,0.3), rgba(201,168,76,0.3), transparent)",
        }}
      />

      {/* big radial glows */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none"
        style={{
          width: "70%",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(79,143,255,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(79,143,255,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute top-1/3 left-0 pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* faint wave lines (decorative SVG lines like in the hero) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]"
        preserveAspectRatio="none"
        viewBox="0 0 1440 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100 350 Q360 200 720 350 Q1080 500 1540 300"
          stroke="url(#waveGrad1)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M-100 380 Q360 260 720 380 Q1080 520 1540 330"
          stroke="url(#waveGrad2)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M-100 320 Q400 180 720 320 Q1040 460 1540 270"
          stroke="url(#waveGrad1)"
          strokeWidth="1"
          fill="none"
        />
        <defs>
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f8fff" stopOpacity="0" />
            <stop offset="40%" stopColor="#4f8fff" stopOpacity="1" />
            <stop offset="70%" stopColor="#c9a84c" stopOpacity="1" />
            <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7b6fff" stopOpacity="0" />
            <stop offset="50%" stopColor="#7b6fff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* ── CONTENT ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 -mb-10">

        {/* ── HEADLINE ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20 md:mb-28"
        >
          <span
            className="inline-block rounded-full px-5 py-2 text-xs font-mono font-medium tracking-widest uppercase mb-7"
            style={{
              background: "rgba(79,143,255,0.1)",
              border: "1px solid rgba(79,143,255,0.2)",
              color: "rgba(255,255,255,0.5)",
              boxShadow: "0 0 20px rgba(79,143,255,0.1)",
            }}
          >
            How We Ship
          </span>

          <h2
            className="font-serif text-5xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-[-3px] mb-8"
            style={{ color: "#fff" }}
          >
            One pipeline.
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #fff 0%, rgba(79,143,255,0.9) 50%, rgba(201,168,76,0.7) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Zero friction.
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            We build intelligent digital systems at Aadhnik that simplify
            development, deployment, monitoring, and scaling — engineered for
            teams that demand speed, reliability, and seamless performance
          </p>
        </motion.div>

        {/* ── DESKTOP PIPELINE ─────────────────────────────────────────── */}
        <div ref={pipelineRef} className="hidden md:block">
          {/* nodes + connectors */}
          <div className="flex items-center justify-between mb-16 px-4 lg:px-10">
            {stages.map((stage, i) => (
              <div
                key={stage.id}
                className="flex items-center flex-1 last:flex-none"
              >
                <StageNodeH
                  stage={stage}
                  isActive={i === activeStage}
                  isDone={i < activeStage}
                  index={i}
                  onClick={() => setActiveStage(i)}
                />
                {i < stages.length - 1 && (
                  <GlowLine
                    filled={i < activeStage}
                    active={i === activeStage}
                  />
                )}
              </div>
            ))}
          </div>

          {/* active stage detail card */}
          <div className="relative px-4 lg:px-10 mb-20">
            {/* top rule */}
            <div
              className="w-full h-px mb-12"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
              }}
            />

            {/* 3D glassmorphism card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage + "-card"}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow:
                    "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* accent top border glow */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${stages[activeStage].accent}80, transparent)`,
                  }}
                />

                {/* inner glow at top-left */}
                <div
                  className="absolute top-0 left-0 pointer-events-none"
                  style={{
                    width: "300px",
                    height: "200px",
                    background: `radial-gradient(ellipse at top left, ${stages[activeStage].accent}12 0%, transparent 70%)`,
                  }}
                />

                <div className="flex items-start justify-between gap-12 p-10 lg:p-14">
                  {/* big step number */}
                  <div className="flex-shrink-0">
                    <span
                      className="font-serif leading-none font-bold select-none"
                      style={{
                        fontSize: "clamp(80px,10vw,120px)",
                        background: `linear-gradient(180deg, ${stages[activeStage].accent}25 0%, ${stages[activeStage].accent}05 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {stages[activeStage].number}
                    </span>
                  </div>

                  {/* label + detail */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-5">
                      {/* icon badge */}
                      <div
                        className="flex items-center justify-center w-10 h-10 rounded-xl text-white"
                        style={{
                          background: `radial-gradient(circle at 35% 35%, ${stages[activeStage].accent}cc, ${stages[activeStage].accent}44)`,
                          boxShadow: `0 0 20px 4px ${stages[activeStage].accent}35, inset 0 1px 0 rgba(255,255,255,0.2)`,
                        }}
                      >
                        {stages[activeStage].icon}
                      </div>
                      <span
                        className="font-mono text-xs tracking-[0.25em] uppercase"
                        style={{ color: "rgba(255,255,255,0.3)" }}
                      >
                        {stages[activeStage].label}
                      </span>
                    </div>

                    <h3
                      className="font-serif leading-tight tracking-[-1.5px] mb-4"
                      style={{
                        fontSize: "clamp(28px,4vw,48px)",
                        color: "#fff",
                      }}
                    >
                      {stages[activeStage].sub}
                    </h3>
                    <p
                      className="text-lg leading-relaxed max-w-xl"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {stages[activeStage].detail}
                    </p>
                  </div>

                  {/* progress dots */}
                  <div className="flex-shrink-0 flex flex-col gap-2 pt-4">
                    {stages.map((s, i) => (
                      <button
                        key={s.id}
                        onClick={() => setActiveStage(i)}
                        className="rounded-full transition-all duration-500 cursor-pointer"
                        style={{
                          width: 6,
                          height: i === activeStage ? 32 : 12,
                          background:
                            i === activeStage
                              ? stages[activeStage].accent
                              : i < activeStage
                              ? "rgba(255,255,255,0.2)"
                              : "rgba(255,255,255,0.1)",
                          boxShadow:
                            i === activeStage
                              ? `0 0 10px 2px ${stages[activeStage].accent}60`
                              : "none",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* bottom rule */}
            <div
              className="w-full h-px mt-12"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
              }}
            />
          </div>
        </div>

        {/* ── MOBILE ────────────────────────────────────────────────────── */}
        <div className="block md:hidden">
          <MobilePipeline active={activeStage} />
        </div>
      </div>
    </section>
  );
}