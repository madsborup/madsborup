export interface ProjectData {
  title: string
  description: string
  featuredImage?: string
  category: string
  links?: {url: string; label: string}[]
  contribution?: string[]
  time?: string
  about: string
  tools: string[]
  outcome?: string
  sideProject: boolean
}
