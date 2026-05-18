/* global React */

// =============================================================
// Capabilities — three-column service grid
// =============================================================
function Capabilities() {
  const items = [
    {
      title: 'Microservices & platform',
      desc: 'Domain-driven service boundaries, golden-path templates, and CI/CD that other teams actually adopt.',
      tag: 'Platform',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
      ),
    },
    {
      title: 'Vector DBs & retrieval',
      desc: 'Embeddings, hybrid search, and tenant-isolated indices at p99 budgets that don\u2019t embarrass you.',
      tag: 'Data',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>
      ),
    },
    {
      title: 'AI pipelines, end-to-end',
      desc: 'From ingest to eval. Real orchestration, real guardrails, real ownership handoff to your team.',
      tag: 'AI',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
      ),
    },
  ];
  return (
    <section className="dax-section" id="capabilities">
      <header className="dax-section__head">
        <p className="dax-eyebrow">What we build</p>
        <h2 className="dax-h2">Real engineering deliverables — merged, deployed, owned.</h2>
      </header>
      <div className="dax-capabilities">
        {items.map((it) => (
          <article key={it.title} className="dax-cap-card">
            <div className="dax-cap-card__icon">{it.icon}</div>
            <div className="dax-cap-card__meta">
              <span className="dax-cap-card__tag">{it.tag}</span>
              <h3 className="dax-h4">{it.title}</h3>
              <p className="dax-body">{it.desc}</p>
            </div>
            <a href="#" className="dax-cap-card__link">
              Read brief
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

window.Capabilities = Capabilities;
