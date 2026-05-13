import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ryad SAKA — Systems Engineer & Automation Architect',
  description: 'Portfolio premium orienté IA, automatisation, backend, cybersécurité et infrastructures digitales.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-background text-foreground antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
