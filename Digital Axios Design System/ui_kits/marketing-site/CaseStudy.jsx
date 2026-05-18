/* global React */

// =============================================================
// CaseStudy — featured case with metric grid
// =============================================================
function CaseStudy() {
  const metrics = [
    { value: '3.4\u00D7', label: 'Deploy throughput' },
    { value: '\u221238 min', label: 'Build time eliminated' },
    { value: '$8.2M', label: 'Annualized infra savings' },
    { value: '9 wk', label: 'To production' },
  ];
  return (
    <section className="dax-section dax-section--tint" id="cases">
      <header className="dax-section__head">
        <p className="dax-eyebrow">Case study · Helix Logistics</p>
        <h2 className="dax-h2">From weekly releases to multi-daily ships, in nine weeks.</h2>
      </header>
      <div className="dax-case">
        <div className="dax-case__body">
          <p className="dax-lead">
            Helix had four monoliths, no service catalog, and a six-engineer platform team
            doing tickets. We embedded two staff engineers, rebuilt the deploy primitive,
            and handed back the keys before the quarter closed.
          </p>
          <ul className="dax-case__list">
            <li>Domain-driven re-architecture of the order-routing service</li>
            <li>Internal developer portal with golden-path templates</li>
            <li>Observability stack with SLO-driven on-call</li>
          </ul>
          <a href="#" className="dax-btn dax-btn--secondary">
            Read the full brief (PDF)
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>
        <div className="dax-case__metrics">
          {metrics.map((m) => (
            <div key={m.label} className="dax-metric">
              <span className="dax-metric__value">{m.value}</span>
              <span className="dax-metric__label">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.CaseStudy = CaseStudy;
