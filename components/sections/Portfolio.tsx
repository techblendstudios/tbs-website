"use client";

import { supabase } from "@/lib/supabase";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VideoCard from "@/components/ui/VideoCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Category = "all" | "motion-graphics" | "animation" | "cgi" | "graphics" | "social";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  cloudinary_url: string;
  thumbnail_url: string;
  aspect_ratio: "16/9" | "9/16" | "1/1";
}

const filters: { key: Category; label: string }[] = [
  { key: "all",             label: "All" },
  { key: "motion-graphics", label: "Motion Graphics" },
  { key: "animation",       label: "Animation" },
  { key: "social",          label: "Social" },
];

// Shown only while Supabase data is loading
const FALLBACK_ITEMS: PortfolioItem[] = [
  { id: "f1", title: "Loading...", category: "motion-graphics", cloudinary_url: "", thumbnail_url: "", aspect_ratio: "16/9" },
  { id: "f2", title: "Loading...", category: "animation",       cloudinary_url: "", thumbnail_url: "", aspect_ratio: "9/16" },
  { id: "f3", title: "Loading...", category: "social",          cloudinary_url: "", thumbnail_url: "", aspect_ratio: "9/16" },
  { id: "f4", title: "Loading...", category: "social",          cloudinary_url: "", thumbnail_url: "", aspect_ratio: "9/16" },
];

export default function Portfolio() {
  const [active, setActive]   = useState<Category>("all");
  const [items, setItems]     = useState<PortfolioItem[]>(FALLBACK_ITEMS);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<string | null>(null);

  useEffect(() => {
    supabase
      .from("portfolio_items")
      .select("id, title, category, cloudinary_url, thumbnail_url, aspect_ratio")
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (error) {
          console.error("Supabase error:", error.message);
          setError(error.message);
          setItems([]);
        } else if (data && data.length > 0) {
          setItems(data as PortfolioItem[]);
        } else {
          setItems([]);
        }
        setLoading(false);
      });
  }, []);

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
      ? items
      : items.filter((i) => i.category === active);

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
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "40px" }}>
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

        {/* Error state */}
        {error && (
          <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "13px", color: "#999", marginBottom: "32px" }}>
            Could not load portfolio. Check your Supabase connection.
          </p>
        )}

        {/* Empty state */}
        {!loading && !error && filtered.length === 0 && (
          <div
            style={{
              padding: "80px 0",
              textAlign: "center",
              fontFamily: "var(--font-dm-sans)",
              fontSize: "14px",
              fontWeight: 300,
              color: "#999",
            }}
          >
            No videos in this category yet.
          </div>
        )}

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
                animate={{ opacity: loading ? 0.4 : 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <VideoCard
                  title={item.title}
                  category={item.category as any}
                  cloudinaryUrl={item.cloudinary_url}
                  thumbnailUrl={item.thumbnail_url}
                  aspectRatio={item.aspect_ratio}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer link */}
        {!loading && filtered.length > 0 && (
          <ScrollReveal delay={0.3}>
            <div style={{ marginTop: "56px", textAlign: "center" }}>
              <a href="#" className="cta-link" data-cursor style={{ fontSize: "14px" }}>
                View Full Portfolio →
              </a>
            </div>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
}
