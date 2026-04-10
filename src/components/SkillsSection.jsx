import Section from "./Section";

const toolIcons = [
  {
    name: "Unity",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.05 2.053l5.266 9.12-3.036 1.754-5.265-9.12zM7.714 3.807l5.265 9.12-3.036 1.754L4.678 5.56zm10.533 5.267l-5.265 9.12H7.715l5.265-9.12zm-10.533 9.12l5.265-9.12h6.266l-5.265 9.12z" />
      </svg>
    ),
  },
  {
    name: "Unreal Engine",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c2.698 0 5.17 1.01 7.031 2.666L4.666 19.031A9.965 9.965 0 0 1 2 12C2 6.477 6.477 2 12 2zm0 20c-2.698 0-5.17-1.01-7.031-2.666L19.334 4.969A9.965 9.965 0 0 1 22 12c0 5.523-4.477 10-10 10z" />
      </svg>
    ),
  },
  {
    name: "GameMaker",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7.5 3.75-7.5 3.75-7.5-3.75L12 4.18zM4 8.87l7 3.5v6.76l-7-3.5V8.87zm9 10.26v-6.76l7-3.5v6.76l-7 3.5z" />
      </svg>
    ),
  },
  {
    name: "Twine",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    ),
  },
  {
    name: "Bitsy",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7zm2 2v3h3v-3h-3zM5 5v3h3V5H5zm11 0v3h3V5h-3zM5 16v3h3v-3H5z" />
      </svg>
    ),
  },
  {
    name: "Git",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.608-.406-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
      </svg>
    ),
  },
  {
    name: "Blender",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.51 13.214c.046-.8.438-1.538 1.02-2.03a3.354 3.354 0 0 1 2.19-.78 3.35 3.35 0 0 1 2.184.78 3.129 3.129 0 0 1 1.021 2.03 3.07 3.07 0 0 1-1.021 2.563 3.36 3.36 0 0 1-2.184.78 3.365 3.365 0 0 1-2.19-.78 3.068 3.068 0 0 1-1.02-2.563zM9.442 9.658L5.325 12.31l3.45 1.83-.006.049c-.047.453-.047.908 0 1.36l.006.05-3.45 1.83 4.117 2.65 2.55-2.39.046.03a6.723 6.723 0 0 0 2.32 1.01l.048.01.465 3.39h4.776l.465-3.39.048-.01a6.734 6.734 0 0 0 2.317-1.01l.047-.03 2.55 2.39 4.117-2.65-3.45-1.83.007-.05c.047-.452.047-.907 0-1.36l-.006-.05 3.45-1.83-4.118-2.65-2.55 2.39-.046-.03a6.723 6.723 0 0 0-2.317-1.01l-.048-.01-.465-3.39h-4.776l-.465 3.39-.048.01A6.734 6.734 0 0 0 12 12.02l-.047.03-2.511-2.39z" />
      </svg>
    ),
  },
];

const marqueeItems = [toolIcons, toolIcons];

const marqueeStyle = `
  .marquee-section {
    margin-top: 5rem;
    overflow: hidden;
    padding: 2.5rem 0;
    border-top: 1px solid #1c1c1c;
    border-bottom: 1px solid #1c1c1c;
    position: relative;
    white-space: nowrap;
  }
  .marquee-section::before,
  .marquee-section::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    width: 120px;
    z-index: 2;
    pointer-events: none;
  }
  .marquee-section::before { left: 0; background: linear-gradient(to right, #080808, transparent); }
  .marquee-section::after  { right: 0; background: linear-gradient(to left, #080808, transparent); }
  .marquee-label {
    font-size: .6rem;
    letter-spacing: .22em;
    text-transform: uppercase;
    color: #C0392B;
    text-align: center;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
  }
  .marquee-label::before,
  .marquee-label::after {
    content: '';
    display: block;
    width: 40px;
    height: 1px;
    background: #C0392B;
  }
  .marquee-track {
  display: flex;
  width: max-content;
  animation: marqueeScroll 20s linear infinite;
}

@keyframes marqueeScroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
  .marquee-track:hover { animation-play-state: paused; }
    .marquee-group {
  display: flex;
  flex-shrink: 0;
}
  .marquee-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .6rem;
    padding: 0 2.8rem;
    cursor: default;
    transition: all .2s;
    border-right: 1px solid #1c1c1c;
    min-width: 130px;
  }
  .marquee-item:hover .m-icon { color: #C0392B; transform: scale(1.15); }
  .marquee-item:hover .m-name { color: #F0EDE6; }
  .m-icon {
    width: 32px; height: 32px;
    color: #444;
    transition: color .2s, transform .2s;
    display: flex; align-items: center; justify-content: center;
  }
  .m-icon svg { width: 100%; height: 100%; }
  .m-name {
    font-size: .58rem;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: #444;
    white-space: nowrap;
    transition: color .2s;
    font-family: 'DM Mono', monospace;
  }
  .about-block {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .about-tag-row {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    margin-top: .5rem;
  }
  .about-tag {
    border: 1px solid #1c1c1c;
    padding: .28rem .75rem;
    font-size: .6rem;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: #C0392B;
    font-family: 'DM Mono', monospace;
  }
`;

