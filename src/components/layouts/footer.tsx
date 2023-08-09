import Image from 'next/image'
import Link from 'next/link'
import { contactListOutline } from '~/data/contact'

function Footer() {
  return (
    <footer className='flex h-fit w-full flex-col'>
      <div className='flex h-12 w-full items-center justify-between bg-foreground px-10 shadow-inner sm:px-20 lg:px-40'>
        <p className='select-none text-sm text-secondary'>
          SoyoongDev © 2023. All rights are reserved
        </p>
        <div className='flex h-full w-fit flex-row items-center justify-center gap-5 md:w-fit'>
          {contactListOutline.map((item, index) => {
            return (
              <Link
                key={item.id || index}
                href={item.url || ''}
                passHref
                target='_blank'
              >
                <Image
                  className='h-6 w-6 object-contain'
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
    </footer>
  )
}

export default Footer
