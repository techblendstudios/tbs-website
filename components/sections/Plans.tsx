"use client";
import { useEffect } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface PlanFeatureGroup {
  category: string;
  items: string[];
}

interface PlanCardProps {
  name: string;
  price: string;
  tag?: string;
  features: PlanFeatureGroup[];
  recommended?: boolean;
  cta: string;
  accentTop?: boolean;
}

function PlanCard({ name, price, tag, features, recommended, cta, accentTop }: PlanCardProps) {
  return (
    <div
      className="plan-card"
      style={{
        padding: accentTop ? "64px 40px 48px" : "48px 40px",
        position: "relative",
        background: "#fff",
        borderTop: accentTop ? "2px solid #0A0A0A" : "1px solid #E8E8E6",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "24px",
        }}
      >
        <span
          className="plan-name"
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "11px",
            fontWeight: 300,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#999",
          }}
        >
          {name}
        </span>
        {recommended && (
          <span
            style={{
              background: "#0A0A0A",
              color: "#fff",
              fontFamily: "var(--font-dm-sans)",
              fontSize: "9px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "4px 10px",
            }}
          >
            Most Chosen
          </span>
        )}
      </div>

      {/* Price */}
      <div style={{ marginBottom: "32px" }}>
        <div
          className="plan-price"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 300,
            fontSize: "clamp(40px, 4vw, 60px)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            color: "#0A0A0A",
          }}
        >
          {price}
        </div>
        <div
          className="plan-note"
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "13px",
            fontWeight: 300,
            color: "#999",
            marginTop: "6px",
          }}
        >
          per month
        </div>
      </div>

      <div
        className="plan-rule rule"
        style={{ marginBottom: "32px" }}
      />

      {/* Features */}
      <div style={{ marginBottom: "40px", display: "flex", flexDirection: "column", gap: "24px" }}>
        {features.map((group) => (
          <div key={group.category}>
            <div
              className="plan-cat"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "10px",
                fontWeight: 300,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#999",
                marginBottom: "8px",
              }}
            >
              {group.category}
            </div>
            {group.items.map((item) => (
              <div
                key={item}
                className="plan-feature"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "#555",
                  lineHeight: 2,
                  display: "flex",
                  gap: "10px",
                }}
              >
                <span className="plan-check" style={{ color: "#999" }}>—</span>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="plan-cta cta-link"
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: "14px",
          fontWeight: 400,
          color: "#0A0A0A",
          textDecoration: "none",
          display: "inline-block",
        }}
      >
        {cta} →
      </a>
    </div>
  );
}

const plans = [
  {
    name: "Starter",
    price: "₹25,000",
    cta: "Begin with Starter",
    features: [
      {
        category: "Graphics",
        items: ["Logo Design", "Catalogue", "Social Media Posts"],
      },
      {
        category: "Short Video",
        items: ["4 Talking Head Videos", "2 Motion Graphics"],
      },
    ],
  },
  {
    name: "Growth",
    price: "₹50,000",
    cta: "Begin with Growth",
    recommended: true,
    accentTop: true,
    features: [
      {
        category: "Graphics",
        items: ["Logo Design", "Catalogue", "High Graphical Posts"],
      },
      {
        category: "Short Video",
        items: ["2 Talking Head Videos (with Captions)", "4 Motion Graphics"],
      },
      {
        category: "Website",
        items: ["Landing Page", "Contact Redirect"],
      },
      {
        category: "Content",
        items: ["Content Writing — Included"],
      },
    ],
  },
  {
    name: "Premium",
    price: "₹75,000",
    cta: "Begin with Premium",
    features: [
      {
        category: "Graphics",
        items: ["Logo Design", "Catalogue", "High Graphical Posts"],
      },
      {
        category: "Short Video",
        items: ["Custom Talking Head Videos (Captions)"],
      },
      {
        category: "Website",
        items: ["Advanced Animated Website"],
      },
      {
        category: "Full Suite",
        items: [
          "Content Writing",
          "Market Campaigning",
          "CGI Branding",
          "Product & Service Motion Graphics",
          "Maintenance & Support",
        ],
      },
    ],
  },
];

export default function Plans() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media (max-width: 900px) {
        #plans .max-w-\\[1140px\\] > div:nth-child(4) > div {
          grid-template-columns: 1fr !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      id="plans"
      style={{
        padding: "140px 0",
        background: "#fff",
        borderTop: "0.5px solid #E8E8E6",
      }}
    >
      <div className="max-w-[1140px] mx-auto px-8">
        <ScrollReveal>
          <span className="section-num">04 / Investment</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontSize: "clamp(36px, 5vw, 64px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              marginBottom: "16px",
              maxWidth: "500px",
            }}
          >
            Transparent Pricing.
            <br />
            No Surprises.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "15px",
              fontWeight: 300,
              color: "#555",
              maxWidth: "420px",
              lineHeight: 1.9,
              marginBottom: "64px",
            }}
          >
            Every plan is built around your actual goals. Pick your entry
            point — upgrade anytime.
          </p>
        </ScrollReveal>

        {/* Cards grid — 1px black background creates thin gutters */}
        <ScrollReveal delay={0.3}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              background: "#E8E8E6",
            }}
          >
            {plans.map((p) => (
              <PlanCard key={p.name} {...p} />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "13px",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#999",
              marginTop: "24px",
              textAlign: "center",
            }}
          >
            All plans are monthly. Customisation available. Book a call to
            discuss.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
