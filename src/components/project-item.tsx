import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { OpenType, Project, Tech } from '~/lib/interfaces'
import { cn } from '~/lib/utils'
import { Button } from './ui/button'
import { ArrowUpRight, Github } from 'lucide-react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '700'],
})

interface Props {
  item: Project
  index: number
  openType?: OpenType
  technicalList: (technologies: number[]) => Tech[]
}

const ProjectItem: React.FC<Props> = ({
  item,
  index,
  openType = 'live_demo',
  technicalList,
}) => {
  return (
    <>
      <div
        key={index}
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
                'w-full text-center text-2xl font-bold text-foreground lg:text-start',
                poppins.className
              )}
            >
              {item.title}
            </h1>
            {/* Technical type */}
            <div className='flex w-full flex-row items-center justify-center lg:justify-start'>
              <p
                className={cn(
                  'rounded-md border bg-secondary p-2 text-base font-bold text-foreground',
                  poppins.className
                )}
              >
                {item.techType}
              </p>
            </div>
            {/* Overview */}
            <div className='w-full py-5 pt-0'>
              <p
                className={cn(
                  'line-clamp-none text-center text-muted-foreground lg:text-start',
                  poppins.className
                )}
              >
                {item.overview}
              </p>
            </div>
          </div>
          <div className='flex w-full flex-col items-center justify-center gap-10 lg:items-start'>
            {/* Technical list */}
            <ul className='flex w-full flex-row flex-wrap items-center justify-center gap-5 lg:justify-start'>
              {technicalList(item.technologyUsageId).map((techItem, index) => {
                return (
                  <li
                    key={techItem.id || index}
                    className='flex items-center justify-center gap-2 rounded-md bg-background p-2 shadow-md'
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
              })}
            </ul>
            {/* Bottom buttons */}
            <div className='flex flex-row gap-5'>
              <Link href={item.url} passHref target='_blank'>
                <Button>
                  <div className='flex flex-row items-center justify-items-center gap-2'>
                    {item.openType === 'live_demo'
                      ? 'Live Demo'
                      : 'View on store'}
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
    </>
  )
}

export default ProjectItem
