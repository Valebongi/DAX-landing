'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeIn } from '@/components/ui/RevealText'
import { GlowOrb } from '@/components/ui/GlowOrb'

const projects = [
  {
    id: 'SIGNAL',
    number: '001',
    category: 'Immersive Interface · 2024',
    description:
      'A real-time data visualization environment that transformed financial complexity into cinematic clarity. The interface breathes with the data.',
    base: 'radial-gradient(ellipse 80% 60% at 28% 32%, #0D4878 0%, #063870 42%, #031528 100%)',
    glows: [
      'radial-gradient(ellipse 55% 65% at 22% 28%, rgba(100, 220, 255, 0.32) 0%, transparent 62%)',
      'radial-gradient(ellipse 40% 50% at 80% 75%, rgba(57, 190, 249, 0.16) 0%, transparent 55%)',
      'radial-gradient(ellipse 25% 30% at 60% 45%, rgba(130, 235, 255, 0.10) 0%, transparent 50%)',
    ],
    accent: '#71DCFF',
    size: 'large' as const,
  },
  {
    id: 'MERIDIAN',
    number: '002',
    category: 'Brand Engineering · 2024',
    description:
      'A global luxury technology brand built from atmospheric principles. Identity that exists before the product is seen.',
    base: 'radial-gradient(ellipse 75% 90% at 68% 15%, #1A3F70 0%, #091D45 50%, #030D20 100%)',
    glows: [
      'radial-gradient(ellipse 65% 55% at 70% 14%, rgba(57, 190, 249, 0.26) 0%, transparent 62%)',
      'radial-gradient(ellipse 45% 65% at 15% 80%, rgba(100, 200, 255, 0.12) 0%, transparent 55%)',
    ],
    accent: '#57CBF8',
    size: 'medium' as const,
  },
  {
    id: 'ATLAS',
    number: '003',
    category: 'Interactive Storytelling · 2025',
    description:
      'An editorial platform that redefines how knowledge is experienced. Navigation becomes discovery. Reading becomes immersion.',
    base: 'radial-gradient(ellipse 90% 80% at 50% 85%, #0B3060 0%, #061828 55%, #020A18 100%)',
    glows: [
      'radial-gradient(ellipse 75% 48% at 50% 95%, rgba(57, 190, 249, 0.24) 0%, transparent 68%)',
      'radial-gradient(ellipse 45% 55% at 88% 10%, rgba(120, 230, 255, 0.13) 0%, transparent 55%)',
    ],
    accent: '#5ECDF5',
    size: 'medium' as const,
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
              background: project.base,
              transform: hovered ? 'scale(1.025)' : 'scale(1)',
            }}
          />

          {/* Layered glow bursts */}
          {project.glows.map((g, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-700"
              style={{
                background: g,
                opacity: hovered ? 1 : i === 0 ? 0.6 : 0.3,
              }}
            />
          ))}

          {/* Architectural grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(0deg, rgba(87,210,255,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(87,210,255,0.06) 1px, transparent 1px)
              `,
              backgroundSize: '52px 52px',
            }}
          />

          {/* Scanline texture */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 3px)',
            }}
          />

          {/* Glass panel */}
          <div
            className="absolute bottom-5 left-5 right-5 transition-all duration-700"
            style={{
              background: 'rgba(3, 15, 30, 0.65)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(87, 210, 255, 0.18)',
              padding: '14px 18px',
              opacity: hovered ? 1 : 0.6,
              transform: hovered ? 'translateY(0)' : 'translateY(5px)',
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: project.accent }} />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 300,
                    fontSize: '0.56rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--dax-secondary)',
                  }}
                >
                  {project.category}
                </span>
              </div>
              <div
                style={{
                  opacity: hovered ? 1 : 0,
                  transform: hovered ? 'translateX(0)' : 'translateX(8px)',
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 300,
                    fontSize: '0.58rem',
                    letterSpacing: '0.14em',
                    color: project.accent,
                  }}
                >
                  View project
                </span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 5h8M5.5 1.5l4 3.5-4 3.5" stroke={project.accent} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Corner number */}
          <div className="absolute top-4 right-5">
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 300,
                fontSize: '0.68rem',
                letterSpacing: '0.1em',
                color: 'rgba(87, 210, 255, 0.35)',
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
              color: hovered ? project.accent : 'var(--dax-primary)',
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
              fontSize: '0.76rem',
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

export function Projects() {
  return (
    <section
      id="showcase"
      className="relative py-32 md:py-44 overflow-hidden"
      style={{ background: 'var(--dax-navy-raised)' }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <GlowOrb
          size={700}
          color="rgba(87, 210, 255, 0.07)"
          blur={120}
          className="top-20 -right-20"
          animated
          animationDelay={2}
        />
        <GlowOrb
          size={500}
          color="rgba(57, 190, 249, 0.06)"
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
            <div>
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
            </div>
          </div>

          <FadeIn delay={0.2} className="pb-2">
            <a
              href="#contact"
              className="group flex items-center gap-3"
              style={{
                fontFamily: 'var(--font-outfit)',
                fontWeight: 300,
                fontSize: '0.68rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--dax-secondary)',
                transition: 'color 0.5s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--dax-electric)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--dax-secondary)')}
            >
              All projects
              <span className="block h-px bg-current transition-all duration-500 group-hover:w-10" style={{ width: '1.5rem' }} />
            </a>
          </FadeIn>
        </div>

        {/* Asymmetric grid */}
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
