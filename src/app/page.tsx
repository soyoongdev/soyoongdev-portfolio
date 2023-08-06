'use client'

import { Suspense, lazy } from 'react'
import { CategoryCard, RowContent, RowTitle } from '~/components'
import ServiceCard from '~/components/ServiceCard'
import {
  Wrapper,
  WrapperContent,
  WrapperHeader,
} from '~/components/layouts/wrapper'
import {
  partnersFixed,
  categories,
  productList,
  services,
} from '~/example.data.js'
import { InPartner, InProduct } from '~/lib/interfaces'
import { Category, Service } from '~/lib/types'

const Banner = lazy(() => import('~/components/Banner'))
const ProductCard = lazy(() => import('~/components/ProductCard'))
const PartnerCard = lazy(() => import('~/components/PartnerCard'))

export default async function HomePage() {
  const fixedProducts = productList as InProduct[]
  const fixedPartners = partnersFixed as InPartner[]
  const fixedCategories = categories as Category[]
  const fixedServices = services as Service[]

  return (
    <Wrapper title='Home page' hasNavbar hasFooter>
      <WrapperHeader>
        <Suspense fallback={<h1>Loading</h1>}>
          {fixedProducts && <Banner data={fixedProducts[0]} className='' />}
        </Suspense>
      </WrapperHeader>
      <WrapperContent>
        <RowContent label='Danh mục sản phẩm' className=''>
          <div className='flex w-full list-none flex-row flex-wrap items-start justify-around gap-5'>
            {fixedCategories.map((item, index) => {
              return (
                <Suspense key={item.id | index}>
                  <CategoryCard data={item} />
                </Suspense>
              )
            })}
          </div>
        </RowContent>
        <RowContent className='min-h-[50vh] items-center justify-center gap-10 rounded-lg bg-base p-10'>
          <RowTitle>Dịch vụ</RowTitle>
          <div className='flex w-full flex-col flex-wrap justify-evenly gap-10 md:flex-row'>
            {fixedServices.map((item, index) => {
              return (
                <Suspense key={item.id | index}>
                  <ServiceCard data={item} />
                </Suspense>
              )
            })}
          </div>
        </RowContent>
        {fixedProducts && (
          <RowContent label='Các sản phẩm mới'>
            <div className='flex flex-row flex-wrap justify-around gap-y-10'>
              {fixedProducts.slice(0, 6).map((item, index) => {
                return (
                  <Suspense key={index}>
                    <ProductCard
                      href={`categories/products/${item.id}`}
                      data={item}
                    />
                  </Suspense>
                )
              })}
            </div>
          </RowContent>
        )}
        {fixedPartners && (
          <RowContent label='Đối tác'>
            <div className=''>
              <div className='flex flex-row flex-wrap justify-evenly gap-10'>
                {fixedPartners?.map((item, index) => {
                  return (
                    <Suspense key={index}>
                      <PartnerCard data={item} />
                    </Suspense>
                  )
                })}
              </div>
            </div>
          </RowContent>
        )}
      </WrapperContent>
    </Wrapper>
  )
}
