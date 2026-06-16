"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AboutPage from "../About/AboutPage";

interface WaveColor { r: number; g: number; b: number; a: number; }
interface WaveConfig { ambientSpeed: number; waveCount: number; colors: WaveColor[]; }

export default function Hero() {
  const canvasRef      = useRef<HTMLCanvasElement | null>(null);
  const bgRef          = useRef<HTMLDivElement | null>(null);
  const heroRef        = useRef<HTMLElement | null>(null);
  const rotateBadge    = useRef<SVGSVGElement | null>(null);
  const leftScrollRef  = useRef<HTMLDivElement | null>(null);
  const rightScrollRef = useRef<HTMLDivElement | null>(null);
  const leftRotateRef  = useRef<HTMLDivElement | null>(null);
  const rightRotateRef = useRef<HTMLDivElement | null>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => { const t = setTimeout(() => setMounted(true), 60); return () => clearTimeout(t); }, []);

  /* ── Scroll: bg zoom + icon parallax (translateY) + scroll-driven rotation ── */
  useEffect(() => {
    // Current and target rotation angles — interpolated for smoothness
    const state = {
      leftAngle:  0, leftTarget:  0,
      rightAngle: 0, rightTarget: 0,
      lastY: 0,
      raf: 0,
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      // Smoothly interpolate toward target
      state.leftAngle  = lerp(state.leftAngle,  state.leftTarget,  0.06);
      state.rightAngle = lerp(state.rightAngle, state.rightTarget, 0.06);

      if (leftRotateRef.current)
        leftRotateRef.current.style.transform  = `rotate(${state.leftAngle}deg)`;
      if (rightRotateRef.current)
        rightRotateRef.current.style.transform = `rotate(${state.rightAngle}deg)`;

      state.raf = requestAnimationFrame(tick);
    };
    state.raf = requestAnimationFrame(tick);

    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - state.lastY;
      state.lastY = y;

      // Accumulate rotation target based on scroll delta
      state.leftTarget  += dy * 0.5;   // clockwise
      state.rightTarget -= dy * 0.5;   // counter-clockwise

      // bg zoom
      if (bgRef.current && heroRef.current) {
        const p = Math.min(y / heroRef.current.offsetHeight, 1);
        bgRef.current.style.transform = `scale(${1 + p * 0.16})`;
      }

      // translateY parallax — outer wrapper only
      if (leftScrollRef.current)
        leftScrollRef.current.style.transform = `translateY(${-y * 0.22}px)`;
      if (rightScrollRef.current)
        rightScrollRef.current.style.transform = `translateY(${y * 0.16}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(state.raf);
    };
  }, []);

  /* ── Spinning badge ── */
  useEffect(() => {
    const svg = rotateBadge.current;
    if (!svg) return;
    let angle = 0, raf: number;
    const spin = () => {
      angle += 0.35;
      svg.querySelector<SVGGElement>(".rg")?.setAttribute("transform", `rotate(${angle},50,50)`);
      raf = requestAnimationFrame(spin);
    };
    raf = requestAnimationFrame(spin);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* ── Wave canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number, time = 0;
    const config: WaveConfig = {
      ambientSpeed: 0.004, waveCount: 3,
      colors: [
        { r: 245, g: 215, b: 125, a: 0.4 },
        { r: 79,  g: 143, b: 255, a: 0.55 },
        { r: 247, g: 235, b: 187, a: 0.35 },
      ],
    };
    const resize = () => {
      canvas.width  = window.innerWidth * devicePixelRatio;
      canvas.height = (window.innerWidth < 768 ? 340 : 420) * devicePixelRatio;
      ctx.setTransform(1,0,0,1,0,0);
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    window.addEventListener("resize", resize); resize();
    const draw = () => {
      const W = canvas.width/devicePixelRatio, H = canvas.height/devicePixelRatio, cy = H/2;
      ctx.clearRect(0,0,W,H); time += config.ambientSpeed;
      for (let i = 0; i < config.waveCount; i++) {
        const c = config.colors[i]; ctx.beginPath();
        const g = ctx.createLinearGradient(0,0,W,0);
        g.addColorStop(0,  `rgba(${c.r},${c.g},${c.b},0)`);
        g.addColorStop(.2, `rgba(${c.r},${c.g},${c.b},${c.a})`);
        g.addColorStop(.8, `rgba(${i===1?79:245},${i===1?143:215},${i===1?255:125},${c.a*1.2})`);
        g.addColorStop(1,  `rgba(${c.r},${c.g},${c.b},0)`);
        ctx.strokeStyle=g; ctx.lineWidth=i===1?55:40;
        ctx.lineCap="round"; ctx.lineJoin="round";
        ctx.shadowBlur=32; ctx.shadowColor=`rgba(${c.r},${c.g},${c.b},${c.a*.8})`;
        for (let x=0;x<=W;x+=6) {
          const yo = Math.sin(x*(0.0025+i*.001)+time+i*2)*65
                   + Math.cos(x*(0.006-i*.0015)-time*1.2+i)*35;
          const y = cy + yo*Math.sin((x/W)*Math.PI);
          x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
        }
        ctx.stroke();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener("resize",resize); cancelAnimationFrame(raf); };
  }, []);

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0px)" : "translateY(40px)",
    transition: `opacity 0.9s cubic-bezier(.16,1,.3,1) ${delay}ms, transform 0.9s cubic-bezier(.16,1,.3,1) ${delay}ms`,
  });

  const revealLine = (delay: number): React.CSSProperties => ({
    display: "block",
    opacity:   mounted ? 1 : 0,
    transform: mounted ? "scale(1) translateY(0px)"  : "scale(0.86) translateY(28px)",
    filter:    mounted ? "blur(0px)"                  : "blur(10px)",
    transition: [
      `opacity   1s  cubic-bezier(.16,1,.3,1) ${delay}ms`,
      `transform 1s  cubic-bezier(.16,1,.3,1) ${delay}ms`,
      `filter    0.9s cubic-bezier(.16,1,.3,1) ${delay}ms`,
    ].join(", "),
  });

  const LINE1_DELAY     = 120;
  const LINE2_DELAY     = 340;
  const UNDERLINE_DELAY = LINE2_DELAY + 700;

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden text-white" style={{ background:"#07090f", position: "relative", zIndex: 1 }}>

      <style>{`
        @keyframes float-left  { 0%,100%{transform:translateY(0px)}  50%{transform:translateY(-22px)} }
        @keyframes float-right { 0%,100%{transform:translateY(0px)}  50%{transform:translateY( 22px)} }
        .icon-float-left  { animation: float-left  4s ease-in-out infinite; }
        .icon-float-right { animation: float-right 4.4s ease-in-out infinite; }
      `}</style>

      {/* Background */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform" style={{ transition:"transform 0.08s linear", transformOrigin:"center" }}>
        <Image src="/hero.png" alt="Hero Background" fill priority className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0" style={{ backgroundImage:"radial-gradient(rgba(255,255,255,0.035) 1px,transparent 1px)", backgroundSize:"30px 30px" }} />
      </div>

      {/* Glows */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div style={{ position:"absolute", top:"-15%", right:"-8%", width:700, height:700, borderRadius:"50%", background:"radial-gradient(circle,rgba(37,99,235,0.22) 0%,transparent 65%)" }} />
        <div style={{ position:"absolute", bottom:"5%", left:"-5%",  width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(79,143,255,0.12) 0%,transparent 65%)" }} />
      </div>

      {/* LEFT icon
          leftScrollRef  → translateY from scroll
          .icon-float-left → CSS float bob
          leftRotateRef  → rotation from scroll delta (lerped) */}
      <div
        ref={leftScrollRef}
        className="pointer-events-none absolute z-20 hidden lg:block"
        style={{ left:"-100px", top:"50%", marginTop:"-200px", width:400, height:400, willChange:"transform", ...fadeUp(100) }}
      >
        <div className="icon-float-left" style={{ width:"100%", height:"100%" }}>
          <div ref={leftRotateRef} style={{ width:"100%", height:"100%", willChange:"transform" }}>
            <Image src="/hero-object-circle.png" alt="" fill className="object-contain" />
          </div>
        </div>
      </div>

      {/* RIGHT icon */}
      <div
        ref={rightScrollRef}
        className="pointer-events-none absolute z-20 hidden lg:block"
        style={{ right:"-110px", bottom:"6%", width:420, height:420, willChange:"transform", ...fadeUp(200) }}
      >
        <div className="icon-float-right" style={{ width:"100%", height:"100%" }}>
          <div ref={rightRotateRef} style={{ width:"100%", height:"100%", willChange:"transform" }}>
            <Image src="/hero-cube.png" alt="" fill className="object-contain" />
          </div>
        </div>
      </div>

      <header className="relative z-30 flex items-center justify-between px-6 py-6 md:px-14" />

      <div className="relative z-20 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center mt-30 px-6 text-center md:px-20">

        <h1
          style={{ fontSize:"clamp(42px, 6.5vw, 60px)", lineHeight:1.04, letterSpacing:"-0.03em", fontFamily:"Georgia, 'Times New Roman', serif" }}
          className="max-w-[860px]"
        >
          <span style={revealLine(LINE1_DELAY)} className="font-bold text-white whitespace-nowrap">
            From automation to{" "}
            <span style={{ background:"linear-gradient(95deg,#60a5fa 0%,#a78bfa 55%,#f0abfc 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              innovation
            </span>
          </span>

          <span style={revealLine(LINE2_DELAY)} className="font-bold">
            <span style={{ WebkitTextStroke:"1.5px rgba(255,255,255,0.22)", color:"transparent" }}>We engineer</span>
            {" "}
            <span className="text-white">technology</span>
          </span>

          <span className="block" style={{ marginTop:"0.1em", fontSize:"0.54em", fontWeight:400, letterSpacing:"0.01em", color:"rgba(255,255,255,0.45)", fontFamily:"system-ui,sans-serif", ...fadeUp(560) }}>
            — that{" "}
            <span style={{ background:"linear-gradient(90deg,#fff 0%,#93c5fd 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", fontWeight:600 }}>performs</span>
            , scales &amp; delivers
          </span>
        </h1>

        <div style={{ marginTop:18, ...fadeUp(UNDERLINE_DELAY - 200) }}>
          <svg width="380" height="16" viewBox="0 0 380 16" fill="none" overflow="visible">
            <defs>
              <linearGradient id="ug" x1="0" y1="0" x2="380" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#3b82f6" stopOpacity="0" />
                <stop offset="20%"  stopColor="#3b82f6" />
                <stop offset="80%"  stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M2 12 Q47 3 95 8 Q143 13 190 7 Q238 1 285 8 Q332 14 378 5"
              stroke="url(#ug)" strokeWidth="2.5" strokeLinecap="round" fill="none"
              style={{
                strokeDasharray: 400,
                strokeDashoffset: mounted ? 0 : 400,
                transition: `stroke-dashoffset 1.2s cubic-bezier(.16,1,.3,1) ${UNDERLINE_DELAY}ms`,
              }}
            />
          </svg>
        </div>

        <p style={{ ...fadeUp(340), color:"rgba(255,255,255,0.48)", maxWidth:520, marginTop:28, fontSize:16, lineHeight:1.8 }}>
          Empowering future-focused brands with elegant AI pipelines,
          high-performance web systems, and custom operational infrastructure.
        </p>

        <div style={{ ...fadeUp(440), marginTop:44 }} className="flex flex-col items-center gap-5 sm:flex-row">
          <button type="button"
            className="group flex items-center gap-3 rounded-full px-8 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:scale-[1.04]"
            style={{ background:"linear-gradient(135deg,#1d4ed8,#3b82f6)", boxShadow:"0 0 36px 8px rgba(59,130,246,0.32), inset 0 1px 0 rgba(255,255,255,0.18)" }}>
            Explore Our Works
            <span className="flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1" style={{ background:"rgba(255,255,255,0.15)" }}>
              <ArrowRight size={15} />
            </span>
          </button>
      
        </div>

        <div style={{ ...fadeUp(520), marginTop:52, position:"relative", width:100, height:100 }}>
          <svg ref={rotateBadge} viewBox="0 0 100 100" width={100} height={100}>
            <defs><path id="cp" d="M50,50 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0" /></defs>
            <g className="rg">
              <text fontSize="7.5" fill="rgba(255,255,255,0.4)" letterSpacing="2.6" fontFamily="system-ui,sans-serif">
                <textPath href="#cp">DIGITAL AGENCY · TECH STUDIO · </textPath>
              </text>
            </g>
          </svg>
          <div className="absolute" style={{ top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:38, height:38, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.18)", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 1v11M1 6.5l5.5 5.5 5.5-5.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-full overflow-hidden">
        <canvas ref={canvasRef} className="h-[340px] w-full md:h-[420px]" style={{ display:"block" }} />
      </div>

    </section>
  );
}