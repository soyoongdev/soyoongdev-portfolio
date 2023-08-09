import '~/styles/globals.css'
import { Inter } from 'next/font/google'
import { ReactNode, Suspense } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={inter.variable}>
      <body>
        <Suspense>
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  )
}
