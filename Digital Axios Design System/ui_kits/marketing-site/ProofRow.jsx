/* global React */

// =============================================================
// ProofRow — placeholder client logos + a single number
// =============================================================
function ProofRow() {
  const logos = ['NORTHWIND', 'HELIX', 'OCTAVE', 'PLINTH', 'KIRA AI', 'STELLAR'];
  return (
    <section className="dax-proof">
      <p className="dax-eyebrow">Trusted by engineering orgs from 40 to 4,000</p>
      <div className="dax-proof__logos">
        {logos.map((l) => (
          <span key={l} className="dax-proof__logo">{l}</span>
        ))}
      </div>
    </section>
  );
}

window.ProofRow = ProofRow;
