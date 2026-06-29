"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
});

interface HeroBannerProps {
  title: string;
  backgroundImage?: string;
  breadcrumbs?: {
    label: string;
    href?: string;
  }[];
  eyebrow?: string;
  subtitle?: string;
}

export default function HeroBanner({
  title,
  backgroundImage = "/people.png",
  breadcrumbs = [],
  eyebrow,
  subtitle,
}: HeroBannerProps) {
  return (
    <>
      <style>{`
        @keyframes fade-up-banner {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .banner-fade-up   { animation: fade-up-banner 0.7s cubic-bezier(0.25,0.46,0.45,0.94) 0.05s both; }
        .banner-fade-up-1 { animation: fade-up-banner 0.7s cubic-bezier(0.25,0.46,0.45,0.94) 0.15s both; }
        .banner-fade-up-2 { animation: fade-up-banner 0.7s cubic-bezier(0.25,0.46,0.45,0.94) 0.25s both; }
        .banner-fade-up-3 { animation: fade-up-banner 0.7s cubic-bezier(0.25,0.46,0.45,0.94) 0.35s both; }
      `}</style>

      <section
        className="relative flex min-h-[62vh] items-end overflow-hidden"
        style={{ background: "#07090F" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: 0.22,
          }}
        />

        {/* Blue glow orb */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, #2563EB 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-40"
          style={{
            background:
              "linear-gradient(to top, #07090F 0%, transparent 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full px-6 pb-12 pt-24 text-center md:px-12 lg:px-24">

          {/* Optional eyebrow */}
          {eyebrow && (
            <p
              className="banner-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.35em]"
              style={{ color: "rgba(59,130,246,0.9)" }}
            >
              {eyebrow}
            </p>
          )}

          {/* Title */}
          <h1
            className={`${cormorant.className} banner-fade-up-1 mx-auto max-w-4xl text-white leading-[1.02] tracking-tight`}
            style={{
              fontSize: "clamp(42px, 7vw, 88px)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h1>

          {/* Optional subtitle */}
          {subtitle && (
            <p
              className="banner-fade-up-2 mx-auto mt-5 max-w-xl text-base leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.48)",
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              {subtitle}
            </p>
          )}

          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <div
              className="banner-fade-up-3 mt-8 flex flex-wrap items-center justify-center gap-1 text-xs"
              style={{
                color: "rgba(255,255,255,0.3)",
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              {breadcrumbs.map((item, index) => (
                <div key={index} className="flex items-center">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span style={{ color: "rgba(255,255,255,0.6)" }}>
                      {item.label}
                    </span>
                  )}
                  {index !== breadcrumbs.length - 1 && (
                    <ChevronRight
                      size={14}
                      className="mx-1.5"
                      style={{ color: "rgba(255,255,255,0.2)" }}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}