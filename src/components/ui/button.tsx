'use client'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { ArrowRight } from 'lucide-react'
import * as React from 'react'

import { cn } from '~/lib/utils'

export const buttonVariants = cva(
  'inline-flex transform transition-transform active:scale-95 items-center justify-center rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
        text: 'w-fit h-fit p-0 m-0',
      },
      size: {
        default: 'min-h-10 py-2 px-4',
        sm: 'min-h-9 px-3 rounded-md',
        lg: 'min-h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

const ArrowButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        {...props}
        className={cn('group', buttonVariants({ variant, className }))}
      >
        <div className='flex flex-row items-center gap-x-1'>
          {children}
          <ArrowRight
            size={24}
            className='h-0 w-0 transition-all group-hover:ml-2 group-hover:h-5 group-hover:w-5'
          />
        </div>
      </Button>
    )
  }
)

ArrowButton.displayName = 'ArrowButton'

export { Button, ArrowButton }
