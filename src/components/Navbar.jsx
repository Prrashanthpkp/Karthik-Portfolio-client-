import { useEffect, useState } from "react";

export default function NavBar({ scrollTo }) {
  const [sc, setSc] = useState(false);
  useEffect(() => {
    const fn = () => setSc(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav className="navbar" style={{ borderBottomColor: sc ? "var(--red)" : "var(--border)" }}>
      <a className="nav-logo" href="#hero" onClick={e=>{e.preventDefault();scrollTo("hero");}}>
        <span className="nav-logo-bracket">[</span>K<span className="nav-logo-bracket">]</span>
      </a>
      <ul className="nav-links">
        {["skills","projects","contact"].map(id=>(
          <li key={id}><a href={`#${id}`} onClick={e=>{e.preventDefault();scrollTo(id);}}>{id}</a></li>
        ))}
      </ul>
      <div className="nav-status"><div className="status-dot"/>Available for work</div>
    </nav>
  );

}