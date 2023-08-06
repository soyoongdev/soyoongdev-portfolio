'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Card, CardContent, CardTitle } from '~/components/ui/card'
import { Category } from '~/lib/types'

interface CategoryCardProps {
  data: Category
}

function CategoryCard({ data }: CategoryCardProps) {
  return (
    <Link href={`categories/${data.slug}`}>
      <Card className='h-36 w-48 select-none'>
        <CardContent className='flex h-full w-full flex-col items-center justify-around p-4'>
          <div className='relative h-14 w-14 shrink-0'>
            {data.thumb_image ? (
              <Image
                alt='image card'
                fill
                sizes='100%'
                className='h-auto w-auto object-contain'
                src={data.thumb_image}
              />
            ) : (
              <Skeleton width={56} height={56} />
            )}
          </div>
          <CardTitle className='line-clamp-2 text-center text-sm font-bold uppercase'>
            {data.name || <Skeleton width={144} count={2} />}
          </CardTitle>
        </CardContent>
      </Card>
    </Link>
  )
}

export default CategoryCard
