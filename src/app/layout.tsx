import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Arquería Olímpica - Técnica del Tiro con Arco',
  description: 'Aprende la técnica olímpica del tiro con arco paso a paso. Postura, agarre, tension, anclaje, apuntado, liberación y seguimiento.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const stylesFonts = [
    'font-sans',
    'antialiased',
    _geist.className,
    _geistMono.className,
  ]

  return (
    <html lang="es">
      <head>
        <link rel="shortcut icon" href="/logo.svg" type="image/svg" />
      </head>
      <body className={stylesFonts.join(" ")}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
