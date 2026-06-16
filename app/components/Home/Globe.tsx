"use client";

import React from "react";
import { Globe } from "@/components/ui/globe";

export default function GlobalPresence() {
  return (
    <section className="relative overflow-hidden bg-white py-28 -mt-20">
  {/* TOP BORDER GLOW */}
  <div className="absolute left-1/2 top-0 h-px w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-black/20 to-transparent" />

  {/* SOFT TOP GLOW */}
  <div className="absolute left-1/2 top-0 h-32 w-[60%] -translate-x-1/2 bg-[#4f8fff]/10 blur-3xl" />

  <div className="mx-auto max-w-7xl px-6 md:px-14">
    {/* Globe Container */}
    <div className="relative mt-24 flex items-center justify-center overflow-hidden rounded-[40px] border border-black/5 bg-white px-10 py-100 shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
      {/* Background Text */}
      <span className="pointer-events-none absolute top-10 text-center text-[90px] font-semibold tracking-[-6px] text-black/15 md:text-[180px]">
        AADHNIK
      </span>

      {/* Globe */}
      <Globe className="top-70 lg:top-50 scale-[1.2]" />

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(79,143,255,0.18),rgba(255,255,255,0))]" />
    </div>
  </div>
</section>
  );
}