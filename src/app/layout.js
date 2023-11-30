import { Inter } from 'next/font/google'
import './globals.css'
import SiteNavbar from '@/components/SiteNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Agency App',
  description: 'The best agency you can trust',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteNavbar />  
        {children}
      </body>
    </html>
  )
}
