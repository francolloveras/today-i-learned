export interface ArticleFrontmatter {
  title: string
  sortTitle: string
  date: string
  lastEdit: string | null
}

export interface Heading {
  depth: number
  slug: string
  text: string
}
