'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

type MagneticButtonProps = {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'ghost'
}

export function MagneticButton({ children, href = '#contact', variant = 'primary' }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 18 })
  const springY = useSpring(y, { stiffness: 220, damping: 18 })

  function handleMouseMove(event: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((event.clientX - rect.left - rect.width / 2) * 0.22)
    y.set((event.clientY - rect.top - rect.height / 2) * 0.22)
  }

  function reset() {
    x.set(0)
    y.set(0)
  }

  const styles = variant === 'primary'
    ? 'bg-white text-black shadow-2xl shadow-white/10'
    : 'glass text-white hover:border-primary/40'

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={`group inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 font-medium transition-all duration-300 ${styles}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </motion.a>
  )
}
