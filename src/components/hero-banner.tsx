/* eslint-disable react/no-unescaped-entities */
'use client'

import * as React from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { cn } from '~/lib/utils'
import Link from 'next/link'
import contactList from '~/data/contact'

const poppins = Poppins({
  weight: '700',
  subsets: ['latin'],
})

function HeroBanner() {
  return (
    <div className={cn('h-full w-full md:my-6')}>
      <div className='flex h-full w-full flex-col-reverse gap-10 md:flex-row'>
        <div className='flex h-full w-full flex-col items-center justify-between md:w-2/3 md:items-start'>
          <div className='flex flex-col gap-5'>
            <h1
              className={cn(
                'line-clamp-4 text-center text-[2.5rem] font-bold leading-tight',
                'sm:text-[3.5rem]',
                'md:text-left md:text-[4rem]',
                'lg:text-7xl',
                poppins.className
              )}
            >
              Front-End React Developer 👋🏼
            </h1>
            <p className='line-clamp-3 text-center text-lg md:line-clamp-5 md:text-left'>
              Hi, I'm Stefan Topalovic. A passionate Front-end React Developer
              based in Belgrade, Serbia. 📍
            </p>
          </div>
          <div className='flex h-full w-full flex-row items-center justify-center gap-5 py-10 md:w-fit'>
            {contactList.map((item, index) => {
              return (
                <Link
                  key={item.id || index}
                  href={item.url || ''}
                  passHref
                  target='_blank'
                >
                  <Image
                    className='h-8 w-8 object-contain'
                    width={100}
                    height={100}
                    src={item.imageURL}
                    alt={item.title}
                  />
                </Link>
              )
            })}
          </div>
        </div>
        <div
          className={cn(
            'flex h-72 min-h-[200px] w-72 min-w-[200px] items-center justify-center',
            'sm:h-[350px] sm:w-[350px]',
            'md:h-[450px] md:w-[450px] md:flex-shrink-0'
          )}
        >
          <div className='relative h-full w-full'>
            <Image
              src={'/soyoong.jpg'}
              fill
              priority
              sizes='100%'
              alt='product-image'
              className='h-auto w-auto rounded-full object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
