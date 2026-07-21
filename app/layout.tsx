import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gleicy Branquinha • Conteúdo Exclusivo +18',
  description:
    'Novidades quentes liberadas. Fotos, vídeos personalizados e conteúdo exclusivo. Acesse meus links.',
  generator: 'Next.js',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080506',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
