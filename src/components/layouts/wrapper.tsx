'use client'

import React, { forwardRef, useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import Head from 'next/head'
import { Footer, Navbar } from '~/components/layouts'
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'
import '~/styles/globals.css'
import { Toaster } from '~/components/ui/toaster'

interface WrapperHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
}

const WrapperHeader = forwardRef<HTMLDivElement, WrapperHeaderProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={cn('my-6 px-content', className)}>
        {children}
      </div>
    )
  }
)

WrapperHeader.displayName = 'WrapperHeader'

interface WrapperTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const WrapperTitle = forwardRef<HTMLHeadingElement, WrapperTitleProps>(
  ({ children, className }, ref) => {
    return (
      <h1 ref={ref} className={cn('page-title mt-10', className)}>
        {children}
      </h1>
    )
  }
)

WrapperTitle.displayName = 'WrapperTitle'

interface WrapperProps extends React.HTMLAttributes<HTMLElement> {
  title?: string
  hasNavbar?: boolean | undefined
  hasFooter?: boolean | undefined
}

const Wrapper = forwardRef<HTMLElement, WrapperProps>(
  ({ title, hasNavbar, hasFooter, children, className }, ref) => {
    const [isVisibleButtonScroll, setIsVisibleButtonScroll] = useState(false)

    const handleScroll = () => {
      const scrollYOffset = window.scrollY
      // Visible state button scroll to top
      setIsVisibleButtonScroll(scrollYOffset > 300)
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    useEffect(() => {
      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])

    return (
      <>
        <Head>
          <title>
            {title ? `${title} | V5T Corporation` : 'V5T Corporation'}
          </title>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            key='title'
            content='initial-scale=1.0, width=device-width'
          />
        </Head>
        <main
          ref={ref}
          className={cn(
            'flex flex-col justify-between scroll-smooth bg-background'
          )}
        >
          {hasNavbar && <Navbar />}
          <div
            className={cn(
              'container min-h-screen',
              {
                'mt-[var(--navbar-height)]': hasNavbar,
                'mb-[var(--navbar-height)]': hasFooter,
              },
              className
            )}
          >
            {children}
          </div>
          {/* Start button */}
          <div
            className={cn(
              'fixed bottom-0 right-0 z-[999] mb-10 mr-10 opacity-0 transition-opacity duration-300',
              {
                'opacity-100': isVisibleButtonScroll,
              }
            )}
          >
            <Button
              className='h-12 w-12 bg-neutral-500 p-0'
              onClick={scrollToTop}
            >
              <ChevronUp size={24} />
            </Button>
          </div>
          {/* End button */}
          {hasFooter && <Footer />}
        </main>
        <Toaster />
      </>
    )
  }
)

Wrapper.displayName = 'Wrapper'

interface WrapperContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const WrapperContent = forwardRef<HTMLDivElement, WrapperContentProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col gap-10 px-content', className)}
      >
        {children}
      </div>
    )
  }
)

WrapperContent.displayName = 'WrapperContent'

export { Wrapper, WrapperContent, WrapperHeader, WrapperTitle }
