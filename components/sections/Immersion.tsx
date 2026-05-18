'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { RevealText, FadeIn } from '@/components/ui/RevealText'

// Tower fading into fog — ethereal, minimal
const IMMERSION_IMAGE = 'https://images.unsplash.com/photo-1593552167867-26a4b4005508?w=1800&q=85&auto=format&fit=crop'

export function Immersion() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.97])
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 px-8 md:px-14 lg:px-20 xl:px-28"
      style={{ background: 'var(--dax-navy)' }}
    >
      <motion.div
        className="relative w-full overflow-hidden"
        style={{
          height: 'clamp(480px, 72vh, 820px)',
          borderRadius: '2px',
          scale,
        }}
      >
        {/* Base: navy-raised */}
        <div
          className="absolute inset-0"
          style={{ background: 'var(--dax-navy-raised)' }}
        />

        {/* Cinematic image — desaturated, dark */}
        <motion.div
          className="absolute"
          style={{
            y: imageY,
            top: '-8%',
            left: '-2%',
            right: '-2%',
            bottom: '-8%',
          }}
        >
          <Image
            src={IMMERSION_IMAGE}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            style={{
              filter: 'saturate(0.12) brightness(0.55) contrast(1.1)',
              opacity: 0.55,
            }}
          />
        </motion.div>

        {/* Left atmospheric fade to navy */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(6,21,40,0.75) 0%, rgba(6,21,40,0.25) 25%, transparent 55%)',
          }}
        />

        {/* Top + bottom fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(6,21,40,0.85) 0%, transparent 20%, transparent 75%, rgba(6,21,40,0.9) 100%)',
          }}
        />

        {/* Electric blue atmospheric wash */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 65% 65% at 60% 45%, rgba(57, 190, 249, 0.1) 0%, rgba(26, 159, 216, 0.06) 45%, transparent 70%)',
          }}
        />

        {/* Top-right light diffusion */}
        <div
          className="absolute"
          style={{
            top: '-15%',
            right: '-5%',
            width: '55%',
            height: '65%',
            background:
              'radial-gradient(ellipse, rgba(57, 190, 249, 0.14) 0%, rgba(26, 159, 216, 0.07) 45%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />

        {/* Architectural line accents */}
        <div
          className="absolute top-10 left-10 opacity-25"
          style={{
            width: '120px',
            height: '1px',
            background: 'linear-gradient(90deg, rgba(57, 190, 249, 0.7), transparent)',
          }}
        />
        <div
          className="absolute top-10 left-10 opacity-25"
          style={{
            width: '1px',
            height: '70px',
            background: 'linear-gradient(180deg, rgba(57, 190, 249, 0.7), transparent)',
          }}
        />
        <div
          className="absolute bottom-10 right-10 opacity-20"
          style={{
            width: '70px',
            height: '1px',
            background: 'linear-gradient(270deg, rgba(57, 190, 249, 0.7), transparent)',
          }}
        />
        <div
          className="absolute bottom-10 right-10 opacity-20"
          style={{
            width: '1px',
            height: '50px',
            background: 'linear-gradient(360deg, rgba(57, 190, 249, 0.7), transparent)',
          }}
        />

        {/* Overlaid text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center px-8">
          <RevealText>
            <p
              className="mb-4"
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 300,
                fontSize: '0.62rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--dax-tertiary)',
              }}
            >
              The intersection
            </p>
          </RevealText>
          <RevealText delay={0.12}>
            <h2
              className="text-center"
              style={{
                fontFamily: 'var(--font-outfit)',
                fontWeight: 700,
                fontSize: 'clamp(2.8rem, 6vw, 8rem)',
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                color: 'var(--dax-primary)',
              }}
            >
              of art
            </h2>
          </RevealText>
          <RevealText delay={0.22}>
            <h2
              className="text-center"
              style={{
                fontFamily: 'var(--font-outfit)',
                fontWeight: 300,
                fontSize: 'clamp(2.8rem, 6vw, 8rem)',
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                color: 'var(--dax-electric)',
              }}
            >
              and precision.
            </h2>
          </RevealText>

          <FadeIn delay={0.4}>
            <div
              className="mt-8 w-12 h-px mx-auto opacity-50"
              style={{ background: 'var(--dax-electric)' }}
            />
          </FadeIn>
        </div>
      </motion.div>

    </section>
  )
}
