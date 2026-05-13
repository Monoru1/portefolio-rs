'use client'

import { motion } from 'framer-motion'

export function Spotlight() {
  return (
    <motion.div
      animate={{
        opacity: [0.4, 0.8, 0.4],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="pointer-events-none absolute left-1/2 top-0 z-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[180px]"
    />
  )
}
