'use client'

import { ArrowUpRight, Github } from 'lucide-react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '~/components/ui/button'
import projectData from '~/data/projects'
import techData from '~/data/tech'
import { Tech } from '~/lib/interfaces'
import { cn } from '~/lib/utils'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '700'],
})

function Projects() {
  const technicalList = (technologies: number[]): Tech[] => {
    const result: Tech[] = []
    for (let i = 0; i < technologies.length; i++) {
      for (let j = 0; j < techData.length; j++) {
        if (technologies[i] === techData[j].id) {
          result.push(techData[j])
        }
      }
    }
    return result
  }

  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-20'>
      {projectData.map((item, index) => {
        return (
          <div
            key={item.id || index}
            className='flex h-full w-full flex-col gap-10 rounded-md bg-background p-5 shadow-md lg:flex-row'
          >
            {/* Image preview/live */}
            <div
              className={cn(
                'relative h-auto min-h-[200px] w-full min-w-[150px] flex-1 flex-shrink-0 bg-secondary',
                'sm:min-h-[250px] sm:min-w-[250px]',
                'md:min-h-[350px] md:min-w-[350px]'
              )}
            >
              <Image
                fill
                sizes='100%'
                className='h-auto w-auto object-contain'
                src={item.imagePreviews[0]}
                alt={item.title}
              />
            </div>
            {/* Side preview */}
            <div className='flex flex-1 flex-col items-start justify-between'>
              <div className='flex h-fit w-full flex-col items-start justify-start gap-5'>
                {/* Project name */}
                <h1
                  className={cn(
                    'text-2xl font-bold text-foreground',
                    poppins.className
                  )}
                >
                  {item.title}
                </h1>
                {/* Technical type */}
                <div className='flex flex-row items-center gap-2 rounded-md border bg-secondary p-2'>
                  <p
                    className={cn(
                      'text-base font-bold text-foreground',
                      poppins.className
                    )}
                  >
                    {item.techType}
                  </p>
                </div>
                {/* Overview */}
                <p
                  className={cn(
                    'line-clamp-5 text-muted-foreground',
                    poppins.className
                  )}
                >
                  {item.overview}
                </p>
              </div>
              <div className='flex flex-col gap-10'>
                {/* Technical list */}
                <ul className='flex flex-row flex-wrap gap-5'>
                  {technicalList(item.technologyUsageId).map(
                    (techItem, index) => {
                      return (
                        <li
                          key={techItem.id || index}
                          className='flex items-center justify-center gap-2 rounded-sm bg-background p-2 shadow-md'
                        >
                          <div className='relative h-6 w-6'>
                            <Image
                              src={techItem.imageURL}
                              alt={techItem.title}
                              sizes='100%'
                              fill
                              className='h-auto w-auto object-contain'
                            />
                          </div>
                          <p>{techItem.title}</p>
                        </li>
                      )
                    }
                  )}
                </ul>
                {/* Bottom buttons */}
                <div className='flex flex-row gap-5'>
                  <Link href={item.url} passHref target='_blank'>
                    <Button>
                      <div className='flex flex-row items-center justify-items-center gap-2'>
                        Live Demo
                        <span className='relative '>
                          <ArrowUpRight size={20} />
                        </span>
                      </div>
                    </Button>
                  </Link>
                  <Link href={item.url} passHref target='_blank'>
                    <Button variant='secondary' className='border'>
                      <div className='flex flex-row items-center justify-items-center gap-2'>
                        <span className='relative '>
                          <Github size={20} />
                        </span>
                        Github repo
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Projects
