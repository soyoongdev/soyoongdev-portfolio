'use client'
import { SearchIcon } from 'lucide-react'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import Dialog, {
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '~/components/ui/dialog'
import { cn } from '~/lib/utils'
import { Input } from '~/components/ui/input'
import { productList } from '~/example.data'
import FilterList from './filter/FilterList'
import { InProduct } from '~/lib/interfaces'
import { Button } from '~/components/ui/button'

export type InputSearchHandle = {
  val: string | undefined
}

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchBar = forwardRef<InputSearchHandle, SearchBarProps>(
  ({ className }, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [focused, setFocused] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [visibleDialog, setVisibleDialog] = useState(false)

    useImperativeHandle(
      ref,
      () => {
        return {
          val: searchValue + `${focused}`,
        }
      },
      [searchValue, focused]
    )

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value)
    }

    const handleClickForm = () => {
      setVisibleDialog(!visibleDialog)
    }

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className={cn(
              'relative h-9 w-full bg-secondary text-secondary-foreground active:scale-100',
              className
            )}
            onClick={handleClickForm}
          >
            <div className='flex w-full flex-row items-center gap-2'>
              <div className=''>
                <SearchIcon size={16} className='text-holder' />
              </div>
              <span className='text-holder flex-1 whitespace-nowrap text-left text-sm font-medium'>
                Tìm kiếm...
              </span>
            </div>
          </Button>
        </DialogTrigger>

        <DialogContent className='top-0 p-0'>
          <div className='mt-12 flex flex-col gap-5'>
            <DialogHeader className='mx-5'>
              <Input
                ref={inputRef}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                value={searchValue}
                onChange={handleInputValue}
                type='text'
                placeholder='Tìm kiếm...'
                className='placeholder:text-neutral-400'
              />
            </DialogHeader>
            <FilterList
              className='ml-5 max-h-[75vh] pb-5 pr-5'
              list={productList as [InProduct]}
            />
          </div>
        </DialogContent>
      </Dialog>
    )
  }
)

SearchBar.displayName = 'SearchBar'

export default SearchBar
