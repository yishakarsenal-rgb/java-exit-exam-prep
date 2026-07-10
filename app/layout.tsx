import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export const metadata: Metadata = {
  title: 'AOOP Exam Prep — Advanced Object-Oriented Programming',
  description:
    'Comprehensive exam preparation for Advanced Object-Oriented Programming. Study OOP principles, design patterns, Java concurrency, generics, and more with interactive quizzes and an AI copilot.',
  keywords: ['AOOP', 'Java', 'OOP', 'Design Patterns', 'Generics', 'Concurrency', 'Exam Prep'],
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0d1a',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark bg-background">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
