import { GitBranch, LinkIcon, Mail } from 'lucide-react'

const links = [
  { href: '#expertise', label: 'Expertise' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#method', label: 'Méthode' },
  { href: '#contact', label: 'Contact' },
]

export function Navigation() {
  return (
    <header className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2">
      <nav className="glass flex items-center justify-between rounded-2xl px-4 py-3 shadow-2xl shadow-black/20">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-black tracking-tight">RS</span>
          <span className="hidden text-sm font-medium text-zinc-200 sm:block">Ryad SAKA</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="rounded-xl px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.04] hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a aria-label="GitHub" href="https://github.com/Monoru1" className="rounded-xl p-2 text-zinc-400 transition hover:bg-white/[0.04] hover:text-white"><GitBranch className="h-4 w-4" /></a>
          <a aria-label="LinkedIn" href="#contact" className="rounded-xl p-2 text-zinc-400 transition hover:bg-white/[0.04] hover:text-white"><LinkIcon className="h-4 w-4" /></a>
          <a aria-label="Email" href="mailto:contact@example.com" className="rounded-xl p-2 text-zinc-400 transition hover:bg-white/[0.04] hover:text-white"><Mail className="h-4 w-4" /></a>
        </div>
      </nav>
    </header>
  )
}
