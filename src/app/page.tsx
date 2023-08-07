'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Suspense, lazy } from 'react'
import {
  Wrapper,
  WrapperContent,
  WrapperHeader,
} from '~/components/layouts/wrapper'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '~/components/ui/tooltip'
import techData from '~/data/tech'
const HeroBanner = lazy(() => import('~/components/hero-banner'))

export default async function HomePage() {
  return (
    <Wrapper title='Home page' hasNavbar hasFooter>
      <WrapperHeader>
        <Suspense fallback={<h1>Loading</h1>}>
          <HeroBanner />
        </Suspense>
      </WrapperHeader>
      <WrapperContent>
        <div className='w-full text-center'>
          <h1 className='text-2xl font-bold underline underline-offset-8'>
            Tech stack
          </h1>
        </div>
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
      </WrapperContent>
    </Wrapper>
  )
}
