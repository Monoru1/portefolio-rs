import { ArrowRight, Shield, Workflow, Cpu, Server } from 'lucide-react'

const expertise = [
  {
    title: 'Automatisation avancée',
    description: 'Conception de workflows intelligents, orchestration backend et automatisations enterprise.',
    icon: Workflow,
  },
  {
    title: 'Infrastructure & Backend',
    description: 'Architectures robustes, APIs haute performance et systèmes scalables.',
    icon: Server,
  },
  {
    title: 'Intelligence artificielle',
    description: 'Outils intelligents, systèmes assistés par IA et expériences augmentées.',
    icon: Cpu,
  },
  {
    title: 'Cybersécurité',
    description: 'Protection système, observabilité, monitoring et ingénierie défensive.',
    icon: Shield,
  },
]

export default function HomePage() {
  return (
    <main className="relative noise overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/20 blur-[180px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm mb-8 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Systems Engineer • Automation Architect • AI Builder
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none max-w-6xl mx-auto">
            Je construis des systèmes intelligents, des automatisations avancées et des expériences web premium.
          </h1>

          <p className="mt-8 text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Développeur Fullstack spécialisé en automatisation, IA, infrastructures, cybersécurité et architectures digitales haute performance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <button className="group px-8 py-4 rounded-2xl bg-white text-black font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Voir les projets
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-8 py-4 rounded-2xl glass hover:border-primary/40 transition-all duration-300">
              Réserver un appel
            </button>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-primary uppercase tracking-[0.3em] text-sm">
              Expertise
            </span>
            <h2 className="text-5xl font-bold mt-4 max-w-3xl leading-tight">
              Ingénierie moderne orientée performance, automatisation et systèmes intelligents.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="glass rounded-3xl p-8 hover:-translate-y-1 transition-all duration-500 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-primary/40 transition-all">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
