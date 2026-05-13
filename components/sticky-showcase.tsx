'use client'

import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Automation Runtime',
    subtitle: 'Enterprise workflows orchestration',
  },
  {
    title: 'AI Decision Layer',
    subtitle: 'Intelligent systems & automation',
  },
  {
    title: 'Security Monitoring',
    subtitle: 'Observability & cyber defense',
  },
]

export function StickyShowcase() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">
            Premium Experience
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight tracking-tight">
            Une direction artistique construite comme un produit haut de gamme.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            L’expérience mélange design premium, motion design, architecture moderne et storytelling technique.
          </p>
        </div>

        <div className="space-y-10">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass relative overflow-hidden rounded-[36px] border border-white/10 p-10 md:p-14"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-400/5" />

              <div className="relative z-10">
                <div className="mb-8 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
                    System Layer {index + 1}
                  </span>

                  <span className="text-sm text-zinc-500">Realtime</span>
                </div>

                <div className="mb-10 h-[280px] rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] shadow-inner shadow-black/40" />

                <h3 className="text-4xl font-black tracking-tight">
                  {card.title}
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-zinc-400">
                  {card.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
