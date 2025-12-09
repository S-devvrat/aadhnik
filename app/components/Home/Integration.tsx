"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const codeSamples = {
  python: `from aadhnik import Client

client = Client(api_key="YOUR_KEY")

response = client.deploy(
  project="digital-system",
  auto_scale=True,
  monitoring=True
)
print(response)
`,
  laravel: `<?php

use Aadhnik\\Client;

$client = new Client(env('AADHNIK_KEY'));

return $client->deploy([
  "project" => "digital-system",
  "auto_scale" => true,
  "monitoring" => true,
]);
`,
  angular: `import { AadhnikService } from '@aadhnik/sdk';

constructor(private aadhnik: AadhnikService) {}

async deploy() {
  await this.aadhnik.deploy({
    project: 'digital-system',
    autoScale: true,
    monitoring: true
  });
}
`,
  react: `import { useAadhnik } from '@aadhnik/react-sdk';

function DeploymentComponent() {
  const { deploy } = useAadhnik();
  
  const handleDeploy = async () => {
    await deploy({
      project: 'digital-system',
      autoScale: true,
      monitoring: true
    });
  };
  
  return <button onClick={handleDeploy}>Deploy</button>;
}
`,
};

const techIcons = [
  { src: "/Toolsimage/react.avif", label: "React" },
  { src: "/Toolsimage/express-js.avif", label: "Express.js" },
  { src: "/Toolsimage/figma.avif", label: "Figma" },
  { src: "/Toolsimage/next-js.avif", label: "Next.js" },
  { src: "/Toolsimage/firebase.avif", label: "Firebase" },
  { src: "/Toolsimage/shopify (1).avif", label: "Shopify" },
  { src: "/Toolsimage/tailwind.avif", label: "Tailwind CSS" },
  { src: "/Toolsimage/vercel.avif", label: "Vercel" },
  { src: "/Toolsimage/node-js.png", label: "Node.js" },
];

export default function Integration() {
  const [active, setActive] = useState<keyof typeof codeSamples>("python");

  // 📌 Animation controls for marquees
  const controls = useAnimation();
  const controls2 = useAnimation();

  // 📌 Auto-scroll start on mount (desktop)
  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  // 📌 Auto-scroll start (mobile)
  useEffect(() => {
    controls2.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls2]);

  return (
    <section className="w-full bg-black text-white py-16 md:py-28 px-4 sm:px-6 lg:px-20 relative overflow-hidden">

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 max-w-7xl mx-auto relative z-10">

        {/* MOBILE heading */}
        <div className="w-full lg:hidden mb-6 text-center">
          <span className="inline-block px-3 py-1.5 bg-white/10 border border-white/10 rounded-full text-xs sm:text-sm font-medium">
            Developer Experience
          </span>

          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mt-4">
            Supercharge your{" "}
            <span className="bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              E-Commerce & Web Apps
            </span>
            <br />
            with instant integrations.
          </h2>
        </div>

        {/* LEFT CODE BOX */}
        <div className="w-full lg:w-[50%] px-2 sm:px-0">
          <div className="bg-linear-to-br from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden shadow-white/5 shadow-[0_0_40px]">

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-4 text-sm font-mono text-gray-400">
                  deploy.{active === "python"
                    ? "py"
                    : active === "react"
                    ? "tsx"
                    : active === "angular"
                    ? "ts"
                    : "php"}
                </span>
              </div>

              <button className="text-xs text-gray-400 hover:text-white px-3 py-1 border border-gray-700 rounded-lg hover:border-gray-600 transition">
                Copy
              </button>
            </div>

            {/* TABS */}
            <div className="flex items-center px-6 pt-4 gap-2 border-b border-gray-800 overflow-x-auto scrollbar-hide">
              {Object.keys(codeSamples).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab as any)}
                  className={`relative px-5 py-3 font-mono text-sm transition ${
                    active === tab ? "text-white" : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {active === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/10 border-t border-white/20 rounded-t-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </span>
                </button>
              ))}
            </div>

            {/* CODE BLOCK */}
            <div className="relative p-6 font-mono min-h-[260px] bg-black/40">

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {/* Line numbers */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 text-right pr-2 text-gray-600 text-xs select-none">
                    {codeSamples[active].split("\n").map((_, i) => (
                      <div key={i} className="leading-6">{i + 1}</div>
                    ))}
                  </div>

                  {/* Code */}
                  <pre className="pl-10 text-gray-200 text-sm overflow-x-auto whitespace-pre">
                    <code>{codeSamples[active]}</code>
                  </pre>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-800 bg-black/50 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>Ready to deploy</span>
              </div>
              <span className="text-xs text-gray-500">AADHNIK SDK v2.0</span>
            </div>

          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="hidden lg:block lg:w-[50%] text-left">

          <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/10 rounded-full text-sm">
            Developer Experience
          </span>

          <h2 className="text-5xl font-semibold leading-tight mt-4">
            Supercharge your{" "}
            <span className="bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              E-Commerce & Web Apps
            </span>
            <br />
            with instant integrations.
          </h2>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl">
            From storefronts to admin dashboards, AADHNIK helps you ship
            E-commerce and web apps faster. Works seamlessly with modern
            frameworks, databases, and cloud platforms.
          </p>

          {/* DESKTOP MARQUEE */}
          <div className="relative mt-14 overflow-hidden select-none">

            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>

            <motion.div
              drag="x"
              dragElastic={0.1}
              dragConstraints={{ left: -500, right: 0 }}
              onDragStart={() => controls.stop()}
              onDragEnd={() =>
                controls.start({
                  x: ["0%", "-50%"],
                  transition: { duration: 18, repeat: Infinity, ease: "linear" },
                })
              }
              animate={controls}
              className="flex gap-16 whitespace-nowrap py-5 cursor-grab active:cursor-grabbing"
            >
              {[...techIcons, ...techIcons].map((icon, i) => (
                <img
                  key={i}
                  src={icon.src}
                  alt={icon.label}
                  className="h-14 w-14 opacity-70 hover:opacity-100 transition"
                />
              ))}
            </motion.div>

          </div>

        </div>

        {/* MOBILE MARQUEE BELOW CODE */}
        <div className="w-full lg:hidden mt-6 text-center text-gray-300 text-base">
          From storefronts to admin dashboards, AADHNIK helps you ship
          E-commerce and web apps faster.
        </div>

        <div className="w-full lg:hidden mt-8">
          <div className="relative overflow-hidden select-none">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>

            <motion.div
              drag="x"
              dragElastic={0.1}
              dragConstraints={{ left: -400, right: 0 }}
              onDragStart={() => controls2.stop()}
              onDragEnd={() =>
                controls2.start({
                  x: ["0%", "-50%"],
                  transition: { duration: 18, repeat: Infinity, ease: "linear" },
                })
              }
              animate={controls2}
              className="flex gap-10 whitespace-nowrap py-4 cursor-grab active:cursor-grabbing"
            >
              {[...techIcons, ...techIcons].map((icon, i) => (
                <img
                  key={i}
                  src={icon.src}
                  alt={icon.label}
                  className="h-10 w-10 opacity-70"
                />
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
