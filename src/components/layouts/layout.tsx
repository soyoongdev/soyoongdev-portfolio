import Head from 'next/head'
import React, { forwardRef } from 'react'
import Navbar from './navbar'
import Footer from './footer'

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
}

const Layout = forwardRef<HTMLDivElement, LayoutProps>(
  ({ title, children, className }, ref) => {
    return (
      <>
        <Head>
          <title>{title ? title + ' - Portfolio' : 'Portfolio'}</title>
          <meta name='description' content='Ecommerce Website' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div ref={ref} className={className}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </>
    )
  }
)

Layout.displayName = 'Layout'

export default Layout
