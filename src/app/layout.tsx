import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Woovi Frontend Challenge',
  description:
    'Challenge for the position of frontend software engineer at Woovi.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-Br">
      <body className={inter.className}>
        <Header />

        {children}
      </body>
    </html>
  )
}
