const technologies = [
  { label: 'Python 3.11', color: '#3B82F6' },
  { label: 'FastAPI', color: '#059669' },
  { label: 'Java 17', color: '#F97316' },
  { label: 'Spring Boot 3', color: '#16A34A' },
  { label: 'React', color: '#06B6D4' },
  { label: 'TypeScript', color: '#3B82F6' },
  { label: 'PostgreSQL', color: '#1D4ED8' },
  { label: 'Vertex AI', color: '#3ABEF9' },
  { label: 'Gemini 2.0 Flash', color: '#8B5CF6' },
  { label: 'pgvector', color: '#8B5CF6' },
  { label: 'Google Cloud', color: '#EA4335' },
  { label: 'RAG / LLM', color: '#3ABEF9' },
  { label: 'Whisper ASR', color: '#10B981' },
  { label: 'Neon', color: '#1D4ED8' },
]

function Chip({ label, color }: { label: string; color: string }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 14px',
        background: '#FFFFFF',
        border: '1px solid #E6EAF0',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-sans)',
        fontWeight: 500,
        fontSize: '13px',
        color: '#071529',
        flexShrink: 0,
        whiteSpace: 'nowrap',
      }}
    >
      <span
        style={{
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          background: color,
          flexShrink: 0,
          display: 'inline-block',
        }}
      />
      {label}
    </span>
  )
}

export function ProofRow() {
  const doubled = [...technologies, ...technologies]

  return (
    <section
      aria-label="Tecnologías que usamos"
      style={{
        padding: '32px 0 40px',
        background: '#FFFFFF',
        borderBottom: '1px solid rgba(230, 234, 240, 0.8)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '140px',
          background: 'linear-gradient(90deg, #FFFFFF, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '140px',
          background: 'linear-gradient(-90deg, #FFFFFF, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <div style={{ overflow: 'hidden' }}>
        <div
          className="proof-track"
          style={{ display: 'flex', gap: '10px', width: 'max-content' }}
        >
          {doubled.map((tech, i) => (
            <Chip key={`${tech.label}-${i}`} label={tech.label} color={tech.color} />
          ))}
        </div>
      </div>
    </section>
  )
}
