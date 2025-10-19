'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: '홈', href: '/', isExternal: false },
    { name: '솔루션', href: '/services', isExternal: false },
    { name: '크리에이터', href: '/creators', isExternal: false },
    { name: '인사이트', href: '/blog', isExternal: false },
    { name: '문의하기', href: 'https://half-nomad.notion.site/291091314f8f81408e81dd20b9c5f3cb?pvs=105', isExternal: true },
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
          {navItems.map((item) =>
            item.isExternal ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            )
          )}
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
          {navItems.map((item) =>
            item.isExternal ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-foreground hover:bg-white/5 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-foreground hover:bg-white/5 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  )
}
