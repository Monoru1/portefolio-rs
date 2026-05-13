'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Astra Core',
    category: 'AI Infrastructure',
    description:
      'Plateforme d’orchestration intelligente pour automatisations, agents IA et systèmes backend premium.',
  },
  {
    title: 'BlackGrid',
    category: 'Cybersecurity',
    description:
      'Infrastructure défensive orientée monitoring temps réel, observabilité et protection avancée.',
  },
  {
    title: 'Nexus Flow',
    category: 'Automation Systems',
    description:
      'Moteur d’automatisation enterprise connecté aux APIs, workflows et pipelines intelligents.',
  },
]

export function ProjectPreview() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-primary">
              Future Projects
            </span>

            <h2 className="mt-4 max-w-4xl text-5xl font-black leading-tight tracking-tight">
              Des projets conçus comme de vrais produits technologiques.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
            Chaque projet du portfolio sera présenté comme une véritable case study premium.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.8 }}
              className="group glass relative overflow-hidden rounded-[32px] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-400/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
                    {project.category}
                  </span>

                  <ArrowUpRight className="h-5 w-5 text-zinc-500 transition-all group-hover:text-white" />
                </div>

                <div className="mb-8 h-[220px] rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01]" />

                <h3 className="text-3xl font-black tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-5 leading-relaxed text-zinc-400">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
