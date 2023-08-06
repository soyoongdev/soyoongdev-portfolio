export type Menu = {
  title: string
  path: string
}

export type Category = {
  id: number
  name: string
  slug: string
  thumb_image: string
}

export type Service = {
  id: number
  name: string
  slug: string
  thumb_image: string
}

export type Partner = {
  id: number
  name: string
  thumbnail: string
}

export type SectionTable = {
  id: number
  name: string
}

export type Document = {
  id: number
  title: string
  created_at: string
  updated_at: string
  available?: boolean
}

export type RowTable = {
  id: number
  doc_type_id: number
  doc_type_name: string
  language: string
  doc_name: string
  doc_size: number
  doc_size_type: string
  isAvailable: boolean
}

export type PostInputType = {
  id: number
  post_title: string
  post_description?: string | null
}

export type InputType = {
  id: number
  label: string
}

export type Post = {
  id: number
  post_title: string
  post_description: string
  thumbnail: string
  images: string | null
  created_date: string | null
  updated_date: string | null
}
