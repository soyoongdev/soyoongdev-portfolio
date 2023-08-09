import { Suspense, lazy } from 'react'
import Layout from '~/components/layouts/layout'
import {
  Wrapper,
  WrapperContent,
  WrapperHeader,
} from '~/components/layouts/wrapper'
import Projects from '~/components/projects'
import TechnicalActivities from '~/components/technical-activities'

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
    <Layout title='Home'>
      <Wrapper>
        <WrapperHeader>
          <Suspense fallback={<h1>Loading</h1>}>
            <HeroBanner />
          </Suspense>
        </WrapperHeader>
        <WrapperContent>
          <TechnicalActivities />
          <Projects />
        </WrapperContent>
      </Wrapper>
    </Layout>
  )
}
