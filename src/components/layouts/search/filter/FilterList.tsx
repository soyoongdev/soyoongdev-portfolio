import React, { forwardRef } from 'react'
import { cn } from '~/lib/utils'
import FilterItem from './FilterItem'
import { InProduct } from '~/lib/interfaces'

interface FilterListProps extends React.HTMLAttributes<HTMLUListElement> {
  list: InProduct[] | null
}

const FilterList = forwardRef<HTMLUListElement, FilterListProps>(
  ({ list, className, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        {...props}
        className={cn('flex flex-col gap-5 overflow-y-auto', className)}
      >
        {list?.map((item) => {
          return <FilterItem item={item} key={item.id} />
        })}
      </ul>
    )
  }
)

FilterList.displayName = 'FilterList'

export default FilterList
