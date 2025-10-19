'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, TrendingUp, TrendingDown, Users, Smartphone, ShoppingBag, Building, User, Languages, Target, Camera, BarChart3, X, CheckCircle2 } from 'lucide-react'

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

      {/* Why Others Fail Section */}
      <section className="py-20 md:py-32 px-4 bg-background-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              그렇다면, 다른 방법들은<br />
              왜 정답이 아닐까요?
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              흔히 떠올리는 대안들의 명확한 한계를 이해해야 합니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 대안 1: 대형 광고 대행사 */}
            <motion.div
              className="bg-background p-8 rounded-2xl border border-red-500/20 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-4 right-4">
                <X className="w-8 h-8 text-red-500" />
              </div>

              <Building className="w-12 h-12 text-red-500 mb-6" />

              <h3 className="text-xl font-bold mb-4">대형 광고 대행사</h3>

              <p className="text-foreground-secondary mb-4">
                높은 비용을 지불하지만...
              </p>

              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                <p className="text-sm text-foreground-secondary">
                  신흥국 시장의 <span className="text-red-500 font-semibold">문화적 맥락(Context)</span>에 대한 깊은 이해 부족
                </p>
              </div>
            </motion.div>

            {/* 대안 2: 직접 운영 */}
            <motion.div
              className="bg-background p-8 rounded-2xl border border-red-500/20 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-4 right-4">
                <X className="w-8 h-8 text-red-500" />
              </div>

              <User className="w-12 h-12 text-red-500 mb-6" />

              <h3 className="text-xl font-bold mb-4">사장님이 직접 SNS 운영</h3>

              <p className="text-foreground-secondary mb-4">
                비용을 절약하려 하지만...
              </p>

              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                <p className="text-sm text-foreground-secondary">
                  <span className="text-red-500 font-semibold">언어, 문화, 플랫폼 알고리즘</span>에 대한 전문성 부재. 본업에 집중하기 어려움
                </p>
              </div>
            </motion.div>

            {/* 대안 3: 단순 번역 */}
            <motion.div
              className="bg-background p-8 rounded-2xl border border-red-500/20 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-4 right-4">
                <X className="w-8 h-8 text-red-500" />
              </div>

              <Languages className="w-12 h-12 text-red-500 mb-6" />

              <h3 className="text-xl font-bold mb-4">기존 콘텐츠를 단순 번역</h3>

              <p className="text-foreground-secondary mb-4">
                쉬운 방법 같지만...
              </p>

              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                <p className="text-sm text-foreground-secondary">
                  문화적 맥락이 없는 번역은 오히려 <span className="text-red-500 font-semibold">신뢰를 떨어뜨림</span>. 현지 감성과 트렌드 이해 필수
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution & Process Section */}
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
              The Nines의 해결책:<br />
              <span className="bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
                컬처 브릿지(Culture Bridge)
              </span>
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              단순 번역이 아닌, 문화와 비즈니스를 연결하는 '현지 친구' 역할
            </p>
          </motion.div>

          {/* 3단계 프로세스 */}
          <div className="space-y-8">
            {/* Step 1 */}
            <motion.div
              className="bg-background-secondary p-8 md:p-12 rounded-2xl border border-white/10 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-4 top-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>

              <div className="flex flex-col md:flex-row items-start gap-6 ml-8">
                <Target className="w-16 h-16 text-primary flex-shrink-0" />

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    타겟 시장 정밀 분석
                  </h3>
                  <p className="text-lg text-foreground-secondary mb-6">
                    데이터 기반 타겟 국가 선정 및 고객 페르소나 설계
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-background p-4 rounded-xl border border-white/10">
                      <CheckCircle2 className="w-6 h-6 text-accent-green mb-2" />
                      <p className="text-sm text-foreground-secondary">시장 데이터 분석</p>
                    </div>
                    <div className="bg-background p-4 rounded-xl border border-white/10">
                      <CheckCircle2 className="w-6 h-6 text-accent-green mb-2" />
                      <p className="text-sm text-foreground-secondary">타겟 고객 설정</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="bg-background-secondary p-8 md:p-12 rounded-2xl border border-white/10 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-4 top-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>

              <div className="flex flex-col md:flex-row items-start gap-6 ml-8">
                <Camera className="w-16 h-16 text-primary flex-shrink-0" />

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    현지 크리에이터와 협업
                  </h3>
                  <p className="text-lg text-foreground-secondary mb-6">
                    해당 국가 출신 크리에이터가 직접 방문, 체험, 제작
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-background p-4 rounded-xl border border-white/10">
                      <CheckCircle2 className="w-6 h-6 text-accent-green mb-2" />
                      <p className="text-sm text-foreground-secondary">진정성 있는 콘텐츠</p>
                    </div>
                    <div className="bg-background p-4 rounded-xl border border-white/10">
                      <CheckCircle2 className="w-6 h-6 text-accent-green mb-2" />
                      <p className="text-sm text-foreground-secondary">현지 언어 & 문화</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="bg-background-secondary p-8 md:p-12 rounded-2xl border border-white/10 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-4 top-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>

              <div className="flex flex-col md:flex-row items-start gap-6 ml-8">
                <BarChart3 className="w-16 h-16 text-primary flex-shrink-0" />

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    데이터 기반 성과 관리
                  </h3>
                  <p className="text-lg text-foreground-secondary mb-6">
                    실시간 분석 대시보드 제공 및 지속적인 최적화
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-background p-4 rounded-xl border border-white/10">
                      <CheckCircle2 className="w-6 h-6 text-accent-green mb-2" />
                      <p className="text-sm text-foreground-secondary">실시간 성과 추적</p>
                    </div>
                    <div className="bg-background p-4 rounded-xl border border-white/10">
                      <CheckCircle2 className="w-6 h-6 text-accent-green mb-2" />
                      <p className="text-sm text-foreground-secondary">지속적인 개선</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 md:py-32 px-4 bg-background-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              The Nines와 함께하면<br />
              무엇이 달라질까요?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* BEFORE */}
            <motion.div
              className="bg-background/50 p-8 rounded-2xl border border-red-500/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <span className="inline-block px-4 py-2 bg-red-500/20 text-red-500 rounded-lg font-semibold text-sm">
                  BEFORE
                </span>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">우연히 지나가는 손님</p>
                    <p className="text-sm text-foreground-secondary">
                      목적 없이 방문하는 일회성 고객
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">불특정 다수를 향한 무작위 광고</p>
                    <p className="text-sm text-foreground-secondary">
                      효율 낮은 마케팅 비용
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">언어와 문화 장벽</p>
                    <p className="text-sm text-foreground-secondary">
                      낮은 신뢰와 소통 어려움
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">일회성 방문, 낮은 재방문율</p>
                    <p className="text-sm text-foreground-secondary">
                      지속 가능하지 않은 성장
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AFTER */}
            <motion.div
              className="bg-gradient-to-br from-primary/10 to-accent-purple/10 p-8 rounded-2xl border border-primary/20"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-lg font-semibold text-sm">
                  AFTER
                </span>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">목적을 가지고 찾아오는 팬</p>
                    <p className="text-sm text-foreground-secondary">
                      우리 가게를 '일부러' 방문
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">타겟 국가 맞춤형 정밀 마케팅</p>
                    <p className="text-sm text-foreground-secondary">
                      높은 ROI와 효율적인 예산 운용
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">현지인 크리에이터의 진정성</p>
                    <p className="text-sm text-foreground-secondary">
                      문화적 공감과 높은 신뢰도
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">목적 방문 증가, 높은 재방문율</p>
                    <p className="text-sm text-foreground-secondary">
                      지속 가능한 성장 동력 확보
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.p
            className="text-center text-2xl font-bold mt-12 bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            이제 손님을 기다리는 대신, 팬을 맞이하게 됩니다.
          </motion.p>
        </div>
      </section>

      {/* Social Proof Section */}
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
              이미 시작한 사장님들의 이야기
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              The Nines와 함께 미래 시장을 선점한 실제 사례들입니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 고객 증언 1 */}
            <motion.div
              className="bg-background-secondary p-8 rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl text-primary mb-6">"</div>

              <p className="text-lg mb-6 leading-relaxed">
                외국인 손님이 늘긴 했는데 왜 매출은 그대로인지 답답했습니다. The Nines와 함께한 후, 인도네시아 고객이 '일부러' 우리 가게를 찾아오기 시작했어요.
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">김** 대표님</p>
                  <p className="text-sm text-foreground-secondary">홍대 카페</p>
                </div>
              </div>
            </motion.div>

            {/* 고객 증언 2 */}
            <motion.div
              className="bg-background-secondary p-8 rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl text-primary mb-6">"</div>

              <p className="text-lg mb-6 leading-relaxed">
                대행사는 비싸고, 직접 하기엔 시간이 없었어요. The Nines는 우리 상황을 정확히 이해하고 맞춤 솔루션을 제공해줬습니다.
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">박** 대표님</p>
                  <p className="text-sm text-foreground-secondary">강남 맛집</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 px-4 bg-background-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              신흥 시장 인사이트와<br />
              실전 전략을 받아보세요
            </h2>
            <p className="text-lg text-foreground-secondary mb-8 max-w-2xl mx-auto">
              데이터 기반 시장 분석과 성공 사례를 매주 뉴스레터로 전달합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://half-nomad.notion.site/291091314f8f80598f46d7e6b5639666?pvs=105"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:gap-3"
              >
                뉴스레터 구독하기
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://half-nomad.notion.site/291091314f8f81408e81dd20b9c5f3cb?pvs=105"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-background-secondary text-white border border-white/10 rounded-lg font-semibold text-lg hover:border-primary/50 transition-all hover:gap-3"
              >
                서비스 문의하기
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
