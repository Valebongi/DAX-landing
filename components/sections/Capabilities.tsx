'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeIn, RevealText } from '@/components/ui/RevealText'

const capabilities = [
  {
    number: '01',
    title: 'Immersive Interfaces',
    description:
      'Digital environments that feel inhabited by light and atmosphere. Interfaces that exist inside a world, not on top of a screen.',
    tag: 'Experience Design',
  },
  {
    number: '02',
    title: 'Cinematic Motion',
    description:
      'Movement systems composed like a film score. Every transition creates emotional depth rather than mere visual change.',
    tag: 'Motion Design',
  },
  {
    number: '03',
    title: 'Brand Engineering',
    description:
      'Technological identity built to operate at a global level. Visual systems that communicate before words do.',
    tag: 'Creative Technology',
  },
  {
    number: '04',
    title: 'Interactive Storytelling',
    description:
      'Technology as narrative architecture. The product becomes the story. The interface becomes the medium.',
    tag: 'Digital Narrative',
  },
  {
    number: '05',
    title: 'Creative Direction',
    description:
      'Art direction for the age of immersive digital experience. We define the visual language before the first pixel is placed.',
    tag: 'Art Direction',
  },
]

export function Capabilities() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section
      className="relative py-36 md:py-52 overflow-hidden"
      style={{ background: 'var(--dax-surface-low)' }}
    >
      {/* Subtle glow top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(57, 190, 249, 0.07) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 px-8 md:px-14 lg:px-20 xl:px-28 max-w-[1600px] mx-auto">
        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-28">
          <FadeIn className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
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
                What we create
              </span>
            </div>
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
                Experiences
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
                beyond the expected.
              </h2>
            </RevealText>
          </FadeIn>

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
              We operate at the intersection of creative vision and technical
              mastery. Each discipline is practiced with the same obsessive
              attention to atmosphere and detail.
            </p>
          </FadeIn>
        </div>

        {/* Capabilities list */}
        <div className="border-t" style={{ borderColor: 'var(--dax-border-light)' }}>
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.number}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              className="relative group"
            >
              <FadeIn delay={0.08 * i}>
                <div
                  className="relative flex items-start md:items-center gap-6 md:gap-10 py-10 border-b cursor-default"
                  style={{ borderColor: 'var(--dax-border-light)' }}
                >
                  {/* Hover highlight */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeIndex === i ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(57,190,249,0.05) 0%, rgba(26,159,216,0.03) 50%, transparent 100%)',
                    }}
                  />

                  {/* Number */}
                  <span
                    className="shrink-0 w-10 md:w-14"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 300,
                      fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
                      color: activeIndex === i ? 'var(--dax-electric)' : 'var(--dax-light-tertiary)',
                      transition: 'color 0.5s',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {cap.number}
                  </span>

                  {/* Title */}
                  <h3
                    className="shrink-0 w-auto md:w-72 lg:w-80"
                    style={{
                      fontFamily: 'var(--font-outfit)',
                      fontWeight: 600,
                      fontSize: 'clamp(1.2rem, 2vw, 2.2rem)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                      color: activeIndex === i ? 'var(--dax-navy)' : 'var(--dax-light-primary)',
                      transition: 'color 0.5s',
                    }}
                  >
                    {cap.title}
                  </h3>

                  <p
                    className="hidden md:block flex-1"
                    style={{
                      fontFamily: 'var(--font-outfit)',
                      fontWeight: 300,
                      fontSize: '0.83rem',
                      lineHeight: 1.8,
                      color: 'var(--dax-light-secondary)',
                      opacity: activeIndex === i ? 1 : 0.7,
                      transition: 'opacity 0.5s',
                    }}
                  >
                    {cap.description}
                  </p>

                  <span
                    className="hidden lg:block shrink-0 ml-auto"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 300,
                      fontSize: '0.6rem',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: activeIndex === i ? 'var(--dax-electric)' : 'var(--dax-light-tertiary)',
                      transition: 'color 0.5s',
                    }}
                  >
                    {cap.tag}
                  </span>

                  <motion.div
                    animate={{ x: activeIndex === i ? 0 : -4, opacity: activeIndex === i ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="shrink-0 hidden lg:flex items-center"
                    style={{ color: 'var(--dax-electric)' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                </div>
              </FadeIn>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}
