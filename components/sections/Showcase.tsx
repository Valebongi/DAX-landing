'use client'

import { useRef, useState } from 'react'
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
    gradient: 'linear-gradient(135deg, #DDE5EF 0%, #C8D8E8 30%, #D5CAE8 65%, #E2DCF0 100%)',
    glow: 'rgba(131, 174, 202, 0.35)',
    accent: 'var(--dax-blue)',
    size: 'large',
  },
  {
    id: 'MERIDIAN',
    number: '002',
    category: 'Brand Engineering · 2024',
    description:
      'A global luxury technology brand built from atmospheric principles. Identity that exists before the product is seen.',
    gradient: 'linear-gradient(135deg, #E2DBEF 0%, #D4CAE6 35%, #CBB8DC 60%, #D8CCEC 100%)',
    glow: 'rgba(166, 152, 191, 0.35)',
    accent: 'var(--dax-violet)',
    size: 'medium',
  },
  {
    id: 'ATLAS',
    number: '003',
    category: 'Interactive Storytelling · 2025',
    description:
      'An editorial platform that redefines how knowledge is experienced. Navigation becomes discovery. Reading becomes immersion.',
    gradient: 'linear-gradient(135deg, #E8E2F2 0%, #DDDAF5 30%, #CAD5EC 65%, #D8E0EE 100%)',
    glow: 'rgba(191, 175, 216, 0.30)',
    accent: 'var(--dax-lavender)',
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

          {/* Atmospheric glow layer */}
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              background: `radial-gradient(ellipse 60% 60% at 30% 40%, ${project.glow} 0%, transparent 65%)`,
              opacity: hovered ? 1 : 0.5,
            }}
          />

          {/* Grid lines — architectural feel */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `
                linear-gradient(0deg, rgba(131,174,202,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(131,174,202,0.8) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Surface glass panel — simulates UI surface */}
          <div
            className="absolute bottom-6 left-6 right-6 transition-all duration-700"
            style={{
              background: 'rgba(243, 240, 232, 0.45)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(150, 145, 138, 0.15)',
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
                    fontFamily: 'var(--font-inter)',
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
                    fontFamily: 'var(--font-inter)',
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

          {/* Corner accent */}
          <div className="absolute top-5 right-5">
            <span
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontWeight: 300,
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                color: 'rgba(150, 145, 138, 0.5)',
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
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 'clamp(1.6rem, 2.5vw, 2.8rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              color: 'var(--dax-primary)',
              transition: 'color 0.5s',
            }}
          >
            {project.id}
          </h3>
          <p
            className="hidden md:block"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 300,
              fontSize: '0.78rem',
              lineHeight: 1.7,
              color: 'var(--dax-tertiary)',
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
    <section id="showcase" className="relative py-36 md:py-52 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <GlowOrb
          size={700}
          color="rgba(131, 174, 202, 0.11)"
          blur={110}
          className="top-20 -right-20"
          animated
          animationDelay={2}
        />
        <GlowOrb
          size={500}
          color="rgba(191, 175, 216, 0.10)"
          blur={90}
          className="bottom-20 -left-10"
          animationDelay={8}
        />
      </div>

      <div className="relative z-10 px-8 md:px-14 lg:px-20 xl:px-28 max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <FadeIn className="flex items-center gap-4 mb-8">
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
                Selected work
              </span>
            </FadeIn>
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
                Worlds we
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
                have built.
              </h2>
            </RevealText>
          </div>

          <FadeIn delay={0.2} className="pb-2">
            <a
              href="#contact"
              className="group flex items-center gap-3 text-dax-secondary hover:text-dax-primary transition-colors duration-500"
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 300,
                fontSize: '0.68rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
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
          {/* Large project — left, spans 7 */}
          <div className="lg:col-span-7">
            <ProjectCard project={projects[0]} index={0} />
          </div>

          {/* Two smaller projects — right, stacked */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <ProjectCard project={projects[1]} index={1} />
            <ProjectCard project={projects[2]} index={2} />
          </div>
        </div>
      </div>
    </section>
  )
}
