'use client'

import { DownloadCloud } from 'lucide-react'
import * as React from 'react'
import { Document } from '~/lib/types'
import { cn } from '~/lib/utils'
import Link from 'next/link'
import { Card } from './ui/card'
import { format } from 'date-fns'

interface DocumentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Document
}

const DocumentCard = React.forwardRef<HTMLDivElement, DocumentCardProps>(
  ({ data, className, ...props }, ref) => {
    return (
      <Card
        className={cn(
          'h-24 min-h-[48px] min-w-[300px] border bg-background',
          className
        )}
        {...props}
        ref={ref}
      >
        <div className='flex h-full flex-row gap-2'>
          <div className='flex flex-col py-2'>
            <div className='flex h-full w-full flex-row items-center justify-center'>
              <div className='flex w-1/6 justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  fill='none'
                  viewBox='0 0 32 32'
                >
                  <path
                    fill='#518EF8'
                    d='M27.588 8.765v21.174a2.062 2.062 0 01-2.061 2.06H6.473a2.061 2.061 0 01-2.061-2.06V2.06C4.412.923 5.334 0 6.473 0h12.35l8.765 8.765z'
                  ></path>
                  <path
                    fill='#fff'
                    d='M10.074 16.066h11.851v1.317H10.074v-1.317zm0 2.941h11.851v1.317H10.074v-1.317zm0 2.941h11.851v1.317H10.074v-1.317zm0 2.941h8.428v1.317h-8.428V24.89z'
                  ></path>
                  <path
                    fill='#3A5BBC'
                    d='M20.02 8.574l7.568 3.118V8.765l-4.291-1.267-3.278 1.076z'
                  ></path>
                  <path
                    fill='#ACD1FC'
                    d='M27.588 8.765h-6.703a2.061 2.061 0 01-2.062-2.062V0l8.765 8.765z'
                  ></path>
                </svg>
              </div>
              <Link href={'#'} className='w-4/5'>
                <h1 className='line-clamp-2 text-start text-sm font-medium'>
                  {data.title}
                </h1>
              </Link>
            </div>
            <time className='text-end text-[10px] font-semibold text-secondary-foreground'>
              {format(new Date(data.updated_at), 'dd/MM/yyyy')}
            </time>
          </div>
          <button className='flex h-full w-1/6 items-center justify-center hover:bg-secondary'>
            <DownloadCloud size={20} />
          </button>
        </div>
      </Card>
    )
  }
)

DocumentCard.displayName = 'DocumentCard'

export default DocumentCard
