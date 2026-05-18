'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { FadeIn, RevealText } from '@/components/ui/RevealText'

const principles = [
  {
    number: '01',
    label: 'Emotion before information',
    body: 'The first responsibility of an interface is to be felt. Understanding follows immersion.',
  },
  {
    number: '02',
    label: 'Atmosphere before UI',
    body: 'The environment exists before buttons do. The world is sculpted before it is navigated.',
  },
  {
    number: '03',
    label: 'Motion as architecture',
    body: 'Movement is not decoration. It is structure. Every transition is a spatial decision.',
  },
]

export function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null)
  useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative py-40 md:py-56 overflow-hidden"
      style={{ background: 'var(--dax-surface)' }}
    >
      {/* ── Top: dissolve from navy hero ── */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: 'clamp(200px, 28vh, 380px)',
          background: 'linear-gradient(to bottom, #061528 0%, rgba(6,21,40,0.0) 100%)',
          zIndex: 2,
        }}
      />

      {/* Subtle electric glow on light bg */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(57, 190, 249, 0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 px-8 md:px-14 lg:px-20 xl:px-28 max-w-[1600px] mx-auto">
        {/* Section label */}
        <FadeIn delay={0} className="flex items-center gap-4 mb-20">
          <div className="w-6 h-px" style={{ background: 'var(--dax-electric)' }} />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 300,
              fontSize: '0.62rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--dax-light-tertiary)',
            }}
          >
            Philosophy
          </span>
        </FadeIn>

        {/* Main statement — asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 mb-40">
          <div className="lg:col-span-7">
            <RevealText delay={0.1}>
              <h2
                style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 700,
                  fontSize: 'clamp(2.4rem, 5vw, 6.5rem)',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.05,
                  color: 'var(--dax-light-primary)',
                }}
              >
                Technology should
              </h2>
            </RevealText>
            <RevealText delay={0.18}>
              <h2
                style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 300,
                  fontSize: 'clamp(2.4rem, 5vw, 6.5rem)',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.05,
                  color: 'var(--dax-electric)',
                }}
              >
                not feel cold.
              </h2>
            </RevealText>
          </div>

          <FadeIn
            delay={0.35}
            direction="up"
            className="lg:col-span-4 lg:col-start-9 lg:self-end pb-2"
          >
            <p
              className="leading-[1.9]"
              style={{
                fontFamily: 'var(--font-outfit)',
                fontWeight: 300,
                fontSize: 'clamp(0.82rem, 1vw, 0.95rem)',
                color: 'var(--dax-light-secondary)',
                letterSpacing: '0.01em',
              }}
            >
              We believe the most powerful interfaces are the ones that feel human.
              Not efficient. Not functional. <em>Human.</em>
            </p>
            <p
              className="mt-5 leading-[1.9]"
              style={{
                fontFamily: 'var(--font-outfit)',
                fontWeight: 300,
                fontSize: 'clamp(0.82rem, 1vw, 0.95rem)',
                color: 'var(--dax-light-secondary)',
                letterSpacing: '0.01em',
              }}
            >
              At DAX, every line of code is directed by emotion. Every motion
              is composed like a score. Every interface is a world that is
              entered, not merely used.
            </p>
          </FadeIn>
        </div>

        {/* Thin divider */}
        <div className="section-divider-light mb-20" />

        {/* Principles grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-0"
          style={{ borderTop: '1px solid var(--dax-border-light)' }}
        >
          {principles.map((p, i) => (
            <FadeIn
              key={p.number}
              delay={0.1 + i * 0.12}
              direction="up"
              className="group px-0 md:px-10 py-10 md:py-0 first:pl-0 last:pr-0"
            >
              <div
                className="flex flex-col gap-4 pt-10"
                style={{
                  borderRight: i < principles.length - 1 ? '1px solid var(--dax-border-light)' : 'none',
                  paddingRight: i < principles.length - 1 ? '2.5rem' : '0',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 300,
                    fontSize: '3rem',
                    lineHeight: 1,
                    color: 'var(--dax-electric)',
                    opacity: 0.45,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {p.number}
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 600,
                    fontSize: '0.72rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--dax-light-primary)',
                  }}
                >
                  {p.label}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 300,
                    fontSize: '0.83rem',
                    lineHeight: 1.8,
                    color: 'var(--dax-light-secondary)',
                  }}
                >
                  {p.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* ── Bottom: dissolve toward Capabilities (surface-low) ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: 'clamp(180px, 22vh, 300px)',
          background: 'linear-gradient(to bottom, transparent 0%, #E8ECF2 100%)',
          zIndex: 2,
        }}
      />
    </section>
  )
}
