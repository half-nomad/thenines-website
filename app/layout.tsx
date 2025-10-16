import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: 'The Nines | 신흥국 인바운드 마케팅 솔루션',
    template: '%s | The Nines'
  },
  description: '방문객은 사상 최고인데 수익은 줄었다면? 신흥 6개국 크리에이터를 통한 컬처 브릿지 전략으로 외국인 관광객을 목적 방문 팬으로 전환합니다.',
  keywords: ['인바운드 마케팅', '신흥국 마케팅', '외국인 관광객', 'K-콘텐츠', '컬처 브릿지'],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://the-nines.com',
    siteName: 'The Nines',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
