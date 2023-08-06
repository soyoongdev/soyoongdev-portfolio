'use client'

import Image from 'next/image'
import React, { forwardRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { InProduct } from '~/lib/interfaces'
import { cn } from '~/lib/utils'

interface FilterItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  item: InProduct | null
}

const FilterItem = forwardRef<HTMLButtonElement, FilterItemProps>(
  ({ item, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          'inline-flex w-full flex-row gap-5 rounded-md p-5 transition-colors duration-300 hover:bg-neutral-100',
          className
        )}
      >
        {item?.image_url ? (
          <Image
            src={item.image_url}
            alt='product image'
            width={96}
            height={96}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 96px'
            className='h-24 w-24 object-contain'
          />
        ) : (
          <Skeleton className='h-24 w-24' />
        )}
        <div className='inline-flex flex-col gap-2'>
          <h1 className='text-start font-semibold'>{item?.name}</h1>
          <p className='line-clamp-3 text-start text-sm'>{item?.overview}</p>
        </div>
      </button>
    )
  }
)

FilterItem.displayName = 'FilterItem'

export default FilterItem
