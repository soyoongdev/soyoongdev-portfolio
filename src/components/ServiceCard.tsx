'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Card, CardContent, CardFooter, CardTitle } from '~/components/ui/card'
import { Service } from '~/lib/types'

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Service
}

function ServiceCard({ data }: ServiceCardProps) {
  return (
    <Link href={`${data.slug}`}>
      <Card className='flex h-48 w-full select-none flex-col items-center justify-center gap-y-5 py-5 md:w-96'>
        <CardContent className='flex flex-col items-center p-6 pb-0'>
          <div className='relative h-16 w-16'>
            {data.thumb_image ? (
              <Image
                fill
                sizes='100%'
                className='object-contain'
                src={data.thumb_image}
                alt=''
              />
            ) : (
              <Skeleton width={80} height={80} />
            )}
          </div>
        </CardContent>
        <CardFooter>
          <CardTitle className='line-clamp-2 text-center text-xl font-bold'>
            {data.name || <Skeleton width={150} count={2} />}
          </CardTitle>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default ServiceCard
