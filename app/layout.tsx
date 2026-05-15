import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: 'DOUS - The Future of Beauty',
  description: 'Join the waitlist for DOUS, the revolutionary beauty app connecting clients with beauty professionals. Discover, book, message, and shop all in one place.',
  keywords: ['beauty', 'salon', 'booking', 'hair stylist', 'makeup artist', 'nail tech', 'esthetician', 'barber'],
  openGraph: {
    title: 'DOUS - The Future of Beauty',
    description: 'Join the waitlist for the revolutionary beauty app connecting clients with beauty professionals.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#020303]">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
