import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "160px 0",
        background: "#F5F5F3",
        borderTop: "0.5px solid #E8E8E6",
      }}
    >
      <div className="max-w-[1140px] mx-auto px-8">
        <ScrollReveal>
          <span className="section-num">07 / Contact</span>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontSize: "clamp(48px, 7vw, 96px)",
              letterSpacing: "-0.04em",
              lineHeight: 0.97,
              marginBottom: "32px",
              maxWidth: "700px",
            }}
          >
            Ready to Build
            <br />
            Something Premium?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "15px",
              fontWeight: 300,
              color: "#555",
              maxWidth: "440px",
              lineHeight: 1.9,
              marginBottom: "56px",
            }}
          >
            Tell us about your brand. We will tell you exactly how we
            would grow it — no pitch, just clarity.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <div
            style={{
              display: "flex",
              gap: "48px",
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: "32px",
            }}
          >
            {/* Replace with your real WhatsApp number */}
            <a
              href="https://wa.me/919370047990"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-link"
              data-cursor
              style={{ fontSize: "18px" }}
            >
              WhatsApp Us →
            </a>
            {/* Replace with your real email */}
            <a
              href="mailto:techblendstudios.tbs@gmail.com"
              className="cta-link"
              data-cursor
              style={{ fontSize: "18px" }}
            >
              Send an Email →
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.45}>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "13px",
              fontWeight: 300,
              color: "#999",
              fontStyle: "italic",
              marginBottom: "6px",
            }}
          >
            Or book a free 30-minute strategy call — no pitch, just clarity.
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "13px",
              fontWeight: 300,
              color: "#bbb",
            }}
          >
            We only take on 3–4 new clients per month.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
