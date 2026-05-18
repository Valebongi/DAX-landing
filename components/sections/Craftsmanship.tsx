const items = [
  {
    num: '01',
    title: 'Pods de dos a tres senior.',
    desc: 'Cada engagement es ownership real. Nadie es "extended team", nadie procesa tickets de otro. Los que diseñan son los que escriben, y los que escriben firman el deploy.',
  },
  {
    num: '02',
    title: 'Ciclos de seis semanas.',
    desc: 'Sin sprints, sin standups ritualizados. Entregamos en bloques que tu equipo puede mergear el viernes y empezar a operar el lunes.',
  },
  {
    num: '03',
    title: 'Soluciones a medida, no plantillas.',
    desc: 'Cada producto se diseña fresh, en base al estado real de tu sistema y tus restricciones — no en base a lo que ya hicimos para otro cliente del rubro.',
  },
  {
    num: '04',
    title: 'Decisiones técnicas en el rato.',
    desc: 'Sin steering committees ni comités de aprobación. Las decisiones técnicas se toman sobre código real, en el momento, con el dueño del sistema en el mismo canal.',
  },
]

export function Craftsmanship() {
  return (
    <section
      id="proceso"
      style={{ padding: '96px 0', background: '#FFFFFF' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 56px' }}>
        <header
          style={{
            marginBottom: '48px',
            maxWidth: '720px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: '12px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#3BAAD8',
              margin: 0,
            }}
          >
            Cómo trabajamos
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
            Sin sprint planning. Sin tickets vacíos. Soluciones a medida en cada producto.
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
            Funcionamos como un pod chico, no como un proyecto. Cada engagement arranca de cero — sin plantillas reutilizadas, sin arquitecturas heredadas de otro cliente.
          </p>
        </header>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0 56px',
          }}
        >
          {items.map((item) => (
            <article
              key={item.num}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                padding: '28px 0',
                borderTop: '1px solid #E6EAF0',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  fontSize: '13px',
                  color: '#3BAAD8',
                  letterSpacing: '0.04em',
                }}
              >
                {item.num}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(20px, 2vw, 26px)',
                  lineHeight: 1.18,
                  letterSpacing: '-0.015em',
                  color: '#071529',
                  margin: 0,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  lineHeight: 1.55,
                  color: '#3D485B',
                  margin: 0,
                  maxWidth: '42ch',
                }}
              >
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
