# 개발자 이력서 웹 페이지 개발 계획

## Context

현재 프로젝트는 거의 빈 HTML 파일(`index.html`)만 존재하는 상태입니다.
개발자 원석(Wonseok)의 포트폴리오/이력서를 웹 페이지 형태로 구축합니다.
빌드 도구 없이 순수 HTML/CSS/JS만으로 개발하며, 라이트/다크 테마 토글을 지원합니다.

## 기술 스택

- **HTML5** — 시맨틱 마크업
- **CSS3** — CSS 변수(custom properties)로 테마 관리, Flexbox/Grid 레이아웃
- **Vanilla JS** — 테마 토글, localStorage 저장

## 파일 구조

```
claude-code-mastery/
├── index.html      (기존 파일 — 전체 재작성)
├── style.css       (신규 생성)
└── script.js       (신규 생성)
```

## 섹션 구성

| 섹션 | 내용 |
|------|------|
| **Header** | 이름, 직함, 이메일, GitHub, LinkedIn, 블로그/SNS 링크 |
| **Skills** | 언어, 프레임워크, 툴 카테고리로 분류된 기술 뱃지 |
| **Experience** | 회사명, 직책, 기간, 주요 업무 (타임라인 스타일) |
| **Projects** | 프로젝트 카드 (이름, 설명, 사용 기술, GitHub 링크) |

## 디자인 가이드

- **라이트 모드**: 흰 배경, 짙은 텍스트, 포인트 컬러(인디고 계열)
- **다크 모드**: `#0f172a` 배경, 밝은 텍스트, 동일 포인트 컬러
- CSS custom properties로 테마 전환 (`data-theme` 속성)
- 전환 시 `transition: 0.3s` 부드러운 애니메이션
- 반응형: 모바일(< 768px) / 데스크톱 레이아웃 분리
- 인쇄용 CSS (`@media print`) — PDF 저장 지원

## 구현 세부 계획

### 1. `index.html` 재작성

```html
<!DOCTYPE html>
<html lang="ko" data-theme="light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>박원석 | Developer Resume</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <!-- 테마 토글 버튼 -->
  <button id="theme-toggle" aria-label="Toggle theme">🌙</button>

  <!-- Header: 이름, 직함, 연락처/SNS -->
  <header>...</header>

  <!-- Skills: 기술 뱃지 그룹 -->
  <section id="skills">...</section>

  <!-- Experience: 경력 타임라인 -->
  <section id="experience">...</section>

  <!-- Projects: 프로젝트 카드 그리드 -->
  <section id="projects">...</section>

  <footer>...</footer>
  <script src="script.js"></script>
</body>
</html>
```

### 2. `style.css` 구조

```css
/* 1. CSS 변수 (라이트/다크 테마) */
:root { --bg: #ffffff; --text: #1e293b; --accent: #6366f1; ... }
[data-theme="dark"] { --bg: #0f172a; --text: #e2e8f0; ... }

/* 2. 리셋 & 기본 스타일 */
/* 3. 레이아웃 (max-width: 860px, 중앙 정렬) */
/* 4. 헤더 스타일 */
/* 5. 기술 뱃지 */
/* 6. 경력 타임라인 */
/* 7. 프로젝트 카드 그리드 */
/* 8. 테마 토글 버튼 */
/* 9. 반응형 (@media max-width: 768px) */
/* 10. 인쇄용 (@media print) */
```

### 3. `script.js` 구조

```js
// 테마 토글 — localStorage로 선호 테마 유지
const toggleBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

toggleBtn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  toggleBtn.textContent = next === 'dark' ? '☀️' : '🌙';
});
```

## 수정 대상 파일

| 파일 | 작업 |
|------|------|
| `/Users/wonseokpark/workspace/claude-code-mastery/index.html` | 전체 재작성 |
| `/Users/wonseokpark/workspace/claude-code-mastery/style.css` | 신규 생성 |
| `/Users/wonseokpark/workspace/claude-code-mastery/script.js` | 신규 생성 |

## 검증 방법

1. `index.html`을 브라우저에서 직접 열기 (파일 경로 or Live Server)
2. 각 섹션이 올바르게 렌더링되는지 확인
3. 테마 토글 버튼 클릭 → 라이트/다크 전환 확인
4. 페이지 새로고침 후 테마 유지 여부 확인 (localStorage)
5. 브라우저 창 크기 조절 → 모바일 반응형 확인
6. 브라우저 인쇄 미리보기 (`Ctrl+P`) → PDF 출력 레이아웃 확인
