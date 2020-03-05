import { FluidObject } from "gatsby-image";

export interface ProjectData {
  title: string
  description: string
  category?: string
  links?: {url: string; label: string}[]
  featuredImage: FluidObject
  featuredLink: string
  contribution?: string[]
  time?: string[]
  about: string
  tools: string[]
  outcome?: string
  sideProject: boolean
}
