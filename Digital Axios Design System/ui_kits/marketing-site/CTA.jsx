/* global React */

// =============================================================
// CTA — navy band with a clear, calm ask
// =============================================================
function CTA() {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  function submit(e) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  }
  return (
    <section className="dax-cta" id="book">
      <div className="dax-cta__inner">
        <div className="dax-cta__copy">
          <p className="dax-eyebrow" style={{ color: 'var(--dax-blue)' }}>Book a working session</p>
          <h2 className="dax-h2" style={{ color: '#fff' }}>
            45 minutes. Your stack on screen. We sketch the cut path.
          </h2>
          <p className="dax-lead" style={{ color: 'var(--fg-inverse-2)' }}>
            No deck. No pitch. One engineer, one strategist, and your real architecture.
          </p>
        </div>
        <form className="dax-cta__form" onSubmit={submit}>
          {sent ? (
            <div className="dax-cta__sent">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--dax-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Thanks. We’ll reply within one business day.</span>
            </div>
          ) : (
            <React.Fragment>
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="dax-btn dax-btn--primary">
                Request a slot
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </button>
            </React.Fragment>
          )}
        </form>
      </div>
    </section>
  );
}

window.CTA = CTA;
