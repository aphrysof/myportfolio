import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sophia Wanjiru Abdullahi Portfolio',
  description: 'My personal portfolio showcasing my skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
