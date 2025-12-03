"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Testimonials() {
  return (
    <section className="relative w-full bg-black py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-black pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-sm font-medium text-white">Voices of Impact</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
              Trusted by
            </span>{" "}
            <span className="bg-linear-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
              Innovators
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Hear from teams and leaders who transformed their digital presence with Aadhnik.
          </motion.p>
        </div>

        {/* Moving Cards */}
        <div className="relative mb-16 space-y-8 md:space-y-12">
          <div className="h-48 md:h-52">
            <InfiniteMovingCards
              items={aadhnikTestimonials.slice(0, 5)}
              direction="right"
              speed="slow"
            />
          </div>

          <div className="h-48 md:h-52">
            <InfiniteMovingCards
              items={aadhnikTestimonials.slice(5)}
              direction="left"
              speed="slow"
            />
          </div>
        </div>
      </div>

      {/* Decorative backdrops — ALL inside section */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-linear-to-t from-black to-transparent pointer-events-none"></div>
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
}


const aadhnikTestimonials = [
  {
    quote: "Aadhnik doesn't just build websites — we design digital ecosystems that are engineered for speed, stability, and growth.",
    name: "Dev Team",
    title: "Engineering Vision",
    rating: 5,
    icon: "🚀",
    color: "from-purple-500/20 to-purple-700/20"
  },
  {
    quote: "Every interaction, every transition, every animation is intentional. We believe users shouldn't just use products — they should feel them.",
    name: "Design Studio",
    title: "Experience Philosophy",
    rating: 5,
    icon: "🎨",
    color: "from-pink-500/20 to-rose-600/20"
  },
  {
    quote: "Performance isn't a metric to chase. It's the foundation. From APIs to UI, we optimize every node, every request, every frame.",
    name: "Core Infrastructure",
    title: "System Engineering Approach",
    rating: 5,
    icon: "⚡",
    color: "from-blue-500/20 to-cyan-600/20"
  },
  {
    quote: "Real innovation is not complicated. It's guided by clarity: understand the user, architect solutions, iterate until seamless.",
    name: "Strategy Division",
    title: "Product Direction",
    rating: 5,
    icon: "💡",
    color: "from-emerald-500/20 to-teal-600/20"
  },
  {
    quote: "We merge AI, automation, and design to build experiences that evolve with your business — not against it.",
    name: "Aadhnik Labs",
    title: "Future Ideology",
    rating: 5,
    icon: "🤖",
    color: "from-purple-500/20 to-pink-600/20"
  },
  {
    quote: "The team's technical expertise combined with their design thinking approach resulted in a product that exceeded all expectations.",
    name: "Tech Lead",
    title: "Enterprise Solutions",
    rating: 5,
    icon: "👨‍💻",
    color: "from-blue-500/20 to-indigo-600/20"
  },
  {
    quote: "From concept to launch, the process was seamless. Their attention to detail and commitment to quality is unmatched.",
    name: "Product Manager",
    title: "Digital Transformation",
    rating: 5,
    icon: "📈",
    color: "from-green-500/20 to-emerald-600/20"
  },
  {
    quote: "Their ability to translate complex business requirements into elegant technical solutions is truly remarkable.",
    name: "CTO",
    title: "Fortune 500 Company",
    rating: 5,
    icon: "🏆",
    color: "from-yellow-500/20 to-amber-600/20"
  },
  {
    quote: "The scalability and performance of the systems they built have handled our explosive growth without a hitch.",
    name: "Engineering Director",
    title: "High-Growth Startup",
    rating: 5,
    icon: "📊",
    color: "from-indigo-500/20 to-purple-600/20"
  },
  {
    quote: "Working with Aadhnik was transformative. They don't just deliver code, they deliver strategic value.",
    name: "CEO",
    title: "Innovation Leader",
    rating: 5,
    icon: "🌟",
    color: "from-purple-500/20 to-violet-600/20"
  }
];