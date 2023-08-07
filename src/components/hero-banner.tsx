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
    <div className={cn('bg-base mt-2 h-full rounded-lg')}>
      <div className='flex h-full w-full flex-col-reverse items-center justify-center gap-10 p-content md:flex-row'>
        <div className='flex h-fit w-[500px] flex-col justify-between md:h-full'>
          <div className='flex flex-col gap-5'>
            <h1
              className={cn(
                'line-clamp-3 text-center text-[55px] font-bold leading-tight md:text-left',
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
        <div className='relative flex h-[350px] w-[350px] items-center'>
          <Image
            src={'/soyoong.jpg'}
            fill
            sizes='100%'
            alt='product-image'
            className='h-auto w-auto rounded-full object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
