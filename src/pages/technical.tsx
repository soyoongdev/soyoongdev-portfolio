'use client'

import * as React from 'react'
import Layout from '~/components/layouts/layout'
import {
  Wrapper,
  WrapperHeader,
  WrapperTitle,
} from '~/components/layouts/wrapper'

function Technical() {
  return (
    <Layout title='Technical'>
      <Wrapper>
        <WrapperHeader>
          <WrapperTitle>Tuyển dụng</WrapperTitle>
        </WrapperHeader>
      </Wrapper>
    </Layout>
  )
}

export default Technical
