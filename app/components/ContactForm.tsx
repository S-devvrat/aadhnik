"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  X,
  Send,
  User,
  MessageSquare,
} from "lucide-react";

// ─── Validation Schema (unchanged) ───────────────────────────────────────────
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .optional()
    .or(z.literal("")),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ─── Sub-components ───────────────────────────────────────────────────────────

function SuccessToast({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed top-6 right-6 z-50 animate-slide-in">
      <div
        className="flex items-start gap-4 rounded-2xl border p-5 shadow-2xl"
        style={{
          background: "rgba(7, 9, 15, 0.92)",
          border: "1px solid rgba(59, 130, 246, 0.35)",
          backdropFilter: "blur(24px)",
          boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(59,130,246,0.12), 0 0 40px rgba(59,130,246,0.08)",
          minWidth: "320px",
        }}
      >
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
          style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)" }}
        >
          <CheckCircle className="h-5 w-5 text-blue-400" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">Message sent successfully</p>
          <p className="mt-0.5 text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
            We'll get back to you within 24 hours.
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-0.5 transition-colors hover:text-white"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
}

function InfoCard({ icon, label, value, sub }: InfoCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-0.5"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Hover border glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          border: "1px solid rgba(59,130,246,0.35)",
          boxShadow: "inset 0 0 24px rgba(59,130,246,0.04), 0 0 24px rgba(59,130,246,0.06)",
        }}
      />
      <div className="flex items-start gap-4">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105"
          style={{
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.2)",
          }}
        >
          {icon}
        </div>
        <div>
          <p className="mb-0.5 text-xs font-medium uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
            {label}
          </p>
          <p className="text-sm font-medium text-white">{value}</p>
          {sub && (
            <p className="mt-0.5 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              {sub}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

interface InputFieldProps {
  label: string;
  icon: React.ReactNode;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function InputField({ label, icon, error, required, children }: InputFieldProps) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.45)" }}>
        {icon}
        {label}
        {required && <span className="text-blue-400">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-400 flex items-center gap-1">
          <span className="inline-block h-1 w-1 rounded-full bg-red-400" />
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Hero Banner ──────────────────────────────────────────────────────────────

function HeroBanner() {
  return (
    <section
      className="relative flex min-h-[42vh] items-end overflow-hidden"
      style={{ background: "#07090F" }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/people.png')",
          opacity: 0.22,
        }}
      />

      {/* Blue glow orbs */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        style={{
          background: "radial-gradient(ellipse at center, #2563EB 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Grid pattern */}
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

      {/* Dark gradient at bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(to top, #07090F 0%, transparent 100%)" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-6 pb-12 pt-24 text-center md:px-12 lg:px-24">
        <p
          className="mb-4 text-xs font-semibold uppercase tracking-[0.35em]"
          style={{ color: "rgba(59,130,246,0.9)" }}
        >
          Contact Us
        </p>
        <h1
          className="mx-auto max-w-3xl leading-[1.02] tracking-tight text-white"
          style={{
            fontFamily: "'Cormorant Garamond', 'Georgia', serif",
            fontSize: "clamp(42px, 7vw, 88px)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          Let's Build Something{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #3B82F6 0%, #93C5FD 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Exceptional
          </span>
        </h1>
        <p
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed"
          style={{ color: "rgba(255,255,255,0.48)", fontFamily: "Inter, system-ui, sans-serif" }}
        >
          Tell us about your project. We typically respond within one business day.
        </p>

        {/* Breadcrumbs */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Inter, system-ui, sans-serif" }}>
          <a href="/" className="transition-colors hover:text-white">Home</a>
          <span>/</span>
          <span style={{ color: "rgba(255,255,255,0.6)" }}>Contact</span>
        </div>
      </div>
    </section>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // ── Business logic: unchanged ─────────────────────────────────────────────
  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Contact form error:", error);
    }
  };
  // ─────────────────────────────────────────────────────────────────────────

  const inputBase =
    "w-full rounded-2xl px-5 py-4 text-sm text-white placeholder-[rgba(255,255,255,0.25)] outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/50";
  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.09)",
  };

  return (
    <>
      {/* Inject font + animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');

        @keyframes slide-in {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in { animation: slide-in 0.35s cubic-bezier(0.25,0.46,0.45,0.94) both; }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 0.6s cubic-bezier(0.25,0.46,0.45,0.94) both; }
        .animate-fade-up-1 { animation: fade-up 0.6s 0.1s cubic-bezier(0.25,0.46,0.45,0.94) both; }
        .animate-fade-up-2 { animation: fade-up 0.6s 0.2s cubic-bezier(0.25,0.46,0.45,0.94) both; }
        .animate-fade-up-3 { animation: fade-up 0.6s 0.3s cubic-bezier(0.25,0.46,0.45,0.94) both; }

        input:-webkit-autofill,
        textarea:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px rgba(255,255,255,0.04) inset !important;
          -webkit-text-fill-color: #ffffff !important;
          caret-color: white;
        }

        .contact-input:focus {
          border-color: rgba(59,130,246,0.6) !important;
          background: rgba(59,130,246,0.05) !important;
        }

        .submit-btn:hover:not(:disabled) .arrow-icon {
          transform: translateX(3px);
        }
        .submit-btn .arrow-icon {
          transition: transform 0.2s ease;
        }
      `}</style>

      <div style={{ background: "#07090F", minHeight: "100vh", fontFamily: "Inter, system-ui, sans-serif" }}>

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <HeroBanner />

        {/* ── Body ─────────────────────────────────────────────────────────── */}
        <section className="relative px-6 pb-32 pt-16 md:px-12 lg:px-24">

          {/* Ambient glow */}
          <div
            className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] opacity-10"
            style={{
              background: "radial-gradient(circle at top left, #2563EB, transparent 65%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] opacity-8"
            style={{
              background: "radial-gradient(circle at bottom right, #1d4ed8, transparent 65%)",
              filter: "blur(80px)",
            }}
          />

          <div className="relative mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_3fr] lg:gap-12 xl:gap-16">

              {/* ── LEFT: Info cards ──────────────────────────────────────── */}
              <div className="animate-fade-up space-y-5">

                <div className="mb-8">
                  <p
                    className="mb-3 text-xs font-semibold uppercase tracking-[0.3em]"
                    style={{ color: "rgba(59,130,246,0.85)" }}
                  >
                    Get in touch
                  </p>
                  <h2
                    className="leading-tight text-white"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "clamp(28px, 3.5vw, 42px)",
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    We'd love to hear from you.
                  </h2>
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    Whether it's a new product, scaling an existing one, or a question — reach out and let's talk.
                  </p>
                </div>

                <InfoCard
                  icon={<Mail className="h-4.5 w-4.5 text-blue-400" style={{ height: 18, width: 18 }} />}
                  label="Email"
                  value="hello@aadhniktech.com"
                  sub="We reply within one business day"
                />
                <InfoCard
                  icon={<Phone className="h-4.5 w-4.5 text-blue-400" style={{ height: 18, width: 18 }} />}
                  label="Phone"
                  value="+91 98765 43210"
                  sub="Mon – Fri, 9 AM – 7 PM IST"
                />
                <InfoCard
                  icon={<MapPin className="h-4.5 w-4.5 text-blue-400" style={{ height: 18, width: 18 }} />}
                  label="Office"
                  value="Aadhnik Technologies"
                  sub="New Delhi, India"
                />
                <InfoCard
                  icon={<Clock className="h-4.5 w-4.5 text-blue-400" style={{ height: 18, width: 18 }} />}
                  label="Working Hours"
                  value="Monday – Friday"
                  sub="9:00 AM – 7:00 PM IST"
                />

                {/* Divider with tagline */}
                <div
                  className="mt-8 flex items-center gap-4 rounded-2xl p-5"
                  style={{
                    background: "rgba(59,130,246,0.06)",
                    border: "1px solid rgba(59,130,246,0.15)",
                  }}
                >
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "rgba(59,130,246,0.2)" }}
                  >
                    <CheckCircle className="h-4 w-4 text-blue-400" />
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Every project starts with a free 30-minute discovery call.{" "}
                    <span className="text-blue-400 font-medium">No commitment needed.</span>
                  </p>
                </div>
              </div>

              {/* ── RIGHT: Form ───────────────────────────────────────────── */}
              <div className="animate-fade-up-1">
                <div
                  className="relative overflow-hidden rounded-3xl p-8 md:p-10"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
                  }}
                >
                  {/* Subtle inner glow at top */}
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)" }}
                  />

                  <div className="mb-8">
                    <h3
                      className="text-white"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "clamp(22px, 2.5vw, 32px)",
                        fontWeight: 600,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      Send us a message
                    </h3>
                    <p className="mt-1.5 text-sm" style={{ color: "rgba(255,255,255,0.38)" }}>
                      Fill in the details below and we'll get back to you shortly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>

                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <InputField
                        label="Full Name"
                        icon={<User className="h-3 w-3 text-blue-400/70" />}
                        error={errors.name?.message}
                        required
                      >
                        <input
                          {...register("name")}
                          type="text"
                          placeholder="John Smith"
                          className={`${inputBase} contact-input`}
                          style={inputStyle}
                        />
                      </InputField>

                      <InputField
                        label="Email Address"
                        icon={<Mail className="h-3 w-3 text-blue-400/70" />}
                        error={errors.email?.message}
                        required
                      >
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="john@company.com"
                          className={`${inputBase} contact-input`}
                          style={inputStyle}
                        />
                      </InputField>
                    </div>

                    {/* Phone */}
                    <InputField
                      label="Phone Number"
                      icon={<Phone className="h-3 w-3 text-blue-400/70" />}
                      error={errors.phone?.message}
                    >
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="+91 98765 43210  (optional)"
                        className={`${inputBase} contact-input`}
                        style={inputStyle}
                      />
                    </InputField>

                    {/* Message */}
                    <InputField
                      label="Your Message"
                      icon={<MessageSquare className="h-3 w-3 text-blue-400/70" />}
                      error={errors.message?.message}
                      required
                    >
                      <textarea
                        {...register("message")}
                        rows={5}
                        placeholder="Tell us about your project, goals, and timeline..."
                        className={`${inputBase} contact-input resize-none`}
                        style={inputStyle}
                      />
                    </InputField>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="submit-btn group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(37,99,235,0.45)] disabled:cursor-not-allowed disabled:opacity-60"
                      style={{
                        background: isSubmitting
                          ? "rgba(37,99,235,0.6)"
                          : "linear-gradient(135deg, #2563EB 0%, #3B82F6 60%, #60A5FA 100%)",
                        boxShadow: "0 4px 24px rgba(37,99,235,0.3)",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {/* Shimmer on hover */}
                      <div
                        className="absolute inset-0 translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-[100%]"
                        style={{
                          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
                        }}
                      />

                      {isSubmitting ? (
                        <>
                          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                          <ArrowRight className="arrow-icon h-4 w-4" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
                      By submitting, you agree to our{" "}
                      <a href="/privacy" className="text-blue-400/70 underline-offset-2 hover:text-blue-400 hover:underline transition-colors">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Success Toast */}
      {isSuccess && <SuccessToast onClose={() => setIsSuccess(false)} />}
    </>
  );
}