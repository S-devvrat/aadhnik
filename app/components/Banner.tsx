const stats = [
  {
    label: "Years of Experience",
    value: "5",
    suffix: "+",
    description:
      "Wealth of experience honed through years of hands-on involvement and continuous learning.",
  },
  {
    label: "Projects Completed",
    value: "12",
    suffix: "K",
    description:
      "Exceptional results delivered across metropolitan cities to remote rural communities.",
  },
  {
    label: "Awards Achieved",
    value: "6",
    suffix: "+",
    description:
      "Accolades standing as a testament to our unwavering commitment to excellence and innovation.",
  },
  {
    label: "Returned Clients",
    value: "87",
    suffix: "%",
    description:
      "This speaks volumes about the trust and satisfaction our clients have in our services.",
  },
];

export default function Banner() {
  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-blue-500/10"
      style={{ backgroundColor: "#070b14" }}
    >
      {/* Grid, fading toward the edges */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,.16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,.16) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 80% 65% at 50% 25%, black 35%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 65% at 50% 25%, black 35%, transparent 100%)",
        }}
      />

      {/* Ambient glows */}
      <div
        className="absolute -top-20 left-1/4 h-56 w-56 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(37,99,235,0.18)" }}
      />
      <div
        className="absolute -top-24 right-12 h-64 w-64 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(59,130,246,0.14)" }}
      />

      <div className="relative grid grid-cols-1 gap-x-8 gap-y-10 p-8 sm:grid-cols-2 sm:p-10 md:grid-cols-4 md:gap-y-0 md:divide-x md:divide-blue-500/10 md:p-14">
        {stats.map((stat) => (
          <div key={stat.label} className="md:px-8 md:first:pl-0 md:last:pr-0">
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
              {stat.label}
            </p>

            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-6xl font-extrabold leading-none tracking-tight text-white tabular-nums md:text-7xl">
                {stat.value}
              </span>
              <span className="text-2xl font-bold text-blue-500 md:text-3xl">
                {stat.suffix}
              </span>
            </div>

            <div className="my-5 h-px w-10 bg-white/10" />

            <p className="max-w-xs text-sm leading-relaxed text-slate-400 md:text-base">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}