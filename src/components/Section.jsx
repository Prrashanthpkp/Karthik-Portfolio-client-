import { useRef } from "react";
import useInView from "../hooks/useInView";

export default function Section({ id, label, title, accent, countLabel, children }) {
  const ref = useRef(null);
  const vis = useInView(ref);

  return (
    <section id={id} ref={ref} className={`section ${vis ? "visible" : ""}`}>
      <div className="section-header">
        <div>
          <div className="section-label">{label}</div>
          <div className="section-title">
            {title} {accent && <span>{accent}</span>}
          </div>
        </div>
        {countLabel && <div className="section-count">{countLabel}</div>}
      </div>

      {children}
    </section>
  );
}