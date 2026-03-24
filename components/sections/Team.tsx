// ══════════════════════════════════════════════════════
// ADDING TEAM PHOTOS:
//
// Option A — Cloudinary (Recommended):
//   imageUrl: "https://res.cloudinary.com/YOUR_CLOUD/image/upload/
//              w_800,h_1067,c_fill,f_auto,q_auto/team/name.jpg"
//
// Option B — Local file:
//   1. Place photo in /public/team/name.jpg
//   2. imageUrl: "/team/name.jpg"
//
// Best photo specs:
//   Size: 800×1067px (3:4 portrait ratio)
//   Background: white or light studio backdrop
//   Lighting: clean, no heavy filters
// ══════════════════════════════════════════════════════

"use client";
import { useEffect } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  isCoFounder?: boolean;
  imageUrl?: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
}

function TeamCard({ name, role, bio, isCoFounder, imageUrl, linkedin, instagram, twitter }: TeamMember) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="team-card" style={{ cursor: "none" }} data-cursor>
      {/* Photo */}
      <div
        className="team-img"
        style={{
          aspectRatio: "3/4",
          background: "#0A0A0A",
          position: "relative",
          overflow: "hidden",
          marginBottom: "20px",
        }}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 400px"
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 300,
                fontSize: "48px",
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "-0.02em",
              }}
            >
              {initials}
            </span>
            <span
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "9px",
                color: "rgba(255,255,255,0.12)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Add photo
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "10px", flexWrap: "wrap", marginBottom: "4px" }}>
          <span
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 600,
              fontSize: "22px",
              letterSpacing: "-0.01em",
              color: "#0A0A0A",
            }}
          >
            {name}
          </span>
          {isCoFounder && (
            <span
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "9px",
                fontWeight: 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: "#0A0A0A",
                color: "#fff",
                padding: "3px 8px",
              }}
            >
              Co-Founder
            </span>
          )}
        </div>
        <div
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "11px",
            fontWeight: 300,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#999",
            marginBottom: "12px",
          }}
        >
          {role}
        </div>
        <p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "13px",
            fontWeight: 300,
            color: "#555",
            lineHeight: 1.8,
            marginBottom: "16px",
          }}
        >
          {bio}
        </p>
        {(linkedin || instagram) && (
          <div style={{ display: "flex", gap: "16px" }}>
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-link"
                style={{ fontSize: "12px", color: "#999" }}
                data-cursor
              >
                LinkedIn ↗
              </a>
            )}
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-link"
                style={{ fontSize: "12px", color: "#999" }}
                data-cursor
              >
                Instagram ↗
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-link"
                style={{ fontSize: "12px", color: "#999" }}
                data-cursor
              >
                Twitter ↗
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Replace all placeholder names and bios with your real team ──
const coFounders: TeamMember[] = [
  {
    name: "Abhijit Shinde",
    role: "Creative Director",
    bio: "Leads all creative output — from concept to final render. Obsessed with brand storytelling and visual precision.",
    isCoFounder: true,
    imageUrl: "https://res.cloudinary.com/dg0m5ckk4/image/upload/v1774341786/co-founder1_cadltd.png",   // → "/team/cofounder-1.jpg" or Cloudinary URL
    linkedin: "https://www.linkedin.com/in/abhijeet-shinde-b94a70271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    instagram: "https://www.instagram.com/_abhijitshinde_",
    // twitter: "https://x.com",
  },
  {
    name: "Atharva Hegade",
    role: "Strategy & Growth",
    bio: "Drives client strategy, campaign planning and business development. Focused on results that actually move revenue.",
    isCoFounder: true,
    imageUrl: "https://res.cloudinary.com/dg0m5ckk4/image/upload/v1774341785/co-founder2_xaxbhd.png",   // → "/team/cofounder-2.jpg" or Cloudinary URL
    linkedin: "https://www.linkedin.com/in/atharvahegade/",
    twitter: "https://x.com/atharvafx",
  },
];

// const teamMembers: TeamMember[] = [
//   {
//     name: "[Name]",
//     role: "Motion Graphics & CGI Lead",
//     bio: "Creates reels, 3D renders and animations that stop the scroll. Handles all video post-production.",
//     imageUrl: "",
//   },
//   {
//     name: "[Name]",
//     role: "Web Developer",
//     bio: "Builds fast, animated, conversion-focused websites. Next.js specialist with an eye for design.",
//     imageUrl: "",
//   },
//   {
//     name: "[Name]",
//     role: "Content Strategist",
//     bio: "Writes copy that ranks, resonates and converts. SEO-led scripts, captions and long-form content.",
//     imageUrl: "",
//   },
//   {
//     name: "[Name]",
//     role: "Social Media Manager",
//     bio: "Manages brand presence across Instagram, LinkedIn and YouTube. Data-driven, creatively consistent.",
//     imageUrl: "",
//   },
// ];

export default function Team() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media (max-width: 900px) {
        #team .max-w-\\[1140px\\] > div:nth-child(5) {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
      @media (max-width: 600px) {
        #team .max-w-\\[1140px\\] > div:nth-child(3),
        #team .max-w-\\[1140px\\] > div:nth-child(5) {
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
      id="team"
      style={{
        padding: "140px 0",
        background: "#fff",
        borderTop: "0.5px solid #E8E8E6",
      }}
    >
      <div className="max-w-[1140px] mx-auto px-8">
        <ScrollReveal>
          <span className="section-num">06 / The Team</span>
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
            The Minds Behind
            <br />
            Every Brand We Build.
          </h2>
        </ScrollReveal>

        {/* Co-founders */}
        <ScrollReveal delay={0.15}>
          <span
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "11px",
              fontWeight: 300,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#999",
              display: "block",
              marginBottom: "32px",
            }}
          >
            Co-Founders
          </span>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "48px",
            marginBottom: "80px",
            maxWidth: "780px",
          }}
        >
          {coFounders.map((m, i) => (
            <ScrollReveal key={m.name} delay={0.2 + i * 0.1}>
              <TeamCard {...m} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
