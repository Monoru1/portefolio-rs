export function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="glass overflow-hidden rounded-[40px] border border-white/10 p-10 md:p-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-primary">
                Contact
              </span>

              <h2 className="mt-6 text-5xl font-black leading-tight tracking-tight">
                Construisons quelque chose de réellement avancé.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                Automatisation, IA, infrastructure, backend, cybersécurité ou expérience digitale premium.
                Le prochain système peut commencer ici.
              </p>

              <div className="mt-10 flex flex-col gap-4 text-zinc-300">
                <a href="mailto:contact@example.com" className="transition hover:text-white">
                  contact@example.com
                </a>

                <a href="https://github.com/Monoru1" className="transition hover:text-white">
                  GitHub
                </a>

                <a href="#" className="transition hover:text-white">
                  LinkedIn
                </a>
              </div>
            </div>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Nom
                </label>
                <input className="glass w-full rounded-2xl border border-white/10 bg-transparent px-5 py-4 outline-none transition focus:border-primary/40" />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Email
                </label>
                <input className="glass w-full rounded-2xl border border-white/10 bg-transparent px-5 py-4 outline-none transition focus:border-primary/40" />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Projet
                </label>
                <textarea rows={6} className="glass w-full rounded-2xl border border-white/10 bg-transparent px-5 py-4 outline-none transition focus:border-primary/40" />
              </div>

              <button className="w-full rounded-2xl bg-white px-6 py-4 font-medium text-black transition hover:scale-[1.02]">
                Démarrer un projet
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
