export default function Hero({ scrollTo }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg-grid"/>
      <div className="hero-watermark">LEVEL</div>
      <div className="hero-corner">
        <span className="hero-corner-text">Game Level Designer</span>
        <div className="hero-corner-line"/>
      </div>
      <div className="hero-eyebrow">Portfolio 2026</div>
      <h1 className="hero-name">KARTHIK</h1>
      <span className="hero-name-outline">DESIGNS</span>
      <div className="hero-role-row">
        <span className="hero-role">Level Designer</span>
        <span className="hero-role-sep">/</span>
        <span className="hero-role">World Builder</span>
      </div>
      <p className="hero-tagline">
       Crafting spaces where layout meets story and mechanics meet meaning — building puzzle-driven and adventure-based worlds one block at a time.
      </p>
      <div className="hero-actions">
        <a className="btn-primary" href="#projects" onClick={e=>{e.preventDefault();scrollTo("projects");}}>View My Work →</a>
        <a className="btn-secondary" href="#contact" onClick={e=>{e.preventDefault();scrollTo("contact");}}>Get In Touch</a>
      </div>
      <div className="hero-stats">
        <div className="hero-stat-group">
          {[["3+","Projects"],["2+","Years Learning"],["6","Tools Mastered"]].map(([n,l])=>(
            <div key={l} className="hero-stat">
              <span className="stat-num">{n}</span>
              <span className="stat-label">{l}</span>
            </div>
          ))}
        </div>
        <div className="hero-scroll">
          <span className="scroll-text">Scroll</span>
          <div className="scroll-arrow"/>
        </div>
      </div>
    </section>
  );

}