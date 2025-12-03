import React from 'react'

const Marquee: React.FC = () => {
  const items = [
    "🚀 Next-Gen Technology • ",
    "⚡ AI-Powered Solutions • ",
    "🔗 Blockchain Integration • ",
    "☁️ Cloud Native • ",
    "📱 Mobile First • ",
    "🔒 Secure by Design • ",
    "⚛️ React 18 • ",
    "🔥 TypeScript • ",
    "✨ Tailwind CSS • ",
    "💾 Real-Time Data • "
  ];

  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden py-4 mt-10">
      <div className="relative flex">
        <div className="flex animate-marquee whitespace-nowrap">
          {repeatedItems.map((item, index) => (
            <span key={index} className="mx-6 text-white text-lg font-medium">
              {item}
            </span>
          ))}
        </div>
        
        <div className="flex animate-marquee whitespace-nowrap absolute">
          {repeatedItems.map((item, index) => (
            <span key={`dup-${index}`} className="mx-6 text-white text-lg font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 80s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default Marquee