'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    document.title = '문의하기 | The Nines'
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      // TODO: 실제 폼 제출 로직 구현 (예: Web3Forms, 이메일 API 등)
      // 현재는 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // 성공 시
      setStatus('success')
      setFormData({ name: '', email: '', businessType: '', message: '' })

      // 3초 후 상태 초기화
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      setStatus('error')
      setErrorMessage('문의 제출 중 오류가 발생했습니다. 다시 시도해주세요.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-primary to-accent-purple bg-clip-text text-transparent">
              신흥 시장 진출,<br />
              함께 시작하세요
            </span>
          </h1>

          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            사업 현황을 간단히 남겨주시면,<br />
            맞춤형 솔루션을 제안해드립니다.
          </p>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            className="bg-background-secondary p-8 md:p-12 rounded-2xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* 이름 */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                이름 또는 회사명 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="홍길동 / 홍대 카페"
              />
            </div>

            {/* 이메일 */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="example@email.com"
              />
            </div>

            {/* 사업 유형 */}
            <div className="mb-6">
              <label htmlFor="businessType" className="block text-sm font-semibold mb-2">
                사업 유형 <span className="text-red-500">*</span>
              </label>
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg text-foreground focus:outline-none focus:border-primary/50 transition-colors"
              >
                <option value="">선택해주세요</option>
                <option value="카페/디저트">카페/디저트</option>
                <option value="레스토랑/맛집">레스토랑/맛집</option>
                <option value="체험/액티비티">체험/액티비티</option>
                <option value="숙박/호텔">숙박/호텔</option>
                <option value="쇼핑/리테일">쇼핑/리테일</option>
                <option value="뷰티/웰니스">뷰티/웰니스</option>
                <option value="기타">기타</option>
              </select>
            </div>

            {/* 메시지 */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                문의 내용 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="예: 인도네시아 시장 진출을 고려 중입니다. 맞춤형 전략이 궁금합니다."
              />
            </div>

            {/* 제출 버튼 */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  제출 중...
                </>
              ) : (
                <>
                  문의 보내기
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            {/* 성공 메시지 */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-accent-green/10 border border-accent-green/20 rounded-lg flex items-center gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-accent-green flex-shrink-0" />
                <p className="text-accent-green">
                  문의가 성공적으로 제출되었습니다! 영업일 기준 1-2일 내 답변드리겠습니다.
                </p>
              </motion.div>
            )}

            {/* 에러 메시지 */}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3"
              >
                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <p className="text-red-500">{errorMessage}</p>
              </motion.div>
            )}
          </motion.form>

          {/* 추가 정보 */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-foreground-secondary mb-4">
              또는 직접 연락하시겠어요?
            </p>
            <div className="space-y-2">
              <p className="text-lg">
                이메일: <a href="mailto:hello@thenines.kr" className="text-primary hover:underline">hello@thenines.kr</a>
              </p>
              <p className="text-sm text-foreground-secondary">
                영업 시간: 평일 10:00 - 18:00 (주말 및 공휴일 제외)
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              뉴스레터로 먼저<br />
              시장 인사이트를 받아보세요
            </h2>
            <p className="text-lg text-foreground-secondary mb-8">
              신흥 시장 트렌드와 실전 마케팅 전략을 매주 전달합니다.
            </p>
            <a
              href="https://half-nomad.notion.site/291091314f8f80598f46d7e6b5639666?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all"
            >
              뉴스레터 구독하기
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
