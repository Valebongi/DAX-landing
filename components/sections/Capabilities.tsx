'use client'

import { useState } from 'react'

const products = [
  {
    tag: 'crm · python · vertex-ai',
    title: 'Motor de Prospección B2B',
    desc: 'CRM autónomo con lead scoring predictivo. Modelo de embedding sobre firmographics + señales de comportamiento; ranking diario de 40k cuentas con explicabilidad por feature.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l2.5 2.5" />
      </svg>
    ),
  },
  {
    tag: 'erp · spring-boot · whisper',
    title: 'Team Hub ERP',
    desc: 'Spring Boot 3 + Whisper ASR. Transcribe reuniones en español rioplatense, extrae decisiones y genera tickets en Jira/Linear con dueño asignado en menos de 90 segundos.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" x2="12" y1="19" y2="22" />
      </svg>
    ),
  },
  {
    tag: 'rag · fastapi · pgvector',
    title: 'Gecko RAG',
    desc: 'FastAPI + pgvector + Vertex AI. Retrieval sobre datos privados con cero alucinaciones: cada respuesta cita la fuente, los pasajes y el score. Multi-tenant desde la fila uno.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14a9 3 0 0 0 18 0V5" />
        <path d="M3 12a9 3 0 0 0 18 0" />
      </svg>
    ),
  },
]

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: `1px solid ${hovered ? '#3ABEF9' : '#E6EAF0'}`,
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        boxShadow: hovered
          ? '0 6px 16px -4px rgba(7,21,41,0.08), 0 2px 6px rgba(7,21,41,0.04)'
          : '0 1px 3px rgba(7,21,41,0.06), 0 1px 2px rgba(7,21,41,0.04)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 200ms var(--ease-standard)',
        cursor: 'default',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
        <div
          style={{
            width: '44px',
            height: '44px',
            background: '#F0F8FE',
            borderRadius: 'var(--radius-md)',
            display: 'grid',
            placeItems: 'center',
            color: '#14A5E8',
            flexShrink: 0,
          }}
        >
          {product.icon}
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            fontWeight: 500,
            color: '#14A5E8',
            letterSpacing: '0.02em',
          }}
        >
          {product.tag}
        </span>
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: '22px',
          lineHeight: 1.25,
          letterSpacing: '-0.01em',
          color: '#071529',
          margin: 0,
        }}
      >
        {product.title}
      </h3>

      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '15px',
          lineHeight: 1.55,
          color: '#3D485B',
          margin: 0,
          flex: 1,
        }}
      >
        {product.desc}
      </p>

      <a
        href="#"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: hovered ? '10px' : '6px',
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          fontWeight: 600,
          color: hovered ? '#14A5E8' : '#071529',
          transition: 'all var(--dur-base) var(--ease-standard)',
          textDecoration: 'none',
          marginTop: 'auto',
        }}
      >
        Ver arquitectura
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </a>
    </article>
  )
}

export function Capabilities() {
  return (
    <section
      id="productos"
      style={{ padding: '96px 0', background: '#FFFFFF' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 56px' }}>
        <header style={{ marginBottom: '48px', maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
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
            Productos · Plataformas en producción
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
            Tres plataformas que construimos, mergeamos y operamos.
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
            No son frameworks. No son demos. Cada una corre en producción de un cliente, con SLOs, on-call y handoff documentado al equipo interno.
          </p>
        </header>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}
        >
          {products.map((p) => (
            <ProductCard key={p.title} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
