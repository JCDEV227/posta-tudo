import { ProviderTheme } from '@/contexts/contextTheme'
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'POSTA TUDO',
  description: 'POSTA TUDO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className='dark'>
      <ProviderTheme>
        <body>
          {children}
        </body>
      </ProviderTheme>
    </html>
  )
}
