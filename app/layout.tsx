import '../styles/globals.css'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import IconsLoader from '@/components/IconsLoader'
import Providers from '@/components/Providers'
import type { Metadata } from 'next'
import LayoutWrapper from '@/components/LayoutWrapper'

export const metadata: Metadata = {
  title: 'HearstAI - Dashboard',
  description: 'HearstAI Mining Intelligence Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" data-theme="dark">
      <head>
        <script
          src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"
          async
        ></script>
      </head>
      <body>
        <Providers>
          <IconsLoader />
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  )
}



