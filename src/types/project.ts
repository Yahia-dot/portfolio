export interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  tags: string[]
  images: string[]
  liveUrl?: string
  githubUrl?: string
  year: string
  role: string
  highlights: string[]
  featured?: boolean
}

export type ProjectId = Project['id']
