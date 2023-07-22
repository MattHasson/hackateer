import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hackateer',
  description: 'Faster, better hackathon project ideas at your fingertips.',
  // icons: {
  //   icon: "/src/app/favicon.ico",
  // }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-midnightNavy">
      <body className={inter.className}>
        <Navbar/>
        {children}</body>
    </html>
  )
}
