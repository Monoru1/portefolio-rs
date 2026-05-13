'use client'

import { motion } from 'framer-motion'

export function SystemGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute inset-0"
      >
        <div className="absolute left-0 top-0 h-full w-full bg-grid opacity-[0.03]" />

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-[10%] top-[20%] h-[320px] w-[320px] rounded-full bg-primary/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-[10%] right-[10%] h-[280px] w-[280px] rounded-full bg-cyan-400/10 blur-[120px]"
        />
      </motion.div>
    </div>
  )
}
