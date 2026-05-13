'use client'

import { motion } from 'framer-motion'

export function AmbientLines() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={index}
          animate={{
            x: ['-10%', '110%'],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute h-px w-[30%] bg-gradient-to-r from-transparent via-primary to-transparent"
          style={{ top: `${index * 12}%` }}
        />
      ))}
    </div>
  )
}
