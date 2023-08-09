import { TechType } from './enums'

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
  overview: string
  technologyUsageId: number[]
  imagePreviews: string[]
  url: string
}
