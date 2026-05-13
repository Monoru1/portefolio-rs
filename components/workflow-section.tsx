const workflow = [
  {
    step: '01',
    title: 'Analyse & stratégie',
    description: 'Étude des contraintes métier, de l’infrastructure existante et des objectifs techniques.',
  },
  {
    step: '02',
    title: 'Architecture système',
    description: 'Conception d’architectures robustes, modulaires et orientées scalabilité.',
  },
  {
    step: '03',
    title: 'Automatisation',
    description: 'Création de workflows intelligents et intégration d’outils IA & backend.',
  },
  {
    step: '04',
    title: 'Déploiement & optimisation',
    description: 'Livraison production-ready avec monitoring, performance et observabilité.',
  },
]

export function WorkflowSection() {
  return (
    <section id="method" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-primary">
              Workflow Engineering
            </span>

            <h2 className="mt-4 max-w-3xl text-5xl font-black leading-tight tracking-tight">
              Une méthodologie pensée comme un laboratoire d’ingénierie digitale.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
            Chaque système est conçu avec une logique orientée performance, automatisation, fiabilité et expérience utilisateur premium.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {workflow.map((item) => (
            <div key={item.step} className="glass rounded-3xl p-8 transition duration-500 hover:-translate-y-2 hover:border-primary/30">
              <div className="mb-10 text-5xl font-black text-white/10">
                {item.step}
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="leading-relaxed text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
