import { Inter } from 'next/font/google'
import './globals.css'
import SiteNavbar from '@/components/SiteNavbar'
import SiteFooter from '@/components/SiteFooter'
import ProgressIndicator from '@/components/ProgressIndicator'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(){
  const res=await fetch(process.env.API_URL+"/api/SiteMeta/home");
  const JSON=await res.json();
  return{
      title:JSON[0]['title'],
      description:JSON[0]['description'],
      keywords:JSON[0]['keywords'],
      openGraph: {
          images: JSON[0]['image'],
      },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <ProgressIndicator />
        <SiteNavbar />  
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
