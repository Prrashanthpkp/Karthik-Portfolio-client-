import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import Section from "./Section";

import cow1 from "../assets/projects/court-of-words/game1-pic1.png";
import cow2 from "../assets/projects/court-of-words/game1-pic2.png";

import hope1 from "../assets/projects/hope/game3-pic1.jpeg";
import hope2 from "../assets/projects/hope/game3-pic2.jpeg";
import hope3 from "../assets/projects/hope/game3-pic3.jpeg";
import hope4 from "../assets/projects/hope/game3-pic4.jpeg";
import hope5 from "../assets/projects/hope/game3-pic5.jpeg";

import nmr1 from "../assets/projects/no-more-rooms/game4-pic1.jpeg";
import nmr2 from "../assets/projects/no-more-rooms/game4-pic2.jpeg";
import nmr3 from "../assets/projects/no-more-rooms/game4-pic3.jpeg";
import nmr4 from "../assets/projects/no-more-rooms/game4-pic4.jpeg";

const projects = [
  {
    num: "01", total: "04",
    name: "Colour Blind",
    shortDesc: "A 3D narrative-driven puzzle game where you recollect forgotten memories inside a faded classroom to bring colour back to a teenager's world.",
    genre: "Narrative / Puzzle", tools: "Unity", engine: "Unity", role: "Level & Narrative Designer", year: "2024",
    route: "/projects/colour-blind",
    fullDesc: [],
    images: [],
  },
  {
    num: "02", total: "04",
    name: "The Court of Words",
    shortDesc: "A 3-player strategy board game where poetry becomes power — set in a royal court inspired by the Sangam period.",
    genre: "Strategy / Board Game", tools: "Unity", engine: "Unity", role: "Game Designer", year: "2024",
    fullDesc: [
      "The Court of Words is a 3-player strategy board game set in a royal court inspired by the Sangam period of ancient Tamil history. Players take on the roles of a King, a Poet, and a People's Representative — each with competing agendas, hidden motives, and a stake in how the truth is told.",
      "Each round, a political situation unfolds at court. The truth may be twisted, alliances may shift, and the Poet must craft a poem by filling in missing words — without knowing how the King will react. Will your words earn reward, spark suspicion, or cost you everything?",
      "Blending storytelling, deception, and wordplay, the game turns poetry into power. Reputation and trust are not shaped by actions, but by the words you choose. Every line written is a political move. Every silence is a risk.",
      "The design explores how language can be weaponised within social systems — drawing from Sangam-era poetic traditions (Akam and Puram) to create a mechanic where literary craft doubles as strategic deception.",
    ],
    images: [cow1, cow2],
  },
  {
    num: "03", total: "04",
    name: "Hope",
    shortDesc: "A narrative stealth prototype built in Twine — exploring the illusion of choice through branching paths, laser grids, and pattern locks.",
    genre: "Narrative / Stealth Prototype", tools: "Twine (Harlowe)", engine: "Twine", role: "Narrative & Gameplay Designer", year: "2024",
    fullDesc: [
      "Hope is a narrative-driven stealth prototype focused on player choice and system illusion. Set within a high-security facility, the game combines environmental navigation and lightweight puzzle mechanics — including laser grids and pattern locks — to create a feeling of decision-making under pressure.",
      "The core design pillar explores the illusion of choice: branching paths, interactive systems, and player inputs are designed to feel consequential and open, while all roads quietly converge toward a single inevitable end. The player believes they are in control. They are not.",
      "Built in Twine using Harlowe, Hope puts emphasis on rapid prototyping, branching narrative design, and story-driven puzzles. Minimal systems are used deliberately — every interaction was refined through multiple playtesting iterations, each cycle tightening the pacing and sharpening the deception.",
      "The project demonstrates how constrained tools can produce focused, thematically cohesive experiences — and how the feeling of agency can be a design mechanic in itself.",
    ],
    images: [hope1, hope2, hope3, hope4, hope5],
  },
  {
    num: "04", total: "04",
    name: "No More Rooms",
    shortDesc: "A 2D point-and-click escape room built in GameMaker — transforming a single confined space into a layered puzzle environment.",
    genre: "Puzzle / Escape Room", tools: "GameMaker", engine: "GameMaker", role: "Level & Interaction Designer", year: "2024",
    fullDesc: [
      "No More Rooms is a 2D point-and-click escape room experience built in GameMaker, focused on layered puzzle design. The game challenges players to observe, interpret, and connect subtle clues embedded within a confined space — transforming a single room into a dynamic problem-solving environment.",
      "Every element in the room serves a purpose. Objects that seem decorative become critical. Clues are layered intentionally — early observations only make sense once later discoveries unlock new context. The design rewards patience, attention, and lateral thinking.",
      "From ideation to implementation, the project highlights rapid prototyping, clean interaction design, and the ability to craft engaging gameplay within tight technical constraints.",
      "No More Rooms reflects a design philosophy centred entirely on player experience — where the challenge isn't difficulty for its own sake, but the satisfaction of a well-earned solution.",
    ],
    images: [nmr1, nmr2, nmr3, nmr4],
  },
];

