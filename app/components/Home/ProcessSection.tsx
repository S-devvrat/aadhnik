"use client";

import React, { useState } from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { motion } from "framer-motion";
import { 
  FiTarget, 
  FiLayout, 
  FiCode, 
  FiTrendingUp,
  FiChevronRight,
  FiCheckCircle
} from "react-icons/fi";
import { 
  LuLightbulb, 
  LuPalette, 
  LuCpu, 
  LuChartLine
} from "react-icons/lu";

const ProcessSection = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      number: "01",
      title: "Plan",
      icon: FiTarget,
      color: "purple",
      description: "We start by building context — business goals, user behaviors, platform constraints, and competitive ecosystems. We form a strategy that doesn't collapse at scale.",
      highlights: [
        {
          title: "Research & Requirements",
          description: "Stakeholder interviews, feature mapping, and high-level roadmaps. We design with numbers, not vibes.",
          icon: LuLightbulb
        },
        {
          title: "Architecture Blueprint",
          description: "System diagrams, data flow, user journeys, and scope prioritization — all before a single line of code.",
          icon: FiLayout
        }
      ],
      deliverables: [
        "Strategic roadmap",
        "Technical specifications",
        "Risk assessment",
        "Resource planning"
      ]
    },
    {
      number: "02",
      title: "Design",
      icon: LuPalette,
      color: "pink",
      description: "We translate complex systems into human experiences. We design for emotion and usability — not aesthetics alone.",
      highlights: [
        {
          title: "UI / UX Design",
          description: "Interfaces that feel inevitable: clean, modern, friction-free. Every click has a reason to exist.",
          icon: FiLayout
        },
        {
          title: "Interaction Systems",
          description: "Motion, states, empty screens, failure cases, accessibility — we design surfaces the user never sees.",
          icon: LuCpu
        }
      ],
      deliverables: [
        "Wireframes & prototypes",
        "Design system",
        "User flow diagrams",
        "Accessibility audit"
      ]
    },
    {
      number: "03",
      title: "Develop",
      icon: FiCode,
      color: "blue",
      description: "Engineering is where design becomes reality. We build for performance, scalability, and clarity.",
      highlights: [
        {
          title: "Modular Engineering",
          description: "Clean abstractions, reusable components, multi-env CI/CD, and production-grade pipelines.",
          icon: FiCode
        },
        {
          title: "Automation & AI",
          description: "We connect data, models, and infrastructure to automate the boring — and empower the user.",
          icon: LuCpu
        }
      ],
      deliverables: [
        "Production-ready code",
        "API documentation",
        "Testing suite",
        "Deployment pipeline"
      ]
    },
    {
      number: "04",
      title: "Refine",
      icon: FiTrendingUp,
      color: "green",
      description: "We ship, measure, and evolve. The product becomes smarter because the ecosystem grows around it.",
      highlights: [
        {
          title: "Metrics & Performance",
          description: "Real-time analytics, instrumentation, model accuracy, and user retention — if it matters, it's measurable.",
          icon: LuChartLine
        },
        {
          title: "Continuous Improvement",
          description: "We iterate with user insights, market feedback, and behavior patterns — not ego.",
          icon: FiTrendingUp
        }
      ],
      deliverables: [
        "Analytics dashboard",
        "Performance reports",
        "User feedback loop",
        "Iteration roadmap"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "purple": return "from-purple-500 to-purple-700";
      case "pink": return "from-pink-500 to-rose-600";
      case "blue": return "from-blue-500 to-cyan-600";
      case "green": return "from-emerald-500 to-teal-600";
      default: return "from-purple-500 to-purple-700";
    }
  };

  const getColorStyle = (color: string) => {
    switch (color) {
      case "purple": return { 
        borderColor: "rgb(168 85 247 / 0.3)",
        shadowColor: "rgb(168 85 247 / 0.1)",
        textColor: "text-purple-400",
        bgColor: "bg-purple-500/10"
      };
      case "pink": return { 
        borderColor: "rgb(236 72 153 / 0.3)",
        shadowColor: "rgb(236 72 153 / 0.1)",
        textColor: "text-pink-400",
        bgColor: "bg-pink-500/10"
      };
      case "blue": return { 
        borderColor: "rgb(59 130 246 / 0.3)",
        shadowColor: "rgb(59 130 246 / 0.1)",
        textColor: "text-blue-400",
        bgColor: "bg-blue-500/10"
      };
      case "green": return { 
        borderColor: "rgb(16 185 129 / 0.3)",
        shadowColor: "rgb(16 185 129 / 0.1)",
        textColor: "text-emerald-400",
        bgColor: "bg-emerald-500/10"
      };
      default: return { 
        borderColor: "rgb(168 85 247 / 0.3)",
        shadowColor: "rgb(168 85 247 / 0.1)",
        textColor: "text-purple-400",
        bgColor: "bg-purple-500/10"
      };
    }
  };

  return (
    <section className="w-full bg-black  text-white py-12 md:py-20 -mt-[200px] sm:-mt-[250px] md:-mt-[300px] -mb-100">
      <ContainerScroll
        titleComponent={
          <div className="text-center px-4 md:px-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="inline-block px-4 py-2 md:py-1.5 bg-white/5 rounded-full border border-white/10 mb-6 md:mb-6">
                <span className="text-sm md:text-sm font-medium text-gray-300">Our Methodology</span>
              </div>
              <h1 className="text-4xl  md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4 md:mb-6">
                The Process We Use
              </h1>
              {/* Hide subtitle on mobile */}
              <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-xl md:max-w-2xl mx-auto hidden md:block">
                A systematic approach to building digital products that scale and evolve
              </p>
            </motion.div>
          </div>
        }
      >
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-10">
          {/* Simplified Mobile View */}
          <div className="block md:hidden">
            <div className="space-y-6">
              {phases.map((phase, index) => {
                const colorStyle = getColorStyle(phase.color);
                return (
                  <motion.div
                    key={phase.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="rounded-xl p-5 border border-gray-800 bg-linear-to-br from-gray-900/80 to-black/80"
                  >
                    {/* Mobile Header - Bigger */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-full bg-linear-to-r ${getColorClasses(phase.color)} flex items-center justify-center`}>
                        <span className="text-sm font-bold">{phase.number}</span>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                          <phase.icon className={`w-5 h-5 ${colorStyle.textColor}`} />
                          {phase.title}
                        </h2>
                      </div>
                    </div>

                    {/* Simplified Description */}
                    <p className="text-gray-300 text-base mb-4 leading-relaxed">
                      {phase.description}
                    </p>

                    {/* Only show first highlight on mobile */}
                    {phase.highlights.map((highlight, idx) => {
                        const HighlightIcon = highlight.icon;

                        return (
                            <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="p-5 rounded-xl bg-linear-to-b from-gray-900/50 to-black/50 border border-gray-800"
                            >
                            <div className="flex items-start gap-3 mb-3">
                                <div className={`p-2 rounded-lg ${colorStyle.bgColor}`}>
                                <HighlightIcon className={`w-5 h-5 ${colorStyle.textColor}`} />
                                </div>
                                <h4 className="font-semibold text-lg text-white">
                                {highlight.title}
                                </h4>
                            </div>
                            <p className="text-gray-400">{highlight.description}</p>
                            </motion.div>
                        );
                        })}


                    {/* Show 2 deliverables only */}
                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.slice(0, 2).map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs rounded-lg bg-gray-800/50 text-gray-300 border border-gray-700"
                        >
                          {item}
                        </span>
                      ))}
                      {phase.deliverables.length > 2 && (
                        <span className="px-3 py-1 text-xs rounded-lg bg-gray-800/30 text-gray-500 border border-gray-800">
                          +{phase.deliverables.length - 2} more
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Desktop View - UNCHANGED */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-linear-to-b from-purple-500/20 via-purple-500/40 to-purple-500/20"></div>

              {phases.map((phase, index) => {
                const colorStyle = getColorStyle(phase.color);
                return (
                  <motion.div
                    key={phase.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative mb-24 last:mb-0"
                  >
                    {/* Timeline node */}
                    <div className="absolute left-6 -translate-x-1/2 top-6 w-12 h-12 rounded-full bg-linear-to-r from-black to-gray-900 border-2 border-gray-800 flex items-center justify-center z-20">
                      <div className={`w-8 h-8 rounded-full bg-linear-to-r ${getColorClasses(phase.color)} flex items-center justify-center`}>
                        <span className="text-xs font-bold">{phase.number}</span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="ml-20">
                      <div 
                        className={`
                          rounded-2xl p-8 border
                          ${activePhase === index 
                            ? 'bg-linear-to-br from-gray-900/80 to-black/80 shadow-xl' 
                            : 'bg-gray-900/30'
                          }
                          transition-all duration-300 hover:border-gray-700
                        `}
                        style={activePhase === index ? {
                          borderColor: colorStyle.borderColor,
                          boxShadow: `0 20px 60px ${colorStyle.shadowColor}`
                        } : { borderColor: 'rgb(31 41 55)' }}
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <phase.icon className={`w-8 h-8 ${colorStyle.textColor}`} />
                              <h2 className="text-3xl font-bold text-white">
                                {phase.title}
                              </h2>
                            </div>
                            <p className="text-gray-300 text-lg max-w-3xl">
                              {phase.description}
                            </p>
                          </div>
                          <div className="text-4xl opacity-10">
                            {phase.number}
                          </div>
                        </div>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                          {phase.highlights.map((highlight, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ y: -5 }}
                              className="p-5 rounded-xl bg-linear-to-b from-gray-900/50 to-black/50 border border-gray-800"
                            >
                              <div className="flex items-start gap-3 mb-3">
                                <div className={`p-2 rounded-lg ${colorStyle.bgColor}`}>
                                  <highlight.icon className={`w-5 h-5 ${colorStyle.textColor}`} />
                                </div>
                                <h4 className="font-semibold text-lg text-white">
                                  {highlight.title}
                                </h4>
                              </div>
                              <p className="text-gray-400">
                                {highlight.description}
                              </p>
                            </motion.div>
                          ))}
                        </div>

                        {/* Deliverables */}
                        <div className="pt-6 border-t border-gray-800">
                          <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <FiCheckCircle className="w-4 h-4" />
                            Key Deliverables
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {phase.deliverables.map((item, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1.5 text-sm rounded-lg bg-gray-800/50 text-gray-300 border border-gray-700"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Progress indicator */}
                        {index < phases.length - 1 && (
                          <div className="mt-8 pt-6 border-t border-gray-800">
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <span>Next: {phases[index + 1].title}</span>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-gray-600 animate-pulse"></div>
                                <span>Phase {index + 1} of {phases.length}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Floating elements */}
              <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* CTA Section - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-20 text-center"
          >
            <div className="p-6 md:p-12 rounded-xl md:rounded-2xl bg-linear-to-r from-gray-900/50 to-black/50 border border-gray-800">
              <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">
                Ready to Build Together?
              </h3>
              <p className="text-gray-400 text-sm md:text-base mb-6 md:mb-8 max-w-xs md:max-w-2xl mx-auto">
                Let's apply this proven process to create something remarkable for your business.
              </p>
              <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center">
                <button className="px-6 md:px-8 py-3 md:py-3 bg-linear-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 text-sm md:text-base">
                  Start Your Project
                </button>
                <button className="px-6 md:px-8 py-3 md:py-3 bg-transparent border border-gray-700 text-gray-300 font-semibold rounded-lg hover:bg-gray-800/30 hover:border-gray-600 transition-all duration-300 text-sm md:text-base">
                  View Case Studies
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default ProcessSection;