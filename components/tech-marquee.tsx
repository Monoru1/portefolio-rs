const technologies = [
  'Next.js',
  'React',
  'TypeScript',
  'TailwindCSS',
  'Framer Motion',
  'Three.js',
  'GSAP',
  'n8n',
  'FastAPI',
  'Docker',
  'PostgreSQL',
  'Cybersecurity',
]

export function TechMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-8">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-6">
        {[...technologies, ...technologies, ...technologies].map((tech, index) => (
          <div key={`${tech}-${index}`} className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm uppercase tracking-[0.25em] text-zinc-400">
            {tech}
          </div>
        ))}
      </div>
    </section>
  )
}
