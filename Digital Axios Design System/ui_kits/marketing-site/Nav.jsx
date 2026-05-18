/* global React */

// =============================================================
// Nav — sticky, hairline border, blurred backdrop
// =============================================================
function Nav() {
  const [open, setOpen] = React.useState(false);
  const navLinks = [
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Case studies', href: '#cases' },
    { label: 'Approach', href: '#approach' },
    { label: 'Writing', href: '#writing' },
  ];
  return (
    <header className="dax-nav">
      <a className="dax-nav__brand" href="#top" aria-label="Digital Axios — Home">
        <img src="../../assets/dax-logo-whitebg.png" alt="DAX" />
      </a>
      <nav className="dax-nav__links">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </nav>
      <div className="dax-nav__cta">
        <a className="dax-btn dax-btn--ghost dax-btn--sm" href="#contact">Sign in</a>
        <a className="dax-btn dax-btn--primary dax-btn--sm" href="#book">
          Book a working session
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
      </div>
    </header>
  );
}

window.Nav = Nav;