function Gallery({ images }) {
  if (images.length === 0) {
    return <div className="gallery-no-images">No images available yet</div>;
  }
  return (
    <div className="modal-gallery">
      {images.map((src, i) =>
        src ? (
          <div key={i} className="gallery-img-slot">
            <img src={src} alt={`screenshot ${i + 1}`} />
          </div>
        ) : (
          <div key={i} className="gallery-placeholder">
            <div className="gallery-placeholder-lines" />
            <span className="gallery-placeholder-label">Image {i + 1}</span>
          </div>
        )
      )}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    document.querySelector(".navbar")?.style.setProperty("display", "none");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.querySelector(".navbar")?.style.setProperty("display", "");
    };
  }, [onClose]);

  return createPortal(
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-card">
        <div className="modal-close-bar">
          <button className="modal-close" onClick={onClose}>✕ Close</button>
        </div>
        <Gallery images={project.images} />
        <div className="modal-body">
          <div className="modal-meta-row">
            <span className="modal-badge">{project.genre}</span>
            <span className="modal-meta-item">Engine: <span>{project.engine}</span></span>
            <span className="modal-meta-item">Role: <span>{project.role}</span></span>
            <span className="modal-meta-item">Year: <span>{project.year}</span></span>
            <span className="modal-num">{project.num} / {project.total}</span>
          </div>
          <div className="modal-title">{project.name}</div>
          <div className="modal-desc-block">
            {project.fullDesc.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

function ProjectCard({ project, onExpand }) {
  return (
    <div className="proj-outer-card" onClick={onExpand}>
      <div className="proj-num-col">
        <div className="proj-img-lines" />
        <div className="proj-num-bg">{project.num}</div>
      </div>
      <div className="proj-info-col">
        <div>
          <div className="proj-idx-row">{project.num} / {project.total}</div>
          <div className="proj-name">{project.name}</div>
          <p className="proj-short-desc">{project.shortDesc}</p>
        </div>
        <div className="proj-bottom">
          <div className="proj-bottom-left">
            <span className="genre-badge">{project.genre}</span>
            <span className="proj-tools-text">{project.tools}</span>
          </div>
          <button className="expand-btn" onClick={(e) => { e.stopPropagation(); onExpand(); }}>
            View Project ↗
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  const handleExpand = (p) => {
    if (p.route) {
      navigate(p.route);
    } else {
      setActive(p);
    }
  };

  return (
    <Section id="projects" label="02 — Work" title="Selected" accent="Projects" countLabel="P">
      <div className="projects-list-new">
        {projects.map((p) => (
          <ProjectCard key={p.num} project={p} onExpand={() => handleExpand(p)} />
        ))}
      </div>
      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </Section>
  );
}