// ══════════════════════════════════════════════════════
// HOW TO ADD YOUR VIDEOS:
//
// 1. Upload your video to Cloudinary dashboard
//    (cloudinary.com → Media Library → Upload)
//
// 2. Copy the "Secure URL" (ends in .mp4 or .webm)
//
// 3. Pass it as cloudinaryUrl prop to this component
//
// 4. For thumbnail, Cloudinary auto-generates one:
//    Replace /video/upload/ with /video/upload/so_0,w_800,f_jpg/
//    in your URL, then add .jpg at the end instead of .mp4
//
// 5. Example:
//    Video:     https://res.cloudinary.com/mycloudname/video/upload/v1/tbs/brand-reel.mp4
//    Thumbnail: https://res.cloudinary.com/mycloudname/video/upload/so_0,w_800,f_jpg/v1/tbs/brand-reel.jpg
//
// 6. For looping social reels, keep autoPlay muted loop playsInline
// ══════════════════════════════════════════════════════

"use client";
import { useRef, useState } from "react";

type Category = "motion-graphics" | "animation" | "cgi" | "graphics" | "social";

interface VideoCardProps {
  title: string;
  category: Category;
  cloudinaryUrl: string;
  thumbnailUrl?: string;
  tags?: string[];
  aspectRatio?: "16/9" | "9/16" | "1/1";
}

const categoryLabels: Record<Category, string> = {
  "motion-graphics": "Motion Graphics",
  animation: "Animation",
  cgi: "CGI",
  graphics: "Graphics",
  social: "Social",
};

export default function VideoCard({
  title,
  category,
  cloudinaryUrl,
  thumbnailUrl,
  tags,
  aspectRatio = "16/9",
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handleMouseEnter = () => {
    setPlaying(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const isPlaceholder =
    !cloudinaryUrl || cloudinaryUrl.startsWith("/videos/placeholder");

  return (
    <div
      className="video-card"
      style={{ aspectRatio, position: "relative", background: "#0A0A0A" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-cursor
    >
      {/* Thumbnail */}
      {thumbnailUrl && !isPlaceholder ? (
        <img
          src={thumbnailUrl}
          alt={title}
          className="thumb"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: playing ? 0 : 1,
            transition: "opacity 0.4s ease",
            zIndex: 1,
          }}
        />
      ) : (
        /* Placeholder tile when no real video */
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            zIndex: 1,
            opacity: playing ? 0 : 1,
            transition: "opacity 0.4s ease",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontSize: "20px",
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "-0.01em",
              textAlign: "center",
              padding: "0 16px",
            }}
          >
            {categoryLabels[category]}
          </span>
          <span
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "10px",
              color: "rgba(255,255,255,0.12)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Add video
          </span>
        </div>
      )}

      {/* Video */}
      {!isPlaceholder && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: playing ? 1 : 0,
            transition: "opacity 0.4s ease",
            zIndex: 2,
          }}
        >
          <source src={cloudinaryUrl} type="video/mp4" />
        </video>
      )}

      {/* Overlay info */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "40px 20px 16px",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
          zIndex: 3,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "10px",
            fontWeight: 300,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
            border: "0.5px solid rgba(255,255,255,0.2)",
            display: "inline-block",
            padding: "3px 10px",
            marginBottom: "8px",
          }}
        >
          {categoryLabels[category]}
        </div>
        <div
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "13px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.4,
          }}
        >
          {title}
        </div>
      </div>
    </div>
  );
}
