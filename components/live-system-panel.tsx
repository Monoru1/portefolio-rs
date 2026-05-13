'use client'

import { motion } from 'framer-motion'

const systems = [
  { title: 'Automatisation', status: 'Workflows métier' },
  { title: 'Interfaces Web', status: 'Sites & dashboards' },
  { title: 'Backend', status: 'APIs & données' },
  { title: 'Infrastructure', status: 'Déploiement & supervision' },
]

const stack = ['Next.js', 'React', 'TypeScript', 'Python', 'Docker', 'PostgreSQL']

export function LiveSystemPanel() {
  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-5 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.26em] text-primary sm:text-sm sm:tracking-[0.3em]">
              Systems Overview
            </span>

            <h2 className="mt-4 max-w-4xl text-4xl font-black leading-[0.98] tracking-tight sm:text-5xl md:text-6xl">
              Des compétences organisées comme un vrai système produit.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Le but n’est pas d’afficher des pourcentages artificiels, mais de montrer comment les briques techniques se connectent pour créer une solution complète.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
          <div className="glass relative overflow-hidden rounded-[28px] p-5 sm:p-7 md:rounded-[32px] md:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />

            <div className="relative z-10">
              <div className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                    Capability Map
                  </div>
                  <div className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                    Engineering Matrix
                  </div>
                </div>

                <div className="w-fit rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-emerald-300">
                  Disponible pour projets
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {systems.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <div className="text-xl font-black tracking-tight">
                      {item.title}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-zinc-500">
                      {item.status}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass rounded-[28px] p-5 sm:p-7 md:rounded-[32px] md:p-8">
            <div className="mb-6 text-xs uppercase tracking-[0.24em] text-zinc-500">
              Core Stack
            </div>

            <div className="flex flex-wrap gap-3">
              {stack.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-zinc-300">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-black/30 p-5">
              <div className="text-sm uppercase tracking-[0.22em] text-primary">Approche</div>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                Construire vite, proprement, avec une architecture compréhensible, maintenable et prête à être déployée.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
