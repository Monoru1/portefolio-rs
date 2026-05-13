'use client'

import { motion } from 'framer-motion'

const lines = [
  '$ initialize portfolio-core --mode premium',
  '✓ Motion engine connected',
  '✓ Automation architecture loaded',
  '✓ AI systems interface prepared',
  '✓ Security layer active',
  '→ Ready to build advanced digital systems',
]

export function CommandTerminal() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <span className="text-sm uppercase tracking-[0.3em] text-primary">
            Interactive Signal
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight tracking-tight">
            Une identité technique qui parle immédiatement aux clients sérieux.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Le portfolio ne présente pas seulement un développeur. Il met en scène une capacité à concevoir, automatiser, sécuriser et livrer des systèmes professionnels.
          </p>
        </div>

        <div className="glass overflow-hidden rounded-[32px] border border-white/10 shadow-2xl shadow-black/30">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-6 py-4">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            <span className="ml-4 text-xs uppercase tracking-[0.25em] text-zinc-500">system-terminal</span>
          </div>

          <div className="space-y-4 p-8 font-mono text-sm text-zinc-300 md:text-base">
            {lines.map((line, index) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className={line.startsWith('✓') ? 'text-emerald-300' : line.startsWith('→') ? 'text-primary' : 'text-zinc-300'}
              >
                {line}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
