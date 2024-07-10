import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'

const nunito = Nunito({
  weight: ['400', '500', '600', '800'],
  subsets: ['latin'],
})

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
      <body className={nunito.className}>
        <Header />

        {children}
      </body>
    </html>
  )
}
