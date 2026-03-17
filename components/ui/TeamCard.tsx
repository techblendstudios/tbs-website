"use client";

import { useState } from "react";
import Image from "next/image";
import { Linkedin, Instagram } from "lucide-react";

export interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  isCoFounder?: boolean;
  imageUrl?: string;
  socials?: {
    linkedin?: string;
    instagram?: string;
  };
}

/* Extract initials from full name */
function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0].toUpperCase())
    .slice(0, 2)
    .join("");
}

export default function TeamCard({
  name,
  role,
  bio,
  isCoFounder = false,
  imageUrl,
  socials,
}: TeamCardProps) {
  const [hovered, setHovered] = useState(false);
  const initials = getInitials(name);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor
      style={{
        display: "flex",
        flexDirection: "column",
        cursor: "default",
      }}
    >
      {/* ── Image / Initials area ────────────────────────── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "3 / 4",
          backgroundColor: "var(--black)",
          overflow: "hidden",
          borderRadius: 0,
          flexShrink: 0,
        }}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${name} — ${role}`}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw"
            style={{
              objectFit: "cover",
              objectPosition: "top center",
              transform: hovered ? "scale(1.03)" : "scale(1)",
              transition: "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)",
            }}
          />
        ) : (
          /* Fallback: black rectangle with initials */
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--black)",
            }}
          >
            <span
              style={{
                fontFamily:
                  "var(--font-display, 'Cormorant Garamond', serif)",
                fontWeight: 300,
                fontSize: "48px",
                color: "rgba(255,255,255,0.18)",
                letterSpacing: "4px",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              {initials}
            </span>
          </div>
        )}

        {/* Co-founder badge — top-right corner of image */}
        {isCoFounder && (
          <span
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
              fontWeight: 400,
              fontSize: "10px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              backgroundColor: "var(--white)",
              color: "var(--black)",
              padding: "5px 10px",
              lineHeight: 1,
              zIndex: 2,
            }}
          >
            Co-Founder
          </span>
        )}
      </div>

      {/* ── Info below image ────────────────────────────── */}
      <div style={{ paddingTop: "20px" }}>

        {/* Name */}
        <h3
          style={{
            fontFamily:
              "var(--font-display, 'Cormorant Garamond', serif)",
            fontWeight: 600,
            fontSize: "22px",
            color: "var(--black)",
            margin: "0 0 6px 0",
            letterSpacing: "-0.3px",
            lineHeight: 1.2,
          }}
        >
          {name}
        </h3>

        {/* Role */}
        <p
          style={{
            fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
            fontWeight: 300,
            fontSize: "12px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "var(--gray-400)",
            margin: 0,
            lineHeight: 1,
          }}
        >
          {role}
        </p>

        {/* Bio */}
        <p
          style={{
            fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
            fontWeight: 300,
            fontSize: "13px",
            color: "var(--gray-600)",
            lineHeight: 1.8,
            marginTop: "12px",
            marginBottom: 0,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {bio}
        </p>

        {/* Socials */}
        {socials && (socials.linkedin || socials.instagram) && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginTop: "16px",
            }}
          >
            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
                aria-label={`${name} on LinkedIn`}
                className="social-icon-link"
              >
                <Linkedin size={15} strokeWidth={1.5} />
              </a>
            )}
            {socials.instagram && (
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
                aria-label={`${name} on Instagram`}
                className="social-icon-link"
              >
                <Instagram size={15} strokeWidth={1.5} />
              </a>
            )}
          </div>
        )}
      </div>

      <style>{`
        .social-icon-link {
          color: var(--gray-400);
          display: flex;
          align-items: center;
          transition: color 0.2s ease;
        }
        .social-icon-link:hover {
          color: var(--black);
        }
      `}</style>
    </div>
  );
}
