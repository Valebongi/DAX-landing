'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { GlowOrb, GlowOrbSlow } from '@/components/ui/GlowOrb'

const EASE_CINEMA = [0.16, 1, 0.3, 1] as const

// Low-angle misty building — shot from below, cinematic night/dusk
const HERO_IMAGE = 'https://images.unsplash.com/photo-1542603832406-b2bd67af3734?w=1600&q=85&auto=format&fit=crop'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 180])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-20 md:pb-28"
      style={{ background: 'var(--dax-navy)' }}
    >

      {/* ── Cinematic background image — right half, deeply masked ── */}
      <motion.div
        style={{ opacity: imageOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          className="absolute"
          style={{ y: imageY, top: '-8%', bottom: '-8%', left: '30%', right: 0 }}
        >
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            priority
            sizes="70vw"
            className="object-cover object-center"
            style={{
              filter: 'saturate(0.15) brightness(0.55) contrast(1.1)',
              opacity: 0.65,
            }}
          />
        </motion.div>

        {/* Left fade into navy */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, var(--dax-navy) 28%, rgba(6,21,40,0.88) 42%, rgba(6,21,40,0.35) 65%, transparent 100%)',
          }}
        />

        {/* Top + bottom fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, var(--dax-navy) 0%, transparent 18%, transparent 70%, var(--dax-navy) 100%)',
          }}
        />

        {/* Electric-blue atmospheric tint */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 80% at 75% 40%, rgba(57, 190, 249, 0.08) 0%, rgba(26, 159, 216, 0.04) 50%, transparent 75%)',
          }}
        />
      </motion.div>

      {/* ── Atmospheric glow layers ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <GlowOrb
          size={900}
          color="rgba(57, 190, 249, 0.12)"
          blur={120}
          animated
          className="-top-60 -right-40"
        />
        <GlowOrbSlow
          size={700}
          color="rgba(26, 159, 216, 0.09)"
          blur={130}
          className="top-1/3 -left-60"
          animationDelay={7}
        />
        <GlowOrb
          size={500}
          color="rgba(57, 190, 249, 0.08)"
          blur={90}
          animated
          className="bottom-0 right-1/4"
          animationDelay={3}
        />
        {/* Horizontal electric light streak */}
        <div
          className="absolute top-1/2 left-0 right-0 h-px opacity-15"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(57, 190, 249, 0.5) 30%, rgba(26, 159, 216, 0.4) 60%, transparent 100%)',
          }}
        />
      </div>

      {/* ── Content ── */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 px-8 md:px-14 lg:px-20 xl:px-28 max-w-[1600px]"
      >
        {/* Eyebrow tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: EASE_CINEMA }}
          className="mb-10 flex items-center gap-4"
        >
          <div className="w-10 h-px" style={{ background: 'var(--dax-electric)' }} />
          <span
            className="text-[0.6rem] tracking-[0.3em] uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--dax-tertiary)' }}
          >
            Buenos Aires · Global
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: '108%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.3, delay: 0.45, ease: EASE_CINEMA }}
            className="block leading-[0.92]"
            style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 700,
              fontSize: 'clamp(3.2rem, 8.5vw, 10.5rem)',
              letterSpacing: '-0.03em',
              color: 'var(--dax-primary)',
            }}
          >
            We design
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: '108%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.3, delay: 0.58, ease: EASE_CINEMA }}
            className="block leading-[0.92]"
            style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 300,
              fontSize: 'clamp(3.2rem, 8.5vw, 10.5rem)',
              letterSpacing: '-0.03em',
              color: 'var(--dax-secondary)',
            }}
          >
            digital worlds
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '108%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.3, delay: 0.71, ease: EASE_CINEMA }}
            className="block leading-[0.92]"
            style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 700,
              fontSize: 'clamp(3.2rem, 8.5vw, 10.5rem)',
              letterSpacing: '-0.03em',
              color: 'var(--dax-primary)',
            }}
          >
            that feel like{' '}
            <span style={{ color: 'var(--dax-electric)' }}>
              the future.
            </span>
          </motion.h1>
        </div>

        {/* Sub-copy and CTA row */}
        <div className="mt-14 flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-0 justify-between">
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.05, ease: EASE_CINEMA }}
            className="max-w-[380px] leading-[1.8]"
            style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 300,
              fontSize: 'clamp(0.82rem, 1.1vw, 0.98rem)',
              letterSpacing: '0.01em',
              color: 'var(--dax-secondary)',
            }}
          >
            A creative technology studio from Argentina.
            <br />
            We engineer cinematic digital experiences
            <br />
            where code meets emotion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.25, ease: EASE_CINEMA }}
            className="flex items-center gap-6"
          >
            <a
              href="#philosophy"
              className="group flex items-center gap-3 transition-colors duration-700"
              style={{
                fontFamily: 'var(--font-outfit)',
                fontWeight: 300,
                fontSize: '0.72rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--dax-secondary)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--dax-electric)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--dax-secondary)')}
            >
              Explore our world
              <span
                className="block h-px bg-current transition-all duration-700 group-hover:w-14"
                style={{ width: '2rem' }}
              />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 right-8 md:right-14 flex flex-col items-center gap-3"
      >
        <div
          className="w-px h-14 animate-pulse-soft"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--dax-electric), transparent)' }}
        />
        <span
          className=""
          style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 300,
            fontSize: '0.55rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            writingMode: 'vertical-rl',
            color: 'var(--dax-tertiary)',
          }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
