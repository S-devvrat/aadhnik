"use client";
import { useState, useEffect, useRef } from "react";
import ServicesAboutSection from "../Home/AboutSection";
import FounderPage from "./FounderPage";
import Integration from "../Home/Integration";
import HeroBanner from "../Hero-Banner";


const useInView = (
  threshold = 0.15,
): [React.RefObject<HTMLDivElement | null>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      obs.observe(ref.current);
    }

    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
};

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({
  target,
  suffix = "",
  duration = 2000,
}: CounterProps) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.3);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
};

const values = [
  {
    num: "01",
    title: "Engineering First",
    desc: "Every solution starts with the right architecture. We build systems designed to outlast trends and outlift competitors.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    color: "#3b82f6",
  },
  {
    num: "02",
    title: "Outcome Obsessed",
    desc: "Delivery is the floor, not the ceiling. We measure success in conversions, retention, and lifetime value—not story points.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    color: "#a78bfa",
  },
  {
    num: "03",
    title: "Radical Transparency",
    desc: "No black boxes, no surprises. You always know what's being built, why it's being built, and when it ships.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    color: "#06b6d4",
  },
  {
    num: "04",
    title: "Compounding Systems",
    desc: "We don't just ship — we build foundations that compound. Each release makes the next one cheaper, faster, and smarter.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    color: "#10b981",
  },
];




export default function About() {
  const [heroRef, heroIn] = useInView(0.1);
  const [missionRef, missionIn] = useInView(0.1);
  const [valuesRef, valuesIn] = useInView(0.1);
  const [teamRef, teamIn] = useInView(0.1);
  const [timelineRef, timelineIn] = useInView(0.1);
  const [ctaRef, ctaIn] = useInView(0.1);

  return (
    <div style={{ background: "#07090f", color: "#fff", fontFamily: "system-ui, sans-serif", overflowX: "hidden" }}>

      <HeroBanner
  title="About Us"
  backgroundImage="/people.png"
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "About" },
  ]}
