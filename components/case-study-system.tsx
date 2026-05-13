const caseStudies = [
  {
    name: 'Automation Command Center',
    problem: 'Centraliser des workflows, tâches récurrentes et intégrations métier dans une interface claire.',
    solution: 'Un cockpit technique connecté aux APIs, jobs backend et agents intelligents.',
    impact: 'Réduction du temps manuel, meilleure visibilité opérationnelle et exécution fiable.',
  },
  {
    name: 'Security Intelligence Dashboard',
    problem: 'Surveiller des signaux techniques, incidents et alertes sans multiplier les outils.',
    solution: 'Un dashboard cyber orienté monitoring, scoring et priorisation des risques.',
    impact: 'Détection plus rapide, priorisation claire et meilleure compréhension système.',
  },
]

export function CaseStudySystem() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Case Studies Framework</span>
          <h2 className="mt-6 max-w-5xl text-5xl font-black leading-tight tracking-tight">
            Une structure prête pour transformer chaque projet en preuve commerciale premium.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <article key={study.name} className="glass rounded-[36px] p-8 transition duration-500 hover:-translate-y-2 hover:border-primary/30">
              <div className="mb-8 h-[260px] rounded-[28px] border border-white/10 bg-gradient-to-br from-primary/10 via-white/[0.03] to-cyan-400/10" />
              <h3 className="text-3xl font-black tracking-tight">{study.name}</h3>
              <div className="mt-8 space-y-5">
                <div>
                  <div className="mb-2 text-xs uppercase tracking-[0.25em] text-zinc-500">Problème</div>
                  <p className="leading-relaxed text-zinc-400">{study.problem}</p>
                </div>
                <div>
                  <div className="mb-2 text-xs uppercase tracking-[0.25em] text-zinc-500">Solution</div>
                  <p className="leading-relaxed text-zinc-400">{study.solution}</p>
                </div>
                <div>
                  <div className="mb-2 text-xs uppercase tracking-[0.25em] text-zinc-500">Impact</div>
                  <p className="leading-relaxed text-zinc-400">{study.impact}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
