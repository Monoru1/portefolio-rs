'use client'

import { motion } from 'framer-motion'

const events = [
  'Webhook received',
  'AI agent routed task',
  'Security check passed',
  'Backend job completed',
  'Client notification sent',
]

export function ProductDashboard() {
  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="text-xs uppercase tracking-[0.26em] text-primary sm:text-sm">
            Product Mockup
          </span>

          <h2 className="mx-auto mt-6 max-w-5xl text-4xl font-black leading-[0.98] tracking-tight sm:text-5xl md:text-6xl">
            Des interfaces produits qui vendent immédiatement la compétence technique.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Le portfolio doit donner envie aux clients de confier des outils, dashboards, automatisations et plateformes complètes.
          </p>
        </div>

        <div className="glass overflow-hidden rounded-[32px] border border-white/10 shadow-2xl shadow-black/40 md:rounded-[40px]">
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-4 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            </div>

            <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 sm:text-xs">
              automation-os
            </span>
          </div>

          <div className="grid gap-0 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="border-b border-white/10 p-5 lg:border-b-0 lg:border-r lg:p-8">
              <div className="mb-6 text-[10px] uppercase tracking-[0.25em] text-zinc-500 sm:text-xs">
                Runtime Events
              </div>

              <div className="space-y-4">
                {events.map((event, index) => (
                  <motion.div
                    key={event}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
                      <span className="text-sm text-zinc-300">{event}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-5 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
                {['Tasks automated', 'Systems monitored', 'Threats blocked'].map((item, index) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="text-3xl font-black sm:text-4xl">
                      {index === 0 ? '1.2k' : index === 1 ? '48' : '327'}
                    </div>

                    <div className="mt-2 text-sm text-zinc-500">{item}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 h-[180px] rounded-[28px] border border-white/10 bg-gradient-to-br from-primary/15 via-white/[0.03] to-cyan-400/10 p-4 sm:h-[320px] sm:p-6">
                <div className="flex h-full items-end gap-2 sm:gap-3">
                  {[40, 70, 55, 90, 64, 82, 95, 74, 88, 100].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: index * 0.05 }}
                      className="flex-1 rounded-t-xl bg-white/20"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