/>

      {/* ── MISSION ── */}
      <section className="relative overflow-hidden" style={{ background: "#000", padding: "100px 0" }}>
        <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="pointer-events-none absolute" style={{ top: "-8%", right: "-4%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle,rgba(37,99,235,0.18) 0%,transparent 65%)" }} />

        <div ref={missionRef} className="relative z-10 max-w-6xl mx-auto px-6 md:px-14 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: "#3b82f6", opacity: missionIn ? 1 : 0, transition: "opacity .8s .1s", letterSpacing: ".2em" }}>✦ OUR MISSION</span>
              <h2 style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 800, lineHeight: 1.07, letterSpacing: "-0.03em", margin: "0 0 24px", opacity: missionIn ? 1 : 0, transform: missionIn ? "translateY(0)" : "translateY(30px)", transition: "opacity .9s cubic-bezier(.16,1,.3,1) .15s, transform .9s cubic-bezier(.16,1,.3,1) .15s" }}>
                Most agencies stop at<br />
                <span style={{ background: "linear-gradient(95deg,#60a5fa 0%,#a78bfa 55%,#f0abfc 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>delivery.</span> We don't.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "15px", lineHeight: 1.85, marginBottom: "32px", maxWidth: "480px", opacity: missionIn ? 1 : 0, transform: missionIn ? "translateY(0)" : "translateY(20px)", transition: "opacity .9s cubic-bezier(.16,1,.3,1) .25s, transform .9s cubic-bezier(.16,1,.3,1) .25s" }}>
                Aadhnik was founded on a single belief: technology should compound in value over time. Not depreciate. We partner with brands at the intersection of ambition and execution — engineering the systems that power sustainable growth.
              </p>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "15px", lineHeight: 1.85, maxWidth: "480px", opacity: missionIn ? 1 : 0, transform: missionIn ? "translateY(0)" : "translateY(20px)", transition: "opacity .9s cubic-bezier(.16,1,.3,1) .32s, transform .9s cubic-bezier(.16,1,.3,1) .32s" }}>
                From Shopify storefronts to enterprise Magento deployments, from AI-driven CRMs to cross-platform mobile apps — every engagement starts with the question: what does success look like 3 years from now?
              </p>
            </div>

            {/* Right: card */}
            <div style={{ opacity: missionIn ? 1 : 0, transform: missionIn ? "translateX(0)" : "translateX(40px)", transition: "opacity .9s cubic-bezier(.16,1,.3,1) .2s, transform .9s cubic-bezier(.16,1,.3,1) .2s" }}>
              <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "24px", padding: "40px", position: "relative", overflow: "hidden" }}>
                {/* shimmer top */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg,transparent,rgba(59,130,246,.7),transparent)" }} />
                <div style={{ position: "absolute", bottom: "-60px", right: "-60px", width: "220px", height: "220px", borderRadius: "50%", background: "#3b82f6", filter: "blur(80px)", opacity: 0.07 }} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                  {[
                    { label: "Mission-critical commerce", body: "Storefronts and pipelines built to handle real traffic and real money." },
                    { label: "Modern stack, always", body: "Next.js, React Native, Shopify Hydrogen, Magento 2 — the stack that ships." },
                    { label: "Engineering discipline", body: "Every metric tied to conversions, retention, and lifetime value." },
                    { label: "End-to-end delivery", body: "From wireframe to launch to ongoing support — one team, full ownership." },
                  ].map((item) => (
                    <div key={item.label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", padding: "20px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                        <p style={{ fontWeight: 700, fontSize: "13px", color: "#fff" }}>{item.label}</p>
                      </div>
                      <p style={{ fontSize: "12px", lineHeight: 1.65, color: "rgba(255,255,255,0.35)", paddingLeft: "21px" }}>{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="relative" style={{ background: "#07090f", padding: "100px 0 120px", overflow: "hidden" }}>
        <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="pointer-events-none absolute" style={{ bottom: 0, left: "50%", transform: "translateX(-50%)", width: "800px", height: "400px", background: "radial-gradient(ellipse,rgba(59,130,246,0.1) 0%,transparent 65%)", filter: "blur(40px)" }} />

        <div ref={valuesRef} className="relative z-10 max-w-6xl mx-auto px-6 md:px-14 lg:px-20">
          <div className="text-center mb-16">
            <span style={{ fontSize: "9px", fontWeight: 800, letterSpacing: ".35em", color: "#3b82f6", textTransform: "uppercase", display: "block", marginBottom: "16px", opacity: valuesIn ? 1 : 0, transition: "opacity .8s .1s" }}>HOW WE WORK</span>
            <h2 style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: "clamp(36px,5vw,64px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 16px", opacity: valuesIn ? 1 : 0, transform: valuesIn ? "translateY(0)" : "translateY(24px)", transition: "opacity .9s cubic-bezier(.16,1,.3,1) .15s, transform .9s cubic-bezier(.16,1,.3,1) .15s" }}>
              Principles that<br /><span style={{ background: "linear-gradient(95deg,#60a5fa 0%,#a78bfa 55%,#f0abfc 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>drive everything</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "15px", maxWidth: "480px", margin: "0 auto", lineHeight: 1.8, opacity: valuesIn ? 1 : 0, transition: "opacity .9s .25s" }}>
              Not platitudes — the actual operating principles that shape every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={v.num} style={{ position: "relative", borderRadius: "18px", padding: "32px 28px", background: "rgba(9,11,20,0.85)", border: "1px solid rgba(255,255,255,0.065)", overflow: "hidden", opacity: valuesIn ? 1 : 0, transform: valuesIn ? "translateY(0)" : "translateY(40px)", transition: `opacity .7s cubic-bezier(.16,1,.3,1) ${.15 + i * .08}s, transform .7s cubic-bezier(.16,1,.3,1) ${.15 + i * .08}s`, boxShadow: "0 4px 28px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg,transparent,${v.color}90,transparent)` }} />
                <div style={{ position: "absolute", bottom: "-60px", right: "-60px", width: "200px", height: "200px", borderRadius: "50%", background: v.color, filter: "blur(70px)", opacity: 0.06 }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px", position: "relative", zIndex: 1 }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: `${v.color}0e`, border: `1px solid ${v.color}28`, display: "flex", alignItems: "center", justifyContent: "center", color: v.color }}>
                    {v.icon}
                  </div>
                  <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: ".18em", color: "rgba(255,255,255,0.12)" }}>{v.num}</span>
                </div>
                <h3 style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: "22px", fontWeight: 700, color: "#fff", margin: "0 0 10px", letterSpacing: "-0.02em", position: "relative", zIndex: 1 }}>{v.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.82, color: "rgba(255,255,255,0.38)", margin: 0, position: "relative", zIndex: 1 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesAboutSection />

      <div>
        <Integration/>
      </div>
      <div>
      <FounderPage/>
      </div>

      {/* ── STACK TICKER ── */}
      <section style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "20px 0", overflow: "hidden" }}>
        <style>{`
          @keyframes marquee-about { from { transform:translateX(0); } to { transform:translateX(-50%); } }
          .about-ticker { display:flex; animation:marquee-about 22s linear infinite; white-space:nowrap; }
          .about-ticker:hover { animation-play-state:paused; }
        `}</style>
        <div className="about-ticker">
          {["Next.js", "React Native", "Shopify Hydrogen", "Magento 2", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS", "Tailwind CSS", "GraphQL", "Figma", "Next.js", "React Native", "Shopify Hydrogen", "Magento 2", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS", "Tailwind CSS", "GraphQL", "Figma"].map((tech, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "10px", paddingRight: "40px", fontSize: "11px", letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", fontWeight: 600 }}>
              <span style={{ display: "inline-block", width: "4px", height: "4px", borderRadius: "50%", background: i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#a78bfa" : "#06b6d4", flexShrink: 0 }} />
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(15,25,55,0.95) 0%, #000 65%)", padding: "120px 0 140px" }}>
        <div className="absolute left-1/2 top-0 z-0 -translate-x-1/2" style={{ width: "70%", height: "300px", background: "radial-gradient(ellipse,rgba(59,130,246,0.14) 0%,transparent 70%)", filter: "blur(40px)" }} />
        <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(circle,rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

        <div ref={ctaRef} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span style={{ display: "inline-block", borderRadius: "999px", padding: "6px 20px", fontSize: "9px", fontWeight: 800, letterSpacing: ".3em", textTransform: "uppercase", background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", color: "rgba(255,255,255,0.5)", marginBottom: "28px", opacity: ctaIn ? 1 : 0, transition: "opacity .9s .1s" }}>Work With Aadhnik</span>
          <h2 style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: "clamp(40px,6vw,80px)", fontWeight: 800, lineHeight: 1.03, letterSpacing: "-0.035em", margin: "0 0 24px", opacity: ctaIn ? 1 : 0, transform: ctaIn ? "translateY(0)" : "translateY(30px)", transition: "opacity .9s cubic-bezier(.16,1,.3,1) .15s, transform .9s cubic-bezier(.16,1,.3,1) .15s" }}>
            Ready to build<br /><span style={{ background: "linear-gradient(135deg,#fff 0%,rgba(59,130,246,0.9) 50%,rgba(201,168,76,0.7) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>something that lasts?</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.42)", fontSize: "17px", lineHeight: 1.8, maxWidth: "500px", margin: "0 auto 48px", opacity: ctaIn ? 1 : 0, transition: "opacity .9s .3s" }}>
            Tell us what you're building. We'll tell you how to make it compound.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{ opacity: ctaIn ? 1 : 0, transform: ctaIn ? "translateY(0)" : "translateY(16px)", transition: "opacity .9s .4s, transform .9s .4s" }}>
            <button style={{ display: "inline-flex", alignItems: "center", gap: "12px", padding: "16px 32px", borderRadius: "999px", background: "linear-gradient(135deg,#1d4ed8,#3b82f6)", color: "#fff", fontSize: "14px", fontWeight: 600, border: "none", cursor: "pointer", boxShadow: "0 0 36px 8px rgba(59,130,246,0.32), inset 0 1px 0 rgba(255,255,255,0.18)", letterSpacing: ".02em" }}>
              Let's Connect
              <span style={{ display: "flex", width: "30px", height: "30px", alignItems: "center", justifyContent: "center", borderRadius: "50%", background: "rgba(255,255,255,0.15)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </button>
            <button style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "16px 28px", borderRadius: "999px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", fontSize: "14px", fontWeight: 500, cursor: "pointer", letterSpacing: ".02em" }}>
              Explore Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
            </button>
          </div>

          {/* Micro-trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-16" style={{ opacity: ctaIn ? 1 : 0, transition: "opacity 1s .6s" }}>
            {["5+ Years", "12K+ Projects", "87% Returned Clients", "99% Uptime"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px 2px rgba(34,197,94,0.5)" }} />
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", letterSpacing: ".05em" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}