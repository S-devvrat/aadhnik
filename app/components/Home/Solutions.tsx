"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { 
  Terminal, 
  Rocket, 
  Code, 
  Globe, 
  Cpu,
  Zap, 
  Shield, 
  Package, 
  CreditCard,
  BarChart3,
  Users,
  RefreshCw,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Server,
  Database,
  Lock,
  Cloud,
  Wifi,
  Printer,
  SmartphoneCharging,
  Tablet,
  Layout,
  Brain,
  Webhook,
  MessageSquare,
  ShoppingCart,
  Receipt,
  Sparkles,
  Star,
  Target
} from "lucide-react";

const Solutions = () => {
  const [particles, setParticles] = useState<
    { left: number; top: number; opacity: number }[]
  >([]);
  const [activeHover, setActiveHover] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });

    const arr = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: 0.15 + Math.random() * 0.3,
    }));

    setParticles(arr);
  }, []);

  const solutions = [
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "POS Systems",
      description: "Scalable and customized POS solutions tailored to your business needs, from retail stores to restaurants and beyond.",
      features: ["Custom Hardware Integration", "Real-time Inventory", "Multi-location Support", "Offline Mode"],
      color: "from-violet-600 to-purple-600",
      iconColor: "text-violet-500",
      gradient: "bg-gradient-to-br from-violet-900/20 to-purple-900/10",
      delay: 0
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Startup Services",
      description: "Transform your product idea into a working prototype and take your business into the next dimension.",
      features: ["MVP Development", "Product Strategy", "Tech Stack Selection", "Investor-ready Demos"],
      color: "from-emerald-600 to-green-600",
      iconColor: "text-emerald-500",
      gradient: "bg-gradient-to-br from-emerald-900/20 to-green-900/10",
      delay: 0.1
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Application Development",
      description: "Web applications developed with latest tech-garnishes for optimal performance and user experience.",
      features: ["Progressive Web Apps", "Cross-platform", "Microservices", "API Integration"],
      color: "from-blue-600 to-cyan-600",
      iconColor: "text-blue-500",
      gradient: "bg-gradient-to-br from-blue-900/20 to-cyan-900/10",
      delay: 0.2
    }
  ];

  const additionalSolutions = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Create centralized, secure internal communications and customer-facing platforms with our web applications.",
      features: ["Enterprise Portals", "E-commerce Solutions", "CMS Development", "Secure Backends"],
      color: "from-amber-600 to-orange-600",
      iconColor: "text-amber-500",
      gradient: "bg-gradient-to-br from-amber-900/20 to-orange-900/10",
      delay: 0.3
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & ML Solutions",
      description: "Transform your business perception with cutting-edge AI & ML capabilities and automation.",
      features: ["Predictive Analytics", "Chatbots & NLP", "Computer Vision", "Process Automation"],
      color: "from-pink-600 to-rose-600",
      iconColor: "text-pink-500",
      gradient: "bg-gradient-to-br from-pink-900/20 to-rose-900/10",
      delay: 0.4
    }
  ];

  const keyMetrics = [
    { value: "99.9%", label: "System Uptime", icon: <Shield className="w-6 h-6" />, color: "text-violet-500" },
    { value: "50%+", label: "Faster Checkout", icon: <Zap className="w-6 h-6" />, color: "text-emerald-500" },
    { value: "24/7", label: "Technical Support", icon: <RefreshCw className="w-6 h-6" />, color: "text-blue-500" },
    { value: "100+", label: "Integrations", icon: <Database className="w-6 h-6" />, color: "text-amber-500" }
  ];

  const features = [
    {
      category: "POS System Features",
      items: [
        { icon: <ShoppingCart className="w-6 h-6" />, text: "Real-time inventory management and tracking", color: "text-violet-500" },
        { icon: <Receipt className="w-6 h-6" />, text: "Digital receipts and invoice generation", color: "text-emerald-500" },
        { icon: <Printer className="w-6 h-6" />, text: "Multi-device printer and scanner support", color: "text-blue-500" }
      ]
    },
    {
      category: "Development Excellence",
      items: [
        { icon: <Server className="w-6 h-6" />, text: "Scalable cloud infrastructure and deployment", color: "text-violet-500" },
        { icon: <Lock className="w-6 h-6" />, text: "Enterprise-grade security and compliance", color: "text-emerald-500" },
        { icon: <BarChart3 className="w-6 h-6" />, text: "Real-time analytics and reporting dashboards", color: "text-blue-500" }
      ]
    },
    {
      category: "Business Support",
      items: [
        { icon: <Users className="w-6 h-6" />, text: "24/7 customer support and maintenance", color: "text-violet-500" },
        { icon: <Cloud className="w-6 h-6" />, text: "Cloud backup and disaster recovery", color: "text-emerald-500" },
        { icon: <Wifi className="w-6 h-6" />, text: "Offline mode with automatic sync", color: "text-blue-500" }
      ]
    }
  ];

  const aiFeatures = [
    "Predictive Inventory Management",
    "Customer Behavior Analytics",
    "Automated Report Generation",
    "Smart Recommendation Engines",
    "Fraud Detection Systems",
    "Voice-enabled Commands"
  ];

  return (
    <section className="relative w-full bg-black text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
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
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 mb-6 md:mb-8">
            <div className="w-2 h-2 rounded-full bg-violet-500"></div>
            <span className="text-sm font-medium text-gray-300 tracking-wider">TECHNOLOGY SOLUTIONS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1]">
            <span className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent">
              Comprehensive
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Tech Solutions
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            We deliver cutting-edge technology solutions that drive business growth, 
            enhance operational efficiency, and transform customer experiences.
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 md:mb-24"
        >
          {keyMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="relative bg-gradient-to-b from-gray-900/40 to-gray-900/20 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 sm:p-6 hover:border-violet-500/30 transition-all duration-500">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
                    <div className={metric.color}>
                      {metric.icon}
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500 font-medium tracking-wider">METRIC</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-xs sm:text-sm text-gray-400 font-light tracking-wide">{metric.label}</div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Solutions Grid */}
        <div className="mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-100"
          >
            Core Technology Solutions
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: solution.delay }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative h-full"
                onMouseEnter={() => setActiveHover(index)}
                onMouseLeave={() => setActiveHover(null)}
              >
                {/* Card Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${solution.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                
                {/* Card */}
                <div className="relative bg-gradient-to-b from-gray-900/50 to-gray-900/20 backdrop-blur-lg border border-gray-800 rounded-3xl p-6 md:p-8 hover:border-gray-700 transition-all duration-500 h-full">
                  {/* Icon Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-xl ${solution.gradient} border border-gray-800`}>
                      <div className={solution.iconColor}>
                        {solution.icon}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 font-medium tracking-wider px-3 py-1 rounded-full border border-gray-800">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4 leading-snug">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 mb-6 md:mb-8 leading-relaxed font-light text-sm md:text-base">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 md:space-y-4">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color}`}></div>
                        <span className="text-sm text-gray-300 font-medium tracking-wide">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Section */}
                  <div className="mt-8 md:mt-10 pt-6 border-t border-gray-800/50">
                    <button className="flex items-center gap-3 text-sm font-medium text-gray-400 hover:text-white transition-colors group">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Solutions Grid */}
        <div className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {additionalSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: solution.delay }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative h-full"
                onMouseEnter={() => setActiveHover(index + 3)}
                onMouseLeave={() => setActiveHover(null)}
              >
                {/* Card Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${solution.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                
                {/* Card */}
                <div className="relative bg-gradient-to-b from-gray-900/50 to-gray-900/20 backdrop-blur-lg border border-gray-800 rounded-3xl p-6 md:p-8 hover:border-gray-700 transition-all duration-500 h-full">
                  {/* Icon Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-xl ${solution.gradient} border border-gray-800`}>
                      <div className={solution.iconColor}>
                        {solution.icon}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 font-medium tracking-wider px-3 py-1 rounded-full border border-gray-800">
                      0{index + 4}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4 leading-snug">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 mb-6 md:mb-8 leading-relaxed font-light text-sm md:text-base">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 md:space-y-4">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color}`}></div>
                        <span className="text-sm text-gray-300 font-medium tracking-wide">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Section */}
                  <div className="mt-8 md:mt-10 pt-6 border-t border-gray-800/50">
                    <button className="flex items-center gap-3 text-sm font-medium text-gray-400 hover:text-white transition-colors group">
                      <span>Learn More</span>
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
          className="mb-16 md:mb-24"
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Platform Capabilities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Enterprise-grade features designed to support modern business operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                className="space-y-4 md:space-y-6"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-purple-500"></div>
                  {section.category}
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-gradient-to-b from-gray-900/30 to-transparent border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 group/feature">
                      <div className="p-2 rounded-lg bg-gray-900/50 border border-gray-800">
                        <div className={item.color}>
                          {item.icon}
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed flex-1 group-hover/feature:text-gray-100 transition-colors duration-300">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI & ML Highlight Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 md:mb-24"
        >
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
            
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)`
            }}></div>

            {/* Content */}
            <div className="relative p-6 md:p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 mb-6">
                    <Cpu className="w-4 h-4 text-pink-500" />
                    <span className="text-sm font-medium text-gray-300">AI & ML SOLUTIONS</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
                    Transform Your Business with<br />
                    <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
                      Artificial Intelligence
                    </span>
                  </h3>

                  <p className="text-gray-400 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                    Leverage the power of AI and Machine Learning to automate processes, 
                    gain valuable insights, and deliver personalized experiences to your customers.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                    {aiFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a href="/services">
                  <button className="group relative px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative flex items-center justify-center gap-3 text-base md:text-lg">
                      Explore Services
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {[
                    { icon: <Brain className="w-7 h-7 md:w-8 md:h-8" />, title: "Smart Analytics", color: "from-pink-500 to-rose-500" },
                    { icon: <MessageSquare className="w-7 h-7 md:w-8 md:h-8" />, title: "AI Chatbots", color: "from-purple-500 to-violet-500" },
                    { icon: <Webhook className="w-7 h-7 md:w-8 md:h-8" />, title: "Automation", color: "from-blue-500 to-cyan-500" },
                    { icon: <BarChart3 className="w-7 h-7 md:w-8 md:h-8" />, title: "Predictions", color: "from-emerald-500 to-green-500" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -6, scale: 1.05 }}
                      className="group/ai bg-gradient-to-b from-gray-900/50 to-gray-900/20 border border-gray-800 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-gray-700 transition-all duration-300"
                    >
                      <div className={`p-2 md:p-3 rounded-lg bg-gradient-to-br ${item.color} mb-3 md:mb-4 w-fit`}>
                        <div className="text-white">{item.icon}</div>
                      </div>
                      <h4 className="text-base md:text-lg font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-xs md:text-sm text-gray-400">Advanced AI capabilities for business growth</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
            
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)`
            }}></div>

            {/* Content */}
            <div className="relative p-6 md:p-8 lg:p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 mb-6">
                  <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-300">GET STARTED</span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
                  Ready to Transform Your<br />Business with Technology?
                </h3>

                <p className="text-gray-400 mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
                  Schedule a consultation with our experts to discuss your requirements 
                  and receive a customized solution blueprint for your business.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative flex items-center justify-center gap-3 text-base md:text-lg">
                      Schedule Consultation
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                  </a>
                </div>

                <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-gray-800/50">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-xs md:text-sm text-gray-500">
                    <div className="text-center">
                      <div className="font-semibold text-gray-400 mb-1">Expert Team</div>
                      <div>Certified Professionals</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-400 mb-1">Fast Delivery</div>
                      <div>Agile Development</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-400 mb-1">24/7 Support</div>
                      <div>Round-the-Clock</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-400 mb-1">Scalable</div>
                      <div>Future-Proof Solutions</div>
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
          <motion.div
            key={i}
            className="absolute w-[1px] h-[1px] bg-gradient-to-r from-violet-400/30 to-purple-400/30 rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              opacity: p.opacity,
              boxShadow: `0 0 10px 1px rgba(139, 92, 246, ${p.opacity * 0.5})`
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
    </section>
  );
};

export default Solutions;