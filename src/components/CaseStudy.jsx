import { useEffect, useRef } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useInView from "../hooks/useInView";
import { caseStudies } from "../data/caseStudies";
import "../styles/casestudy.css";

const pad = (n) => String(n).padStart(2, "0");

/* Fades + lifts its content in when it scrolls into view */
function Reveal({ as: Tag = "div", className = "", delay = 0, children }) {
  const ref = useRef(null);
  const visible = useInView(ref, 0.12);
  return (
    <Tag
      ref={ref}
      className={`cs-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

function Figure({ src, caption, rotate = 0, frame = false, delay = 0 }) {
  const slotClass = [
    "cs-img-slot",
    (frame || rotate) && "cs-img-slot--frame",
    rotate && "cs-img-slot--rotate",
  ].filter(Boolean).join(" ");

  return (
    <Reveal as="figure" className="cs-figure" delay={delay}>
      {src ? (
        <div className={slotClass} style={rotate ? { "--rot": `${rotate}deg` } : undefined}>
          <img src={src} alt={caption} loading="lazy" decoding="async" />
        </div>
      ) : (
        <div className="cs-img-placeholder" role="img" aria-label={`${caption} (image coming soon)`}>
          <div className="cs-img-placeholder-lines" />
          <span className="cs-img-placeholder-label">Image coming soon</span>
        </div>
      )}
      {caption && <figcaption className="cs-caption">{caption}</figcaption>}
    </Reveal>
  );
}

/* Renders one content block from the data file */
function Block({ block }) {
  switch (block.type) {
    case "text": {
      const paras = Array.isArray(block.body) ? block.body : [block.body];
      return paras.map((p, i) => (
        <Reveal as="p" key={i} className="cs-body">{p}</Reveal>
      ));
    }

    case "list":
      return (
        <ul className="cs-list">
          {block.items.map((item, i) => (
            <Reveal as="li" key={i} delay={i * 40} className="cs-list-item">
              <span className="cs-bullet" aria-hidden="true">▹</span>
              <span>
                {typeof item === "string" ? item : (
                  <><strong className="cs-list-lead">{item.lead}</strong> — {item.text}</>
                )}
              </span>
            </Reveal>
          ))}
        </ul>
      );

    case "images":
      return (
        <div className={`cs-gallery ${block.items.length === 1 ? "cs-gallery--single" : ""}`}>
          {block.items.map((im, i) => (
            <Figure key={i} {...im} frame={block.frame || im.frame} delay={i * 80} />
          ))}
        </div>
      );

    case "moments":
      return (
        <ol className="cs-moments">
          {block.items.map((m, i) => (
            <Reveal as="li" key={m.title} delay={(i % 3) * 80} className="cs-moment">
              <span className="cs-moment-num" aria-hidden="true">{pad(i + 1)}</span>
              <h4 className="cs-moment-title">{m.title}</h4>
              <p className="cs-moment-body">{m.body}</p>
            </Reveal>
          ))}
        </ol>
      );

    case "cards":
      return (
        <div className="cs-cards">
          {block.items.map((card, i) => (
            <Reveal key={card.title} delay={i * 80} className="cs-card">
              <h4 className="cs-card-title">{card.title}</h4>
              {card.rows.map((row) => (
                <div key={row.tag} className="cs-card-row">
                  <span className="cs-card-tag">{row.tag}</span>
                  <p>{row.body}</p>
                </div>
              ))}
            </Reveal>
          ))}
        </div>
      );

    case "callout":
      return (
        <Reveal as="aside" className="cs-callout">
          <h4 className="cs-callout-title">{block.title}</h4>
          <p>{block.body}</p>
        </Reveal>
      );

    case "sub":
      return (
        <div className="cs-sub">
          <Reveal as="h3" className="cs-subheading">{block.title}</Reveal>
          {block.blocks.map((b, i) => <Block key={i} block={b} />)}
        </div>
      );

    case "video":
      return (
        <Reveal className="cs-video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${block.youtubeId}`}
            title={block.title}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Reveal>
      );

    default:
      return null;
  }
}

export default function CaseStudy() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const progressRef = useRef(null);
  const study = caseStudies[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // red reading-progress bar along the top bar
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight || 1;
      progressRef.current?.style.setProperty("transform", `scaleX(${el.scrollTop / max})`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);

  if (!study) return <Navigate to="/" replace />;

  const goBack = () => navigate("/", { state: { scrollTo: "projects" } });
  const engine = study.meta.find(([k]) => k === "Engine")?.[1];

  return (
    <main className="cs-page page-fade">
      <div className="cs-grid" aria-hidden="true" />
      <div className="cs-watermark" aria-hidden="true">{study.watermark}</div>

      <nav className="cs-topbar" aria-label="Project navigation">
        <button type="button" className="cs-btn" onClick={goBack}>← Back</button>
        <span className="cs-topbar-tag">Case Study{engine ? ` / ${engine}` : ""}</span>
        <span ref={progressRef} className="cs-progress" aria-hidden="true" />
      </nav>

      <header className="cs-hero">
        <div className="cs-eyebrow">{study.eyebrow}</div>
        <h1 className="cs-title">
          <span className="cs-title-inner">{study.title}</span>
        </h1>
        {study.tagline && <p className="cs-tagline">{study.tagline}</p>}
        <dl className="cs-meta-row">
          {study.meta.map(([k, v]) => (
            <div key={k} className="cs-meta-item">
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        {study.lede.map((p, i) => <p key={i} className="cs-lede">{p}</p>)}
      </header>

      {study.cover?.src && (
        <figure className="cs-cover">
          <img src={study.cover.src} alt={study.cover.caption} />
        </figure>
      )}

      {study.sections.map((section, i) => (
        <section key={section.label} className="cs-section" aria-label={section.heading || section.label}>
          <Reveal className="cs-section-label">{pad(i + 1)} — {section.label}</Reveal>
          {section.heading && <Reveal as="h2" className="cs-heading">{section.heading}</Reveal>}
          {section.blocks.map((b, j) => <Block key={j} block={b} />)}
        </section>
      ))}

      <footer className="cs-footer">
        <button type="button" className="cs-btn" onClick={goBack}>← Back to Portfolio</button>
        <button
          type="button"
          className="cs-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to Top ↑
        </button>
      </footer>
    </main>
  );
}