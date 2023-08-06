'use client'

import { AspectRatio } from '~/components/ui/aspect-ratio'
import { Button } from '~/components/ui/button'

function Footer() {
  const footerData = [
    {
      id: 0,
      title_section: 'Service',
      items: [
        {
          id: 0,
          title: 'Báo giá',
          href: '/quotation',
        },
        {
          id: 1,
          title: 'Yêu cầu sữa chữa - Bảo trì',
          href: '/request-update',
        },
        {
          id: 2,
          title: 'Video call - Liên hệ',
          href: '/support',
        },
      ],
    },
    {
      id: 1,
      title_section: 'Company',
      items: [
        {
          id: 0,
          title: 'Giới thiệu',
          href: '/about',
        },
        {
          id: 1,
          title: 'Sản phẩm',
          href: '/products',
        },
        {
          id: 2,
          title: 'Tài liệu',
          href: '/documentation',
        },
        {
          id: 3,
          title: 'Tin tức & sự kiện',
          href: '/news-event',
        },
        {
          id: 4,
          title: 'Tuyển dụng',
          href: '/career',
        },
      ],
    },
    {
      id: 2,
      title_section: 'Company',
      items: [
        {
          id: 0,
          title: 'Giới thiệu',
          href: '/about',
        },
        {
          id: 1,
          title: 'Sản phẩm',
          href: '/products',
        },
        {
          id: 2,
          title: 'Tài liệu',
          href: '/documentation',
        },
        {
          id: 3,
          title: 'Tin tức & sự kiện',
          href: '/news-event',
        },
        {
          id: 4,
          title: 'Tuyển dụng',
          href: '/career',
        },
      ],
    },
  ]

  return (
    <footer className='flex h-fit w-full flex-col'>
      <div className='flex h-fit w-full flex-row flex-wrap items-start justify-between gap-y-10 bg-foreground p-content'>
        <div className='flex w-full flex-col justify-around gap-5 lg:flex-row'>
          <div className='flex w-full flex-1 flex-row flex-wrap items-start'>
            {footerData.map((section, i) => {
              return (
                <div
                  className='flex flex-1 flex-col items-start justify-center gap-5'
                  key={section.id || i}
                >
                  <h2 className='font-bold uppercase text-base text-secondary'>
                    {section.title_section}
                  </h2>
                  <ul className='flex list-none flex-col items-start gap-y-2'>
                    {section.items.map((item, index) => {
                      return (
                        <Button
                          variant='link'
                          key={item.id || index}
                          className='mx-0 flex flex-row gap-x-5 px-0'
                        >
                          {item.title}
                        </Button>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
          <div className='relative w-full md:w-[450px]'>
            <AspectRatio ratio={16 / 9}>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3919.132768067414!2d106.6257611!3d10.8011419!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bfd9d232787%3A0x20c80e4ff7f5136e!2zMzUgTmd1eeG7hW4gUXXDvSBBbmgsIFTDom4gU8ahbiBOaMOsLCBUw6JuIFBow7osIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1686307378025!5m2!1svi!2s'
                className='h-full w-full'
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </AspectRatio>
          </div>
        </div>
      </div>
      <div className='flex h-10 items-center justify-center bg-blue-800 shadow-inner'>
        <p className='select-none text-sm text-white'>
          V5T Corporation Company ©2022. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
