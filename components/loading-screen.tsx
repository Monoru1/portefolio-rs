'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]"
        >
          <div className="relative flex flex-col items-center">
            <div className="absolute h-40 w-40 rounded-full bg-primary/20 blur-[100px]" />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/10 bg-white/[0.03] text-3xl font-black tracking-tight backdrop-blur-2xl"
            >
              RS
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 text-sm uppercase tracking-[0.4em] text-zinc-500"
            >
              Initializing Systems
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
