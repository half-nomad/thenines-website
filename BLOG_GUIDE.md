# 📝 The Nines 블로그 작성 가이드

**이 문서는 블로그 포스트를 작성할 때 참고하세요.**

---

## 🚀 빠른 시작 (3단계)

### 1. 마크다운 파일 생성
```bash
content/blog/your-post-name.md
```

### 2. 머리말 (Frontmatter) 작성
```markdown
---
title: "블로그 제목"
date: 2025-01-22
description: "요약 설명 (SEO에 사용됨)"
category: "플랫폼 전략"
image: "/images/blog/thumbnail.jpg"
keywords:
  - "키워드1"
  - "키워드2"
---
```

### 3. 본문 작성
일반 마크다운 문법으로 작성하면 자동으로 스타일이 적용됩니다!

---

## 📚 마크다운 문법 가이드

### ✅ 제목

```markdown
## H2 제목 (대제목)
### H3 제목 (중제목)
#### H4 제목 (소제목)
```

**렌더링 결과:**
- H2: 큰 굵은 글씨 (2rem, 상단 여백 3rem)
- H3: 중간 굵은 글씨 (1.5rem, 상단 여백 2rem)
- H4: 작은 굵은 글씨 (1.25rem, 상단 여백 1.5rem)

---

### ✅ 문단

```markdown
일반 텍스트는 그냥 작성하면 됩니다.

빈 줄을 넣으면 새로운 문단이 됩니다.
```

**렌더링 결과:**
- 자동으로 줄 간격 적용 (line-height: 1.8)
- 문단 간 여백 자동 추가

---

### ✅ 강조

```markdown
**굵은 글씨** (강조)
*기울임 글씨* (부연 설명)
```

**렌더링 결과:**
- **굵은 글씨**: 흰색 + 굵게
- *기울임*: 회색 + 이탤릭

---

### ✅ 링크

```markdown
[The Nines](https://the-nines.com)
```

**렌더링 결과:**
- 파란색 링크 (hover 시 보라색)
- 밑줄 없음

---

### ✅ 목록

```markdown
- 항목 1
- 항목 2
  - 하위 항목
- 항목 3

1. 첫 번째
2. 두 번째
3. 세 번째
```

**렌더링 결과:**
- 불릿/번호: 파란색
- 항목 간 여백 자동 조정
- 들여쓰기 지원

---

### ✅ 인용구

```markdown
> 중요한 내용이나 인용문을 여기에 작성합니다.
> 여러 줄도 가능합니다.
```

**렌더링 결과:**
- 왼쪽에 파란색 세로선
- 이탤릭 + 회색 텍스트
- 상하 여백 자동

---

### ✅ 코드

**인라인 코드:**
```markdown
`npm install` 명령어를 실행하세요.
```

**코드 블록:**
````markdown
```bash
npm run dev
```
````

**렌더링 결과:**
- 인라인 코드: 파란색 + 배경색
- 코드 블록: 박스 + 문법 하이라이팅

---

### ✅ 테이블

```markdown
| 플랫폼 | 중국인 접근성 | 신뢰도 | 전환율 |
|--------|-------------|--------|--------|
| XiaoHongShu | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 인스타그램 | ⭐ | ⭐⭐ | ⭐⭐ |
| 네이버 | ⭐⭐ | ⭐⭐⭐ | ⭐ |
```

**렌더링 결과:**
- 자동으로 테두리 + 배경색
- 헤더(th): 배경 강조
- Hover 효과: 행 하이라이트

---

### ✅ 구분선

```markdown
---
```

**렌더링 결과:**
- 얇은 회색 선
- 상하 여백 3rem

---

### ✅ 이미지

#### 방법 1: 로컬 이미지

```markdown
![이미지 설명](/images/blog/my-image.jpg)
```

**준비 사항:**
1. `public/images/blog/` 폴더에 이미지 업로드
2. 마크다운에서 경로 지정
3. alt 텍스트 필수 (SEO)

**렌더링 결과:**
- 자동으로 Next.js Image로 변환 (WebP 최적화)
- 최대 너비 800px, 자동 중앙 정렬
- 둥근 모서리 + 테두리
- alt 텍스트가 이미지 아래 캡션으로 표시

#### 방법 2: 외부 이미지 (URL)

```markdown
![Unsplash 이미지](https://images.unsplash.com/photo-123456)
```

**주의:**
- 외부 이미지는 Next.js 최적화가 제한적일 수 있음
- `next.config.ts`에서 도메인 허용 필요

---

## 🎨 고급 스타일링

### 여러 이미지 스타일

