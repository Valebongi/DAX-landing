'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const navLinks = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Work', href: '#showcase' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      ref={ref}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-14 lg:px-20 py-7 transition-all duration-700 ${
        scrolled
          ? 'atmospheric-surface'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <a
        href="#"
        className="group flex items-center gap-3"
        aria-label="DAX home"
      >
        <span
          className="text-[1.35rem] tracking-[0.18em] font-light text-dax-primary"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          DAX
        </span>
        <span className="w-0 h-px bg-dax-blue transition-all duration-700 group-hover:w-5 opacity-60" />
      </a>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-10">
        {navLinks.map((link, i) => (
          <li key={link.href}>
            <motion.a
              href={link.href}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
              className="group relative text-[0.7rem] tracking-[0.2em] uppercase font-light text-dax-secondary hover:text-dax-primary transition-colors duration-500"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-dax-violet group-hover:w-full transition-all duration-500" />
            </motion.a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <motion.a
        href="#contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="hidden lg:flex items-center gap-2 text-[0.65rem] tracking-[0.22em] uppercase font-light text-dax-tertiary hover:text-dax-primary transition-colors duration-500 group"
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        <span className="w-4 h-px bg-current transition-all duration-500 group-hover:w-7" />
        Begin
      </motion.a>
    </motion.nav>
  )
}
