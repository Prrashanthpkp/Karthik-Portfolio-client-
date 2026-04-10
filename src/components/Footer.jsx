export default function Footer({ scrollTo }) {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span className="footer-name">KARTHIK</span>
        <span className="footer-copy">© 2026 — All rights reserved</span>
      </div>
      <div className="footer-right">
        {["skills","projects","contact"].map(id=>(
          <a key={id} className="footer-link" href={`#${id}`} onClick={e=>{e.preventDefault();scrollTo(id);}}>{id}</a>
        ))}
        <span className="footer-year">2026</span>
      </div>
    </footer>
  );

}