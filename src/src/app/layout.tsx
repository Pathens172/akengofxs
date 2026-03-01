import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pro Master Analysis - 100% Free Trading Tool',
  description: 'Free AI-powered trading analysis tool. No payment, no registration, no hidden costs. Real-time market data and predictions.',
  keywords: 'free trading tool, free analysis, no payment trading, free forex analysis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0, padding: 0 }}>
        {/* NO PROTECTION COMPONENTS - Completely free access */}
        {children}
      </body>
    </html>
  )
}