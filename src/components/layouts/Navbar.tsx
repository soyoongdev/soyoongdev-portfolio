'use client'

import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { User } from '~/components'
import { Button } from '~/components/ui/button'
import SearchBar from '~/components/layouts/search/SearchBar'
import { cn } from '~/lib/utils'
import { navRoutes } from '~/lib/routes'

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {}

const Navbar = forwardRef<HTMLElement, NavbarProps>(({ className }, ref) => {
  const [menuToggle, setMenuToggle] = useState(true)
  const [isHidden, setIsHidden] = useState(false)
  const [offsetY, setOffsetY] = useState<number>(0)

  // Saving last scroll position
  const lastScrollTop = useRef(0)

  const handleScroll = () => {
    const scrollYOffset = window.scrollY
    setOffsetY(scrollYOffset)
    // Visible/Unvisitable state navbar
    setIsHidden(scrollYOffset > lastScrollTop.current)
    lastScrollTop.current = scrollYOffset
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      ref={ref}
      className={cn(
        'fixed left-0 right-0 top-0 z-10 bg-background transition-all duration-300',
        {
          'shadow-sm': offsetY > 1,
          '-translate-y-full': isHidden && menuToggle && offsetY > 50,
          'top-0': !isHidden,
        },
        className
      )}
    >
      <div className='flex flex-row flex-wrap items-center px-content md:flex-nowrap'>
        {/* Logo */}
        <div className='relative mr-4 hidden md:block'>
          <Link
            href='/'
            className='flex flex-row items-center text-xl font-bold text-primary'
          >
            <Image
              src='/v5t.png'
              alt='logo'
              width={55}
              height={55}
              className='h-auto w-auto object-contain'
              sizes='55px'
            />
            <span className='block transition-all duration-300 ease-in-out max-lg:hidden lg:block'>
              V5T
            </span>
          </Link>
        </div>
        {/* Menu button */}
        <div className='flex h-fit w-full items-center justify-between py-2 md:hidden'>
          <div className='md:hidden'>
            <Button
              variant='text'
              className='h-fit'
              onClick={() => setMenuToggle(!menuToggle)}
            >
              <Menu />
            </Button>
          </div>
          <div className='absolute left-1/2 flex -translate-x-1/2'>
            <Link
              href='/'
              className='flex flex-row items-center text-xl font-bold text-primary'
            >
              <Image
                src='/v5t.png'
                alt='logo'
                width={55}
                height={55}
                className='h-auto w-auto object-contain'
                sizes='55px'
              />
              <span className=''>V5T</span>
            </Link>
          </div>
          {/* User login */}
          <User className='flex md:hidden' />
        </div>
        {/* Header Item full */}
        <div
          className={cn(
            'min-h-[var(--navbar-height)] w-full flex-col-reverse items-center gap-5 py-2 md:flex md:flex-row',
            {
              hidden: menuToggle,
              flex: !menuToggle,
            }
          )}
        >
          <div className='w-full flex-1 flex-shrink-0 md:w-auto'>
            <ul className='flex w-full list-none flex-col items-start justify-center gap-1 md:w-fit md:flex-row'>
              {navRoutes.map((page, index) => {
                return (
                  <li
                    key={index}
                    className='inline-flex h-9 w-full items-center whitespace-nowrap md:w-auto'
                  >
                    <Link
                      className='flex-1 p-2 text-sm font-medium text-secondary-foreground hover:text-primary'
                      href={page.path}
                    >
                      {page.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='w-auto max-w-xs flex-1'>
            <SearchBar className='max-md:w-48' />
          </div>
          <User className='hidden md:flex' />
        </div>
      </div>
    </header>
  )
})

Navbar.displayName = 'Navbar'

export default Navbar
