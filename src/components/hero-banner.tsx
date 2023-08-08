/* eslint-disable react/no-unescaped-entities */
'use client'

import * as React from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { cn } from '~/lib/utils'
import Link from 'next/link'
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react'

const poppins = Poppins({
  weight: '700',
  subsets: ['latin'],
})

function HeroBanner() {
  return (
    <div className={cn('h-full md:my-6')}>
      <div className='flex h-full w-full flex-col-reverse items-center justify-center gap-10 md:flex-row md:items-start md:px-content'>
        <div className='flex h-fit w-full flex-col justify-center md:h-full md:w-[500px]'>
          <div className='flex flex-col gap-5'>
            <h1
              className={cn(
                'line-clamp-3 text-center text-[2.5rem] font-bold leading-tight sm:text-[3rem] md:text-left md:text-[4rem] lg:text-7xl',
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
          <div className='flex w-full flex-row items-center justify-center gap-5 py-10 md:w-fit'>
            <Link href={'#'}>
              <Linkedin className='social-icons' />
            </Link>
            <Link href={'#'}>
              <Instagram className='social-icons' />
            </Link>
            <Link href={'#'}>
              <Facebook className='social-icons' />
            </Link>
            <Link href={'#'}>
              <Github className='social-icons' />
            </Link>
          </div>
        </div>
        <div className='flex h-[350px] w-[350px] items-center justify-center'>
          <div className='relative h-5/6 w-5/6 md:h-full md:w-full'>
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
