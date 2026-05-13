export function MetricsStrip() {
  const metrics = [
    {
      value: '99.9%',
      label: 'System Reliability',
    },
    {
      value: '24/7',
      label: 'Monitoring',
    },
    {
      value: '150+',
      label: 'Automated Processes',
    },
    {
      value: 'AI',
      label: 'Integrated Systems',
    },
  ]

  return (
    <section className="relative border-y border-white/10 bg-white/[0.02] px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="text-center">
            <div className="text-5xl font-black tracking-tight">
              {metric.value}
            </div>
            <div className="mt-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
