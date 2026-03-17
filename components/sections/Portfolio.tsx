// ══════════════════════════════════════════════════════
// CONNECTING REAL VIDEOS FROM SUPABASE (optional):
//
// 1. Create table in Supabase SQL editor:
//
//    CREATE TABLE portfolio_items (
//      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
//      title text NOT NULL,
//      category text NOT NULL,
//      cloudinary_url text NOT NULL,
//      thumbnail_url text,
//      tags text[],
//      featured boolean DEFAULT false,
//      aspect_ratio text DEFAULT '16/9',
//      created_at timestamptz DEFAULT now()
//    );
//
// 2. Replace portfolioItems array below with a Supabase fetch:
//    import { createClient } from '@supabase/supabase-js'
//    const supabase = createClient(url, key)
//    const { data } = await supabase.from('portfolio_items').select('*')
//
// 3. Replace placeholder cloudinaryUrl values with real Cloudinary URLs
// ══════════════════════════════════════════════════════

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VideoCard from "@/components/ui/VideoCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Category = "all" | "motion-graphics" | "animation" | "cgi" | "graphics" | "social";

const filters: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "motion-graphics", label: "Motion Graphics" },
  { key: "cgi", label: "CGI" },
  { key: "animation", label: "Animation" },
  { key: "graphics", label: "Graphics" },
  { key: "social", label: "Social" },
];

const portfolioItems = [
  // ── Replace cloudinaryUrl with your real Cloudinary video URLs ──
  {
    id: 1, title: "Brand Reveal — Architecture Studio",
    category: "motion-graphics",
    cloudinaryUrl: "/videos/placeholder-1.mp4",   // → your Cloudinary URL
    thumbnailUrl: "",
    aspectRatio: "16/9" as const,
  },
  {
    id: 2, title: "Product CGI — Luxury Faucet Brand",
    category: "cgi",
    cloudinaryUrl: "/videos/placeholder-2.mp4",
    thumbnailUrl: "",
    aspectRatio: "16/9" as const,
  },
  {
    id: 3, title: "Social Reel — Real Estate Campaign",
    category: "social",
    cloudinaryUrl: "/videos/placeholder-3.mp4",
    thumbnailUrl: "",
    aspectRatio: "9/16" as const,
  },
  {
    id: 4, title: "Motion Logo — Construction Firm",
    category: "motion-graphics",
    cloudinaryUrl: "/videos/placeholder-4.mp4",
    thumbnailUrl: "",
    aspectRatio: "16/9" as const,
  },
  {
    id: 5, title: "3D Product Showcase — Hardware Brand",
    category: "cgi",
    cloudinaryUrl: "/videos/placeholder-5.mp4",
    thumbnailUrl: "",
    aspectRatio: "16/9" as const,
  },
  {
    id: 6, title: "Animated Explainer — Architect Portfolio",
    category: "animation",
    cloudinaryUrl: "/videos/placeholder-6.mp4",
    thumbnailUrl: "",
    aspectRatio: "16/9" as const,
  },
  {
    id: 7, title: "Instagram Reel — Interior Design Brand",
    category: "social",
    cloudinaryUrl: "/videos/placeholder-7.mp4",
    thumbnailUrl: "",
    aspectRatio: "9/16" as const,
  },
  {
    id: 8, title: "Architectural Walkthrough — Mumbai Tower",
    category: "cgi",
    cloudinaryUrl: "/videos/placeholder-8.mp4",
    thumbnailUrl: "",
    aspectRatio: "16/9" as const,
  },
  {
    id: 9, title: "Brand Campaign — Product Launch",
    category: "motion-graphics",
    cloudinaryUrl: "/videos/placeholder-9.mp4",
    thumbnailUrl: "",
    aspectRatio: "16/9" as const,
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<Category>("all");

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media (max-width: 900px) {
        #work .max-w-\\[1140px\\] > div:nth-child(4) {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
      @media (max-width: 600px) {
        #work .max-w-\\[1140px\\] > div:nth-child(4) {
          grid-template-columns: 1fr !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const filtered =
    active === "all"
      ? portfolioItems
      : portfolioItems.filter((i) => i.category === active);

  return (
    <section
      id="work"
      style={{
        padding: "140px 0",
        background: "#F5F5F3",
        borderTop: "0.5px solid #E8E8E6",
      }}
    >
      <div className="max-w-[1140px] mx-auto px-8">
        <ScrollReveal>
          <span className="section-num">03 / Our Work</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontSize: "clamp(36px, 5vw, 64px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              marginBottom: "56px",
              maxWidth: "600px",
            }}
          >
            Motion. Graphics. CGI.
            <br />
            Built to Stop the Scroll.
          </h2>
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal delay={0.2}>
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            {filters.map((f) => (
              <button
                key={f.key}
                className={`filter-pill ${active === f.key ? "active" : ""}`}
                onClick={() => setActive(f.key)}
                data-cursor
              >
                {f.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <VideoCard
                  title={item.title}
                  category={item.category as any}
                  cloudinaryUrl={item.cloudinaryUrl}
                  thumbnailUrl={item.thumbnailUrl}
                  aspectRatio={item.aspectRatio}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer link */}
        <ScrollReveal delay={0.3}>
          <div style={{ marginTop: "56px", textAlign: "center" }}>
            <a
              href="/work"
              className="cta-link"
              data-cursor
              style={{ fontSize: "14px" }}
            >
              View Full Portfolio →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
