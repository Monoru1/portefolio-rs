'use client'

import { motion } from 'framer-motion'

const systems = [
  {
    title: 'Automation Core',
    status: 'Operational',
  },
  {
    title: 'AI Runtime',
    status: 'Learning',
  },
  {
    title: 'Security Layer',
    status: 'Protected',
  },
  {
    title: 'Infrastructure Grid',
    status: 'Stable',
  },
]

export function LiveSystemPanel() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-primary">
              Live Infrastructure
            </span>

            <h2 className="mt-4 max-w-4xl text-5xl font-black leading-tight tracking-tight">
              Une interface inspirée des systèmes d’ingénierie avancés.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
            Une direction artistique pensée pour transmettre la maîtrise technique, l’automatisation et la puissance système.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="glass relative overflow-hidden rounded-[32px] p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />

            <div className="relative z-10">
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                    System Overview
                  </div>
                  <div className="mt-2 text-2xl font-bold">
                    Engineering Matrix
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-emerald-300">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  Active
                </div>
              </div>

              <div className="space-y-4">
                {systems.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    key={item.title}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <div>
                      <div className="text-lg font-medium">
                        {item.title}
                      </div>
                      <div className="mt-1 text-sm text-zinc-500">
                        Runtime monitoring enabled
                      </div>
                    </div>

                    <div className="rounded-full bg-white/[0.04] px-4 py-2 text-sm text-zinc-300">
                      {item.status}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass rounded-[32px] p-8">
            <div className="mb-8 text-xs uppercase tracking-[0.3em] text-zinc-500">
              Stack Runtime
            </div>

            <div className="space-y-5">
              {['Next.js', 'TypeScript', 'GSAP', 'Three.js', 'Automation', 'AI Systems'].map((item) => (
                <div key={item}>
                  <div className="mb-2 flex items-center justify-between text-sm text-zinc-400">
                    <span>{item}</span>
                    <span>99%</span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/[0.04]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '99%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
