"use client";

import { useState } from "react";

export interface PlanFeatureGroup {
  category: string;
  items: string[];
}

export interface PlanCardProps {
  name: string;
  price: string;
  tag?: string;
  features: PlanFeatureGroup[];
  recommended?: boolean;
  cta: string;
}

export default function PlanCard({
  name,
  price,
  tag,
  features,
  recommended = false,
  cta,
}: PlanCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="plan-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "var(--black)" : "var(--white)",
        color: hovered ? "var(--white)" : "var(--black)",
        border: `1px solid ${hovered ? "var(--black)" : "#E5E5E5"}`,
        borderRadius: 0,
        padding: recommended ? "64px 48px 48px" : "48px",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        transition: "background-color 0.35s ease, color 0.35s ease, border-color 0.35s ease",
        position: "relative",
        height: "100%",
        boxSizing: "border-box",
        cursor: "default",
      }}
    >
      {/* ── Recommended top bar ─────────────────────────── */}
      {recommended && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: -1,
            right: -1,
            height: "2px",
            backgroundColor: "var(--black)",
            transition: "background-color 0.35s ease",
          }}
        />
      )}

      {/* ── Plan name + pill ────────────────────────────── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "32px",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
            fontWeight: 400,
            fontSize: "12px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: hovered ? "rgba(255,255,255,0.9)" : "var(--black)",
            transition: "color 0.35s ease",
          }}
        >
          {name}
        </span>

        {recommended && (
          <span
            style={{
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
              fontWeight: 400,
              fontSize: "10px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              backgroundColor: hovered ? "var(--white)" : "var(--black)",
              color: hovered ? "var(--black)" : "var(--white)",
              padding: "5px 12px",
              lineHeight: 1,
              transition: "background-color 0.35s ease, color 0.35s ease",
              flexShrink: 0,
            }}
          >
            Most Chosen
          </span>
        )}
      </div>

      {/* ── Price ───────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "8px",
          marginBottom: "24px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display, 'Cormorant Garamond', serif)",
            fontWeight: 300,
            fontSize: "clamp(48px, 5vw, 72px)",
            letterSpacing: "-2px",
            lineHeight: 1,
            color: hovered ? "var(--white)" : "var(--black)",
            transition: "color 0.35s ease",
          }}
        >
          {price}
        </span>
        <span
          style={{
            fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
            fontWeight: 300,
            fontSize: "14px",
            color: hovered ? "rgba(255,255,255,0.5)" : "var(--gray-400)",
            transition: "color 0.35s ease",
            paddingBottom: "6px",
          }}
        >
          /month
        </span>
      </div>

      {/* ── Rule ────────────────────────────────────────── */}
      <div
        style={{
          width: "100%",
          height: "0.5px",
          backgroundColor: hovered ? "rgba(255,255,255,0.15)" : "rgba(10,10,10,0.12)",
          transition: "background-color 0.35s ease",
          marginBottom: "32px",
        }}
      />

      {/* ── Feature groups ──────────────────────────────── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "28px",
          flex: 1,
        }}
      >
        {features.map((group) => (
          <div key={group.category}>
            {/* Category label */}
            <p
              style={{
                fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                fontWeight: 300,
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: hovered ? "rgba(255,255,255,0.4)" : "var(--gray-400)",
                margin: "0 0 10px 0",
                transition: "color 0.35s ease",
              }}
            >
              {group.category}
            </p>

            {/* Items */}
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {group.items.map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                    fontWeight: 300,
                    fontSize: "14px",
                    lineHeight: 2,
                    color: hovered ? "rgba(255,255,255,0.85)" : "var(--black)",
                    transition: "color 0.35s ease",
                    display: "flex",
                    alignItems: "baseline",
                    gap: "10px",
                  }}
                >
                  <span
                    style={{
                      color: hovered ? "rgba(255,255,255,0.3)" : "var(--gray-400)",
                      transition: "color 0.35s ease",
                      flexShrink: 0,
                      fontSize: "12px",
                    }}
                  >
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Rule before CTA ─────────────────────────────── */}
      <div
        style={{
          width: "100%",
          height: "0.5px",
          backgroundColor: hovered ? "rgba(255,255,255,0.15)" : "rgba(10,10,10,0.12)",
          transition: "background-color 0.35s ease",
          marginTop: "40px",
          marginBottom: "28px",
        }}
      />

      {/* ── CTA ─────────────────────────────────────────── */}
      <a
        href="#contact"
        data-cursor
        className="plan-cta-link"
        style={{
          fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
          fontWeight: 400,
          fontSize: "14px",
          color: hovered ? "var(--white)" : "var(--black)",
          position: "relative",
          paddingBottom: "3px",
          display: "inline-block",
          transition: "color 0.35s ease",
          alignSelf: "flex-start",
        }}
      >
        {cta} →
      </a>

      <style>{`
        .plan-cta-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0.5px;
          background-color: currentColor;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .plan-cta-link:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </div>
  );
}
