import { ArrowRight, Shield, Workflow, Cpu, Server, Radar } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { SystemGrid } from '@/components/system-grid'
import { WorkflowSection } from '@/components/workflow-section'
import { ContactSection } from '@/components/contact-section'
import { LiveSystemPanel } from '@/components/live-system-panel'
import { HeroOrb } from '@/components/hero-orb'
import { ProjectPreview } from '@/components/project-preview'
import { EngineeringPhilosophy } from '@/components/engineering-philosophy'
import { CommandTerminal } from '@/components/command-terminal'
import { NetworkGrid } from '@/components/network-grid'

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

const metrics = [
  'Architecture Premium',
  'Automation Engineering',
  'AI Systems',
  'Cybersecurity',
]

export default function HomePage() {
  return (
    <main className="relative noise overflow-hidden bg-background text-foreground">
      <Navigation />
      <SystemGrid />
      <HeroOrb />

      <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-primary/20 blur-[180px]" />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm backdrop-blur-xl">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Systems Engineer • Automation Architect • AI Builder
          </div>

          <h1 className="mx-auto max-w-6xl text-6xl font-black leading-none tracking-tight md:text-8xl xl:text-[9rem]">
            Des systèmes intelligents.
            <br />
            Une ingénierie premium.
          </h1>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Développeur Fullstack spécialisé en automatisation, IA, infrastructures, cybersécurité et architectures digitales haute performance.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="group flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-105">
              Explorer le portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="glass rounded-2xl px-8 py-4 transition-all duration-300 hover:border-primary/40">
              Réserver un appel
            </button>
          </div>

          <div className="mt-24 grid gap-4 md:grid-cols-4">
            {metrics.map((item) => (
              <div key={item} className="glass rounded-2xl px-5 py-4 text-sm uppercase tracking-[0.2em] text-zinc-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <NetworkGrid />

      <section className="relative px-6 py-32" id="expertise">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-primary">
                Expertise
              </span>

              <h2 className="mt-4 max-w-4xl text-5xl font-black leading-tight tracking-tight">
                Ingénierie moderne orientée performance, automatisation et systèmes intelligents.
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
              Une approche combinant backend, IA, infrastructure, sécurité et expérience utilisateur premium.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {expertise.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="glass group rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all group-hover:border-primary/40">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-lg leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <LiveSystemPanel />
      <CommandTerminal />
      <ProjectPreview />
      <EngineeringPhilosophy />

      <section id="architecture" className="relative px-6 py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass rounded-[32px] p-10 md:p-14">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                <Radar className="h-5 w-5 text-primary" />
              </div>

              <span className="text-sm uppercase tracking-[0.3em] text-primary">
                System Architecture
              </span>
            </div>

            <h2 className="max-w-3xl text-5xl font-black leading-tight tracking-tight">
              Une architecture pensée pour des systèmes réels et scalables.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Le portfolio est conçu comme une plateforme technologique premium : animations GPU, architecture modulaire, composants réutilisables, optimisation SEO et expérience immersive.
            </p>
          </div>

          <div className="glass rounded-[32px] p-10">
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Frontend Stack
                </div>
                <div className="text-xl font-semibold">
                  Next.js • TypeScript • Tailwind • Motion
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Engineering
                </div>
                <div className="text-xl font-semibold">
                  Automation • AI • Infrastructure • Security
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Experience
                </div>
                <div className="text-xl font-semibold">
                  Cinematic UI • Motion Design • Premium UX
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkflowSection />
      <ContactSection />
    </main>
  )
}
