import { useState } from "react";
import Section from "./Section";

// FIX: use the correct displayed email everywhere
const EMAIL = "rrk782003@gmail.com";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    // FIX: was hardcoded to "karthik@lorem.com" — now uses EMAIL constant
    navigator.clipboard?.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" label="03 — Connect" title="Let's" accent="Connect" countLabel="C">
      <div className="contact-grid">
        <div>
          <p className="contact-sub">
            I'm a designer who loves a good challenge — whether it's a quick collab, a long-term project, or just a conversation about what makes a level feel alive. I'm always looking for opportunities to grow, contribute, and create experiences that stick with players. If something you're working on sounds interesting, don't hesitate to reach out.
          </p>
          <div className="contact-email-wrap">
            <span className="terminal-prefix">$</span>
            {/* FIX: was missing href entirely */}
            <a className="contact-email-link" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <button className="email-copy" onClick={copy}>{copied ? "Copied!" : "Copy"}</button>
          </div>
          <div className="socials-grid">
            {/* FIX: replace href="#" with real URLs */}
            {[
              ["LI", "LinkedIn", "https://www.linkedin.com/in/karthik-ld"],
              ["GH", "GitHub",   "https://github.com/GameGlitz78"],
            ].map(([abbr, name, url]) => (
              <a key={abbr} className="social-item" href={url} target="_blank" rel="noopener noreferrer">
                <span className="social-abbr">{abbr}</span>
                <span className="social-name">{name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-aside" style={{ paddingTop: "6rem" }}>
          {[
            ["Location",     "Falmouth, UK\nOpen to Remote"],
            ["Availability", null],
          ].map(([label, val]) => (
            <div key={label} className="aside-box">
              <div className="aside-label">{label}</div>
              <div className="aside-value">
                {label === "Availability" ? (
                  <div className="availability-row">
                    <div className="avail-dot" />
                    <span>Open to opportunities</span>
                  </div>
                ) : (
                  // FIX: removed dead "Interests" condition that never matched
                  <span style={{ whiteSpace: "pre-line", lineHeight: "1.7" }}>{val}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
