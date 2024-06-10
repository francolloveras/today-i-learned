import JSConfetti from 'js-confetti'
import type { ArticleFrontmatter } from '@/lib/types'
import type { MDXInstance } from 'astro'

export const createConfetti = async () => {
  const jsConfetti = new JSConfetti()

  await jsConfetti.addConfetti({
    confettiColors: ['#a855f7', '#ec4899', '#f97316']
  })

  jsConfetti.destroyCanvas()
}

export const groupArticlesByMonth = (articles: MDXInstance<ArticleFrontmatter>[]) => {
  const groupedArticles: { [key: string]: MDXInstance<ArticleFrontmatter>[] } = {}

  articles.forEach((article) => {
    const date = new Date(article.frontmatter.date)
    const key = date.toLocaleDateString('en-EU', {
      month: 'long',
      year: 'numeric'
    })

    if (!groupedArticles[key]) {
      groupedArticles[key] = []
    }

    groupedArticles[key].push(article)
  })

  Object.keys(groupedArticles).forEach((key) => {
    groupedArticles[key].sort((a, b) => {
      const dateA = new Date(a.frontmatter.date).getTime()
      const dateB = new Date(b.frontmatter.date).getTime()

      return dateB - dateA
    })
  })

  const sortedKeys = Object.keys(groupedArticles).sort((a, b) => {
    const dateA = new Date(a).getTime()
    const dateB = new Date(b).getTime()

    return dateB - dateA
  })

  const sortedGroupedArticles: { [key: string]: MDXInstance<ArticleFrontmatter>[] } = {}
  sortedKeys.forEach((key) => {
    sortedGroupedArticles[key] = groupedArticles[key]
  })

  return sortedGroupedArticles
}

export const formatDate = (date: string | Date, options?: Intl.DateTimeFormatOptions) => {
  const formattedDate = typeof date === 'string' ? new Date(date) : date
  const parsedOptions: Intl.DateTimeFormatOptions = options ?? {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
    timeZone: 'UTC'
  }

  return formattedDate.toLocaleDateString('en-US', parsedOptions)
}

export const formatPath = (path: string) => {
  return path
    .split('-')
    .map((subPath) => subPath.charAt(0).toUpperCase() + subPath.slice(1))
    .join(' ')
}
