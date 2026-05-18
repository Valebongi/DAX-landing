'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FadeIn, RevealText } from '@/components/ui/RevealText'
import { GlowOrb } from '@/components/ui/GlowOrb'

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
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative py-36 md:py-52 overflow-hidden">
      {/* Atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <GlowOrb
          size={700}
          color="rgba(131, 174, 202, 0.12)"
          blur={100}
          className="-top-20 right-0"
          animated
        />
        <GlowOrb
          size={500}
          color="rgba(191, 175, 216, 0.10)"
          blur={90}
          className="bottom-0 left-20"
        />
      </div>

      <div className="relative z-10 px-8 md:px-14 lg:px-20 xl:px-28 max-w-[1600px] mx-auto">
        {/* Header row — asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-28">
          <FadeIn className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-6 h-px" style={{ background: 'var(--dax-blue)' }} />
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
                What we create
              </span>
            </div>
            <RevealText>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontWeight: 300,
                  fontSize: 'clamp(2.2rem, 4.5vw, 5.5rem)',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.05,
                  color: 'var(--dax-primary)',
                }}
              >
                Experiences
              </h2>
            </RevealText>
            <RevealText delay={0.1}>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  fontSize: 'clamp(2.2rem, 4.5vw, 5.5rem)',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.05,
                  color: 'var(--dax-primary)',
                }}
              >
                beyond the expected.
              </h2>
            </RevealText>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize: 'clamp(0.82rem, 1vw, 0.93rem)',
                lineHeight: 1.9,
                color: 'var(--dax-secondary)',
              }}
            >
              We operate at the intersection of creative vision and technical
              mastery. Each discipline is practiced with the same obsessive
              attention to atmosphere and detail.
            </p>
          </FadeIn>
        </div>

        {/* Capabilities list */}
        <div className="border-t" style={{ borderColor: 'var(--dax-border)' }}>
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
                  style={{ borderColor: 'var(--dax-border)' }}
                >
                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeIndex === i ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(131,174,202,0.04) 0%, rgba(166,152,191,0.03) 50%, transparent 100%)',
                    }}
                  />

                  {/* Number */}
                  <span
                    className="shrink-0 w-10 md:w-14"
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontWeight: 300,
                      fontSize: 'clamp(0.95rem, 1.3vw, 1.2rem)',
                      color: activeIndex === i ? 'var(--dax-blue)' : 'var(--dax-silver)',
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
                      fontFamily: 'var(--font-cormorant)',
                      fontWeight: 300,
                      fontSize: 'clamp(1.4rem, 2.2vw, 2.4rem)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                      color: 'var(--dax-primary)',
                      transition: 'color 0.5s',
                    }}
                  >
                    {cap.title}
                  </h3>

                  {/* Description — shown on all sizes but opacity varies */}
                  <p
                    className="hidden md:block flex-1"
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 300,
                      fontSize: '0.83rem',
                      lineHeight: 1.8,
                      color: 'var(--dax-secondary)',
                      opacity: activeIndex === i ? 1 : 0.7,
                      transition: 'opacity 0.5s',
                    }}
                  >
                    {cap.description}
                  </p>

                  {/* Tag — right aligned */}
                  <span
                    className="hidden lg:block shrink-0 ml-auto"
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 300,
                      fontSize: '0.6rem',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: activeIndex === i ? 'var(--dax-violet)' : 'var(--dax-tertiary)',
                      transition: 'color 0.5s',
                    }}
                  >
                    {cap.tag}
                  </span>

                  {/* Arrow */}
                  <motion.div
                    animate={{ x: activeIndex === i ? 0 : -4, opacity: activeIndex === i ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="shrink-0 hidden lg:flex items-center"
                    style={{ color: 'var(--dax-violet)' }}
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
