import '~/styles/globals.css'
import { Inter } from 'next/font/google'
import { ReactNode, Suspense } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
  ...(TWITTER_CREATOR &&
    TWITTER_SITE && {
      twitter: {
        card: 'summary_large_image',
        creator: TWITTER_CREATOR,
        site: TWITTER_SITE,
      },
    }),
}

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
