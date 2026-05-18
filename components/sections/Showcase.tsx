const bullets = [
  'Re-arquitectura DDD del servicio de ruteo de órdenes',
  'Portal interno con templates de golden path',
  'Stack de observabilidad con SLOs y on-call',
]

export function Showcase() {
  return (
    <section
      id="caso"
      style={{
        padding: '96px 0',
        background: '#F0F8FE',
        borderTop: '1px solid rgba(58, 190, 249, 0.25)',
        borderBottom: '1px solid rgba(58, 190, 249, 0.25)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 56px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          {/* Left: text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '12px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#14A5E8',
                margin: 0,
              }}
            >
              Caso · Logística B2B · 9 semanas
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(28px, 3vw, 36px)',
                lineHeight: 1.12,
                letterSpacing: '-0.018em',
                color: '#071529',
                margin: 0,
              }}
            >
              De releases semanales a despliegues multidiarios.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: 1.55,
                color: '#3D485B',
                margin: 0,
                maxWidth: '56ch',
              }}
            >
              Embebimos dos ingenieros staff, reconstruimos la primitiva de deploy y devolvimos las llaves antes del cierre de trimestre. SLOs, golden-path templates y on-call documentado.
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {bullets.map((b) => (
                <li
                  key={b}
                  style={{
                    paddingLeft: '22px',
                    position: 'relative',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '15px',
                    lineHeight: 1.55,
                    color: '#3D485B',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '10px',
                      width: '12px',
                      height: '2px',
                      background: '#3ABEF9',
                      display: 'block',
                    }}
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: dark feature card */}
          <div
            style={{
              position: 'relative',
              borderRadius: '28px',
              border: '1px solid rgba(47, 75, 104, 0.75)',
              background: 'linear-gradient(95deg, #030710 0%, #1E3B59 100%)',
              padding: '44px 40px',
              color: '#CCE9FF',
              overflow: 'hidden',
              boxShadow: '0 18px 40px -12px rgba(7,21,41,0.18)',
            }}
          >
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: '-10%',
                background: 'radial-gradient(55% 50% at 78% 25%, rgba(58,190,249,0.20), transparent 65%)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  fontSize: 'clamp(72px, 10vw, 120px)',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  color: '#FFFFFF',
                  margin: 0,
                }}
              >
                3.4<span style={{ color: '#3ABEF9' }}>×</span>
              </p>
              <p
                style={{
                  marginTop: '12px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: '#8FB0D6',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Deploy throughput · −38 min build · $8.2M anuales
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
