'use client'

import React, { forwardRef } from 'react'
import { Partner } from '~/lib/types'
import { cn } from '~/lib/utils'
import { Label } from './label'
import { RadioGroupItem } from './radio-group'

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarHeader = forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ className, children }, ref) => {
    return (
      <div ref={ref} className={cn('bg-blue-main px-6 py-3', className)}>
        {children}
      </div>
    )
  }
)

SidebarHeader.displayName = 'SidebarHeader'

interface SidebarTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const SidebarTitle = forwardRef<HTMLHeadingElement, SidebarTitleProps>(
  ({ className, children }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn('font-medium text-base text-white', className)}
      >
        {children}
      </h1>
    )
  }
)

SidebarTitle.displayName = 'SidebarTitle'

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {}

const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  ({ className, children }, ref) => {
    return (
      <nav ref={ref} className={cn('rounded-md bg-background', className)}>
        {children}
      </nav>
    )
  }
)

Sidebar.displayName = 'Sidebar'

interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarContent = forwardRef<HTMLDivElement, SidebarContentProps>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('min-h-[320px] min-w-[320px] p-6', className)}
      >
        {children}
      </div>
    )
  }
)

SidebarContent.displayName = 'SidebarContent'

interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Partner
}

const SidebarItem = forwardRef<HTMLDivElement, SidebarItemProps>(
  ({ data, className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex w-full items-center justify-between space-x-2 rounded-md px-2 hover:bg-muted-foreground hover:text-white',
          className
        )}
      >
        <Label className='flex-1 py-3 align-middle' htmlFor={`${data.id}`}>
          {data.name}
        </Label>
        {children ? (
          children
        ) : (
          <RadioGroupItem value={`${data.id}`} id={`${data.id}`} />
        )}
      </div>
    )
  }
)

SidebarItem.displayName = 'SidebarItem'

export { Sidebar, SidebarHeader, SidebarTitle, SidebarContent, SidebarItem }
