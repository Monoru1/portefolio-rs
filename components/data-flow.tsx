'use client'

import { motion } from 'framer-motion'

export function DataFlow() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">
            Data Flow
          </span>

          <h2 className="mx-auto mt-6 max-w-5xl text-5xl font-black leading-tight tracking-tight">
            Visualisation d’architectures et de flux intelligents.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {['Input Systems', 'Automation Engine', 'Intelligent Output'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="glass relative overflow-hidden rounded-[32px] p-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-400/5" />

              <div className="relative z-10">
                <div className="mb-6 text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Layer 0{index + 1}
                </div>

                <div className="mb-10 h-[180px] rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01]" />

                <h3 className="text-3xl font-black tracking-tight">
                  {item}
                </h3>

                <p className="mt-4 leading-relaxed text-zinc-400">
                  Architecture modulaire conçue pour orchestrer des systèmes, workflows et services intelligents.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
