'use client'

import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '~/components/ui/tooltip'
import techData from '~/data/tech'

function TechnicalActivities() {
  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <div className='w-full text-center'>
        <h1 className='text-2xl font-bold underline underline-offset-8'>
          Tech stack
        </h1>
      </div>
      <div className='w-full'>
        <ul className='flex w-full flex-row flex-wrap justify-center gap-5'>
          {techData.map((item, index) => {
            return (
              <li key={item.id || index}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className='flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-background shadow-md'>
                      <Link href={item.url || ''}>
                        <Image
                          className='h-12 w-12 object-contain'
                          width={100}
                          height={100}
                          src={item.imageURL}
                          alt={item.title}
                        />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default TechnicalActivities
