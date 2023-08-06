'use client'

import Image from 'next/image'
import * as React from 'react'
import Skeleton from 'react-loading-skeleton'
import { ArrowButton } from '~/components/ui/button'
import { InProduct } from '~/lib/interfaces'
import { AspectRatio } from './ui/aspect-ratio'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import Link from 'next/link'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '~/lib/utils'

export const cardVariants = cva('flex', {
  variants: {
    variant: {
      vertical:
        'flex-col md:flex-row md:h-[340px] lg:h-[620px] lg:flex-col w-full md:w-full lg:w-[430px]',
      horizontal:
        'lg:flex-row flex-col sm:flex-row md:flex-col w-full md:h-[620px] lg:w-full md:w-[430px] justify-center items-center lg:h-[340px]',
    },
  },
  defaultVariants: {
    variant: 'vertical',
  },
})

interface ProductCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  data: InProduct
  href: string | ''
}

const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  ({ data, href, variant, className, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        {...props}
        className={cn(cardVariants({ variant, className }))}
      >
        <CardHeader className='flex h-full w-full items-center justify-center'>
          {data.image_url ? (
            <div className='relative h-1/2 w-1/2'>
              <AspectRatio ratio={1}>
                <Image
                  src={data.image_url}
                  alt='product-image'
                  fill
                  sizes='100%'
                  className='h-auto w-auto object-contain'
                />
              </AspectRatio>
            </div>
          ) : (
            <Skeleton height='100%' width='100%' />
          )}
        </CardHeader>
        <CardContent
          className={cn('flex h-full flex-col justify-between gap-2 py-0')}
        >
          <CardTitle className='mt-6 line-clamp-3'>
            {data.name || <Skeleton count={2} height='100%' width='100%' />}
          </CardTitle>
          <div className=''>
            <ul className='flex list-none flex-col'>
              {data.spec.items.slice(0, 3).map((item, index) => {
                return (
                  <li key={index}>
                    {item.title && item.desc ? (
                      <div className='relative flex flex-row gap-x-2'>
                        <p className='font-bold'>{item.title}</p>
                        <p className=''>{item.desc}</p>
                      </div>
                    ) : (
                      <Skeleton height='100%' width='100%' />
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
          <CardFooter className='mb-6 flex items-center justify-between p-0'>
            <Link href={href}>
              <ArrowButton>Xem chi tiết</ArrowButton>
            </Link>
            <ArrowButton>Liên hệ</ArrowButton>
          </CardFooter>
        </CardContent>
      </Card>
    )
  }
)

ProductCard.displayName = 'ProductCard'

export default ProductCard
