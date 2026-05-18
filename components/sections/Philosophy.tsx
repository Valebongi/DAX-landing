'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FadeIn, RevealText } from '@/components/ui/RevealText'
import { GlowOrb } from '@/components/ui/GlowOrb'

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
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative py-40 md:py-56 overflow-hidden"
    >
      {/* Atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <GlowOrb
          size={800}
          color="rgba(166, 152, 191, 0.13)"
          blur={120}
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="relative z-10 px-8 md:px-14 lg:px-20 xl:px-28 max-w-[1600px] mx-auto">
        {/* Section label */}
        <FadeIn delay={0} className="flex items-center gap-4 mb-20">
          <div
            className="w-6 h-px"
            style={{ background: 'var(--dax-violet)' }}
          />
          <span
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 300,
              fontSize: '0.62rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--dax-tertiary)',
            }}
          >
            Philosophy
          </span>
        </FadeIn>

        {/* Main statement — asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 mb-40">
          {/* Large headline — left 7 columns */}
          <div className="lg:col-span-7">
            <RevealText delay={0.1}>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontWeight: 300,
                  fontSize: 'clamp(2.4rem, 5vw, 6.5rem)',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.05,
                  color: 'var(--dax-primary)',
                }}
              >
                Technology should
              </h2>
            </RevealText>
            <RevealText delay={0.18}>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  fontSize: 'clamp(2.4rem, 5vw, 6.5rem)',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.05,
                  color: 'var(--dax-primary)',
                }}
              >
                not feel cold.
              </h2>
            </RevealText>
          </div>

          {/* Body — right columns, vertically offset */}
          <FadeIn
            delay={0.35}
            direction="up"
            className="lg:col-span-4 lg:col-start-9 lg:self-end pb-2"
          >
            <p
              className="leading-[1.9]"
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize: 'clamp(0.82rem, 1vw, 0.95rem)',
                color: 'var(--dax-secondary)',
                letterSpacing: '0.01em',
              }}
            >
              We believe the most powerful interfaces are the ones that feel human.
              Not efficient. Not functional. <em>Human.</em>
            </p>
            <p
              className="mt-5 leading-[1.9]"
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize: 'clamp(0.82rem, 1vw, 0.95rem)',
                color: 'var(--dax-secondary)',
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
        <div className="section-divider mb-20" />

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-[var(--dax-border)]">
          {principles.map((p, i) => (
            <FadeIn
              key={p.number}
              delay={0.1 + i * 0.12}
              direction="up"
              className="group px-0 md:px-10 py-10 md:py-0 first:pl-0 last:pr-0"
            >
              <div className="flex flex-col gap-4">
                <span
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontWeight: 300,
                    fontSize: '3.5rem',
                    lineHeight: 1,
                    color: 'var(--dax-blue)',
                    opacity: 0.5,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {p.number}
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 400,
                    fontSize: '0.72rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--dax-primary)',
                  }}
                >
                  {p.label}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 300,
                    fontSize: '0.83rem',
                    lineHeight: 1.8,
                    color: 'var(--dax-secondary)',
                  }}
                >
                  {p.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
