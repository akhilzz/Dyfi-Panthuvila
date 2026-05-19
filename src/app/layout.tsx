import type { Metadata } from 'next'
import { Barlow_Condensed, Noto_Sans_Malayalam } from 'next/font/google'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  weight: ['700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-display',
})

const notoSansMalayalam = Noto_Sans_Malayalam({
  weight: ['400', '500', '600'],
  subsets: ['malayalam', 'latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'DYFI Thiruvananthapuram',
  description: 'ജനകീയ ജനാധിപത്യം — Democratic Youth Federation of India, Thiruvananthapuram District',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${notoSansMalayalam.variable}`}>
      <body>{children}</body>
    </html>
  )
}
