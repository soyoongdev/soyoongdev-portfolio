import { Suspense, lazy } from 'react'
import {
  Wrapper,
  WrapperContent,
  WrapperHeader,
} from '~/components/layouts/wrapper'
import Projects from '~/pages/projects'
import TechnicalActivities from '~/pages/technical-activities'
const HeroBanner = lazy(() => import('~/components/hero-banner'))

export const metadata = {
  description:
    'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website',
  },
}

export default async function HomePage() {
  return (
    <Wrapper title='Home page' hasNavbar hasFooter>
      <WrapperHeader>
        <Suspense fallback={<h1>Loading</h1>}>
          <HeroBanner />
        </Suspense>
      </WrapperHeader>
      <WrapperContent className='w-full'>
        <TechnicalActivities />
        <Projects />
      </WrapperContent>
    </Wrapper>
  )
}
