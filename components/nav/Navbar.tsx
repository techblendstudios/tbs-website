"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#plans", label: "Plans" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 80);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.4s cubic-bezier(0.76,0,0.24,1)",
        }}
        className="fixed top-0 left-0 right-0 z-50 bg-white"
        style2="border-bottom: 0.5px solid #E8E8E6;"
      >
        <div
          className="max-w-[1140px] mx-auto px-8 flex items-center justify-between"
          style={{
            height: "64px",
            borderBottom: "0.5px solid #E8E8E6",
            transform: hidden ? "translateY(-100%)" : "translateY(0)",
            transition: "transform 0.4s cubic-bezier(0.76,0,0.24,1)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(8px)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-2" data-cursor>
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 600,
                fontSize: "22px",
                letterSpacing: "-0.02em",
                color: "#0A0A0A",
              }}
            >
              TBS
            </span>
            <span
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 300,
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#999",
              }}
            >
              Tech Blend Studios
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link" data-cursor>
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a href="#contact" className="cta-link" data-cursor>
              Start a Project →
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ cursor: "none", background: "none", border: "none" }}
            data-cursor
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            data-cursor
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          className="cta-link"
          onClick={() => setMenuOpen(false)}
          style={{ fontSize: "18px", marginTop: "16px" }}
          data-cursor
        >
          Start a Project →
        </a>
      </div>
    </>
  );
}
