import { getAllPostSlugs, getPostBySlug } from '@/lib/blog'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="pt-20 min-h-screen">
      <article className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            전체 인사이트 보기
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="text-sm text-primary mb-4 font-semibold">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-foreground-secondary mb-4">
              {post.description}
            </p>
            <time className="text-sm text-foreground-secondary">
              {new Date(post.date).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </header>

          {/* Content */}
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-foreground-secondary prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary/80
              prose-strong:text-white prose-strong:font-semibold
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:text-foreground-secondary prose-li:my-2
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground-secondary
              prose-code:text-primary prose-code:bg-background-secondary prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-background-secondary prose-pre:border prose-pre:border-white/10 prose-pre:rounded-lg
              prose-table:border-collapse prose-table:w-full
              prose-th:border prose-th:border-white/10 prose-th:bg-background-secondary prose-th:p-3 prose-th:text-left
              prose-td:border prose-td:border-white/10 prose-td:p-3
              prose-hr:border-white/10 prose-hr:my-8"
          >
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                    rehypeHighlight,
                  ],
                },
              }}
            />
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-background-secondary border border-white/10 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              귀사의 비즈니스에 맞는 전략이 궁금하신가요?
            </h3>
            <p className="text-foreground-secondary mb-6">
              The Nines가 귀사의 업종과 위치에 최적화된 신흥국 마케팅 전략을 무료로 분석해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://half-nomad.notion.site/291091314f8f81408e81dd20b9c5f3cb?pvs=105"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                무료 진단 받기
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background border border-white/20 text-white rounded-lg font-semibold hover:bg-white/5 transition-colors"
              >
                솔루션 자세히 보기
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
