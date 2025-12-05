"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <section className="w-full bg-black text-white py-16 md:py-28 px-4 sm:px-6 lg:px-20 relative overflow-hidden">
      {/* Subtle background pattern */}
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
        {/* MOBILE: Heading and tag on top */}
        <div className="w-full lg:hidden mb-6">
          <div className="mb-4 text-center">
            <span className="inline-block px-3 py-1.5 bg-linear-to-r from-white/10 to-white/5 border border-white/10 rounded-full text-xs sm:text-sm font-medium">
              Developer Experience
            </span>
          </div>
          
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold leading-tight text-center px-2">
            Integrate{" "}
            <span className="bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              AADHNIK
            </span>
            <br />
            into any stack in minutes.
          </h2>
        </div>

        {/* LEFT = ENHANCED CODE BOX - MOBILE FIXED */}
        <div className="w-full lg:w-[50%] px-2 sm:px-0">
          <div className="bg-linear-to-br from-gray-900 to-black rounded-2xl lg:rounded-3xl border border-gray-800 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.05)] lg:shadow-[0_0_60px_rgba(255,255,255,0.05)] hover:shadow-[0_0_80px_rgba(255,255,255,0.08)] transition-shadow duration-500">
            {/* Header with file info */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-3 sm:ml-4 text-xs sm:text-sm font-mono text-gray-400">
                  deploy.
                  {active === "python"
                    ? "py"
                    : active === "react"
                    ? "tsx"
                    : active === "angular"
                    ? "ts"
                    : "php"}
                </span>
              </div>

              {/* Copy button */}
              <button className="text-xs text-gray-400 hover:text-white px-2 py-1 sm:px-3 sm:py-1 border border-gray-700 rounded-lg hover:border-gray-600 transition-colors text-xs sm:text-xs">
                Copy
              </button>
            </div>

            {/* TABS - FIXED FOR MOBILE */}
            <div className="flex items-center px-3 sm:px-6 pt-3 sm:pt-4 gap-1 sm:gap-2 border-b border-gray-800 overflow-x-auto scrollbar-hide">
              {Object.keys(codeSamples).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab as any)}
                  className={`relative px-3 sm:px-5 py-2 sm:py-3 font-mono text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    active === tab
                      ? "text-white"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {active === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-linear-to-r from-white/5 to-white/10 border-t border-white/20 rounded-t-lg"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                    {tab === "python" && "🐍"}
                    {tab === "react" && "⚛️"}
                    {tab === "angular" && "🔺"}
                    {tab === "laravel" && "🌙"}
                    <span className="hidden xs:inline">
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </span>
                    <span className="xs:hidden">
                      {tab === "python" ? "Py" : 
                       tab === "react" ? "React" : 
                       tab === "angular" ? "Angular" : "Laravel"}
                    </span>
                  </span>
                </button>
              ))}
            </div>

            {/* CODE - Enhanced for mobile */}
            <div className="relative p-4 sm:p-6 font-mono leading-relaxed min-h-[200px] sm:min-h-[280px] bg-linear-to-b from-gray-900/50 to-black/50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 text-right pr-1 sm:pr-2 text-gray-600 select-none text-xs sm:text-xs">
                    {codeSamples[active].split("\n").map((_, i) => (
                      <div key={i} className="leading-5 sm:leading-6">
                        {i + 1}
                      </div>
                    ))}
                  </div>
                  <pre className="pl-8 sm:pl-10 text-[#e0e0e0] text-xs sm:text-sm overflow-x-auto whitespace-pre scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                    <code className="language-javascript">
                      {codeSamples[active]}
                    </code>
                  </pre>
                </motion.div>
              </AnimatePresence>

              {/* Syntax highlighting indicators - hide on very small screens */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-2 sm:gap-3 text-xs text-gray-500">
                <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-800 rounded text-[10px] sm:text-xs">async</span>
                <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-800 rounded text-[10px] sm:text-xs">await</span>
                <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-800 rounded text-[10px] sm:text-xs hidden xs:inline">API</span>
              </div>
            </div>

            {/* Footer */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-800 bg-black/50 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>Ready to deploy</span>
              </div>
              <div className="text-xs text-gray-500 font-mono">
                AADHNIK SDK v2.0
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT = CONTENT - DESKTOP ONLY */}
        <div className="hidden lg:block lg:w-[50%] text-center lg:text-left">
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 bg-linear-to-r from-white/10 to-white/5 border border-white/10 rounded-full text-sm font-medium mb-4">
              Developer Experience
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Integrate{" "}
            <span className="bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              AADHNIK
            </span>
            <br />
            into any stack in minutes.
          </h2>

          <p className="mt-6 text-gray-300 text-lg max-w-xl leading-relaxed">
            Clean APIs, zero lock-in, and first-class TypeScript support.
            AADHNIK works seamlessly across frontend frameworks, backend
            platforms, and cloud infrastructure.
          </p>

          {/* TECH ICON MARQUEE */}
          <div className="relative mt-14 overflow-hidden select-none group">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-black to-transparent z-10 pointer-events-none"></div>

            {/* Floating CTA — only on hover, desktop only */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="
                hidden md:flex
                items-center justify-center
                absolute left-1/2 -translate-x-1/2 bottom-8
                px-6 py-2
                z-30
                text-sm font-semibold
                text-black
                bg-linear-to-r from-purple-400 to-purple-600
                rounded-lg
                shadow-lg shadow-purple-500/20
                hover:shadow-purple-300/30
                border border-white/10
                hover:scale-[1.03]
                transition-all duration-300
              "
            >
              View Full Documentation →
            </motion.button>

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 18,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex gap-16 whitespace-nowrap py-5 group-hover:opacity-50 transition-all duration-300"
            >
              {[...techIcons, ...techIcons].map((icon, i) => (
                <img
                  key={i}
                  src={icon.src}
                  alt={icon.label}
                  className="
                    h-14 w-14 object-contain 
                    opacity-70 hover:opacity-100 
                    transition duration-300
                    "
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* MOBILE: Paragraph below code box */}
        <div className="w-full lg:hidden mt-6">
          <p className="text-gray-300 text-base sm:text-lg text-center leading-relaxed max-w-2xl mx-auto px-3 sm:px-4">
            Clean APIs, zero lock-in, and first-class TypeScript support.
            AADHNIK works seamlessly across frontend frameworks, backend
            platforms, and cloud infrastructure.
          </p>
        </div>

        {/* MOBILE: Tech icons marquee below paragraph */}
        <div className="w-full lg:hidden mt-8">
          <div className="relative overflow-hidden select-none">
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-linear-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-linear-to-l from-black to-transparent z-10 pointer-events-none"></div>

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 18,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex gap-8 sm:gap-12 whitespace-nowrap py-4"
            >
              {[...techIcons, ...techIcons].map((icon, i) => (
                <img
                  key={i}
                  src={icon.src}
                  alt={icon.label}
                  className="h-10 w-10 sm:h-12 sm:w-12 object-contain opacity-70"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}