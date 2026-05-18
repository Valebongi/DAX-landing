'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface RevealTextProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  threshold?: string
}

export function RevealText({
  children,
  delay = 0,
  duration = 1.1,
  className = '',
  once = true,
  threshold = '-80px',
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inViewOpts = { once, margin: threshold } as Parameters<typeof useInView>[1]
  const isInView = useInView(ref, inViewOpts)

  return (
    <div className="overflow-hidden" ref={ref}>
      <motion.div
        className={className}
        initial={{ y: '105%', opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: '105%', opacity: 0 }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  once?: boolean
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.9,
  className = '',
  direction = 'up',
  distance = 28,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-60px' })

  const initial = {
    opacity: 0,
    y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
    x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
