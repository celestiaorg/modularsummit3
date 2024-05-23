import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../styles/main.scss'
import ogImage from '@/app/og-image.png'
import twitterImage from '@/app/twitter-image.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Modular Summit 3.0',
  description: '',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US'
    }
  },
  metadataBase: new URL('https://modularsummit.dev/'),
  openGraph: {
    type: 'website',
    url: 'https://modularsummit.dev',
    title: 'Modular Summit 3.0',
    description: '',
    siteName: 'Modular Summit 3.0',
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@modular_summit',
    images: [
      {
        url: twitterImage.src,
        width: twitterImage.width,
        height: twitterImage.height
      }
    ]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
