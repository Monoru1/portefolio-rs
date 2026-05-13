'use client'

import { motion } from 'framer-motion'

const nodes = [
  { top: '15%', left: '20%' },
  { top: '30%', left: '70%' },
  { top: '65%', left: '25%' },
  { top: '70%', left: '80%' },
  { top: '45%', left: '50%' },
]

export function NetworkGrid() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      <div className="absolute inset-0 opacity-30">
        {nodes.map((node, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_rgba(139,92,246,0.8)]"
            style={{ top: node.top, left: node.left }}
          />
        ))}

        <svg className="absolute inset-0 h-full w-full">
          <line x1="20%" y1="15%" x2="50%" y2="45%" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="50%" y1="45%" x2="70%" y2="30%" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="50%" y1="45%" x2="25%" y2="65%" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="50%" y1="45%" x2="80%" y2="70%" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">
          Connected Systems
        </span>

        <h2 className="mx-auto mt-6 max-w-5xl text-5xl font-black leading-tight tracking-tight">
          Backend, automatisation, IA et infrastructure connectés dans un même écosystème.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
          Une approche orientée intégration, orchestration et construction de systèmes capables d’évoluer à grande échelle.
        </p>
      </div>
    </section>
  )
}
