"use client";
import { useEffect } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const points = [
  {
    num: "01",
    title: "Premium Brand Story",
    desc: "We don't just design. We define your brand personality and craft a story that commands premium in your market.",
  },
  {
    num: "02",
    title: "Niche Over Everything",
    desc: "We selectively work with construction, architecture and product brands. Deep expertise beats generalism every time.",
  },
  {
    num: "03",
    title: "Maximum Transparency",
    desc: "You see every decision, every deliverable, every result. No black boxes. No confusion. Just clarity.",
  },
  {
    num: "04",
    title: "Optimal Guidance",
    desc: "We guide clients to what's right — not what's most expensive. Your long-term growth is our only success metric.",
  },
  {
    num: "05",
    title: "Competitor Intelligence",
    desc: "Every engagement starts with knowing your market. We research before we move. Strategy before speed.",
  },
  {
    num: "06",
    title: "Team Precision",
    desc: "Work is divided, tracked and owned internally. Inhouse or outsourced — every deliverable is accounted for. No dropped balls.",
  },
];

export default function Philosophy() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media (max-width: 700px) {
        #philosophy .max-w-\\[1140px\\] > div:last-child {
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
      id="philosophy"
      style={{
        padding: "140px 0",
        background: "#F5F5F3",
        borderTop: "0.5px solid #E8E8E6",
      }}
    >
      <div className="max-w-[1140px] mx-auto px-8">
        <ScrollReveal>
          <span className="section-num">05 / Our Ideology</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontSize: "clamp(36px, 5vw, 64px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              marginBottom: "80px",
              maxWidth: "500px",
            }}
          >
            How We Actually
            <br />
            Think &amp; Work.
          </h2>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0 60px",
          }}
        >
          {points.map((p, i) => (
            <ScrollReveal key={p.num} delay={i * 0.08}>
              <div
                style={{
                  borderTop: "0.5px solid #E8E8E6",
                  padding: "36px 0",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: "13px",
                    color: "#999",
                    display: "block",
                    marginBottom: "16px",
                  }}
                >
                  {p.num}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#0A0A0A",
                    marginBottom: "12px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 300,
                    fontSize: "14px",
                    color: "#555",
                    lineHeight: 1.85,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
