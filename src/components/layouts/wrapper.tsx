'use client'

import '~/styles/globals.css'
import React, { forwardRef } from 'react'
import { cn } from '~/lib/utils'
import { Toaster } from '~/components/ui/toaster'

interface WrapperHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
}

const WrapperHeader = forwardRef<HTMLDivElement, WrapperHeaderProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={cn('my-2 mb-5', className)}>
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
      <h1 ref={ref} className={cn('mt-10 text-5xl font-bold', className)}>
        {children}
      </h1>
    )
  }
)

WrapperTitle.displayName = 'WrapperTitle'

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(
  ({ children, className }, ref) => {
    return (
      <>
        <div
          ref={ref}
          className={cn(
            'flex flex-col justify-between scroll-smooth bg-background'
          )}
        >
          <div
            className={cn(
              'md:px-30 container mb-[var(--navbar-height)] mt-[var(--navbar-height)] min-h-screen px-10 sm:px-20 lg:px-40',
              className
            )}
          >
            {children}
          </div>
        </div>
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
      <div ref={ref} className={cn('flex w-full flex-col gap-10', className)}>
        {children}
      </div>
    )
  }
)

WrapperContent.displayName = 'WrapperContent'

export { Wrapper, WrapperContent, WrapperHeader, WrapperTitle }
