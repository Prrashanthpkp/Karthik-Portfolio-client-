import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/colourblind.css";

/* ─── IMAGES ───────────────────────────────────────────────
   Paste your images into: src/assets/projects/colour-blind/
   and rename them to match the names below.
   If any file is .jpeg/.jpg, change the extension here too.
   Until the files exist, styled placeholders are shown.
──────────────────────────────────────────────────────────── */
import screenshot1 from "../assets/projects/colour-blind/screenshot-1.png";
import screenshot2 from "../assets/projects/colour-blind/screenshot-2.png";
import screenshot3 from "../assets/projects/colour-blind/screenshot-3.png";
import screenshot4 from "../assets/projects/colour-blind/screenshot-4.png";
import screenshot5 from "../assets/projects/colour-blind/screenshot-5.png";
import puzzle1     from "../assets/projects/colour-blind/puzzle-1.png";
import process1    from "../assets/projects/colour-blind/process-1.png";
import process2    from "../assets/projects/colour-blind/process-2.png";
import process3    from "../assets/projects/colour-blind/process-3.png";
import process4    from "../assets/projects/colour-blind/process-4.png";

// Once you've pasted + uncommented the imports above,
// swap the `null`s below for the variable names.
const screenshots = [screenshot1, screenshot2, screenshot3, screenshot4, screenshot5];
const processImgs = [process1, process2, process3, process4];
const puzzleImg = puzzle1;

const YOUTUBE_ID = "xG6w3erzOjo";

const META = [
  ["Genre", "Narrative / Puzzle"],
  ["Engine", "Unity"],
  ["Role", "Level & Narrative Designer"],
  ["Year", "2024"],
];

const RESPONSIBILITIES = [
  "Designed all puzzles, the core gameplay loop for the game and wrote the narrative for the game.",
  "Worked with an adaptive multi-disciplinary team of artists, programmers, and designers.",
  "Implemented and designed puzzles with verticality in a closed setting, increasing the difficulty as the level progresses.",
  "Wrote the full narrative for the game, which will also be reflected in the puzzles.",
  "Pitched and prototyped core game and level ideas via rapid prototyping using Unity.",
  "Balanced general gameplay, from puzzle difficulty and pacing to item placement, ensuring every puzzle served the narrative.",
  "Supported the programming team by debugging and fixing game-breaking issues in the codebase.",
];

const PROCESS_BULLETS = [
  "Designed several paper-based drafts, then finalised them digitally.",
  "Researched numerous games of the same genre for inspiration and a basis for levels.",
  "Grey-boxed rough ideas before the main level creation.",
];

const DESIGN_GOALS = [
  {
    title: "Engaging Puzzle Design",
    goal: "Create narrative-driven puzzles that use verticality to escalate difficulty as the player progresses, so each new puzzle feels like a meaningful step deeper into the story.",
    objective: "Design a vertical, closed space level where puzzles increase in complexity as the player progresses. Tie each puzzle solution to a collectible memory object, so solving a puzzle gives the player the main object to restore colour and advances the narrative. Balance puzzle pacing and item placement through repeated QA testing to keep the experience challenging but fair.",
  },
  {
    title: "A Convincing Narrative for a Sensitive Topic",
    goal: "Write and implement a believable, emotionally honest story that handles the pressures of teenage life with care and authenticity.",
    objective: "Develop a narrative delivered through environmental storytelling and memory objects rather than heavy exposition, allowing players to piece together the story at their own pace. Anchor the emotional arc to the colour-restoration mechanic, so the world growing more vibrant mirrors the protagonist's progress. Use the plushie companions as a gentle narrative device to guide the player and soften difficult moments. Research the subject matter responsibly and refine tone through playtesting to ensure the story lands as intended without feeling exploitative or hollow.",
  },
];

const LEARNT = [
  "How to lead and work with an adaptive small multi-disciplinary indie team.",
  "Learning to present and pitch the game in a public space alongside industry professionals.",
  "Conducting QA and playtesting as early as possible is vital to any game's development for catching bugs and balancing issues.",
  "Leveraged personal research into player demographics to manage and balance existing content via QA testing.",
  "How to implement verticality in narrative-driven puzzle difficulty, from initial design through to in-engine implementation.",
  "How to work with and alongside sound designers, as well as the process it takes to get them organised.",
];

