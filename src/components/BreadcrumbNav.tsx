'use client'

import React, { forwardRef } from 'react'
import { InBreadcrumb } from '~/lib/interfaces'
import { cn } from '~/lib/utils'
import { Button } from './ui/button'
import { ChevronRight } from 'lucide-react'

export type BreadcrumbNavigation = Array<InBreadcrumb>

interface BreadcrumbNavProps extends React.HTMLAttributes<HTMLDivElement> {
  data: BreadcrumbNavigation
}

const BreadcrumbNav = forwardRef<HTMLDivElement, BreadcrumbNavProps>(
  ({ data, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className='breadcrumbs flex h-12 max-h-12 items-center rounded-md px-5'
        {...props}
      >
        <ul className={cn('flex flex-row', className)}>
          {data.map((item, index) => {
            return (
              <li key={index} className='flex flex-row items-center'>
                <Button
                  disabled={!item.isCurrentPath}
                  variant='link'
                  className='m-0 p-0 text-foreground'
                >
                  <a href={item.url}>{item.title}</a>
                </Button>
                <ChevronRight
                  size={16}
                  className={cn(
                    'mx-1 rounded-md object-contain text-muted-foreground',
                    {
                      hidden: index === data.length - 1,
                    }
                  )}
                />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
)

BreadcrumbNav.displayName = 'BreadcrumbNav'

export default BreadcrumbNav
