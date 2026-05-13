export function PremiumFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-6 py-14">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="text-3xl font-black tracking-tight">
            RS
          </div>

          <p className="mt-4 max-w-lg text-zinc-500">
            Systems engineering, automation, AI infrastructure and premium digital experiences.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
          <a href="#expertise" className="transition hover:text-white">Expertise</a>
          <a href="#architecture" className="transition hover:text-white">Architecture</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
          <a href="https://github.com/Monoru1" className="transition hover:text-white">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
