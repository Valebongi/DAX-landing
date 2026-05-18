/* global React */

// =============================================================
// Hero — light surface, big display headline, dual CTA, code block proof
// =============================================================
function Hero() {
  return (
    <section className="dax-hero" id="top">
      <div className="dax-hero__copy">
        <span className="dax-eyebrow-tag">
          <span className="dot" />
          Strategic engineering partner
        </span>
        <h1 className="dax-display">
          Scale the engineering,<br/>
          <span className="accent">not the org chart.</span>
        </h1>
        <p className="dax-lead">
          We design, build, and ship microservices, vector databases, and AI pipelines into
          your production tree — with two senior engineers per pod and six-week cycles.
        </p>
        <div className="dax-hero__ctas">
          <a className="dax-btn dax-btn--primary" href="#book">
            Book a working session
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a className="dax-btn dax-btn--secondary" href="#cases">View case studies</a>
        </div>
      </div>
      <aside className="dax-hero__panel" aria-label="Sample deliverable">
        <div className="dax-hero__panel-bar">
          <span className="dax-hero__dot" style={{ background: '#FF5F57' }} />
          <span className="dax-hero__dot" style={{ background: '#FEBC2E' }} />
          <span className="dax-hero__dot" style={{ background: '#28C840' }} />
          <span className="dax-hero__panel-title">pod-7 / vector-search</span>
        </div>
        <pre className="dax-hero__code">
<span style={{ color: '#93A3BC' }}>{`// p99 budget · 12M docs · tenant-isolated`}</span>{`\n`}
<span style={{ color: '#7FDBFF' }}>const</span>{` hits = `}<span style={{ color: '#7FDBFF' }}>await</span>{` index.query({\n`}
{`  vector: embed(q),\n`}
{`  topK: `}<span style={{ color: 'var(--dax-blue)' }}>12</span>{`,\n`}
{`  filter: { tenant_id }\n`}
{`});\n\n`}
<span style={{ color: '#B5E48C' }}>{`// p99 73ms · production ready`}</span>
        </pre>
        <div className="dax-hero__stats">
          <div><span className="num">73<span className="unit">ms</span></span><span className="lab">p99 latency</span></div>
          <div><span className="num">12<span className="unit">M</span></span><span className="lab">documents</span></div>
          <div><span className="num">9<span className="unit">wk</span></span><span className="lab">to ship</span></div>
        </div>
      </aside>
    </section>
  );
}

window.Hero = Hero;
