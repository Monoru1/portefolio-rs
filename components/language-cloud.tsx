'use client'

import { motion } from 'framer-motion'

const languages = [
  { name: 'TypeScript', role: 'Frontend / Systems UI', badge: 'TS' },
  { name: 'JavaScript', role: 'Web Apps / Automation', badge: 'JS' },
  { name: 'Python', role: 'AI / Backend / Scripts', badge: 'PY' },
  { name: 'PHP', role: 'Legacy / Business Apps', badge: 'PHP' },
  { name: 'SQL', role: 'Data / Reporting', badge: 'SQL' },
  { name: 'Bash', role: 'Linux / Infra Ops', badge: 'SH' },
  { name: 'PowerShell', role: 'Enterprise Automation', badge: 'PS' },
  { name: 'HTML5', role: 'Semantic Markup', badge: 'H5' },
  { name: 'CSS3', role: 'Design Systems', badge: 'C3' },
  { name: 'React', role: 'Premium Interfaces', badge: 'RX' },
  { name: 'Next.js', role: 'Production Web', badge: 'NX' },
  { name: 'FastAPI', role: 'API Engineering', badge: 'FA' },
]

export function LanguageCloud() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-primary">Technical Range</span>
            <h2 className="mt-6 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
              Une stack polyvalente pour construire du web, de l’IA, du backend et de l’automatisation.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
            Le portfolio doit montrer une polyvalence claire sans tomber dans le CV classique : chaque langage devient une brique d’un système complet.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.035 }}
              className="group glass relative overflow-hidden rounded-3xl p-5 transition duration-500 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative z-10 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-sm font-black text-white shadow-inner shadow-white/5">
                  {language.badge}
                </div>
                <div>
                  <h3 className="text-lg font-black tracking-tight text-white">{language.name}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{language.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
