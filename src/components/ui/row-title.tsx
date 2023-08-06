'use client'

import * as React from 'react'
import { cn } from '~/lib/utils'

interface RowTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const RowTitle = React.forwardRef<HTMLHeadingElement, RowTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h1 ref={ref} {...props} className={cn('text-3xl font-bold', className)}>
        {children}
      </h1>
    )
  }
)

RowTitle.displayName = 'RowTitle'

export default RowTitle
