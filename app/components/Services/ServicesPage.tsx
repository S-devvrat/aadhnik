"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  Terminal, 
  Rocket, 
  Code, 
  Globe, 
  Brain,
  ShoppingCart,
  Users,
  Shield,
  Zap,
  Database,
  Cpu,
  RefreshCw,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Star,
  Award,
  Target,
  Layers,
  MessageSquare,
  Palette,
  TrendingUp,
  Headphones,
  Wallet,
  Microscope,
  Printer,
  Smartphone,
  BarChart3,
  Cloud,
  Lock,
  Fingerprint,
  SmartphoneCharging,
  CircuitBoard
} from "lucide-react";

const ServicesPage = () => {
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
      opacity: 0.1 + Math.random() * 0.3,
    }));

    setParticles(arr);
  }, []);

  const services = [
    {
      icon: <Terminal className="w-12 h-12" />,
      title: "POS Systems",
      description: "Scalable and customized POS solutions tailored to your business needs, from retail stores to restaurants and beyond.",
      features: ["Custom Hardware Integration", "Real-time Inventory", "Multi-location Support", "Offline Mode"],
      color: "from-violet-600 to-purple-600",
      iconColor: "text-violet-500",
      gradient: "bg-gradient-to-br from-violet-900/20 to-purple-900/10"
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Startup Services",
      description: "Transform your product idea into a working prototype and take your business into the next dimension.",
      features: ["MVP Development", "Product Strategy", "Tech Stack Selection", "Investor-ready Demos"],
      color: "from-emerald-600 to-green-600",
      iconColor: "text-emerald-500",
      gradient: "bg-gradient-to-br from-emerald-900/20 to-green-900/10"
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Application Development",
      description: "Web applications developed with latest tech-garnishes for optimal performance and user experience.",
      features: ["Progressive Web Apps", "Cross-platform", "Microservices", "API Integration"],
      color: "from-blue-600 to-cyan-600",
      iconColor: "text-blue-500",
      gradient: "bg-gradient-to-br from-blue-900/20 to-cyan-900/10"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web Development",
      description: "Create centralized, secure internal communications and customer-facing platforms with our web applications.",
      features: ["Enterprise Portals", "E-commerce Solutions", "CMS Development", "Secure Backends"],
      color: "from-amber-600 to-orange-600",
      iconColor: "text-amber-500",
      gradient: "bg-gradient-to-br from-amber-900/20 to-orange-900/10"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI & ML Solutions",
      description: "Transform your business perception with cutting-edge AI & ML capabilities and automation.",
      features: ["Predictive Analytics", "Chatbots & NLP", "Computer Vision", "Process Automation"],
      color: "from-pink-600 to-rose-600",
      iconColor: "text-pink-500",
      gradient: "bg-gradient-to-br from-pink-900/20 to-rose-900/10"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Big Data Analytics",
      description: "Data processing, analytics, and insights for informed decision making and business growth.",
      features: ["Data Warehousing", "Real-time Analytics", "Business Intelligence", "Data Visualization"],
      color: "from-indigo-600 to-purple-600",
      iconColor: "text-indigo-500",
      gradient: "bg-gradient-to-br from-indigo-900/20 to-purple-900/10"
    }
  ];

  const specializedServices = [
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "E-commerce Solutions",
      description: "Complete online store development with secure payment integration and inventory management",
      color: "from-violet-600 to-purple-600"
    },
    {
      icon: <Wallet className="w-10 h-10" />,
      title: "FinTech Applications",
      description: "Secure financial technology solutions, banking platforms, and payment gateways",
      color: "from-emerald-600 to-green-600"
    },
    {
      icon: <Microscope className="w-10 h-10" />,
      title: "Healthcare Tech",
      description: "Medical software, patient management systems, and healthcare analytics",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: <Printer className="w-10 h-10" />,
      title: "Hardware Integration",
      description: "POS hardware, IoT devices, and custom hardware solutions integration",
      color: "from-amber-600 to-orange-600"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Understanding your business needs, goals, and technical requirements",
      icon: <Target className="w-8 h-8" />,
      color: "from-violet-600 to-purple-600"
    },
    {
      step: "02",
      title: "Planning & Strategy",
      description: "Creating a detailed project plan and technology roadmap",
      icon: <Layers className="w-8 h-8" />,
      color: "from-emerald-600 to-green-600"
    },
    {
      step: "03",
      title: "Design & Prototyping",
      description: "Developing UI/UX designs and functional prototypes",
      icon: <Palette className="w-8 h-8" />,
      color: "from-blue-600 to-cyan-600"
    },
    {
      step: "04",
      title: "Development",
      description: "Building the solution with agile methodologies",
      icon: <Code className="w-8 h-8" />,
      color: "from-amber-600 to-orange-600"
    },
    {
      step: "05",
      title: "Testing & Quality",
      description: "Comprehensive testing and quality assurance",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-pink-600 to-rose-600"
    },
    {
      step: "06",
      title: "Deployment & Support",
      description: "Launching and providing ongoing maintenance",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-indigo-600 to-purple-600"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Performance",
      description: "Optimized solutions for speed and efficiency",
      color: "from-violet-600 to-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security and data protection",
      color: "from-emerald-600 to-green-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalable Solutions",
      description: "Architected to grow with your business",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Agile Development",
      description: "Flexible and adaptive development process",
      color: "from-amber-600 to-orange-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Skilled developers and industry experts",
      color: "from-pink-600 to-rose-600"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  return (
    <div className="relative w-full bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/50 to-black"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.3) 0%, transparent 25%),
                           radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.3) 0%, transparent 25%)`,
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

      {/* Accent Lights */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-violet-600/5 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-gradient-to-r from-violet-400/40 to-purple-400/40 rounded-full"
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

      <div className="relative z-10 max-w-7xl mt-10 lg:mt-2   mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20 md:mb-28 px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 sm:px-6 py-3 rounded-full bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 mb-8 md:mb-10 shadow-2xl shadow-violet-900/20"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-300 tracking-wider uppercase">OUR SERVICES</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-8 md:mb-10 leading-[1.1] px-4">
            <span className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent">
              Comprehensive
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Tech Solutions
            </span>
          </h1>

          <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto px-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 md:mb-12 font-light tracking-wide"
            >
              We deliver cutting-edge technology solutions that drive business growth, 
              enhance operational efficiency, and transform customer experiences across industries.
            </motion.p>
          </div>
        </motion.div>

        {/* Services Grid - Fixed Icons and Hover */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-32 px-4"
        >
          <div className="text-center mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 sm:px-6 py-3 rounded-full bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 mb-6"
            >
              <Sparkles className="w-5 h-5 text-violet-500" />
              <span className="text-sm font-semibold text-gray-300 uppercase">Core Services</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                What We Offer
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end technology solutions designed to solve complex business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -15, scale: 1.02 }}
                
                className="relative group h-full"
                onMouseEnter={() => setActiveHover(index)}
                onMouseLeave={() => setActiveHover(null)}
              >
                {/* Background Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-gray-900/70 to-gray-900/40 backdrop-blur-xl border border-gray-800/60 rounded-3xl p-6 md:p-8 lg:p-10 h-full flex flex-col transition-all duration-500 group-hover:border-gray-700/80 group-hover:shadow-2xl group-hover:shadow-violet-900/30 overflow-hidden">
                  
                  {/* Icon Container */}
                  <div className="relative mb-6 md:mb-8">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    <div className="relative p-4 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 group-hover:border-transparent transition-all duration-500 w-fit">
                      <div className={service.iconColor}>
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 md:mb-8 leading-relaxed text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 group/feature">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} opacity-70 group-hover/feature:opacity-100 transition-opacity duration-300`}></div>
                          <span className="text-sm text-gray-300 group-hover/feature:text-white transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="mt-auto pt-6 md:pt-8 border-t border-gray-800/50 relative">
                    <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
                    <div className={`absolute -top-px left-0 right-0 h-px bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-x-100 scale-x-0 origin-left`}></div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                        <span>Explore service</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                      <div className="text-xs text-gray-600 font-medium px-3 py-1 rounded-full border border-gray-800">
                        0{index + 1}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specialized Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-20 md:mb-32 px-4"
        >
          <div className="text-center mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 sm:px-6 py-3 rounded-full bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 mb-6"
            >
              <Award className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-semibold text-gray-300 uppercase">Specialized Services</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Industry-Specific Solutions
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored technology solutions for specific industry verticals
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group h-full"
              >
                <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-900/20 backdrop-blur-lg border border-gray-800/50 rounded-3xl p-6 md:p-8 h-full hover:border-gray-700 transition-all duration-500 overflow-hidden">
                  
                  {/* Icon */}
                  <div className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 w-fit mb-6">
                    <div className={service.color.includes("violet") ? "text-violet-500" : 
                                   service.color.includes("emerald") ? "text-emerald-500" :
                                   service.color.includes("blue") ? "text-blue-500" : "text-amber-500"}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6 text-sm md:text-base">{service.description}</p>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 md:mb-32 px-4"
        >
          <div className="text-center mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 sm:px-6 py-3 rounded-full bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 mb-6"
            >
              <Layers className="w-5 h-5 text-violet-500" />
              <span className="text-sm font-semibold text-gray-300 uppercase">Our Process</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                How We Work
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              A systematic approach to delivering high-quality solutions on time and within budget
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group h-full"
              >
                <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-900/20 backdrop-blur-lg border border-gray-800/50 rounded-3xl p-6 md:p-8 h-full hover:border-violet-500/30 transition-all duration-500 overflow-hidden">
                  
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-20`}>
                      {step.step}
                    </div>
                    <div className="p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
                      <div className={step.color.includes("violet") ? "text-violet-500" : 
                                     step.color.includes("emerald") ? "text-emerald-500" :
                                     step.color.includes("blue") ? "text-blue-500" : 
                                     step.color.includes("amber") ? "text-amber-500" :
                                     step.color.includes("pink") ? "text-pink-500" : "text-indigo-500"}>
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">{step.title}</h3>
                  <p className="text-gray-400 mb-6 text-sm md:text-base">{step.description}</p>

                  {/* Progress Line */}
                  <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} w-0 group-hover:w-full transition-all duration-1000 ease-out`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20 md:mb-32 px-4"
        >
          <div className="text-center mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 sm:px-6 py-3 rounded-full bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 mb-6"
            >
              <Star className="w-5 h-5 text-violet-500" />
              <span className="text-sm font-semibold text-gray-300 uppercase">Why Choose Us</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Our Advantages
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group h-full"
              >
                <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-900/20 backdrop-blur-lg border border-gray-800/50 rounded-3xl p-6 md:p-8 h-full hover:border-violet-500/30 transition-all duration-500 overflow-hidden">
                  
                  {/* Icon */}
                  <div className="p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 w-fit mb-6">
                    <div className={benefit.color.includes("violet") ? "text-violet-500" : 
                                   benefit.color.includes("emerald") ? "text-emerald-500" :
                                   benefit.color.includes("blue") ? "text-blue-500" : 
                                   benefit.color.includes("amber") ? "text-amber-500" :
                                   benefit.color.includes("pink") ? "text-pink-500" : "text-indigo-500"}>
                      {benefit.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base">{benefit.description}</p>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center px-4"
        >
          <div className="relative rounded-3xl overflow-hidden mb-12 md:mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)`
            }}></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-4 sm:px-6 py-3 rounded-full bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 mb-6 md:mb-8"
              >
                <MessageSquare className="w-5 h-5 text-violet-500" />
                <span className="text-sm font-semibold text-gray-300 uppercase">Start Your Project</span>
              </motion.div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 md:mb-10 leading-tight">
                Ready to Transform Your<br />
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Business with Technology?
                </span>
              </h3>

              <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
                Let&apos;s discuss your project requirements and build a solution that exceeds your expectations
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <a href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-violet-500/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="relative flex items-center justify-center gap-3 md:gap-4 text-base md:text-lg">
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </motion.button>
                </a>
              </div>

              <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-gray-800/50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-sm text-gray-500">
                  <div className="text-center group">
                    <div className="font-bold text-gray-400 mb-2 group-hover:text-white transition-colors duration-300">100+ Projects</div>
                    <div className="group-hover:text-gray-300 transition-colors duration-300 text-xs md:text-sm">Successfully Delivered</div>
                  </div>
                  <div className="text-center group">
                    <div className="font-bold text-gray-400 mb-2 group-hover:text-white transition-colors duration-300">24/7 Support</div>
                    <div className="group-hover:text-gray-300 transition-colors duration-300 text-xs md:text-sm">Technical Assistance</div>
                  </div>
                  <div className="text-center group">
                    <div className="font-bold text-gray-400 mb-2 group-hover:text-white transition-colors duration-300">Agile Process</div>
                    <div className="group-hover:text-gray-300 transition-colors duration-300 text-xs md:text-sm">Flexible Development</div>
                  </div>
                  <div className="text-center group">
                    <div className="font-bold text-gray-400 mb-2 group-hover:text-white transition-colors duration-300">Industry Experts</div>
                    <div className="group-hover:text-gray-300 transition-colors duration-300 text-xs md:text-sm">Certified Team</div>
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

export default ServicesPage;