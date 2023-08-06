'use client'

import * as React from 'react'
import Image from 'next/image'
import { ArrowButton } from '~/components/ui/button'
import { InProduct } from '~/lib/interfaces'
import { cn } from '~/lib/utils'
import Link from 'next/link'

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  data: InProduct | null
}

function Banner({ data, className }: BannerProps) {
  return (
    <div
      className={cn('mt-2 h-[80vh] rounded-lg bg-base md:h-[60vh]', className)}
    >
      <div className='flex h-full w-full flex-col-reverse items-center justify-center p-content md:flex-row'>
        <div className='flex h-1/2 w-full flex-col justify-between md:h-full md:w-1/2'>
          <div className='flex flex-col gap-5'>
            <h1 className='line-clamp-3 text-3xl font-bold md:text-4xl'>
              {data?.name}
            </h1>
            <p className='line-clamp-3 text-lg md:line-clamp-5'>
              {data?.overview}
            </p>
          </div>
          <div className='flex justify-center'>
            <Link href={`products/${data?.id}`}>
              <ArrowButton className='w-full md:w-56'>Xem chi tiết</ArrowButton>
            </Link>
          </div>
        </div>
        <div className='relative flex h-1/2 w-full items-center md:h-full md:w-1/2'>
          {data ? (
            <Image
              src={data?.image_url}
              fill
              sizes='100%'
              alt='product-image'
              className='h-auto w-auto object-contain'
            />
          ) : (
            <h1>No data loaded</h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default Banner
