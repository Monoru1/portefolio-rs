'use client'

import { motion } from 'framer-motion'

const apps = [
  'GitHub', 'Vercel', 'Netlify', 'Docker', 'n8n', 'Supabase', 'Postman', 'Figma', 'Linux', 'VS Code', 'Notion', 'Cloudflare'
]

export function AppsStack() {
  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="text-xs uppercase tracking-[0.26em] text-primary sm:text-sm">Tools & Apps</span>
          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
            Les outils que j’utilise pour passer de l’idée au produit en ligne.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Conception, code, automatisation, déploiement, bases de données, tests et livraison : l’objectif est de construire proprement et vite.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {apps.map((app, index) => (
            <motion.div
              key={app}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.025 }}
              className="glass rounded-2xl px-4 py-5 text-center text-sm font-black tracking-tight text-white transition duration-300 hover:-translate-y-1 hover:border-primary/40 sm:text-base"
            >
              {app}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