/* Reveal-on-scroll wrapper */
function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`cb-reveal ${vis ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function ImageBlock({ src, label }) {
  if (src) {
    return (
      <div className="cb-img-slot">
        <img src={src} alt={label} loading="lazy" />
      </div>
    );
  }
  return (
    <div className="cb-img-placeholder">
      <div className="cb-img-placeholder-lines" />
      <span className="cb-img-placeholder-label">{label}</span>
    </div>
  );
}

export default function ColourBlind() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goBack = () => navigate("/");

  return (
    <div className="cb-page page-fade">
      {/* background */}
      <div className="cb-grid" aria-hidden="true" />
      <div className="cb-watermark" aria-hidden="true">COLOUR</div>

      {/* top bar */}
      <div className="cb-topbar">
        <button className="cb-back" onClick={goBack}>← Back</button>
        <span className="cb-topbar-tag">01 / 04 — PROJECT</span>
      </div>

      {/* HERO */}
      <header className="cb-hero">
        <Reveal>
          <div className="cb-eyebrow">Case Study</div>
          <h1 className="cb-title">Colour Blind</h1>
          <div className="cb-meta-row">
            {META.map(([k, v]) => (
              <span key={k} className="cb-meta-item">
                {k}: <span>{v}</span>
              </span>
            ))}
          </div>
          <p className="cb-lede">
            Colour Blind is a 3D narrative-driven puzzle game in which you play as a student
            whose world has faded to black and white under the weight of growing up as a teen.
            By collecting objects scattered throughout the classroom, each tied to a forgotten
            memory, you slowly bring colour back into the world — uncovering the story with the
            help of your plushie friends along the way.
          </p>
        </Reveal>
      </header>

      {/* TRAILER */}
      <section className="cb-section">
        <Reveal>
          <div className="cb-section-label">01 — Trailer</div>
          <div className="cb-video">
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
              title="Colour Blind — Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>

      {/* SCREENSHOTS */}
      <section className="cb-section">
        <Reveal>
          <div className="cb-section-label">02 — Screens</div>
        </Reveal>
        <div className="cb-gallery">
          {screenshots.map((src, i) => (
            <Reveal key={i} delay={i * 60}>
              <ImageBlock src={src} label={`Screenshot ${i + 1}`} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* RESPONSIBILITIES */}
      <section className="cb-section">
        <Reveal>
          <div className="cb-section-label">03 — Responsibilities</div>
          <h2 className="cb-heading">What I Did</h2>
        </Reveal>
        <ul className="cb-list">
          {RESPONSIBILITIES.map((r, i) => (
            <Reveal key={i} delay={i * 40}>
              <li className="cb-list-item"><span className="cb-bullet">▹</span>{r}</li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* LEVEL DESIGN PROCESS */}
      <section className="cb-section">
        <Reveal>
          <div className="cb-section-label">04 — Process</div>
          <h2 className="cb-heading">Level Design Process</h2>
          <p className="cb-body">
            My design process stays consistent across every project. Because Colour Blind is
            built around a colour-restoration mechanic, my first step was to study how other
            games have handled colour as a core system. I researched titles such as Hue,
            Degrees of Separation, Chicory: A Colourful Tale, Alba: A Wildlife Adventure, and
            Gris, all of which were valuable sources of inspiration. Once I had gathered
            references, I sketched several paper drafts exploring what each level could look
            like. This always comes before any in-engine work, as it gives me a quick,
            reliable reference to build from. From there I move to digital drafts, adding more
            detail around what I can achieve through scripting within the level.
          </p>
        </Reveal>
        <ul className="cb-list cb-list--tight">
          {PROCESS_BULLETS.map((b, i) => (
            <Reveal key={i} delay={i * 40}>
              <li className="cb-list-item"><span className="cb-bullet">▹</span>{b}</li>
            </Reveal>
          ))}
        </ul>
        <div className="cb-gallery cb-gallery--process">
          {processImgs.map((src, i) => (
            <Reveal key={i} delay={i * 60}>
              <ImageBlock src={src} label={`Process ${i + 1}`} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* DESIGN GOALS */}
      <section className="cb-section">
        <Reveal>
          <div className="cb-section-label">05 — Design Goals</div>
          <h2 className="cb-heading">Design Goals</h2>
        </Reveal>
        <div className="cb-goals">
          {DESIGN_GOALS.map((g, i) => (
            <Reveal key={g.title} delay={i * 80}>
              <div className="cb-goal-card">
                <div className="cb-goal-title">{g.title}</div>
                <div className="cb-goal-block">
                  <span className="cb-goal-tag">Goal</span>
                  <p>{g.goal}</p>
                </div>
                <div className="cb-goal-block">
                  <span className="cb-goal-tag">Objective</span>
                  <p>{g.objective}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <ImageBlock src={puzzleImg} label="Puzzle design" />
        </Reveal>
      </section>

      {/* WHAT I LEARNT */}
      <section className="cb-section">
        <Reveal>
          <div className="cb-section-label">06 — Reflection</div>
          <h2 className="cb-heading">What I Learnt</h2>
        </Reveal>
        <ul className="cb-list">
          {LEARNT.map((l, i) => (
            <Reveal key={i} delay={i * 40}>
              <li className="cb-list-item"><span className="cb-bullet">▹</span>{l}</li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* FOOTER / BACK */}
      <footer className="cb-footer">
        <button className="cb-back-btn" onClick={goBack}>← Back to Portfolio</button>
        <button
          className="cb-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to Top ↑
        </button>
      </footer>
    </div>
  );
}