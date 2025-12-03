"use client";

export default function FinalCTA() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-black overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner.png')" }}
      >
        
      </div>
      
      {/* Content Container */}
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* Question Text */}
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed mb-10">
          Ready to build a frictionless ecommerce experience, automate operations, and scale to thousands of orders effortlessly?
        </h2>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary Button - Start building for free */}
          <button className="
            relative
            px-8 py-4
            bg-white
            text-black
            font-medium
            rounded-lg
            hover:bg-gray-100
            transition-all duration-300
            group
            overflow-hidden
            w-full sm:w-auto
          ">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Your E-commerce
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            {/* Hover shine effect */}
            <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
          </button>

          {/* Secondary Button - Talk to sales */}
          <button className="
            relative
            px-8 py-4
            bg-transparent
            text-white
            font-medium
            rounded-lg
            border border-gray-700
            hover:border-gray-500
            hover:bg-white/5
            transition-all duration-300
            group
            w-full sm:w-auto
          ">
            <span className="relative z-10">Book a Call</span>
            {/* Subtle hover effect */}
            <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>

      </div>

      {/* Optional: Add a subtle gradient overlay on top of image */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/30 pointer-events-none"></div>
    </section>
  );
}