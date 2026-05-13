'use client'

import { motion } from 'framer-motion'

const points = [
  'Développeur web orienté systèmes, automatisation et interfaces premium.',
  'Capable de transformer un besoin flou en architecture claire, utilisable et déployable.',
  'Positionné entre produit, backend, IA, infrastructure et expérience utilisateur.',
]

export function ProfileSection() {
  return (
    <section id="profile" className="relative px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="glass relative overflow-hidden rounded-[40px] p-10 md:p-14">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/10" />
          <div className="relative z-10">
            <span className="text-sm uppercase tracking-[0.32em] text-primary">Ryad SAKA</span>
            <h2 className="mt-6 text-5xl font-black leading-tight tracking-tight md:text-6xl">
              Je conçois des sites, outils et systèmes qui donnent une vraie impression de maîtrise.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-zinc-400">
              Mon objectif n’est pas de livrer une simple page web. Je construis des expériences digitales propres, rapides, crédibles et pensées pour convertir : portfolio, SaaS, dashboards, automatisations, outils internes et plateformes métiers.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {points.map((point, index) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="glass rounded-3xl p-7"
            >
              <div className="flex gap-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-sm font-black text-primary">
                  0{index + 1}
                </span>
                <p className="text-lg leading-relaxed text-zinc-300">{point}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
