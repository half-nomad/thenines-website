'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: '홈', href: '/' },
    { name: '솔루션', href: '/services' },
    { name: '크리에이터', href: '/creators' },
    { name: '인사이트', href: '/blog' },
    { name: '문의하기', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-white/10 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="text-2xl font-bold">
          The Nines
        </Link>

        {/* 데스크톱 메뉴 */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            무료 진단 받기
          </Link>
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="메뉴 토글"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* 모바일 메뉴 */}
      {isOpen && (
        <div className="md:hidden bg-background-secondary border-b border-white/10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-3 text-foreground hover:bg-white/5 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="p-4">
            <Link
              href="/contact"
              className="block w-full text-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              무료 진단 받기
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
