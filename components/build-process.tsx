'use client'

import { motion } from 'framer-motion'

const steps = [
  'Analyse stratégique',
  'Architecture système',
  'Automatisation & IA',
  'Déploiement scalable',
]

export function BuildProcess() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Build Process</span>
          <h2 className="mx-auto mt-6 max-w-5xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
            Une méthode pensée comme un studio d’ingénierie premium.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              className="glass relative overflow-hidden rounded-[32px] p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-400/5" />

              <div className="relative z-10">
                <div className="mb-10 text-6xl font-black text-white/10">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-black tracking-tight">
                  {step}
                </h3>

                <p className="mt-4 leading-relaxed text-zinc-400">
                  Approche structurée orientée performance, scalabilité et expérience utilisateur premium.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
