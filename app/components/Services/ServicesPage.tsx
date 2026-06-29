"use client";
import { useState, useEffect, useRef } from "react";
import WhatWeBuild from "../Home/WhatWeBuild";
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

const team = [
  { name: "Arjun Sharma", role: "Founder & CEO", desc: "8+ years engineering commerce platforms at scale. Obsessed with systems that compound.", gradient: "from-blue-600 to-violet-600", letter: "A" },
  { name: "Meera Patel", role: "Head of Engineering", desc: "Former senior engineer at fintech unicorns. Architects the infrastructure that makes it all run.", gradient: "from-violet-600 to-pink-600", letter: "M" },
  { name: "Rohan Desai", role: "Lead Designer", desc: "Converts complex user journeys into intuitive, conversion-tuned experiences.", gradient: "from-cyan-500 to-blue-600", letter: "R" },
  { name: "Nisha Verma", role: "Product Strategist", desc: "Bridges business goals and technical delivery with relentless precision.", gradient: "from-emerald-500 to-cyan-600", letter: "N" },
];

const milestones = [
  { year: "2016", event: "Founded in Delhi", detail: "Started as a two-person Shopify studio." },
  { year: "2018", event: "First Enterprise Client", detail: "Delivered a Magento 2 migration for a 10K-product catalogue." },
  { year: "2020", event: "eSyncora VMS Launched", detail: "Shipped our first in-house SaaS — now used by 2,400+ companies." },
  { year: "2022", event: "eSyncora CRM Released", detail: "Built the CRM engine after seeing gaps in the market firsthand." },
  { year: "2024", event: "AI Pipeline Practice", detail: "Dedicated AI & automation vertical launched for enterprise clients." },
  { year: "2026", event: "12K+ Projects Shipped", detail: "Operating across e-commerce, SaaS, and mobile verticals globally." },
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
  title="Services"
  backgroundImage="/people.png"
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "Services" },
  ]}
/>

      <div>

      <WhatWeBuild />
      </div>

     <Integration />

    </div>
  );
}