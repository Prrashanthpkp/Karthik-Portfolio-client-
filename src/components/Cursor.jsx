import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot  = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    let rx = 0, ry = 0, raf;
    let mx = 0, my = 0;
    const lerp = (a, b, n) => a + (b - a) * n;

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };

    const tick = () => {
      rx = lerp(rx, mx, 0.12);
      ry = lerp(ry, my, 0.12);
      if (dot.current)  { dot.current.style.left  = mx + "px"; dot.current.style.top  = my + "px"; }
      if (ring.current) { ring.current.style.left = rx + "px"; ring.current.style.top = ry + "px"; }
      raf = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener("mousemove", onMove);

    const over = () => document.body.classList.add("hovering");
    const out  = () => document.body.classList.remove("hovering");

    const els = document.querySelectorAll(
      "a,button,.tag,.social-item,.project-card,.contact-email-wrap,.edu-item"
    );
    els.forEach(el => {
      el.addEventListener("mouseenter", over);
      el.addEventListener("mouseleave", out);
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      // FIX: was missing — listeners were never removed, causing memory leaks
      els.forEach(el => {
        el.removeEventListener("mouseenter", over);
        el.removeEventListener("mouseleave", out);
      });
    };
  }, []);

  return (
    <>
      <div ref={dot}  className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
