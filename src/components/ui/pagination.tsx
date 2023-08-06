'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '~/lib/utils'

interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  defaultValue?: number
  count: number
  // eslint-disable-next-line no-unused-vars
  onValueChange: (value: number) => void
}

interface PaginationItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
  disabled?: boolean | undefined
}

interface PaginationControllerProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
  disabled?: boolean
}

const PaginationController = React.forwardRef<
  HTMLButtonElement,
  PaginationControllerProps
>(({ isActive, disabled, className, children, ...props }, ref) => {
  return (
    <button
      disabled={disabled}
      ref={ref}
      {...props}
      className={cn(
        'flex h-10 w-10 items-center justify-center rounded-md bg-neutral-200 text-foreground transition-colors',
        {
          'text-neutral-400': disabled,
          'bg-primary text-white': isActive,
        },
        className
      )}
    >
      {children}
    </button>
  )
})

PaginationController.displayName = 'PaginationButtonController'

const PaginationItem = React.forwardRef<HTMLButtonElement, PaginationItemProps>(
  ({ isActive, disabled, className, children, ...props }, ref) => (
    <button
      disabled={disabled}
      ref={ref}
      {...props}
      className={cn(
        'flex h-10 w-10 items-center justify-center rounded-md bg-neutral-200 transition-colors hover:bg-primary hover:text-white',
        {
          'bg-primary text-white': isActive,
        },
        className
      )}
    >
      {children}
    </button>
  )
)
PaginationItem.displayName = 'PaginationItem'

const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      count,
      value,
      defaultValue,
      onValueChange,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [pageNumbers, setPagesNumber] = React.useState<Array<number>>([])
    // eslint-disable-next-line no-unused-vars
    const [minimumIndex, setMinimumIndex] = React.useState(0)
    // eslint-disable-next-line no-unused-vars
    const [maximumIndex, setMaximumIndex] = React.useState(10)

    React.useEffect(() => {
      if (count) {
        const numbers = Array.from({ length: count }, (_, index) => index + 1)
        setPagesNumber(numbers)
      }
    }, [count])

    const updateIndices = (increment: number) => {
      setMinimumIndex((prev) => prev + increment)
      setMaximumIndex((prev) => prev + increment)
    }

    React.useEffect(() => {
      if (value <= count) {
        if (value > maximumIndex) {
          updateIndices(10)
        }
        if (value <= minimumIndex) {
          updateIndices(-10)
        }
      }
    }, [count, value, minimumIndex, maximumIndex])

    const handleButtonController = (direction: string) => {
      if (onValueChange && value) {
        onValueChange(direction === 'prev' ? value - 1 : value + 1)
      } else {
        return
      }
    }

    const activeState = (pageNumber: number): boolean => {
      return value
        ? value === pageNumber
        : defaultValue
        ? defaultValue === pageNumber
        : false
    }

    const disableButtonState = (direction: string): boolean => {
      return value
        ? (direction === 'prev' && value <= 1) ||
            (direction === 'next' && value >= pageNumbers.length)
        : false
    }

    return (
      <div ref={ref} {...props} className={cn('', className)}>
        {children ? (
          children
        ) : (
          <div className='flex flex-row items-center gap-2'>
            <PaginationController
              disabled={disableButtonState('prev')}
              onClick={() => handleButtonController('prev')}
            >
              <ChevronLeft size={20} />
            </PaginationController>
            {pageNumbers
              .slice(minimumIndex, maximumIndex)
              .map((pageNumber, index) => {
                return (
                  <PaginationItem
                    key={pageNumber || index}
                    onClick={() => {
                      if (onValueChange) {
                        onValueChange(pageNumber)
                      }
                    }}
                    isActive={activeState(pageNumber)}
                  >
                    {pageNumber}
                  </PaginationItem>
                )
              })}
            {value <= pageNumbers.length - 10 && pageNumbers.length > 10 && (
              <div className='flex flex-row gap-2'>
                <p>...</p>
                <PaginationItem
                  onClick={() => {
                    if (onValueChange) {
                      onValueChange(pageNumbers.length)
                    }
                  }}
                  isActive={activeState(pageNumbers.length)}
                >
                  {pageNumbers.length}
                </PaginationItem>
              </div>
            )}
            <PaginationController
              disabled={disableButtonState('next')}
              onClick={() => handleButtonController('next')}
            >
              <ChevronRight size={20} />
            </PaginationController>
          </div>
        )}
      </div>
    )
  }
)
Pagination.displayName = 'Pagination'

export { Pagination, PaginationItem }
