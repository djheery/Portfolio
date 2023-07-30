import './assets/globals.css'
import { Metadata } from 'next'
import Header from './components/Header/Header'
import SocialMediaBar from './components/SocialMediaBar/SocialMediaBar'
import BackgroundFilter from './components/BackgroundFilter/BackgroundFilter'

export const metadata: Metadata = {
  title: 'Developer Portfolio | Daniel Heery',
  description: 'Daniel Heery is a web developer based in the United Kingdom',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html data-scroll="0" lang="en">
      <body>
        <BackgroundFilter />
        <Header />
        <main>
          {children}
        </main>
        <SocialMediaBar />
      </body>
    </html>
  )
}
