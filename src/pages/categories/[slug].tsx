'use client'

import React, { Suspense, forwardRef, useEffect, useState } from 'react'
import { ProductCard } from '~/components'
import BreadcrumbNav, { BreadcrumbNavigation } from '~/components/BreadcrumbNav'
import {
  Wrapper,
  WrapperContent,
  WrapperHeader,
} from '~/components/layouts/wrapper'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarItem,
  SidebarTitle,
} from '~/components/ui/sidebar'
import { RadioGroup } from '~/components/ui/radio-group'
import { partnersFixed, productList } from '~/example.data'
import { InProduct } from '~/lib/interfaces'
import { Partner } from '~/lib/types'

interface CategoryPageProps extends React.HTMLAttributes<HTMLDivElement> {}

const CategoryPage = forwardRef<HTMLDivElement, CategoryPageProps>(() => {
  const fixedProducts = productList as [InProduct]
  const breadcrumbData: BreadcrumbNavigation = [
    { title: 'Trang chủ', url: '/' },
    { title: 'Danh mục', url: '/danh-muc/' },
    {
      title: 'Tiêu đề trang hiện tại',
      url: 'tieu-de-hien-tai',
      isCurrentPath: true,
    },
  ]
  const [partners, setPartners] = useState<[Partner]>()
  const [partnerId, setPartnerId] = useState<string>('0')

  useEffect(() => {
    if (partnersFixed) {
      setPartners(partnersFixed as [Partner])
    }
  }, [])

  const handlePartnerSelector = (id: string) => {
    setPartnerId(id)
  }

  return (
    <Wrapper title='Category' hasFooter hasNavbar>
      <WrapperHeader className='bg-secondary'>
        <BreadcrumbNav data={breadcrumbData} />
      </WrapperHeader>
      <WrapperContent>
        <div className='flex flex-col gap-5 md:flex-row'>
          <Sidebar className='flex h-fit flex-col bg-secondary'>
            <SidebarHeader>
              <SidebarTitle>Danh mục sản phẩm</SidebarTitle>
            </SidebarHeader>
            <SidebarContent>
              <RadioGroup
                onValueChange={handlePartnerSelector}
                defaultValue={partnerId}
              >
                {partners &&
                  partners.map((item, index) => {
                    return (
                      <SidebarItem
                        key={item.id || index}
                        data={item}
                        className=''
                      />
                    )
                  })}
              </RadioGroup>
            </SidebarContent>
          </Sidebar>
          <div className='flex w-full flex-col items-center rounded-md bg-background py-10'>
            {fixedProducts && (
              <ul className='flex flex-col flex-wrap justify-evenly gap-y-content'>
                {fixedProducts?.slice(0, 6).map((item, index) => {
                  return (
                    <li key={index}>
                      <Suspense>
                        <ProductCard
                          variant='horizontal'
                          data={item}
                          href={`products/${item.id}`}
                        />
                      </Suspense>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </div>
      </WrapperContent>
    </Wrapper>
  )
})

CategoryPage.displayName = 'CategoryPage'

export default CategoryPage
