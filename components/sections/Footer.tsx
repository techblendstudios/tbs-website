export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "0.5px solid #E8E8E6",
        background: "#fff",
        padding: "48px 0 40px",
      }}
    >
      <div className="max-w-[1140px] mx-auto px-8">
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "40px",
            marginBottom: "40px",
            alignItems: "start",
          }}
        >
          {/* Left — Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 600,
                fontSize: "22px",
                letterSpacing: "-0.02em",
                color: "#0A0A0A",
                marginBottom: "8px",
              }}
            >
              TBS
            </div>
            <div
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "12px",
                fontWeight: 300,
                color: "#999",
                lineHeight: 1.8,
              }}
            >
              Tech Blend Studios
              <br />
              Pune, India
            </div>
          </div>

          {/* Center — Nav */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {["Services", "Work", "Plans", "Philosophy", "Team", "Contact"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="nav-link"
                  style={{ fontSize: "12px" }}
                  data-cursor
                >
                  {link}
                </a>
              )
            )}
          </div>

          {/* Right — Socials */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {/* Replace # with your real social URLs */}
            {[
              { label: "Instagram", href: "https://instagram.com/techblendstudios" },
              { label: "LinkedIn", href: "https://linkedin.com/company/techblendstudios" },
              { label: "Twitter / X", href: "https://x.com/techblendstudios" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                style={{ fontSize: "12px" }}
                data-cursor
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom rule + copyright */}
        <div style={{ borderTop: "0.5px solid #E8E8E6", paddingTop: "24px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "12px",
                fontWeight: 300,
                color: "#bbb",
              }}
            >
              © {year} Tech Blend Studios. All rights reserved.
            </span>
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "14px",
                fontWeight: 300,
                fontStyle: "italic",
                color: "#bbb",
                letterSpacing: "0.02em",
              }}
            >
              Retention. Revenue. Conversions.
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          footer .max-w-\\[1140px\\] > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
          footer .max-w-\\[1140px\\] > div:first-child > div:last-child {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
}
