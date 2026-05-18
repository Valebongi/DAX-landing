'use client'

interface GlowOrbProps {
  size?: number
  color?: string
  blur?: number
  opacity?: number
  className?: string
  animated?: boolean
  animationDelay?: number
}

export function GlowOrb({
  size = 700,
  color = 'rgba(131, 174, 202, 0.25)',
  blur = 90,
  opacity = 1,
  className = '',
  animated = false,
  animationDelay = 0,
}: GlowOrbProps) {
  return (
    <div
      className={`absolute pointer-events-none rounded-full ${animated ? 'animate-glow-drift' : ''} ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: `blur(${blur}px)`,
        opacity,
        animationDelay: `${animationDelay}s`,
        willChange: 'transform',
      }}
    />
  )
}

export function GlowOrbSlow({
  size = 700,
  color = 'rgba(166, 152, 191, 0.20)',
  blur = 110,
  opacity = 1,
  className = '',
  animationDelay = 0,
}: GlowOrbProps) {
  return (
    <div
      className={`absolute pointer-events-none rounded-full animate-glow-drift-slow ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: `blur(${blur}px)`,
        opacity,
        animationDelay: `${animationDelay}s`,
        willChange: 'transform',
      }}
    />
  )
}
