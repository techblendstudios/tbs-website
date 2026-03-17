"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      curX += (mouseX - curX) * 0.18;
      curY += (mouseY - curY) * 0.18;
      cursor.style.left = curX + "px";
      cursor.style.top = curY + "px";
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("mousemove", move);

    const addExpand = () => {
      const targets = document.querySelectorAll(
        "a, button, [data-cursor], .nav-link, .cta-link, .filter-pill, .plan-card, .service-row, .team-card"
      );
      targets.forEach((el) => {
        el.addEventListener("mouseenter", () => cursor.classList.add("expanded"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("expanded"));
      });
    };

    addExpand();
    const observer = new MutationObserver(addExpand);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  return <div ref={cursorRef} className="cursor" />;
}
