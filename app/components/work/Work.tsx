"use client";
import { useState } from "react";
import HeroBanner from "../Hero-Banner";

const projects = [
  {
    id: 1,
    name: "TTG Wines",
    url: "https://ttgwines.com/",
    tagline: "Premium wine e-commerce, direct from the vineyard.",
    description:
      "A direct-to-consumer wine platform eliminating middlemen and retail overheads. Built for Through the Grapevine Wines, it offers curated red, white, and sparkling selections sourced from family-run vineyards — with a seamless Shopify-powered checkout experience.",
    category: "E-Commerce",
    previewType: "iframe",
    accentColor: "#7c2d45",
    badgeColor: "#fff0f3",
    badgeText: "🍷 Retail",
  },
  {
    id: 2,
    name: "FirstShake",
    url: "https://tryfirstshake.com/",
    tagline: "Creator marketing that actually delivers.",
    description:
      "A Shopify-native platform where creators buy your product first, create content second, and get paid third — eliminating ghosting and wasted budgets. Built to give brands full accountability over their influencer campaigns with a streamlined dashboard.",
    category: "SaaS · Marketing",
    previewType: "iframe",
    accentColor: "#2563eb",
    badgeColor: "#eff6ff",
    badgeText: "📊 SaaS",
  },
  {
    id: 3,
    name: "eSyncora CRM",
    url: "https://crm.esyncora.com/",
    tagline: "Relationship management, reimagined for scale.",
    description:
      "A full-featured CRM platform developed for eSyncora — enabling teams to manage leads, track pipelines, automate follow-ups, and centralise customer data. Designed for speed and clarity across sales and support workflows.",
    category: "CRM · Enterprise",
    previewType: "iframe",
    accentColor: "#0ea5e9",
    badgeColor: "#f0f9ff",
    badgeText: "🏢 Enterprise",
  },
  {
    id: 4,
    name: "eSyncora VMS",
    url: "https://vms.esyncora.com/",
    tagline: "Vendor relationships, managed end-to-end.",
    description:
      "A Vendor Management System for eSyncora that streamlines onboarding, contract tracking, and performance monitoring across a network of suppliers. Built with compliance and transparency at its core.",
    category: "VMS · Operations",
    previewType: "iframe",
    accentColor: "#6366f1",
    badgeColor: "#eef2ff",
    badgeText: "🔗 Operations",
  },
  {
    id: 5,
    name: "GST App",
    url: "https://gstapp.aadhniktech.com/",
    tagline: "India's GST compliance, simplified.",
    description:
      "An in-house GST filing and invoice management tool built by Aadhnik Technologies. Helps businesses generate GST-compliant invoices, file returns, reconcile ITC, and track tax liabilities — all within a clean, accessible interface.",
    category: "FinTech · Compliance",
    previewType: "dummy",
    accentColor: "#1d4ed8",
    badgeColor: "#eff6ff",
    badgeText: "🇮🇳 FinTech",
  },
];

const GSTDummyPreview = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #3b82f6 100%)",
      display: "flex",
      flexDirection: "column",
      fontFamily: "'SF Pro Display', -apple-system, sans-serif",
      overflow: "hidden",
      position: "relative",
    }}
  >
    

    
  </div>
);

const IframePreview = ({ url, name }: { url: string; name: string }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div style={{ width: "100%", height: "100%", position: "relative", background: "#0a0a0a" }}>
      {!loaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            color: "rgba(255,255,255,0.3)",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "2px solid rgba(255,255,255,0.1)",
              borderTop: "2px solid #3b82f6",
              animation: "spin 1s linear infinite",
            }}
          />
          <div style={{ fontSize: 11 }}>Loading {name}…</div>
        </div>
      )}
      <iframe
        src={url}
        style={{
          width: "200%",
          height: "200%",
          transform: "scale(0.5)",
          transformOrigin: "top left",
          border: "none",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.4s",
          pointerEvents: "none",
        }}
        onLoad={() => setLoaded(true)}
        title={name}
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
};

export default function Workpage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: "#fff",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        *
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #1e3a8a; border-radius: 3px; }
      `}</style>

     

      <HeroBanner
        title="Our Work"
        backgroundImage="/people.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Work" },
        ]}
      />

      {/* Grid */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          marginTop: 48,
          padding: "0 48px 100px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 480px), 1fr))",
          gap: 24,
        }}
      >
        {projects.map((project, i) => (
          <div
            key={project.id}
            onClick={() => window.open(project.url, "_blank", "noopener,noreferrer")}
            onMouseEnter={() => setHovered(project.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${hovered === project.id ? "rgba(59,130,246,0.4)" : "rgba(255,255,255,0.08)"}`,
              borderRadius: 20,
              overflow: "hidden",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              transform: hovered === project.id ? "translateY(-4px) scale(1.005)" : "translateY(0) scale(1)",
              boxShadow: hovered === project.id
                ? `0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(59,130,246,0.2), 0 0 40px rgba(59,130,246,0.08)`
                : "0 8px 32px rgba(0,0,0,0.4)",
              animation: `fadeUp 0.6s ease ${i * 0.1}s both`,
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Preview window */}
            <div
              style={{
                height: 240,
                position: "relative",
                overflow: "hidden",
                background: "#0a0a0a",
              }}
            >
              {/* Window chrome */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  zIndex: 10,
                  height: 28,
                  background: "rgba(0,0,0,0.8)",
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "0 12px",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                  <div
                    key={c}
                    style={{ width: 9, height: 9, borderRadius: "50%", background: c, opacity: 0.85 }}
                  />
                ))}
                <div
                  style={{
                    flex: 1,
                    marginLeft: 8,
                    background: "rgba(255,255,255,0.07)",
                    borderRadius: 5,
                    height: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 9,
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: 0.3,
                  }}
                >
                  {project.url.replace("https://", "").replace(/\/$/, "")}
                </div>
              </div>

              {/* Content */}
              <div style={{ position: "absolute", inset: 0, top: 28 }}>
                {project.previewType === "dummy" ? (
                  <GSTDummyPreview />
                ) : (
                  <IframePreview url={project.url} name={project.name} />
                )}
              </div>

              {/* Hover overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.7) 100%)`,
                  opacity: hovered === project.id ? 1 : 0,
                  transition: "opacity 0.3s",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  paddingBottom: 16,
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: "#fff",
                    background: "rgba(59,130,246,0.9)",
                    padding: "6px 16px",
                    borderRadius: 100,
                    fontWeight: 600,
                    letterSpacing: 0.3,
                    backdropFilter: "blur(6px)",
                  }}
                >
                  Visit Site ↗
                </div>
              </div>
            </div>

            {/* Card body */}
            <div style={{ padding: "20px 24px 24px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
                <div>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      letterSpacing: -0.5,
                      marginBottom: 4,
                      color: "#fff",
                    }}
                  >
                    {project.name}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#3b82f6",
                      fontWeight: 500,
                    }}
                  >
                    {project.tagline}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "rgba(255,255,255,0.4)",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 100,
                    padding: "4px 10px",
                    whiteSpace: "nowrap",
                    letterSpacing: 0.3,
                    flexShrink: 0,
                    marginLeft: 12,
                    marginTop: 2,
                  }}
                >
                  {project.badgeText}
                </div>
              </div>

              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.65,
                  marginBottom: 16,
                }}
              >
                {project.description}
              </p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.25)",
                    letterSpacing: 0.5,
                  }}
                >
                  {project.category}
                </div>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: hovered === project.id ? "#1d4ed8" : "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    color: "#fff",
                    transition: "background 0.25s",
                    flexShrink: 0,
                  }}
                >
                  ↗
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
}