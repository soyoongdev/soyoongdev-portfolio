'use client'

import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import BreadcrumbNav from '~/components/BreadcrumbNav'
import {
  Wrapper,
  WrapperContent,
  WrapperHeader,
} from '~/components/layouts/wrapper'
import { AspectRatio } from '~/components/ui/aspect-ratio'
import { ArrowButton, Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { documents_data, productList } from '~/example.data'
import { InProduct } from '~/lib/interfaces'
import { Document } from '~/lib/types'
import DocumentCard from '~/components/DocumentCard'
import { ProductCard, RowContent } from '~/components'

export interface ProductPageProps extends React.HTMLAttributes<HTMLDivElement> {
  slug?: string
}

function ProductPage() {
  const breadcrumbs = [
    {
      title: 'Trang chủ',
      url: 'URL',
      isCurrentPath: true,
    },
    {
      title: 'Loại sản phẩm',
      url: 'URL',
      isCurrentPath: false,
    },
    {
      title: 'Danh mục',
      url: 'URL',
      isCurrentPath: false,
    },
    {
      title: 'Tên sản phẩm',
      url: 'URL',
      isCurrentPath: true,
    },
  ]

  const product = productList[0] as InProduct
  const documents = documents_data.items as Document[]
  const fixedProducts = productList as InProduct[]

  return (
    <Wrapper hasNavbar hasFooter className='gap-0'>
      <WrapperHeader className='bg-base'>
        <BreadcrumbNav data={breadcrumbs} />
      </WrapperHeader>
      <WrapperContent>
        <div className='flex w-full flex-col gap-5 md:flex-row'>
          <div className='flex h-[65vh] flex-1 flex-col items-center justify-between sm:h-[75vh] md:h-[85vh]'>
            <div className='flex h-full w-full flex-col items-center justify-center gap-2'>
              <div className='relative h-full w-full bg-base'>
                <AspectRatio ratio={4 / 3}>
                  <Image
                    src={product.image_url}
                    alt='product-image'
                    fill
                    className='h-auto w-auto object-contain'
                    sizes='100%'
                  />
                </AspectRatio>
              </div>
              <div className='h-full w-full'>
                {product.images && (
                  <ul className='flex h-full w-full list-none flex-row justify-between gap-2'>
                    {product.images.slice(0, 4).map((url, index) => {
                      return (
                        <li
                          key={index}
                          className='relative flex h-fit w-full items-center justify-center bg-base'
                        >
                          <AspectRatio ratio={4 / 3}>
                            <Image
                              src={url}
                              alt='product-image'
                              fill
                              className='h-auto w-auto object-contain'
                              sizes='100%'
                            />
                          </AspectRatio>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            </div>
            <Link href={'/'}>
              <ArrowButton>Yêu cầu báo giá</ArrowButton>
            </Link>
          </div>
          <div className='flex flex-1 flex-col justify-between gap-5'>
            <div className='flex flex-col gap-5'>
              <CardTitle className='text-start text-3xl font-bold uppercase'>
                {product.name}
              </CardTitle>
              <CardDescription className='line-clamp-6'>
                {product.overview}
              </CardDescription>
            </div>
            <div className='flex w-full flex-col gap-5'>
              <Card className='border hover:shadow-none'>
                <CardHeader>
                  <CardTitle>{product.spec.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className='flex w-full flex-col gap-2'>
                    {product.spec.items.map((item, index) => {
                      return (
                        <li
                          key={item.id | index}
                          className='flex w-full flex-row items-center bg-base p-2 text-secondary-foreground'
                        >
                          <span className='w-1/3'>
                            <h1 className='text-sm font-bold'>{item.title}</h1>
                          </span>
                          <span className='w-2/3 text-start'>
                            <h1 className='text-start text-sm'>{item.desc}</h1>
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </CardContent>
                <CardFooter>
                  <div className='flex w-full justify-center'>
                    <Button variant='link' className='text-blue-main'>
                      <Link href={'/'}>{product.desc_spec.title}</Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
        <RowContent className='flex-col md:flex-row' label='Nổi bậc sản phẩm'>
          <Card className='h-fit flex-1 border hover:shadow-none'>
            <CardHeader className=''>
              <CardTitle>{product.others.advantage.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='flex list-none flex-col gap-2'>
                {product.others.advantage.items.map((item, index) => {
                  return (
                    <li key={item.id | index} className='flex flex-row gap-2'>
                      <div className='relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary'>
                        <Image
                          src={item.thumbnail}
                          alt='icon'
                          width={26}
                          height={26}
                          sizes='26px'
                          className='h-fit w-fit object-contain p-2'
                        />
                      </div>
                      <CardDescription className='text-start'>
                        {item.desc}
                      </CardDescription>
                    </li>
                  )
                })}
              </ul>
            </CardContent>
          </Card>
          <Card className='h-fit flex-1 border hover:shadow-none'>
            <CardHeader className=''>
              <CardTitle>{product.others.defect.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='flex list-none flex-col gap-2'>
                {product.others.defect.items.map((item, index) => {
                  return (
                    <li key={item.id | index} className='flex flex-row gap-2'>
                      <div className='relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary'>
                        <Image
                          src={item.thumbnail}
                          alt='icon'
                          width={26}
                          height={26}
                          sizes='26px'
                          className='h-fit w-fit object-contain p-2'
                        />
                      </div>
                      <CardDescription className='text-start'>
                        {item.desc}
                      </CardDescription>
                    </li>
                  )
                })}
              </ul>
            </CardContent>
          </Card>
        </RowContent>
        <RowContent label='Tài liệu về sản phẩm'>
          <div className='flex list-none flex-row flex-wrap justify-evenly gap-y-5'>
            {documents.map((item, index) => {
              return <DocumentCard key={item.id | index} data={item} />
            })}
          </div>
        </RowContent>
        {fixedProducts && (
          <RowContent label='Các sản phẩm khác'>
            <div className='flex flex-row flex-wrap justify-around gap-y-10'>
              {fixedProducts.slice(0, 3).map((item, index) => {
                return (
                  <React.Suspense key={index}>
                    <ProductCard href={`${item.id}`} data={item} />
                  </React.Suspense>
                )
              })}
            </div>
          </RowContent>
        )}
      </WrapperContent>
    </Wrapper>
  )
}

export default ProductPage
