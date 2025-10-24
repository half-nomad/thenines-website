import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface Post {
  slug: string
  title: string
  date: string
  description: string
  category: string
  image: string
  keywords?: string[]
  content: string
}

export function getAllPosts(): Post[] {
  const items = fs.readdirSync(postsDirectory, { withFileTypes: true })
  const allPosts: Post[] = []

  for (const item of items) {
    let slug: string
    let fullPath: string

    // 폴더인 경우: post-name/index.md
    if (item.isDirectory()) {
      slug = item.name
      fullPath = path.join(postsDirectory, item.name, 'index.md')

      // index.md 파일이 없으면 건너뜀
      if (!fs.existsSync(fullPath)) {
        continue
      }
    }
    // 파일인 경우: post-name.md (기존 방식 호환)
    else if (item.name.endsWith('.md')) {
      slug = item.name.replace(/\.md$/, '')
      fullPath = path.join(postsDirectory, item.name)
    }
    // 그 외 파일은 건너뜀
    else {
      continue
    }

    try {
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      allPosts.push({
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        category: data.category,
        image: data.image,
        keywords: data.keywords,
        content,
      } as Post)
    } catch (error) {
      console.error(`Error reading post: ${fullPath}`, error)
    }
  }

  return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostBySlug(slug: string): Post | null {
  try {
    // 1. 폴더 방식 시도: post-name/index.md
    const folderPath = path.join(postsDirectory, slug, 'index.md')
    if (fs.existsSync(folderPath)) {
      const fileContents = fs.readFileSync(folderPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        category: data.category,
        image: data.image,
        keywords: data.keywords,
        content,
      } as Post
    }

    // 2. 파일 방식 시도: post-name.md (기존 방식 호환)
    const filePath = path.join(postsDirectory, `${slug}.md`)
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        category: data.category,
        image: data.image,
        keywords: data.keywords,
        content,
      } as Post
    }

    return null
  } catch {
    return null
  }
}

export function getAllPostSlugs(): string[] {
  const items = fs.readdirSync(postsDirectory, { withFileTypes: true })
  const slugs: string[] = []

  for (const item of items) {
    // 폴더인 경우: index.md 파일이 있는지 확인
    if (item.isDirectory()) {
      const indexPath = path.join(postsDirectory, item.name, 'index.md')
      if (fs.existsSync(indexPath)) {
        slugs.push(item.name)
      }
    }
    // 파일인 경우: .md 확장자 확인 (기존 방식 호환)
    else if (item.name.endsWith('.md')) {
      slugs.push(item.name.replace(/\.md$/, ''))
    }
  }

  return slugs
}
