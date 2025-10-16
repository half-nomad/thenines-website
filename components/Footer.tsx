import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-xl font-bold mb-4">The Nines</h3>
            <p className="text-foreground-secondary">
              신흥국 인바운드 마케팅의 새로운 표준
            </p>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h4 className="font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-2 text-foreground-secondary">
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  솔루션
                </Link>
              </li>
              <li>
                <Link href="/creators" className="hover:text-foreground transition-colors">
                  크리에이터
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  인사이트
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          {/* 법적 정보 */}
          <div>
            <h4 className="font-semibold mb-4">법적 정보</h4>
            <ul className="space-y-2 text-foreground-secondary">
              <li>
                <Link href="/legal#terms" className="hover:text-foreground transition-colors">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="/legal#privacy" className="hover:text-foreground transition-colors">
                  개인정보 처리방침
                </Link>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="font-semibold mb-4">연락처</h4>
            <p className="text-foreground-secondary">
              contact@the-nines.com
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-foreground-secondary">
          © 2025 The Nines. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
