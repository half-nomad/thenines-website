'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        <motion.div
          className="max-w-5xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-primary to-accent-purple bg-clip-text text-transparent">
              방문객은 사상 최고인데,<br />
              왜 우리 가게 수익은 줄었을까요?
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground-secondary mb-4 max-w-3xl mx-auto">
            2025년 1분기 387만 명. 숫자의 함정에 빠지면 진짜 기회를 놓칩니다.
          </p>

          <p className="text-lg md:text-xl text-foreground-secondary mb-12 max-w-3xl mx-auto">
            과거의 방식으로는 새로운 '큰 손'을 잡을 수 없습니다.
          </p>

          {/* Data visualization */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-background-secondary p-8 rounded-2xl border border-white/10 hover:border-accent-green/50 transition-all">
              <p className="text-4xl md:text-5xl font-bold text-accent-green mb-2">387만 명</p>
              <p className="text-foreground-secondary">방한객 수 (역대 최고)</p>
            </div>
            <div className="bg-background-secondary p-8 rounded-2xl border border-white/10 hover:border-red-500/50 transition-all">
              <p className="text-4xl md:text-5xl font-bold text-red-500 mb-2">-24.3%</p>
              <p className="text-foreground-secondary">1인당 지출액 (급감)</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:gap-3"
            >
              The Nines 솔루션 확인하기
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-32 px-4 bg-background-secondary relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-primary font-semibold mb-4 text-lg">P-CODE</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                우리의 진짜 문제는<br />
                <span className="bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                  '낡은 지도'로 '새로운 대륙'을<br />
                  탐험하고 있다는 것
                </span>입니다.
              </h2>
              <p className="text-lg text-foreground-secondary leading-relaxed">
                폭발적으로 성장하는 '신흥 6개국'이라는 거대한 기회를,
                과거의 편견과 방식으로 인해 눈앞에서 놓치고 있다는 사실을
                데이터가 증명합니다.
              </p>
            </motion.div>

            <motion.div
              className="bg-background p-8 rounded-2xl border border-white/10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square flex items-center justify-center text-foreground-secondary">
                {/* Placeholder for visual - can be replaced with actual image */}
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-sm">시장 구조 변화 시각화</p>
                  <p className="text-xs mt-2 opacity-50">
                    낡은 지도 vs 새로운 대륙
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-primary font-semibold mb-4 text-lg">S-CODE</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
              해답은 광고가 아닌,<br />
              <span className="bg-gradient-to-r from-white via-primary to-accent-purple bg-clip-text text-transparent">
                잠재고객의 '믿을 수 있는 현지 친구'
              </span>에 있습니다.
            </h2>
            <p className="text-lg md:text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
              언어, 문화, 신뢰의 장벽을 넘는 유일한 방법은
              '그들의 나라 사람이, 그들의 언어로, 한국에서의 진짜 경험'을 보여주는 것입니다.
            </p>
          </motion.div>

          {/* Visual representation */}
          <motion.div
            className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-background-secondary p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all">
              <div className="text-4xl mb-4">🌏</div>
              <h3 className="font-semibold mb-2">언어 장벽 해소</h3>
              <p className="text-sm text-foreground-secondary">현지인의 언어로 전달</p>
            </div>
            <div className="bg-background-secondary p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-semibold mb-2">문화적 신뢰 구축</h3>
              <p className="text-sm text-foreground-secondary">진정성 있는 경험 공유</p>
            </div>
            <div className="bg-background-secondary p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-semibold mb-2">목적 방문 유도</h3>
              <p className="text-sm text-foreground-secondary">팬으로 전환</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 bg-background-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              데이터로 증명되는 시장의 변화,<br />
              더 자세히 보시겠습니까?
            </h2>
            <p className="text-lg text-foreground-secondary mb-8 max-w-2xl mx-auto">
              신흥 6개국 시장 분석과 The Nines의 컬처 브릿지 전략을 확인해보세요.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:gap-3"
            >
              The Nines 솔루션 확인하기
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
