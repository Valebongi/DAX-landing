'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { GlowOrb, GlowOrbSlow } from '@/components/ui/GlowOrb'

const EASE_CINEMA = [0.16, 1, 0.3, 1] as const

// Low-angle misty building — pearl whites, soft grays, cinematic fog
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
    >

      {/* ── Cinematic background image — right half, deeply masked ── */}
      <motion.div
        style={{ opacity: imageOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Image container — right 60%, with parallax */}
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
              filter: 'saturate(0.25) brightness(1.05) contrast(0.95)',
              opacity: 0.55,
            }}
          />
        </motion.div>

        {/* Gradient mask — left fade so image dissolves into content */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, var(--dax-bg) 28%, rgba(243,240,232,0.85) 42%, rgba(243,240,232,0.3) 65%, transparent 100%)',
          }}
        />

        {/* Gradient mask — top fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, var(--dax-bg) 0%, transparent 18%, transparent 70%, var(--dax-bg) 100%)',
          }}
        />

        {/* Atmospheric color tint overlay — unifies image with palette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 80% at 75% 40%, rgba(191, 175, 216, 0.12) 0%, rgba(131, 174, 202, 0.08) 50%, transparent 75%)',
          }}
        />
      </motion.div>

      {/* ── Atmospheric glow layers ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <GlowOrb
          size={900}
          color="rgba(131, 174, 202, 0.16)"
          blur={100}
          animated
          className="-top-60 -right-40"
        />
        <GlowOrbSlow
          size={700}
          color="rgba(166, 152, 191, 0.13)"
          blur={120}
          className="top-1/3 -left-60"
          animationDelay={7}
        />
        <GlowOrb
          size={500}
          color="rgba(191, 175, 216, 0.10)"
          blur={80}
          animated
          className="bottom-0 right-1/4"
          animationDelay={3}
        />
        {/* Pearl horizontal light */}
        <div
          className="absolute top-1/2 left-0 right-0 h-px opacity-20"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(131, 174, 202, 0.5) 30%, rgba(191, 175, 216, 0.4) 60%, transparent 100%)',
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
          <div className="w-10 h-px" style={{ background: 'var(--dax-blue)' }} />
          <span
            className="text-[0.6rem] tracking-[0.3em] uppercase"
            style={{ fontFamily: 'var(--font-inter)', color: 'var(--dax-tertiary)' }}
          >
            Buenos Aires · Global
          </span>
        </motion.div>

        {/* Main headline — cinematic, monumental */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: '108%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.3, delay: 0.45, ease: EASE_CINEMA }}
            className="block leading-[0.92]"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
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
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(3.2rem, 8.5vw, 10.5rem)',
              letterSpacing: '-0.03em',
              color: 'var(--dax-primary)',
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
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 'clamp(3.2rem, 8.5vw, 10.5rem)',
              letterSpacing: '-0.03em',
              color: 'var(--dax-primary)',
            }}
          >
            that feel like{' '}
            <span className="italic" style={{ color: 'var(--dax-violet)' }}>
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
            className="max-w-[380px] leading-[1.8] text-dax-secondary"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 300,
              fontSize: 'clamp(0.82rem, 1.1vw, 0.98rem)',
              letterSpacing: '0.01em',
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
              className="group flex items-center gap-3 text-dax-primary hover:text-dax-violet transition-colors duration-700"
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize: '0.72rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
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
          style={{ background: 'linear-gradient(to bottom, transparent, var(--dax-blue), transparent)' }}
        />
        <span
          className="text-dax-tertiary"
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 300,
            fontSize: '0.55rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
