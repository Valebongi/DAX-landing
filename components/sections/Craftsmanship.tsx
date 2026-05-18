'use client'

import { motion } from 'framer-motion'
import { FadeIn, RevealText } from '@/components/ui/RevealText'

const phases = [
  {
    number: '01',
    title: 'Cinematic Direction',
    body: 'We begin with atmosphere, not architecture. The emotional tone is defined before the first element is placed. Every project starts as a feeling.',
    accent: 'var(--dax-electric)',
  },
  {
    number: '02',
    title: 'Artistic Engineering',
    body: 'Code is written like a composition. Every animation is timed. Every interaction is choreographed. The technical and the artistic are inseparable.',
    accent: 'var(--dax-electric-dark)',
  },
  {
    number: '03',
    title: 'Premium Execution',
    body: 'The final experience should feel inevitable. Each detail — from micro-interaction to typographic spacing — is refined until it disappears into naturalness.',
    accent: 'rgba(57, 190, 249, 0.6)',
  },
]

export function Craftsmanship() {
  return (
    <section
      className="relative py-36 md:py-52 overflow-hidden"
      style={{ background: 'var(--dax-surface)' }}
    >
      {/* Subtle bottom-left glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '5%',
          left: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(57, 190, 249, 0.06) 0%, transparent 65%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="relative z-10 px-8 md:px-14 lg:px-20 xl:px-28 max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          <div className="lg:col-span-6">
            <FadeIn className="flex items-center gap-4 mb-10">
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
                Our approach
              </span>
            </FadeIn>
            <RevealText>
              <h2
                style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 700,
                  fontSize: 'clamp(2.2rem, 4.5vw, 5.5rem)',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.05,
                  color: 'var(--dax-light-primary)',
                }}
              >
                Every detail
              </h2>
            </RevealText>
            <RevealText delay={0.1}>
              <h2
                style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 300,
                  fontSize: 'clamp(2.2rem, 4.5vw, 5.5rem)',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.05,
                  color: 'var(--dax-electric)',
                }}
              >
                is a decision.
              </h2>
            </RevealText>
          </div>

          <FadeIn delay={0.2} className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <p
              style={{
                fontFamily: 'var(--font-outfit)',
                fontWeight: 300,
                fontSize: 'clamp(0.82rem, 1vw, 0.93rem)',
                lineHeight: 1.9,
                color: 'var(--dax-light-secondary)',
              }}
            >
              The work emerges from a precise three-phase process. Each phase
              is inseparable from the others. The result should feel effortless
              — as if it could not have been any other way.
            </p>
          </FadeIn>
        </div>

        {/* Phases */}
        <div className="space-y-0">
          {phases.map((phase, i) => (
            <FadeIn key={phase.number} delay={0.1 + i * 0.14} direction="up">
              <div
                className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 py-14 border-t"
                style={{ borderColor: 'var(--dax-border-light)' }}
              >
                <div className="md:col-span-2">
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 300,
                      fontSize: 'clamp(4rem, 6vw, 7rem)',
                      lineHeight: 0.85,
                      letterSpacing: '-0.04em',
                      color: phase.accent,
                      opacity: 0.4,
                    }}
                  >
                    {phase.number}
                  </motion.span>
                </div>

                <div className="md:col-span-4 md:col-start-4 md:self-center">
                  <h3
                    style={{
                      fontFamily: 'var(--font-outfit)',
                      fontWeight: 600,
                      fontSize: 'clamp(1.4rem, 2.2vw, 2.6rem)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                      color: 'var(--dax-light-primary)',
                      marginBottom: '1rem',
                    }}
                  >
                    {phase.title}
                  </h3>
                </div>

                <div className="md:col-span-5 md:col-start-8 md:self-center">
                  <p
                    style={{
                      fontFamily: 'var(--font-outfit)',
                      fontWeight: 300,
                      fontSize: '0.85rem',
                      lineHeight: 1.85,
                      color: 'var(--dax-light-secondary)',
                    }}
                  >
                    {phase.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}

          <div className="border-t" style={{ borderColor: 'var(--dax-border-light)' }} />
        </div>

        {/* Closing statement */}
        <FadeIn delay={0.2} className="mt-24 flex justify-end">
          <blockquote
            className="max-w-lg text-right"
            style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 300,
              fontSize: 'clamp(1.2rem, 1.8vw, 1.8rem)',
              lineHeight: 1.5,
              letterSpacing: '-0.01em',
              color: 'var(--dax-light-tertiary)',
            }}
          >
            "The interface should feel inevitable.
            <br />
            Effortlessly right."
          </blockquote>
        </FadeIn>
      </div>
    </section>
  )
}
