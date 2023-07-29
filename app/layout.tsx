import './globals.css'
import type { Metadata } from 'next'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
//import { Inter } from 'next/font/google'
import Navbar from '../components/core/Navbar'
import Footer from '@/components/core/Footer'
import Contact from '@/components/core/Contact'


//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Katie Chow',
  description: "Katie Chow's Portfolio",
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Contact/>
        <Footer/>
      </body>
    </html>
  )
}