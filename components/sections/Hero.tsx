"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media (max-width: 768px) {
        #hero > div {
          grid-template-columns: 1fr !important;
          gap: 40px !important;
        }
        #hero > div > div:last-child {
          aspect-ratio: 16/9 !important;
          max-height: 60vw !important;
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
      id="hero"
      style={{
        minHeight: "100svh",
        paddingTop: "64px",
        display: "flex",
        alignItems: "center",
        background: "#fff",
      }}
    >
      <div
        className="max-w-[1140px] mx-auto px-8 w-full"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
      >
        {/* LEFT — Text */}
        <div>
          <motion.span
            {...fade(0.1)}
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "11px",
              fontWeight: 300,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#999",
              display: "block",
              marginBottom: "40px",
            }}
          >
            Pune, India — Est. 2025
          </motion.span>

          <motion.h1
            {...fade(0.3)}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontSize: "clamp(52px, 7vw, 96px)",
              lineHeight: 0.96,
              letterSpacing: "-0.04em",
              marginBottom: "32px",
              color: "#0A0A0A",
            }}
          >
            We Build Brands
            <br />
            That Drive
            <br />
            <i><b>Retention</b></i>,
            <br />
            <i><b>Revenue</b></i>
            <br />
            &amp; <i><b>Conversions</b></i>.
          </motion.h1>

          <motion.p
            {...fade(0.5)}
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 300,
              fontSize: "15px",
              lineHeight: 1.9,
              color: "#555",
              maxWidth: "400px",
              marginBottom: "48px",
            }}
          >
            TBS is a focused digital agency for construction, architecture
            &amp; product brands that want to grow — not just look good.
          </motion.p>

          <motion.div
            {...fade(0.65)}
            style={{ display: "flex", gap: "40px", alignItems: "center", marginBottom: "80px" }}
          >
            <a href="#plans" className="cta-link" data-cursor>
              See Our Plans ↓
            </a>
            <a href="#philosophy" className="cta-link" data-cursor>
              Our Philosophy →
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            {...fade(0.8)}
            style={{ borderTop: "0.5px solid #E8E8E6", paddingTop: "24px" }}
          >
            <div
              style={{
                display: "flex",
                gap: "32px",
                flexWrap: "wrap",
                fontFamily: "var(--font-dm-sans)",
                fontSize: "12px",
                fontWeight: 300,
                color: "#999",
                letterSpacing: "0.05em",
              }}
            >
              {["120+ Brands Scaled", "₹25K – ₹75K Plans", "Pune, India"].map(
                (s, i) => (
                  <span key={s}>
                    {i > 0 && (
                      <span style={{ marginRight: "32px", opacity: 0.4 }}>·</span>
                    )}
                    {s}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* RIGHT — Video reel 
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            position: "relative",
            aspectRatio: "9/16",
            maxHeight: "75vh",
            background: "#0A0A0A",
            overflow: "hidden",
          }}
        >
          
            ══════════════════════════════════════
            REPLACE THIS VIDEO WITH YOUR REEL:
            Upload your hero showreel to Cloudinary,
            then replace src below with your URL:
            e.g. https://res.cloudinary.com/YOUR_CLOUD/video/upload/
                 q_auto,f_auto/tbs/hero-reel.mp4
            ══════════════════════════════════════
          
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={() => setVideoLoaded(true)}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: videoLoaded ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
          >
            <source src="/videos/hero-reel.mp4" type="video/mp4" />
          </video>

          {!videoLoaded && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 300,
                  fontSize: "32px",
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "-0.02em",
                }}
              >
                [ Showreel ]
              </span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.2)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Add your video to /public/videos/hero-reel.mp4
              </span>
            </div>
          )}

          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              fontFamily: "var(--font-dm-sans)",
              fontSize: "10px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            TBS Showreel 2025
          </div>
        </motion.div>
        */}
      </div>
    </section>
  );
}
