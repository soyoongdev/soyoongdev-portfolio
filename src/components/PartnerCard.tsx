'use client'
import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'
import { InPartner } from '~/lib/interfaces'

interface Props {
  data: InPartner
}

function PartnerCard(props: Props) {
  return (
    <div className='relative h-56 w-56 cursor-pointer transition-all hover:scale-125'>
      {props.data.thumbnail ? (
        <Image
          src={props.data.thumbnail}
          className='object-contain'
          alt='logo'
          fill
          sizes='100%'
        />
      ) : (
        <Skeleton width='100%' height='100%' />
      )}
    </div>
  )
}

export default PartnerCard
