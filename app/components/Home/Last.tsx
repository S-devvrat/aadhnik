"use client";

import { ArrowUpRight } from "lucide-react";

export default function Last() {
  return (
    <section className="relative overflow-hidden bg-black py-20">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37,99,235,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,.08) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Blue Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent_65%)]" />

      {/* Floating Plus */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 text-lg">
        +
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Eyebrow */}
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          <span className="text-[10px] uppercase tracking-[0.35em] text-slate-500">
            AADHNIK DIGITAL
          </span>
        </div>

        {/* Heading */}
        <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
          Building digital
          <br />
          experiences that
          <br />
          drive real growth
        </h2>

        {/* Accent Line */}
        <div className="mx-auto mt-4 h-[2px] w-28 rounded-full bg-blue-600" />

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
          Aadhnik combines web development, SEO, performance marketing,
          automation, CRM systems, and branding to help businesses
          attract, convert, and retain customers.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="group flex items-center gap-3 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-blue-500">
            Let's Connect

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={14} />
            </span>
          </button>

          <button className="group flex items-center gap-3 rounded-full border border-blue-500/20 bg-[#0A0F1C] px-5 py-3 text-sm font-medium text-white transition-all hover:border-blue-500/50">
            Explore Services

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={14} />
            </span>
          </button>
        </div>

        {/* Footer Text */}
        <p className="mt-8 text-xs text-slate-500">
          Websites • SEO • Performance Marketing • CRM • Automation
        </p>
      </div>
    </section>
  );
}