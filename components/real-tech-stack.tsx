'use client'

import { motion } from 'framer-motion'

const stack = [
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    name: 'Linux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'FastAPI',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  },
]

export function RealTechStack() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-primary">Tech Stack</span>
            <h2 className="mt-6 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
              Une stack moderne pensée pour produire des systèmes réels.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
            Pas de faux pourcentages. Pas de buzzwords inutiles. Juste des technologies réellement utilisées pour construire des produits solides.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {stack.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.04 }}
              className="glass group flex flex-col items-center justify-center rounded-[28px] p-8 text-center transition duration-500 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-black/40">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-11 w-11 object-contain transition duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="text-lg font-black tracking-tight text-white">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
