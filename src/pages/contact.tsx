'use client'

import * as React from 'react'
import {
  Wrapper,
  WrapperHeader,
  WrapperTitle,
} from '~/components/layouts/wrapper'

function ContactPage() {
  return (
    <Wrapper hasFooter hasNavbar>
      <WrapperHeader>
        <WrapperTitle>Video call - Liên hệ</WrapperTitle>
      </WrapperHeader>
    </Wrapper>
  )
}

export default ContactPage
