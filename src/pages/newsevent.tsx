'use client'

import * as React from 'react'
import {
  Wrapper,
  WrapperContent,
  WrapperHeader,
  WrapperTitle,
} from '~/components/layouts/wrapper'
import { news_event_data } from '~/example.data'

function NewsEvent() {
  return (
    <Wrapper hasFooter hasNavbar>
      <WrapperHeader>
        <WrapperTitle>Tin tức và Sự kiện</WrapperTitle>
      </WrapperHeader>
      <WrapperContent>
        <div className='w-full flex-col items-start justify-start gap-5'>
          <h1 className='text-start text-xl font-bold'>
            {news_event_data.title}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: news_event_data.content }} />
        </div>
      </WrapperContent>
    </Wrapper>
  )
}

export default NewsEvent
