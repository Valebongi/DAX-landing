'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FadeIn, RevealText } from '@/components/ui/RevealText'
import { GlowOrb, GlowOrbSlow } from '@/components/ui/GlowOrb'

const EASE_CINEMA = [0.16, 1, 0.3, 1] as const

export function Closing() {
  const [emailFocused, setEmailFocused] = useState(false)
  const [emailValue, setEmailValue] = useState('')
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-44 md:py-60 overflow-hidden"
      style={{ background: 'var(--dax-navy)' }}
    >
      {/* Atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <GlowOrb
          size={1000}
          color="rgba(57, 190, 249, 0.10)"
          blur={150}
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animated
        />
        <GlowOrbSlow
          size={700}
          color="rgba(26, 159, 216, 0.08)"
          blur={120}
          className="-top-40 right-0"
          animationDelay={5}
        />
        <GlowOrb
          size={600}
          color="rgba(57, 190, 249, 0.07)"
          blur={110}
          className="bottom-0 -left-20"
          animationDelay={10}
        />
      </div>

      <div className="relative z-10 px-8 md:px-14 lg:px-20 xl:px-28 max-w-[1600px] mx-auto">
        {/* Cinematic centered headline */}
        <div className="text-center mb-24">
          <FadeIn className="flex items-center justify-center gap-4 mb-12">
            <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--dax-electric))' }} />
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
              Begin
            </span>
            <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, var(--dax-electric), transparent)' }} />
          </FadeIn>

          <div className="overflow-hidden mb-2">
            <motion.h2
              initial={{ y: '105%' }}
              animate={isInView ? { y: 0 } : { y: '105%' }}
              transition={{ duration: 1.3, delay: 0.1, ease: EASE_CINEMA }}
              style={{
                fontFamily: 'var(--font-outfit)',
                fontWeight: 700,
                fontSize: 'clamp(3rem, 8vw, 10rem)',
                letterSpacing: '-0.035em',
                lineHeight: 0.92,
                color: 'var(--dax-primary)',
              }}
            >
              The future
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h2
              initial={{ y: '105%' }}
              animate={isInView ? { y: 0 } : { y: '105%' }}
              transition={{ duration: 1.3, delay: 0.18, ease: EASE_CINEMA }}
              style={{
                fontFamily: 'var(--font-outfit)',
                fontWeight: 300,
                fontSize: 'clamp(3rem, 8vw, 10rem)',
                letterSpacing: '-0.035em',
                lineHeight: 0.92,
                color: 'var(--dax-electric)',
              }}
            >
              is a feeling.
            </motion.h2>
          </div>

          <FadeIn delay={0.4}>
            <p
              className="mt-10 mx-auto"
              style={{
                fontFamily: 'var(--font-outfit)',
                fontWeight: 300,
                fontSize: 'clamp(0.82rem, 1vw, 0.95rem)',
                lineHeight: 1.9,
                color: 'var(--dax-secondary)',
                maxWidth: '420px',
                letterSpacing: '0.01em',
              }}
            >
              Let's design something the world hasn't seen yet.
              <br />
              Every great experience begins with a conversation.
            </p>
          </FadeIn>
        </div>

        {/* Contact form */}
        <FadeIn delay={0.5} className="max-w-lg mx-auto">
          <div
            className="atmospheric-surface p-10 mb-10"
            style={{ borderRadius: '2px' }}
          >
            <div className="mb-6">
              <label
                htmlFor="contact-email"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 300,
                  fontSize: '0.6rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'var(--dax-tertiary)',
                  marginBottom: '12px',
                }}
              >
                Your email
              </label>
              <div className="relative">
                <input
                  id="contact-email"
                  type="email"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  placeholder="hello@yourstudio.com"
                  className="w-full bg-transparent outline-none pb-3"
                  style={{
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 300,
                    fontSize: '0.9rem',
                    color: 'var(--dax-primary)',
                    borderBottom: `1px solid ${emailFocused ? 'var(--dax-electric)' : 'var(--dax-border)'}`,
                    transition: 'border-color 0.5s',
                    letterSpacing: '0.01em',
                  }}
                />
                <motion.div
                  animate={{ scaleX: emailFocused ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 left-0 h-px origin-left"
                  style={{
                    width: '100%',
                    background: 'var(--dax-electric)',
                    boxShadow: '0 0 8px rgba(57, 190, 249, 0.5)',
                  }}
                />
              </div>
            </div>

            <div className="mb-8">
              <label
                htmlFor="contact-message"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 300,
                  fontSize: '0.6rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'var(--dax-tertiary)',
                  marginBottom: '12px',
                }}
              >
                What you'd like to create
              </label>
              <textarea
                id="contact-message"
                rows={3}
                placeholder="Tell us about your vision..."
                className="w-full bg-transparent outline-none resize-none pb-2"
                style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 300,
                  fontSize: '0.88rem',
                  color: 'var(--dax-primary)',
                  borderBottom: '1px solid var(--dax-border)',
                  lineHeight: 1.7,
                  letterSpacing: '0.01em',
                }}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group w-full flex items-center justify-between py-4 px-6 transition-all duration-700"
              style={{
                background: 'rgba(57, 190, 249, 0.08)',
                border: '1px solid rgba(57, 190, 249, 0.2)',
                borderRadius: '2px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(57, 190, 249, 0.14)'
                e.currentTarget.style.borderColor = 'rgba(57, 190, 249, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(57, 190, 249, 0.08)'
                e.currentTarget.style.borderColor = 'rgba(57, 190, 249, 0.2)'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 400,
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--dax-primary)',
                }}
              >
                Begin the conversation
              </span>
              <motion.div
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
                style={{ color: 'var(--dax-electric)' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </motion.button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-8">
            {['LinkedIn', 'Behance', 'Instagram'].map((social) => (
              <a
                key={social}
                href="#"
                className="group flex items-center gap-2 transition-colors duration-400"
                style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 300,
                  fontSize: '0.62rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--dax-tertiary)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--dax-electric)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--dax-tertiary)')}
              >
                {social}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer
      className="relative px-8 md:px-14 lg:px-20 xl:px-28 py-12 border-t"
      style={{
        background: 'var(--dax-navy)',
        borderColor: 'rgba(57, 190, 249, 0.08)',
      }}
    >
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <span
          style={{
            fontFamily: 'var(--font-outfit)',
            fontWeight: 700,
            fontSize: '1rem',
            letterSpacing: '0.2em',
            color: 'var(--dax-secondary)',
          }}
        >
          DAX
        </span>

        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 300,
            fontSize: '0.6rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--dax-tertiary)',
          }}
        >
          Buenos Aires, Argentina · {new Date().getFullYear()}
        </span>

        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 300,
            fontSize: '0.6rem',
            letterSpacing: '0.12em',
            color: 'var(--dax-tertiary)',
          }}
        >
          Cinematic Digital Experience
        </span>
      </div>
    </footer>
  )
}
