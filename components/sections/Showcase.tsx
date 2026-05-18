'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeIn, RevealText } from '@/components/ui/RevealText'
import { GlowOrb } from '@/components/ui/GlowOrb'

const projects = [
  {
    id: 'SIGNAL',
    number: '001',
    category: 'Immersive Interface · 2024',
    description:
      'A real-time data visualization environment that transformed financial complexity into cinematic clarity. The interface breathes with the data.',
    gradient: 'linear-gradient(135deg, #0A2540 0%, #0E2F55 30%, #0D3060 65%, #122845 100%)',
    glow: 'rgba(57, 190, 249, 0.25)',
    accent: 'var(--dax-electric)',
    size: 'large',
  },
  {
    id: 'MERIDIAN',
    number: '002',
    category: 'Brand Engineering · 2024',
    description:
      'A global luxury technology brand built from atmospheric principles. Identity that exists before the product is seen.',
    gradient: 'linear-gradient(135deg, #071D35 0%, #0C2545 35%, #102D50 60%, #0A2040 100%)',
    glow: 'rgba(26, 159, 216, 0.22)',
    accent: 'var(--dax-electric-dark)',
    size: 'medium',
  },
  {
    id: 'ATLAS',
    number: '003',
    category: 'Interactive Storytelling · 2025',
    description:
      'An editorial platform that redefines how knowledge is experienced. Navigation becomes discovery. Reading becomes immersion.',
    gradient: 'linear-gradient(135deg, #091C33 0%, #0D2848 30%, #0E2F58 65%, #0C2444 100%)',
    glow: 'rgba(57, 190, 249, 0.18)',
    accent: 'var(--dax-electric)',
    size: 'medium',
  },
]

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <FadeIn delay={0.1 + index * 0.14} direction="up">
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative cursor-default"
      >
        {/* Visual frame */}
        <div
          className="relative overflow-hidden mb-6"
          style={{ aspectRatio: project.size === 'large' ? '16/9' : '4/3' }}
        >
          {/* Base gradient */}
          <div
            className="absolute inset-0 transition-transform duration-[1.2s]"
            style={{
              background: project.gradient,
              transform: hovered ? 'scale(1.02)' : 'scale(1)',
            }}
          />

          {/* Electric glow layer */}
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              background: `radial-gradient(ellipse 60% 60% at 30% 40%, ${project.glow} 0%, transparent 65%)`,
              opacity: hovered ? 1 : 0.5,
            }}
          />

          {/* Grid lines — architectural */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `
                linear-gradient(0deg, rgba(57,190,249,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(57,190,249,0.8) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Glass panel — simulates UI surface */}
          <div
            className="absolute bottom-6 left-6 right-6 transition-all duration-700"
            style={{
              background: 'rgba(6, 21, 40, 0.6)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(57, 190, 249, 0.15)',
              padding: '16px 20px',
              opacity: hovered ? 1 : 0.6,
              transform: hovered ? 'translateY(0)' : 'translateY(4px)',
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: project.accent }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 300,
                    fontSize: '0.58rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--dax-secondary)',
                  }}
                >
                  {project.category}
                </span>
              </div>
              <div
                className="flex items-center gap-2"
                style={{
                  opacity: hovered ? 1 : 0,
                  transform: hovered ? 'translateX(0)' : 'translateX(8px)',
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 300,
                    fontSize: '0.6rem',
                    letterSpacing: '0.14em',
                    color: project.accent,
                  }}
                >
                  View project
                </span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 5h8M5.5 1.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: project.accent }} />
                </svg>
              </div>
            </div>
          </div>

          {/* Corner number */}
          <div className="absolute top-5 right-5">
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 300,
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                color: 'rgba(57, 190, 249, 0.3)',
              }}
            >
              {project.number}
            </span>
          </div>
        </div>

        {/* Project name */}
        <div className="flex items-baseline gap-4">
          <h3
            style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 700,
              fontSize: 'clamp(1.4rem, 2.2vw, 2.5rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              color: hovered ? 'var(--dax-electric)' : 'var(--dax-primary)',
              transition: 'color 0.5s',
            }}
          >
            {project.id}
          </h3>
          <p
            className="hidden md:block"
            style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 300,
              fontSize: '0.78rem',
              lineHeight: 1.7,
              color: 'var(--dax-secondary)',
              maxWidth: '300px',
            }}
          >
            {project.description}
          </p>
        </div>
      </motion.div>
    </FadeIn>
  )
}

export function Showcase() {
  return (
    <section
      id="showcase"
      className="relative py-36 md:py-52 overflow-hidden"
      style={{ background: 'var(--dax-navy-raised)' }}
    >
      {/* ── Top: continuation from Craftsmanship dissolve ── */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: 'clamp(140px, 20vh, 280px)',
          background: 'linear-gradient(to bottom, #0E2138 0%, transparent 100%)',
          zIndex: 2,
        }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <GlowOrb
          size={700}
          color="rgba(57, 190, 249, 0.08)"
          blur={120}
          className="top-20 -right-20"
          animated
          animationDelay={2}
        />
        <GlowOrb
          size={500}
          color="rgba(26, 159, 216, 0.07)"
          blur={100}
          className="bottom-20 -left-10"
          animationDelay={8}
        />
      </div>

      <div className="relative z-10 px-8 md:px-14 lg:px-20 xl:px-28 max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <FadeIn className="flex items-center gap-4 mb-8">
              <div className="w-6 h-px" style={{ background: 'var(--dax-electric)' }} />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 300,
                  fontSize: '0.62rem',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'var(--dax-tertiary)',
                }}
              >
                Selected work
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
                  color: 'var(--dax-primary)',
                }}
              >
                Worlds we
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
                have built.
              </h2>
            </RevealText>
          </div>

          <FadeIn delay={0.2} className="pb-2">
            <a
              href="#contact"
              className="group flex items-center gap-3 transition-colors duration-500"
              style={{
                fontFamily: 'var(--font-outfit)',
                fontWeight: 300,
                fontSize: '0.68rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--dax-secondary)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--dax-electric)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--dax-secondary)')}
            >
              All projects
              <span
                className="block h-px bg-current transition-all duration-500 group-hover:w-10"
                style={{ width: '1.5rem' }}
              />
            </a>
          </FadeIn>
        </div>

        {/* Projects grid — asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-7">
            <ProjectCard project={projects[0]} index={0} />
          </div>
          <div className="lg:col-span-5 flex flex-col gap-10">
            <ProjectCard project={projects[1]} index={1} />
            <ProjectCard project={projects[2]} index={2} />
          </div>
        </div>
      </div>
    </section>
  )
}
