import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Nines 인사이트: 데이터로 시장의 기회를 읽다',
  description: '신흥국 인바운드 시장에 대한 가장 깊이 있는 분석과 실행 가능한 전략을 공유합니다.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="pt-20 min-h-screen">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-primary to-accent-purple bg-clip-text text-transparent">
                The Nines 인사이트
              </span>
            </h1>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              데이터로 시장의 기회를 읽고, 실행 가능한 전략으로 전환합니다.
            </p>
          </div>

          {/* Blog Grid */}
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-foreground-secondary text-lg">
                아직 발행된 포스트가 없습니다.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="bg-background-secondary rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all h-full flex flex-col">
                    {/* Thumbnail */}
                    <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent-purple/20">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-6xl opacity-20">📊</div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="text-sm text-primary mb-2 font-semibold">
                        {post.category}
                      </div>
                      <h2 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-foreground-secondary text-sm line-clamp-3 mb-4 flex-1">
                        {post.description}
                      </p>
                      <time className="text-sm text-foreground-secondary">
                        {new Date(post.date).toLocaleDateString('ko-KR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
