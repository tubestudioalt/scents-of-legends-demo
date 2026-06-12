"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let animId: number;
    let mouseX = -100;
    let mouseY = -100;
    let curX = -100;
    let curY = -100;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('a, button, [role="button"], input, label'));
    };

    const animate = () => {
      curX += (mouseX - curX) * 0.14;
      curY += (mouseY - curY) * 0.14;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translateX(${curX}px) translateY(${curY}px) translate(-50%, -50%)`;
      }
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor${isHovering ? " hovering" : ""}`}
    />
  );
}
