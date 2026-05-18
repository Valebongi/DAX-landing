'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Descubrimiento acelerado',
    desc: 'Generamos arquitecturas candidatas, prototipos navegables y diagramas en horas, no semanas. Bajamos a código y mediciones reales antes de cerrar la primera reunión.',
  },
  {
    num: '02',
    title: 'Pair programming con agentes',
    desc: 'Refactor, escritura y revisión asistidos con LLMs. El humano firma cada commit — la IA acorta el camino, no toma la decisión.',
  },
  {
    num: '03',
    title: 'Evaluación automatizada',
    desc: 'Cada cambio crítico pasa por una eval suite. Regresiones detectadas antes del merge, no en producción el lunes a la mañana.',
  },
  {
    num: '04',
    title: 'Producto con IA en el core',
    desc: 'Cuando el producto lo requiere, integramos retrieval, agentes y modelos generativos con guardrails y trazabilidad. Nada de magia: contratos y costos medidos por request.',
  },
]

function IAStep({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.article
      ref={ref}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
      whileHover={{
        borderColor: '#5DC0E8',
        boxShadow: '0 6px 16px -4px rgba(7,21,41,0.08), 0 2px 6px rgba(7,21,41,0.04)',
      }}
      style={{
        display: 'grid',
        gridTemplateColumns: '56px 1fr',
        gap: '18px',
        padding: '26px 28px',
        background: 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid #E6EAF0',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '0 1px 3px rgba(7,21,41,0.04)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontWeight: 600,
          fontSize: '22px',
          color: '#5DC0E8',
          letterSpacing: '-0.02em',
          paddingTop: '2px',
        }}
      >
        {step.num}
      </span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: '19px',
            color: '#071529',
            margin: 0,
            letterSpacing: '-0.01em',
          }}
        >
          {step.title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '14px',
            lineHeight: 1.55,
            color: '#3D485B',
            margin: 0,
          }}
        >
          {step.desc}
        </p>
      </div>
    </motion.article>
  )
}

export function Immersion() {
  return (
    <section
      id="ia"
      style={{
        background: '#FAFBFC',
        padding: '96px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(58,190,249,0.14) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 25%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 25%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 56px', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '18px',
            maxWidth: '720px',
            margin: '0 auto 64px',
          }}
        >
          <div style={{ width: '80px', height: '80px', display: 'grid', placeItems: 'center' }}>
            <svg viewBox="0 0 24 24" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sparkleGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7FD8FF" />
                  <stop offset="50%" stopColor="#5DC0E8" />
                  <stop offset="100%" stopColor="#14A5E8" />
                </linearGradient>
              </defs>
              <path
                fill="url(#sparkleGrad)"
                d="M12 0 C12 8 16 12 24 12 C16 12 12 16 12 24 C12 16 8 12 0 12 C8 12 12 8 12 0 Z"
              />
            </svg>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(32px, 3.5vw, 44px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#071529',
              margin: 0,
              maxWidth: '18ch',
              textShadow: 'rgba(58,190,249,0.18) 0 0 24px, rgba(58,190,249,0.12) 0 0 48px',
            }}
          >
            Construimos <span style={{ color: '#5DC0E8' }}>con IA</span>, no encima de IA.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: '17px',
              lineHeight: 1.55,
              color: '#3D485B',
              margin: 0,
              maxWidth: '56ch',
            }}
          >
            La usamos para acelerar el descubrimiento, escribir código, y validar antes del deploy. Es parte de cómo entregamos — no un capítulo aparte del proyecto.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
          }}
        >
          {steps.map((step, i) => (
            <IAStep key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
