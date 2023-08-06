import { RowTable, SectionTable } from './types'

export interface InAdvantage {
  id: number
  desc: string
  thumbnail: string
}

export interface InSpec {
  id: number
  title: string
  desc: string
}

export interface InDesSpec {
  id: number
  model: string
  desc: string
}

export interface InProduct {
  id: number
  name: string
  image_url: string
  images?: string[]
  spec: {
    title: string
    items: [InSpec]
  }
  desc_spec: {
    title: string
    items: [InDesSpec]
  }
  others: {
    advantage: {
      title: string
      items: [InAdvantage]
    }
    defect: {
      title: string
      items: [InAdvantage]
    }
  }
  overview: string
}

export interface InPartner {
  id: number
  name: string
  thumbnail: string
}

export interface InBreadcrumb {
  title: string
  url: string
  isCurrentPath?: boolean
}

export interface InDocType {
  id: number
  title: string
}

export interface InTableDocument {
  id: number
  doc_title: string
  doc_description: string
  doc_genre: number
  sections: [SectionTable]
  rows: [RowTable]
}