// FIX: Removed duplicate useRef and useInView — Section handles its own visibility
export default function SkillsSection() {
  return (
    <Section id="skills" label="01 — Craft" title="Skills &" accent="Education" countLabel="S">
      <style>{marqueeStyle}</style>

      <div className="skills-wrap">
        {/* LEFT: About */}
        <div className="about-block">
          <div>
            <div className="col-label">About</div>
            <p style={{
              fontSize: ".78rem", color: "#9a9690", lineHeight: "2",
              letterSpacing: ".04em", marginBottom: "1.2rem"
            }}>
              I'm a level and core gameplay designer working in Unreal Engine and Unity, focused on building puzzle-driven and adventure-based experiences. My work is grounded in strong verbs, narrative-based puzzles, and environmental storytelling — shaping levels through affordances, landmarks, gates & valves, and intentional pacing.
            </p>
            <p style={{
              fontSize: ".75rem", color: "#9a9690", lineHeight: "2",
              letterSpacing: ".04em", marginBottom: "1.5rem"
            }}>
              I specialize in rapid prototyping and blockmeshing, using tools like Twine, GameMaker, and Bitsy to quickly build, playtest, and iterate on core mechanics and loops. My approach blends level design with gameplay iteration — emphasizing challenge, feedback, and emergent problem solving — to create cohesive experiences where mechanics, environment, and narrative work together.
            </p>
            <div style={{ width: "40px", height: "2px", background: "#C0392B", margin: "1.5rem 0" }} />
            <p style={{
              fontSize: ".68rem", color: "#444", lineHeight: "1.8",
              letterSpacing: ".04em", fontStyle: "italic"
            }}>
              Currently open to internships, game jams, and collaborative projects in puzzle, adventure, or narrative-driven games.
            </p>
          </div>

          <div>
            <div className="col-label" style={{ marginBottom: "1rem" }}>Specialties</div>
            <div className="about-tag-row">
              {["RPG Level Design", "Horror Atmospheres", "World Building", "Environment Storytelling", "Combat Arenas", "Exploration Design", "Puzzle Spaces", "Narrative Layouts"].map(t => (
                <span key={t} className="about-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Education */}
        <div>
          <div className="col-label">Education</div>
          {[
            { year: "2025 — Present", degree: "MA Game Design", school: "Falmouth University" },
            { year: "2021-2025", degree: "B.tech Computer Science with specialization in Gaming Technology", school: "SRM IST" },
            { year: "2019 — 2021", degree: "Higher Secondary (Computer Science)", school: "SBOA junior college & school" },
          ].map(e => (
            <div key={e.year} className="edu-item">
              <div className="edu-year">{e.year}</div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MARQUEE STRIP */}
      <div className="marquee-section">
        <div className="marquee-label">Tools & Software</div>
        <div className="marquee-track">
          {marqueeItems.map((group, gi) => (
            <div className="marquee-group" key={gi}>
              {group.map((item, i) => (
                <div key={i} className="marquee-item">
                  <div className="m-icon">{item.svg}</div>
                  <span className="m-name">{item.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
