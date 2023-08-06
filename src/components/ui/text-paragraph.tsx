'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '~/lib/utils'

export const textVariants = cva('text-foreground', {
  variants: {
    variant: {
      default: 'text-base font-sans',
      title: 'text-lg font-semibold',
      description: 'text-lg text-start font-sans',
    },
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface TextParagraphProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean
}

const TextParagraph = React.forwardRef<HTMLDivElement, TextParagraphProps>(
  ({ className, variant, size, ...props }, ref) => {
    const Comp = variant === 'title' ? 'h1' : 'p'
    return (
      <Comp
        className={cn(textVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
TextParagraph.displayName = 'TextParagraph'

export { TextParagraph }
