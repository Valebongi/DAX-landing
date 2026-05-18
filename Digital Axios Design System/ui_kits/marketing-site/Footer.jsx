/* global React */

// =============================================================
// Footer — column nav over navy
// =============================================================
function Footer() {
  const cols = [
    { title: 'Capabilities', links: ['Platform engineering', 'Vector DBs & retrieval', 'AI pipelines', 'Migration & cutovers'] },
    { title: 'Company', links: ['About', 'Engineers', 'Careers', 'Writing'] },
    { title: 'Resources', links: ['Case studies', 'Briefs (PDF)', 'On-call runbooks', 'Security'] },
  ];
  return (
    <footer className="dax-footer">
      <div className="dax-footer__top">
        <div className="dax-footer__brand">
          <img src="../../assets/dax-logo-darkbg.png" alt="DAX" />
          <p className="dax-footer__tag">
            Strategic technology partner. We ship engineering into your production tree.
          </p>
        </div>
        <div className="dax-footer__cols">
          {cols.map((c) => (
            <div key={c.title} className="dax-footer__col">
              <h4>{c.title}</h4>
              <ul>
                {c.links.map((l) => <li key={l}><a href="#">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="dax-footer__bottom">
        <span>© 2026 Digital Axios. All rights reserved.</span>
        <div className="dax-footer__legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Security</a>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
