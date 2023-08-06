'use client'

import React, { useEffect, useRef, useState } from 'react'
import {
  Wrapper,
  WrapperContent,
  WrapperHeader,
  WrapperTitle,
} from '~/components/layouts/wrapper'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarItem,
  SidebarTitle,
} from '~/components/ui/sidebar'
import { Checkbox } from '~/components/ui/checkbox'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Pagination } from '~/components/ui/pagination'
import { RadioGroup } from '~/components/ui/radio-group'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table'
import { checkList, docsData, partnersFixed } from '~/example.data'
import { InTableDocument } from '~/lib/interfaces'
import { Partner } from '~/lib/types'

function Documentation() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [searchVal, setSearchVal] = useState('')
  const tableData = docsData as InTableDocument
  const [partners, setPartners] = useState<[Partner]>()
  const [partnersGroup, setPartnersGroup] = useState<Partner[]>([])
  const [partnerId, setPartnerId] = useState<string>('0')
  const [currentPage, setCurrentPage] = useState<number>(1)

  const partnerList = checkList as [Partner]

  useEffect(() => {
    if (partnersFixed) {
      setPartners(partnersFixed as [Partner])
    }
  }, [])

  useEffect(() => {
    if (partnersGroup) {
      // eslint-disable-next-line no-console
      console.log(partnersGroup)
    }
    if (partnerId) {
      // eslint-disable-next-line no-console
      console.log(partnerId)
    }
  }, [partnersGroup, partnerId])

  const handlePartnerSelector = (id: string) => {
    setPartnerId(id)
  }

  const handlePaginationSelector = (value: number) => {
    setCurrentPage(value)
  }

  return (
    <Wrapper hasFooter hasNavbar>
      <WrapperHeader>
        <WrapperTitle>Kiến thức tài liệu</WrapperTitle>
      </WrapperHeader>
      <WrapperContent>
        <div className='flex h-full w-full flex-1 flex-col gap-5 md:flex-row'>
          <Sidebar className='flex h-fit flex-col bg-secondary'>
            <SidebarHeader>
              <SidebarTitle>{tableData.doc_title}</SidebarTitle>
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
          <div className='flex h-full w-full flex-col gap-5 bg-secondary p-5'>
            <Input
              ref={inputRef}
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              type='text'
              placeholder='Nhập từ khoá bạn muốn tìm..'
              className='placeholder:text-neutral-400'
            />
            <div className='flex w-full flex-row justify-between'>
              <ul className='flex flex-row gap-10'>
                {partnerList.map((item, index) => {
                  return (
                    <li key={item.id || index} className=''>
                      <div className='flex items-center space-x-2'>
                        <Checkbox
                          id={`${item.name}`}
                          checked={partnersGroup?.includes(item)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? setPartnersGroup([...partnersGroup, item])
                              : setPartnersGroup(
                                  partnersGroup.filter((i) => i.id !== item.id)
                                )
                          }}
                        />
                        <Label
                          htmlFor={`${item.name}`}
                          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        >
                          {item.name}
                        </Label>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className=''>
              {tableData.rows && tableData.sections ? (
                <Table>
                  <TableCaption>This is table caption</TableCaption>
                  <TableHeader className='bg-blue-main'>
                    <TableRow>
                      {tableData.sections.map((section, index) => {
                        return (
                          <TableHead
                            key={section.id || index}
                            className='text-white'
                          >
                            {section.name}
                          </TableHead>
                        )
                      })}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tableData.rows.map((row, index) => (
                      <TableRow key={row.id || index}>
                        <TableCell className='font-medium'>
                          {row.doc_type_name}
                        </TableCell>
                        <TableCell>{row.language}</TableCell>
                        <TableCell>{row.doc_name}</TableCell>
                        <TableCell className='uppercase'>
                          {row.doc_size + row.doc_size_type}
                        </TableCell>
                        <TableCell>
                          {row.isAvailable ? 'Download' : ''}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : null}
            </div>
            <Pagination
              defaultValue={1}
              onValueChange={handlePaginationSelector}
              value={currentPage}
              count={20}
              className='flex w-full justify-center'
            />
          </div>
        </div>
      </WrapperContent>
    </Wrapper>
  )
}

export default Documentation
