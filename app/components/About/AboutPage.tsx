"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  Users, 
  Target, 
  Zap, 
  Shield, 
  Globe, 
  TrendingUp, 
  Heart,
  Rocket,
  Code,
  Brain,
  Terminal,
  Sparkles,
  Award,
  Clock,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Lightbulb,
  Cpu,
  Cloud,
  Database,
  Server,
  Briefcase,
  Building,
  Laptop,
  ChevronRight
} from "lucide-react";

const AboutPage = () => {
  const [particles, setParticles] = useState<
    { left: number; top: number; opacity: number }[]
  >([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });

    const arr = Array.from({ length: 25 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: 0.1 + Math.random() * 0.3,
    }));

    setParticles(arr);
  }, []);

  const coreValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion-Driven",
      description: "We're fueled by passion for technology and innovation, delivering solutions that make a real impact.",
      color: "from-pink-500 to-rose-500",
      iconColor: "text-pink-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Client-Centric",
      description: "Your success is our success. We align our goals with yours to ensure mutual growth.",
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Agile Excellence",
      description: "Adapting quickly to market changes and client needs with cutting-edge methodologies.",
      color: "from-amber-500 to-orange-500",
      iconColor: "text-amber-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity First",
      description: "Transparent processes, ethical practices, and honest communication in everything we do.",
      color: "from-emerald-500 to-green-500",
      iconColor: "text-emerald-500"
    }
  ];

  const expertiseAreas = [
    {
      icon: <Terminal className="w-7 h-7" />,
      title: "POS Systems",
      description: "Scalable & customized solutions for retail, restaurants, and multi-location businesses",
      color: "from-violet-500 to-purple-500",
      iconColor: "text-violet-500"
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      title: "Startup Services",
      description: "From idea to MVP, we help startups launch and scale with confidence",
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-500"
    },
    {
      icon: <Code className="w-7 h-7" />,
      title: "App Development",
      description: "Native, cross-platform, and web applications with latest tech stacks",
      color: "from-emerald-500 to-green-500",
      iconColor: "text-emerald-500"
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Web Solutions",
      description: "Enterprise portals, e-commerce platforms, and secure web applications",
      color: "from-amber-500 to-orange-500",
      iconColor: "text-amber-500"
    },
    {
      icon: <Brain className="w-7 h-7" />,
      title: "AI & ML",
      description: "Smart automation, predictive analytics, and intelligent business solutions",
      color: "from-pink-500 to-rose-500",
      iconColor: "text-pink-500"
    },
    {
      icon: <Database className="w-7 h-7" />,
      title: "Big Data",
      description: "Data processing, analytics, and insights for informed decision making",
      color: "from-indigo-500 to-blue-500",
      iconColor: "text-indigo-500"
    }
  ];

  const milestones = [
    { number: "100+", label: "Projects Delivered", suffix: "", icon: <CheckCircle className="w-6 h-6" />, iconColor: "text-violet-500" },
    { number: "50+", label: "Happy Clients", suffix: "", icon: <Users className="w-6 h-6" />, iconColor: "text-blue-500" },
    { number: "10+", label: "Years", suffix: "of Excellence", icon: <Award className="w-6 h-6" />, iconColor: "text-emerald-500" },
    { number: "15+", label: "Industries", suffix: "Served", icon: <Globe className="w-6 h-6" />, iconColor: "text-amber-500" }
  ];

  const teamHighlights = [
    {
      title: "Collective Experience",
      value: "100+ Years",
      description: "Our team brings together centuries of combined expertise across technologies",
      icon: <Award className="w-10 h-10" />,
      color: "from-violet-500 to-purple-500",
      iconColor: "text-violet-500"
    },
    {
      title: "Industry Coverage",
      value: "Agnostic",
      description: "Versatile solutions across diverse industry verticals and business models",
      icon: <Globe className="w-10 h-10" />,
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-500"
    },
    {
      title: "Project Success",
      value: "98%",
      description: "Exceptional client satisfaction and on-time project delivery rate",
      icon: <TrendingUp className="w-10 h-10" />,
      color: "from-emerald-500 to-green-500",
      iconColor: "text-emerald-500"
    }
  ];

  const clientTypes = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Enterprise Solutions",
      subtitle: "For established businesses",
      features: ["Scalable Architecture", "Enterprise Security", "Cloud Infrastructure", "24/7 Support"],
      color: "from-violet-500 to-purple-500",
      iconColor: "text-violet-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Startup Innovation",
      subtitle: "For emerging businesses",
      features: ["MVP Development", "Rapid Prototyping", "Investor Presentations", "Growth Strategy"],
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-500"
    }
  ];

  return (
    <div className="relative w-full bg-black text-white overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/50 to-black"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.3) 0%, transparent 25%),
                           radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.3) 0%, transparent 25%)`,
        }}></div>
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}></div>
      </div>

      {/* Enhanced Accent Lights with Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-violet-600/5 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Particles with Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-gradient-to-r from-violet-400/40 to-blue-400/40 rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              opacity: p.opacity,
              boxShadow: `0 0 15px 2px rgba(139, 92, 246, ${p.opacity * 0.7})`
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [p.opacity, p.opacity * 0.5, p.opacity]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mt-20 lg:mt-0 mx-auto px-4 sm:px-6 lg:px-8 py-28">
        {/* Enhanced Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-28"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 mb-10 shadow-2xl shadow-violet-900/20"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-300 tracking-wider uppercase">WHO WE ARE</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-10 leading-[1.1]">
            <span className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent">
              WHAT MAKES US
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              WHO WE ARE!
            </span>
          </h1>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-900/40 to-blue-900/40 backdrop-blur-sm border border-violet-800/30 mb-12 shadow-xl shadow-violet-900/20"
            >
              <Sparkles className="w-6 h-6 text-violet-400" />
              <span className="text-2xl font-bold tracking-wide">
                We&apos;re <span className="text-violet-400">Aadhnik</span> - A Coterie Of Technical Eminence
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl text-gray-300 leading-relaxed mb-12 font-light tracking-wide"
            >
              Aadhnik is the business-manifestation of a resonating &apos;group&apos; of entrepreneur-spirited experts in different fields becoming a &apos;team&apos;. 
              Our knowledge spectrum spans e-Commerce, enterprise solutions, AI/ML, OCR, face recognition, big data, and comprehensive digital transformations.
            </motion.p>
          </div>
        </motion.div>

        {/* Enhanced Milestones Cards – Fully Responsive */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="
    grid 
    grid-cols-2 
    sm:grid-cols-2 
    md:grid-cols-3 
    lg:grid-cols-4 
    gap-4 
    sm:gap-6 
    md:gap-8 
    mb-20
  "
>
  {milestones.map((milestone, index) => (
    <div 
      key={index} 
      className="h-full group"
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative h-full"
      >
        {/* Outer Glow */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-blue-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

        {/* Main Card */}
        <div className="
          relative 
          bg-gradient-to-br from-gray-900/60 to-gray-900/30 
          backdrop-blur-xl 
          border border-gray-800/50 
          rounded-3xl 
          p-6 
          sm:p-8 
          h-full 
          flex 
          flex-col 
          items-center 
          justify-center 
          transition-all 
          duration-500 
          group-hover:border-violet-500/50 
          group-hover:bg-gray-900/70 
          group-hover:shadow-2xl 
          group-hover:shadow-violet-900/20
        ">
          
          {/* Icon with glow */}
          <div className="relative mb-4 sm:mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition"></div>
            <div className="
              relative 
              p-3 
              sm:p-4 
              rounded-2xl 
              bg-gradient-to-br from-gray-800 to-gray-900 
              border border-gray-700/50 
              group-hover:border-violet-500/30 
              transition-all duration-500
            ">
              <div className={`${milestone.iconColor} text-2xl sm:text-3xl transition-colors group-hover:text-white`}>
                {milestone.icon}
              </div>
            </div>
          </div>

          {/* Milestone Text */}
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
              {milestone.number}
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                {milestone.suffix}
              </span>
            </div>
            <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-300 group-hover:text-gray-100 transition">
              {milestone.label}
            </div>
          </div>

          {/* Bottom Accent Line */}
          <div className="
            absolute 
            bottom-0 left-1/4 right-1/4 
            h-1 
            bg-gradient-to-r from-transparent via-violet-500 to-transparent 
            opacity-0 
            group-hover:opacity-100 
            transition-all duration-500 
            transform group-hover:scale-x-150
          "></div>

        </div>
      </motion.div>
    </div>
  ))}
</motion.div>


        {/* Enhanced Team Highlights Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-32"
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-sm font-semibold text-gray-300">THE AADHNIK ADVANTAGE</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Why Choose Aadhnik?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our tech & creative team brings a collective experience of more than a century!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamHighlights.map((highlight, index) => (
              <div 
                key={index} 
                className="h-full group"
                onMouseEnter={() => setHoveredCard(10 + index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  whileHover={{ y: -12, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative h-full"
                >
                  {/* Background Glow */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${highlight.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`}></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-gray-900/70 to-gray-900/40 backdrop-blur-xl border border-gray-800/60 rounded-3xl p-10 h-full flex flex-col transition-all duration-700 group-hover:border-gray-700/80 group-hover:shadow-2xl group-hover:shadow-violet-900/30">
                    
                    {/* Icon Container with Enhanced Effect */}
                    <div className="relative mb-8">
                      <div className={`absolute inset-0 bg-gradient-to-r ${highlight.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                      <div className="relative p-5 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 group-hover:border-transparent transition-all duration-500">
                        <div className={`${highlight.iconColor}`}>
                          {highlight.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="text-3xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent">
                        {highlight.value}
                      </div>
                      <div className="text-xl font-semibold text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
                        {highlight.title}
                      </div>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {highlight.description}
                      </p>
                    </div>

                    {/* Animated Bottom Border */}
                    <div className="mt-8 pt-8 border-t border-gray-800/50 relative">
                      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
                      <div className={`absolute -top-px left-0 right-0 h-px bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-x-100 scale-x-0 origin-left`}></div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                        <span>Learn more</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Core Values Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-32"
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 mb-6"
            >
              <Star className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-semibold text-gray-300 uppercase">Our Core Values</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Principles That <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Define Us</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              These core values guide every decision we make and every solution we deliver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="h-full group"
                onMouseEnter={() => setHoveredCard(20 + index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="relative h-full"
                >
                  {/* Animated Background Gradient */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${value.color} rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-700`}></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-gray-900/60 to-gray-900/30 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-8 h-full flex flex-col transition-all duration-500 group-hover:border-gray-700/70 group-hover:shadow-xl group-hover:shadow-violet-900/10">
                    
                    {/* Icon with Enhanced Hover */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                      <div className="relative p-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 group-hover:border-transparent transition-all duration-500">
                        <div className={`${value.iconColor}`}>
                          {value.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">
                      {value.description}
                    </p>

                    {/* Animated Indicator */}
                    <div className="mt-6 flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${value.color} opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      <div className="text-xs text-gray-500 font-medium group-hover:text-gray-400 transition-colors duration-300">
                        Core Principle
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Expertise Areas Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-32"
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Our Spectrum of Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From enterprise-level solutions to startup innovations, we provide comprehensive technology services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <div 
                key={index} 
                className="h-full group"
                onMouseEnter={() => setHoveredCard(30 + index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative h-full"
                >
                  {/* Card Glow */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${area.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-15 transition-opacity duration-500`}></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-900/20 backdrop-blur-lg border border-gray-800/40 rounded-2xl p-8 h-full flex flex-col transition-all duration-500 group-hover:border-gray-700/60 group-hover:shadow-lg group-hover:shadow-violet-900/10">
                    
                    {/* Icon and Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${area.color} rounded-lg blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                        <div className="relative p-3 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 group-hover:border-transparent transition-all duration-500">
                          <div className={`${area.iconColor}`}>
                            {area.icon}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent">
                          {area.title}
                        </h4>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">
                      {area.description}
                    </p>

                    {/* Hover Indicator */}
                    <div className="mt-6 pt-6 border-t border-gray-800/30 relative">
                      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">Explore</span>
                        <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-violet-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Client Types Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-32"
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Serving Diverse Client Needs
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our industry-agnostic team handles tech, strategy, consulting, and marketing for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientTypes.map((client, index) => (
              <div 
                key={index} 
                className="h-full group"
                onMouseEnter={() => setHoveredCard(40 + index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="relative h-full"
                >
                  {/* Enhanced Background Glow */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${client.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-25 transition-opacity duration-700`}></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-gray-900/60 to-gray-900/30 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-10 h-full flex flex-col transition-all duration-700 group-hover:border-gray-700/80 group-hover:shadow-2xl group-hover:shadow-violet-900/20">
                    
                    {/* Header */}
                    <div className="flex items-center gap-5 mb-8">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${client.color} rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                        <div className="relative p-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 group-hover:border-transparent transition-all duration-500">
                          <div className={`${client.iconColor}`}>
                            {client.icon}
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent">
                          {client.title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors duration-300">
                          {client.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-5 flex-grow mb-8">
                      {client.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-4 group/feature">
                          <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${client.color} opacity-70 group-hover/feature:opacity-100 transition-opacity duration-300`}></div>
                          <span className="text-gray-300 group-hover/feature:text-white transition-colors duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-auto pt-8 border-t border-gray-800/50 relative">
                      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
                      <p className="text-gray-400 text-sm italic group-hover:text-gray-300 transition-colors duration-300">
                        We cater to the technical, creative, & marketing needs of {index === 0 ? "multi-location enterprises" : "single-room startups"}, 
                        vibing with their business-pulse!
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-sm font-medium">Learn more about {index === 0 ? "Enterprise" : "Startup"} solutions</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="relative rounded-3xl overflow-hidden mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)`
            }}></div>

            <div className="relative p-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 mb-8"
              >
                <Lightbulb className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-semibold text-gray-300 uppercase">Join Our Journey</span>
              </motion.div>

              <h3 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight">
                Ready to Build Something<br />
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Extraordinary Together?
                </span>
              </h3>

              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Whether you&apos;re a startup with a dream or an enterprise seeking transformation, 
                we have the expertise to bring your vision to life.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-12 py-5 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-violet-500/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="relative flex items-center justify-center gap-4 text-lg">
                    Start Your Project
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </motion.button>
                </a>

                
              </div>

              <div className="mt-16 pt-12 border-t border-gray-800/50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-500">
                  <div className="text-center group">
                    <div className="font-bold text-gray-400 mb-2 group-hover:text-white transition-colors duration-300">Expert Team</div>
                    <div className="group-hover:text-gray-300 transition-colors duration-300">Certified Professionals</div>
                  </div>
                  <div className="text-center group">
                    <div className="font-bold text-gray-400 mb-2 group-hover:text-white transition-colors duration-300">Fast Delivery</div>
                    <div className="group-hover:text-gray-300 transition-colors duration-300">Agile Development</div>
                  </div>
                  <div className="text-center group">
                    <div className="font-bold text-gray-400 mb-2 group-hover:text-white transition-colors duration-300">24/7 Support</div>
                    <div className="group-hover:text-gray-300 transition-colors duration-300">Round-the-Clock</div>
                  </div>
                  <div className="text-center group">
                    <div className="font-bold text-gray-400 mb-2 group-hover:text-white transition-colors duration-300">Scalable</div>
                    <div className="group-hover:text-gray-300 transition-colors duration-300">Future-Proof Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;