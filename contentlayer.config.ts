import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.md`,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      description: '포스트 제목',
      required: true,
    },
    date: {
      type: 'date',
      description: '작성일',
      required: true,
    },
    description: {
      type: 'string',
      description: '요약 설명',
      required: true,
    },
    category: {
      type: 'enum',
      options: ['시장 분석', '플랫폼 전략', '성공 사례', 'The Nines 관점', '크리에이터 인터뷰'],
      required: true,
    },
    image: {
      type: 'string',
      description: '썸네일 이미지 경로',
      required: true,
    },
    keywords: {
      type: 'list',
      of: { type: 'string' },
      description: 'SEO 키워드',
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath.replace('blog/', '')}`,
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.replace('blog/', ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
})
