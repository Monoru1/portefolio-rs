import './globals.css'
import type { Metadata } from 'next'
import { SmoothScroll } from '@/components/smooth-scroll'
import { LoadingScreen } from '@/components/loading-screen'

export const metadata: Metadata = {
  title: 'Ryad SAKA — Systems Engineer & Automation Architect',
  description: 'Portfolio premium orienté IA, automatisation, backend, cybersécurité et infrastructures digitales.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-background text-foreground antialiased overflow-x-hidden">
        <SmoothScroll>
          <LoadingScreen />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
