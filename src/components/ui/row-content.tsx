'use client'

import * as React from 'react'
import { cn } from '~/lib/utils'
import RowTitle from './row-title'

interface RowContentProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
}

const RowContent = React.forwardRef<HTMLDivElement, RowContentProps>(
  ({ label, className, children, ...props }, ref) => {
    return (
      <div className='flex flex-col gap-5'>
        <RowTitle>{label}</RowTitle>
        <div
          {...props}
          ref={ref}
          className={cn('flex w-full flex-col gap-5', className)}
        >
          {children}
        </div>
      </div>
    )
  }
)

RowContent.displayName = 'RowContent'

export default RowContent