현재는 기본 스타일만 적용됩니다. 추가 스타일이 필요하면 `globals.css`에 클래스 추가 가능:

```css
/* globals.css에 추가 */
.markdown-content .img-full {
  max-width: 100%;
}

.markdown-content .img-small {
  max-width: 300px;
}
```

마크다운에서 사용:
```markdown
<img src="/path.jpg" alt="..." class="img-full" />
```

---

## 📝 완전한 예시

```markdown
---
title: "XiaoHongShu 마케팅 완벽 가이드"
date: 2025-01-22
description: "중국인 관광객을 위한 XiaoHongShu 마케팅 전략"
category: "플랫폼 전략"
image: "/images/blog/xiaohongshu.jpg"
keywords:
  - "XiaoHongShu"
  - "중국 마케팅"
---

## 들어가며

중국인 관광객의 **78%**가 사용하는 플랫폼을 아시나요?

바로 *XiaoHongShu(小红书)*입니다.

---

## 핵심 통계

| 항목 | 수치 |
|------|------|
| 월간 사용자 | 3억 명 |
| 한국 관련 게시물 | 2천만 개 |

### 왜 중요한가?

1. 높은 신뢰도
2. 즉각적인 전환
3. 검색 최적화

> "XiaoHongShu 없이는 중국 시장 공략 불가능" - The Nines

![XiaoHongShu 대시보드](/images/blog/dashboard.jpg)

### 코드 예시

해시태그 전략:
```
#서울카페 #韩国旅行 #美食推荐
```

---

## 결론

XiaoHongShu는 선택이 아닌 필수입니다.

[무료 진단 받기](https://half-nomad.notion.site/...)
```

---

## ✅ 체크리스트

블로그 발행 전 확인:

- [ ] Frontmatter 모든 필드 작성
- [ ] 제목 SEO 최적화 (60자 이내)
- [ ] Description 작성 (160자 이내)
- [ ] 키워드 3-5개 추가
- [ ] 이미지 alt 텍스트 작성
- [ ] 테이블이 있다면 제대로 렌더링되는지 확인
- [ ] 로컬 테스트 (`npm run dev`)

---

## 🚀 발행 프로세스

### 수동 발행 (현재 방법)

```bash
# 1. 파일 생성
content/blog/my-new-post.md

# 2. 로컬 테스트
npm run dev
# http://localhost:3000/blog/my-new-post 확인

# 3. GitHub에 푸시
git add content/blog/my-new-post.md
git commit -m "blog: 새 포스트 발행"
git push

# 4. Vercel 자동 배포 (30초)
# https://thenines-website.vercel.app/blog
```

---

## 🎯 SEO 최적화 팁

### 1. 제목 작성
- **좋은 예**: "XiaoHongShu가 한국 F&B 마케팅에 필수인 이유"
- **나쁜 예**: "XiaoHongShu 정보"

### 2. Description 작성
- 문제 제기 + 솔루션 힌트
- 예: "중국인 관광객 10명 중 8명이 사용하는 XiaoHongShu. 왜 필수가 되었는지 데이터로 증명합니다."

### 3. 키워드 선정
- 구체적이고 롱테일 키워드
- 예: "XiaoHongShu 마케팅", "중국인 관광객 유치"

### 4. 이미지 alt 텍스트
- 설명적으로 작성
- 예: "XiaoHongShu 앱 대시보드 화면"

---

## 💡 유용한 팁

### 이모지 활용
제목이나 섹션에 이모지를 추가하면 가독성이 높아집니다:
```markdown
## 🚨 당신의 카페가 투명인간인 이유
## 📊 데이터로 보는 시장 변화
```

### 링크 버튼 스타일
CTA 링크는 마지막에 추가:
```markdown
[무료 진단 받기 →](https://...)
```

### 통계 강조
숫자는 **굵게** 표시:
```markdown
중국인 관광객의 **78%**가 사용
```

---

## 🆘 문제 해결

### Q: 이미지가 안 보여요
- `public/images/blog/` 폴더에 이미지가 있는지 확인
- 경로가 `/images/blog/파일명.jpg` 형식인지 확인

### Q: 테이블이 깨져요
- 마크다운 테이블 문법 확인 (각 열 구분자 `|` 확인)
- 예시 참고해서 작성

### Q: 스타일이 적용 안 돼요
- `npm run dev` 재시작
- 브라우저 캐시 삭제 (Ctrl + Shift + R)

---

**Happy Blogging! 🎉**

The Nines 팀이 만든 템플릿으로 빠르고 아름다운 블로그를 작성하세요.
