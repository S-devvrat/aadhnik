"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { 
  ShoppingBag, 
  Smartphone, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  Package, 
  CreditCard,
  BarChart3,
  Users,
  RefreshCw,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Solutions = () => {
  const [particles, setParticles] = useState<
    { left: number; top: number; opacity: number }[]
  >([]);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });

    const arr = Array.from({ length: 18 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: 0.15 + Math.random() * 0.3,
    }));

    setParticles(arr);
  }, []);

  const solutions = [
    {
      icon: <ShoppingBag className="w-7 h-7" />,
      title: "Enterprise E-Commerce Platforms",
      description: "Scalable, custom-built online retail solutions designed for high-volume transactions and seamless customer journeys.",
      features: ["Headless Architecture", "Multi-store Management", "Advanced Analytics", "API-First Design"],
      color: "from-violet-600 to-purple-600",
      gradient: "bg-gradient-to-br from-violet-900/20 to-purple-900/10",
      delay: 0
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: "Mobile Commerce Solutions",
      description: "Native mobile applications and PWAs providing optimal shopping experiences across all devices and platforms.",
      features: ["iOS & Android Apps", "PWA Implementation", "Mobile-First Design", "Push Notifications"],
      color: "from-blue-600 to-cyan-600",
      gradient: "bg-gradient-to-br from-blue-900/20 to-cyan-900/10",
      delay: 0.1
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Revenue Optimization",
      description: "Data-driven strategies and AI-powered tools to maximize conversion rates and customer lifetime value.",
      features: ["AI Recommendations", "Cart Abandonment", "Dynamic Pricing", "A/B Testing Suite"],
      color: "from-emerald-600 to-green-600",
      gradient: "bg-gradient-to-br from-emerald-900/20 to-green-900/10",
      delay: 0.2
    }
  ];

  const keyMetrics = [
    { value: "40%+", label: "Average Conversion Increase", icon: <ArrowRight className="w-5 h-5" /> },
    { value: "3.2s", label: "Average Page Load Time", icon: <Zap className="w-5 h-5" /> },
    { value: "99.9%", label: "Platform Uptime", icon: <Shield className="w-5 h-5" /> },
    { value: "12M+", label: "Monthly Transactions", icon: <CreditCard className="w-5 h-5" /> }
  ];

  const features = [
    {
      category: "Performance & Security",
      items: [
        { icon: <Zap className="w-5 h-5" />, text: "Sub-second load times with CDN optimization" },
        { icon: <Shield className="w-5 h-5" />, text: "PCI DSS Level 1 certified payment security" },
        { icon: <RefreshCw className="w-5 h-5" />, text: "99.9% uptime with automated failover" }
      ]
    },
    {
      category: "Customer Experience",
      items: [
        { icon: <Users className="w-5 h-5" />, text: "Personalized shopping with AI recommendations" },
        { icon: <Globe className="w-5 h-5" />, text: "Multi-currency & multi-language support" },
        { icon: <Package className="w-5 h-5" />, text: "Real-time inventory & shipping tracking" }
      ]
    },
    {
      category: "Business Intelligence",
      items: [
        { icon: <BarChart3 className="w-5 h-5" />, text: "Real-time sales & customer analytics" },
        { icon: <TrendingUp className="w-5 h-5" />, text: "Predictive inventory management" },
        { icon: <CheckCircle className="w-5 h-5" />, text: "Automated compliance & reporting" }
      ]
    }
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white py-28 px-4 sm:px-8 overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`,
        }}></div>
      </div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}></div>
      </div>

      {/* Accent Lights */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-sm font-medium text-gray-300 tracking-wider">ENTERPRISE E-COMMERCE SOLUTIONS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            <span className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent">
              Scalable Commerce
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Engineered for Growth
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            We architect high-performance e-commerce ecosystems that drive revenue, 
            enhance customer experience, and scale with your business ambitions.
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
          {keyMetrics.map((metric, index) => (
            <div key={index} className="group">
              <div className="relative bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-500 hover:translate-y-[-2px]">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
                    <div className="text-violet-400">
                      {metric.icon}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 font-medium tracking-wider">IMPACT</span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-sm text-gray-400 font-light tracking-wide">{metric.label}</div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Solutions Grid */}
        <div className="mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12 text-gray-100"
          >
            Comprehensive Commerce Solutions
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: solution.delay }}
                className="group relative"
              >
                {/* Card Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${solution.color} rounded-3xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-700`}></div>
                
                {/* Card */}
                <div className="relative bg-gradient-to-b from-gray-900/50 to-gray-900/20 backdrop-blur-lg border border-gray-800 rounded-3xl p-8 hover:border-gray-700 transition-all duration-500 h-full">
                  {/* Icon Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-xl ${solution.gradient} border border-gray-800`}>
                      <div className={`text-transparent bg-gradient-to-r ${solution.color} bg-clip-text`}>
                        {solution.icon}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 font-medium tracking-wider px-3 py-1 rounded-full border border-gray-800">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-white mb-4 leading-snug">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 mb-8 leading-relaxed font-light">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-4">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color}`}></div>
                        <span className="text-sm text-gray-300 font-medium tracking-wide">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Section */}
                  <div className="mt-10 pt-6 border-t border-gray-800/50">
                    <button className="flex items-center gap-3 text-sm font-medium text-gray-400 hover:text-white transition-colors group">
                      <span>Explore Solution</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Platform Capabilities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Enterprise-grade features designed to support global commerce operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-blue-500"></div>
                  {section.category}
                </h3>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-b from-gray-900/30 to-transparent border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">
                      <div className="p-2 rounded-lg bg-gray-900/50 border border-gray-800">
                        <div className="text-violet-400">{item.icon}</div>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed flex-1">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
            
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)`
            }}></div>

            {/* Content */}
            <div className="relative p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 mb-6">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-300">GET STARTED</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Ready to Transform Your<br />E-Commerce Business?
                </h3>

                <p className="text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Schedule a consultation with our experts to discuss your requirements 
                  and receive a customized solution blueprint.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group relative px-10 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative flex items-center justify-center gap-3 text-lg">
                      Schedule Consultation
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>

                  <button className="group px-10 py-4 bg-gradient-to-b from-gray-900 to-gray-800 border-2 border-gray-800 text-white font-semibold rounded-xl hover:border-gray-700 hover:bg-gray-800/50 transition-all duration-500">
                    <span className="flex items-center justify-center gap-3 text-lg">
                      View Case Studies
                      <TrendingUp className="w-5 h-5" />
                    </span>
                  </button>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-800/50">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-500">
                    <div className="text-center">
                      <div className="font-semibold text-gray-400 mb-1">Enterprise-Grade</div>
                      <div>SLA-Backed Support</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-400 mb-1">Proven Results</div>
                      <div>40%+ Avg. Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-400 mb-1">Global Scale</div>
                      <div>150+ Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-400 mb-1">Compliance Ready</div>
                      <div>GDPR, CCPA, PCI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-[1px] h-[1px] bg-gradient-to-r from-violet-400/30 to-blue-400/30 rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              opacity: p.opacity,
              boxShadow: `0 0 10px 1px rgba(139, 92, 246, ${p.opacity * 0.5})`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Solutions;