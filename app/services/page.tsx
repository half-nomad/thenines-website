'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, TrendingUp, TrendingDown, Users, Smartphone, ShoppingBag } from 'lucide-react'

export const metadata = {
  title: '데이터로 증명하는 신흥국 인바운드 마케팅 솔루션',
  description: '신흥 6개국 시장 분석 데이터와 컬처 브릿지 전략으로 외국인 관광객을 목적 방문 팬으로 전환합니다.',
}

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent" />

        <motion.div
          className="max-w-5xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            사장님, 혹시{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              '없는 손님'
            </span>을 향해<br />
            광고하고 계신가요?
          </h1>

          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            시장은 이미 완전히 바뀌었습니다.<br />
            과거의 성공 방식이 더 이상 통하지 않는 이유를 데이터가 증명합니다.
          </p>
        </motion.div>
      </section>

      {/* Paradox Section */}
      <section className="py-20 md:py-32 px-4 bg-background-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              데이터가 말하는{' '}
              <span className="bg-gradient-to-r from-accent-green to-red-500 bg-clip-text text-transparent">
                '양적-질적 가치의 역설'
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-background p-8 rounded-2xl border border-accent-green/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <TrendingUp className="w-12 h-12 text-accent-green" />
                <div>
                  <p className="text-foreground-secondary text-sm mb-1">방한객 수</p>
                  <p className="text-4xl font-bold text-accent-green">387만 명</p>
                </div>
              </div>
              <p className="text-foreground-secondary">
                2025년 1분기 기준 <span className="text-accent-green font-semibold">역대 최고</span> 기록
              </p>
            </motion.div>

            <motion.div
              className="bg-background p-8 rounded-2xl border border-red-500/20"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <TrendingDown className="w-12 h-12 text-red-500" />
                <div>
                  <p className="text-foreground-secondary text-sm mb-1">1인당 지출액</p>
                  <p className="text-4xl font-bold text-red-500">-24.3%</p>
                </div>
              </div>
              <p className="text-foreground-secondary">
                $976으로 <span className="text-red-500 font-semibold">급감</span>
              </p>
            </motion.div>
          </div>

          <motion.p
            className="text-center text-lg text-foreground-secondary mt-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            방문객 수는 늘었지만 수익은 줄어드는 역설.<br />
            이것이 바로 지금 시장이 보내는 명확한 신호입니다.
          </motion.p>
        </div>
      </section>

      {/* WHO/WHERE/WHAT Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              무엇이 바뀌었을까요?
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              시장의 변화를 고객, 플랫폼, 소비 방식 3가지 관점으로 증명합니다.
            </p>
          </motion.div>

          {/* WHO Card */}
          <motion.div
            className="mb-16 bg-background-secondary p-8 md:p-12 rounded-2xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-6 mb-6">
              <Users className="w-12 h-12 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  WHO: 고객이 바뀌었다
                </h3>
                <p className="text-lg text-foreground-secondary mb-6">
                  신흥 6개국이 새로운 주류 시장으로 부상
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { country: '인도네시아', growth: '+37.5%' },
                { country: '베트남', growth: '+28.2%' },
                { country: '인도', growth: '+42.8%' },
                { country: '필리핀', growth: '+31.4%' },
                { country: '태국', growth: '+24.7%' },
                { country: '말레이시아', growth: '+19.3%' },
              ].map((item) => (
                <div
                  key={item.country}
                  className="bg-background p-4 rounded-xl border border-white/10"
                >
                  <p className="text-foreground-secondary text-sm mb-1">{item.country}</p>
                  <p className="text-2xl font-bold text-accent-green">{item.growth}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* WHERE Card */}
          <motion.div
            className="mb-16 bg-background-secondary p-8 md:p-12 rounded-2xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-6 mb-6">
              <Smartphone className="w-12 h-12 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  WHERE: 정보 탐색 채널이 바뀌었다
                </h3>
                <p className="text-lg text-foreground-secondary mb-6">
                  네이버/구글 시대에서 TikTok/Instagram 시대로 대전환
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-xl border border-white/10">
                <p className="text-foreground-secondary mb-2">인도네시아 TikTok 사용자</p>
                <p className="text-3xl font-bold text-primary">1.08억 명</p>
              </div>
              <div className="bg-background p-6 rounded-xl border border-white/10">
                <p className="text-foreground-secondary mb-2">베트남 TikTok 사용자</p>
                <p className="text-3xl font-bold text-primary">6,200만 명</p>
              </div>
            </div>
          </motion.div>

          {/* WHAT Card */}
          <motion.div
            className="bg-background-secondary p-8 md:p-12 rounded-2xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-6 mb-6">
              <ShoppingBag className="w-12 h-12 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  WHAT: 구매 의사결정 방식이 바뀌었다
                </h3>
                <p className="text-lg text-foreground-secondary mb-6">
                  광고가 아닌 '진짜 경험 공유'를 신뢰
                </p>
              </div>
            </div>

            <div className="bg-background p-8 rounded-xl border border-white/10 text-center">
              <p className="text-5xl font-bold text-primary mb-4">78%</p>
              <p className="text-lg text-foreground-secondary">
                동남아 소비자가 <span className="text-white font-semibold">"현지인 크리에이터 콘텐츠"</span>를 가장 신뢰
              </p>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              이제 어떻게 해야 할까요?
            </h2>
            <p className="text-lg text-foreground-secondary mb-8 max-w-2xl mx-auto">
              시장이 완전히 바뀐 지금, The Nines의 컬처 브릿지 전략을 확인해보세요.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:gap-3"
            >
              무료 가능성 진단 받기
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
