import React from "react";

const stats = [
  { value: "14+", label: "yrs\nExperience" },
  { value: "Adobe", label: "Certified\nExpert" },
  { value: "Global", label: "Client\nExposure" },
  { value: "Scalable", label: "Archi-\ntectures" },
];

const bentoCards = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "14 yrs e-Commerce",
    desc: "Deep expertise across every commerce layer — storefronts, supply chains, and enterprise scale.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Adobe Certified Expert",
    desc: "Business Solution Specialist operating at the intersection of technology and commerce.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Global Client Exposure",
    desc: "Delivered projects in the US, UK, Singapore, and beyond for international enterprise clients.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "System Architecture",
    desc: "Built scalable, compounding architectures that power high-growth commerce platforms.",
  },
];

const tags = ["B2B Commerce", "Adobe Certified", "System Architecture", "Enterprise Strategy"];

export default function FounderPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000000",
        color: "#e8e8e8",
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 420px",
          gap: 64,
          alignItems: "start",
        }}
      >
        {/* LEFT — Text + Bento */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {/* Eyebrow */}
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "#3b9eff",
              textTransform: "uppercase",
              margin: "0 0 20px 0",
            }}
          >
            + AADHNIK PVT. LTD.
          </p>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              margin: "0 0 20px 0",
              color: "#ffffff",
            }}
          >
            Pradeep Kumar{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3b9eff 0%, #a855f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Mishra
            </span>
          </h1>

          {/* Role + Location */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#a0a0a0",
                letterSpacing: "0.02em",
              }}
            >
              Co-founder & CEO
            </span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#3b9eff", display: "inline-block" }} />
            <span style={{ fontSize: 14, color: "#666" }}>Lucknow, India</span>
          </div>

          {/* Quote */}
          <blockquote
            style={{
              borderLeft: "3px solid #3b9eff",
              margin: "0 0 36px 0",
              paddingLeft: 18,
              color: "#b0b0b0",
              fontSize: 15,
              lineHeight: 1.65,
              fontStyle: "italic",
            }}
          >
            "Enterprise tech should empower humans, not burden them with admin. We're building the tools I wish existed when I was in the field."
          </blockquote>

          {/* Vetted badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              background: "#141414",
              border: "1px solid #222",
              borderRadius: 12,
              padding: "12px 18px",
              marginBottom: 36,
              width: "fit-content",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 10, color: "#3b9eff", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Vetted by</div>
              <div style={{ fontSize: 13, color: "#fff", fontWeight: 700, marginTop: 2 }}>Toptal</div>
            </div>
            <div style={{ width: 1, height: 36, background: "#2a2a2a" }} />
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#ffffff", lineHeight: 1 }}>TOP 3%</div>
              <div style={{ fontSize: 10, color: "#888", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 3 }}>TALENT</div>
            </div>
            <a
              href="https://www.toptal.com/developers/resume/pradeep-mishra#qyY46W"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: 8,
                padding: "8px 16px",
                background: "#3b9eff",
                color: "#fff",
                fontSize: 12,
                fontWeight: 600,
                borderRadius: 8,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              Hire me ↗
            </a>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 12,
              marginBottom: 36,
            }}
          >
            {stats.map((s) => (
              <div
                key={s.value}
                style={{
                  background: "#111",
                  border: "1px solid #1e1e1e",
                  borderRadius: 12,
                  padding: "14px 12px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", lineHeight: 1 }}>{s.value}</div>
                <div
                  style={{
                    fontSize: 10,
                    color: "#666",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginTop: 5,
                    lineHeight: 1.4,
                    whiteSpace: "pre-line",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div style={{ marginBottom: 32 }}>
            <p
              style={{
                fontSize: 13,
                color: "#888",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              14 years of e-Commerce distilled into one platform.
            </p>
            <p style={{ fontSize: 14.5, color: "#a0a0a0", lineHeight: 1.75, margin: "0 0 14px 0" }}>
              Pradeep brings over 14 years of deep e-Commerce expertise to Aadhnik Technologies, delivering solutions for clients across the United States, Singapore, United Kingdom, and other international markets. Having worked across every layer of the commerce ecosystem—from storefront operations and customer experience to supply chain optimization and enterprise-scale solutions—he combines technical excellence with real-world business understanding.
            </p>
            <p style={{ fontSize: 14.5, color: "#a0a0a0", lineHeight: 1.75, margin: "0 0 14px 0" }}>
              A certified Adobe Expert and Business Solution Specialist, he operates at the intersection of technology and commerce — combining system architecture with real-world business complexity.
            </p>
            <p style={{ fontSize: 14.5, color: "#a0a0a0", lineHeight: 1.75, margin: 0 }}>
              He founded Aadhnik Technologies with a clear conviction: sales teams deserve better tools — transparent, fast, and built for the people who actually use them.
            </p>
          </div>

          {/* Bento grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginBottom: 32,
            }}
          >
            {bentoCards.map((card) => (
              <div
                key={card.title}
                style={{
                  background: "#111",
                  border: "1px solid #1e1e1e",
                  borderRadius: 14,
                  padding: "18px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "#3b9eff" }}>{card.icon}</span>
                  <span style={{ fontSize: 13.5, fontWeight: 700, color: "#e8e8e8" }}>{card.title}</span>
                </div>
                <p style={{ fontSize: 12.5, color: "#777", lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "6px 14px",
                  background: "#141414",
                  border: "1px solid #252525",
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#888",
                  letterSpacing: "0.02em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="https://www.toptal.com/developers/resume/pradeep-mishra#qyY46W"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "14px 28px",
                background: "#3b9eff",
                color: "#fff",
                fontSize: 14,
                fontWeight: 700,
                borderRadius: 999,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                letterSpacing: "0.01em",
              }}
            >
              Hire Me ↗
            </a>
            <a
              href="#"
              style={{
                padding: "14px 28px",
                background: "transparent",
                color: "#e8e8e8",
                fontSize: 14,
                fontWeight: 600,
                borderRadius: 999,
                textDecoration: "none",
                border: "1px solid #2a2a2a",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Book a Call ↗
            </a>
          </div>
        </div>

        {/* RIGHT — Photo card */}
        <div style={{ position: "sticky", top: 48 }}>
          <div
            style={{
              position: "relative",
              borderRadius: 20,
              overflow: "hidden",
              background: "#111",
              
            }}
          >
            {/* Placeholder photo — replace src with real image */}
            <div
              style={{
                width: "100%",
                aspectRatio: "3/4",
                background: "linear-gradient(160deg, #1a1a2e 0%, #0f3460 40%, #16213e 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {/* Replace this div with an <img> tag pointing to Pradeep's actual photo */}
              <img
                src="/pradeep.png"
                alt="Pradeep Kumar Mishra"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
}