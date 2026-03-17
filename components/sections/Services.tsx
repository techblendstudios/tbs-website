"use client";
import { useEffect } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    num: "01",
    name: "Graphics Design",
    desc: "Logos, catalogues, high-impact social posts built for architecture & product brands",
  },
  {
    num: "02",
    name: "Motion Graphics",
    desc: "Scroll-stopping reels, brand reveals and animated product showcases",
  },
  {
    num: "03",
    name: "CGI Branding",
    desc: "Photorealistic 3D renders for products, spaces & architectural visualization",
  },
  {
    num: "04",
    name: "Website Building",
    desc: "Conversion-optimized, animated websites for serious brands",
  },
  {
    num: "05",
    name: "Content Writing",
    desc: "SEO-led copy, scripts & captions that convert your audience",
  },
  {
    num: "06",
    name: "Market Campaigning",
    desc: "Full-funnel paid & organic campaigns across Meta, Google & LinkedIn",
  },
];

export default function Services() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media (max-width: 768px) {
        .service-row { grid-template-columns: 40px 1fr !important; }
        .service-row > span:nth-child(3),
        .service-row > span:nth-child(4) { display: none; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      id="services"
      style={{
        padding: "140px 0",
        background: "#fff",
        borderTop: "0.5px solid #E8E8E6",
      }}
    >
      <div className="max-w-[1140px] mx-auto px-8">
        <ScrollReveal>
          <span className="section-num">02 / What We Do</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontSize: "clamp(36px, 5vw, 64px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              marginBottom: "72px",
              maxWidth: "600px",
            }}
          >
            Every Layer of Your
            <br />
            Digital Presence — Handled.
          </h2>
        </ScrollReveal>

        <div>
          {services.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 0.07}>
              <div
                className="service-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "60px 1fr 1fr 40px",
                  alignItems: "center",
                  padding: "28px 0",
                  gap: "32px",
                  cursor: "none",
                }}
                data-cursor
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "12px",
                    fontWeight: 300,
                    color: "#999",
                    letterSpacing: "0.1em",
                  }}
                >
                  {s.num}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(22px, 2.5vw, 30px)",
                    fontWeight: 300,
                    letterSpacing: "-0.01em",
                    color: "#0A0A0A",
                  }}
                >
                  {s.name}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "14px",
                    fontWeight: 300,
                    color: "#555",
                    lineHeight: 1.7,
                  }}
                >
                  {s.desc}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "18px",
                    color: "#999",
                    justifySelf: "end",
                  }}
                >
                  →
                </span>
              </div>
            </ScrollReveal>
          ))}
          {/* final border */}
          <div style={{ borderTop: "0.5px solid #E8E8E6" }} />
        </div>
      </div>
    </section>
  );
}
