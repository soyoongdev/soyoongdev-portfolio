import { TechType } from './enums'

export type OpenType = 'live_demo' | 'view_on_store'

/* eslint-disable no-unused-vars */
export interface Tech {
  id: number
  title: string
  imageURL: string
  url?: string | null
}

export interface Project {
  id: number
  techType: TechType | null
  title: string
  openType?: OpenType
  overview: string
  technologyUsageId: number[]
  imagePreviews: string[]
  url: string
}
