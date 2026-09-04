import { useEffect, useRef, useState } from "react";
import "../styles/loader.css";

// Boot sequence lines — game-engine flavoured to match the "game level designer" brand.
const BOOT_LINES = [
  { label: "INITIALIZING ENGINE", status: "OK" },
  { label: "MOUNTING FILE SYSTEM", status: "OK" },
  { label: "LOADING ASSETS", status: "OK" },
  { label: "COMPILING SHADERS", status: "OK" },
  { label: "BAKING LIGHTMAPS", status: "OK" },
  { label: "SPAWNING LEVEL", status: "OK" },
];

const TOTAL_MS = 2800; // total time on screen

export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [exiting, setExiting] = useState(false);
  const rafRef = useRef();

  useEffect(() => {
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / TOTAL_MS, 1);
      // easeOutCubic so the counter races then settles
      const eased = 1 - Math.pow(1 - p, 3);
      setPct(Math.round(eased * 100));
      setVisibleLines(Math.min(BOOT_LINES.length, Math.floor(p * (BOOT_LINES.length + 1))));

      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setExiting(true);
        setTimeout(() => onDone?.(), 650); // wait for exit animation
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    document.body.style.overflow = "hidden";

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.body.style.overflow = "";
    };
  }, [onDone]);

  return (
    <div className={`loader ${exiting ? "loader--exit" : ""}`} role="status" aria-label="Loading portfolio">
      {/* brutalist background grid */}
      <div className="loader-grid" aria-hidden="true" />
      <div className="loader-watermark" aria-hidden="true">LOADING</div>

      <div className="loader-inner">
        {/* top meta bar */}
        <div className="loader-topbar">
          <span className="loader-tag">KARTHIK.EXE</span>
          <span className="loader-tag loader-tag--dim">SYS / BOOT SEQUENCE</span>
        </div>

        {/* big brutalist logo */}
        <div className="loader-logo">
          <span className="loader-bracket">[</span>K<span className="loader-bracket">]</span>
        </div>

        {/* boot lines */}
        <ul className="loader-lines">
          {BOOT_LINES.map((line, i) => (
            <li
              key={line.label}
              className={`loader-line ${i < visibleLines ? "is-shown" : ""}`}
            >
              <span className="loader-line-prefix">$</span>
              <span className="loader-line-label">{line.label}</span>
              <span className="loader-line-dots" aria-hidden="true" />
              <span className="loader-line-status">{line.status}</span>
            </li>
          ))}
        </ul>

        {/* progress bar + percentage */}
        <div className="loader-progress-wrap">
          <div className="loader-progress-track">
            <div className="loader-progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <div className="loader-progress-meta">
            <span className="loader-progress-label">
              {pct < 100 ? "BUILDING WORLD" : "READY"}
            </span>
            <span className="loader-progress-pct">{String(pct).padStart(3, "0")}%</span>
          </div>
        </div>
      </div>

      {/* bottom corner labels */}
      <div className="loader-corner loader-corner--bl">GAME LEVEL DESIGNER</div>
      <div className="loader-corner loader-corner--br">PORTFOLIO 2026</div>
    </div>
  );
}