# 윤성준 · Frontend Engineer

기획 · 디자인 · 프론트 · 백엔드 · 앱 · 마케팅까지 혼자 서비스를 출시하고 운영합니다.
회사에서는 계약 관리 SaaS의 프론트엔드를, 개인으로는 생물 커뮤니티 플랫폼 브리디를 웹과 앱으로 만들고 있습니다.

- 이메일: ytw418@naver.com
- 이력서: [원티드 CV](https://www.wanted.co.kr/cv/AwwBBwUEAAdFAgICBAIEAUxF)

## 하는 일

| 영역 | 주로 쓰는 것 |
|---|---|
| Frontend | React, Next.js(App Router), SvelteKit, TypeScript, Tailwind, react-query, SWR |
| Backend | Next.js API Routes, Prisma, PostgreSQL, iron-session, Vercel Serverless |
| Mobile | React Native(Expo), Expo Router, NativeWind, EAS Build, FCM |
| 운영 | PostHog, Sentry, Playwright E2E, Jest/Vitest, GitHub Actions |
| AI 워크플로우 | Claude Code, Codex, 자작 스킬 50+, 토큰 비용 측정·절감 도구 |

## 개인 프로젝트

### 브리디 (Bredy) — 생물인의 커뮤니티 · 거래 플랫폼
[bredy.app](https://bredy.app/) · [웹 레포](https://github.com/ytw418/breeder_web) · [앱 레포](https://github.com/ytw418/bredy_app)

기획, 디자인, 프론트, 백엔드, 앱, 마케팅을 1인으로 진행한 서비스입니다. v1(Firebase) → v2 → v3(Next.js + Prisma)로 세 번 다시 만들었고, 지금은 앱 버전까지 확장했습니다.

**웹**
- Next.js 16 App Router + Prisma + PostgreSQL, iron-session 인증
- 상품 등록·거래, 찜·팔로우·알림, 1:1 채팅과 읽음 동기화, 경매 등록·입찰·종료 처리
- 관리자 페이지(유저·게시글·상품·배너·경매 운영)
- Cloudflare Images, Web Push, Sentry, Vercel Analytics, Jest 단위 테스트 + Playwright E2E

**앱**
- Expo SDK 56 + Expo Router, NativeWind로 웹 Tailwind 토큰 1:1 포팅
- 백엔드는 웹 API를 그대로 재사용, JWT access/refresh 재발급을 single-flight로 처리
- 카카오·구글·애플 로그인, FCM 푸시, EAS preview/production 빌드 프로파일, 스토어 제출 자산 자동 캡처 스크립트

### ralph-codex — AI 코딩 에이전트용 스펙 기반 실행 루프
[레포](https://github.com/ytw418/ralph-codex)

PRD를 읽기 전용 진실로 두고, 매 반복마다 새 프로세스로 에이전트를 실행하며, 테스트가 통과할 때만 커밋하는 무인 실행 컨트롤러입니다. 학습 내용은 append-only 파일에 쌓아 컨텍스트 오염 없이 누적됩니다.

### ytw418-agent-skills — Claude Code · Codex 스킬 모음
[레포](https://github.com/ytw418/ytw418-agent-skills)

실무에서 반복되던 작업을 스킬로 만든 것들입니다. 대표적으로:
- `pr-completion-loop`: PR 생성 후 검증·리뷰 봇 대응·CI·i18n 액션·스크린샷 첨부까지 머지 가능 상태가 될 때까지 반복
- `token-usage` / `token-diet`: 세션 기록에서 질문당 토큰 사용처를 집계하고, 미사용 MCP·스킬을 이력 대조로 정리
- `i18n`: 키 버전 규칙과 구글시트 입력 포맷 생성
- `deploy-*`, `worktree-*`, `session-search` 등 배포·워크트리·과거 세션 검색

### 그 외
- [NeoNews](https://nextneonews.vercel.app/) — 실시간 K-POP 뉴스 플랫폼 (개인)
- [도수리](https://www.dosuri.site/) — 도수치료 예약 서비스 (팀) · [Android](https://play.google.com/store/apps/details?id=com.ytw418.dosuriapp)

## 경력

**BHSN (앨리비)** · 2025.06 ~ 현재 · Frontend
계약 관리 Legal SaaS. 신규 AI 계약 앱 Cue의 목록·상세·전자서명·업로드 영역 FE 리드, 통합 회원가입·SSO·결제, CLM 계약서 비교·전자결재. 머지 PR 341건. AI 에이전트 개발 워크플로우(스킬·규칙·비용 관리)를 팀에 도입.

**핀포인트** · 2023.08 ~ 2025.06 · Frontend
빌딩 관리 CMS ctrl.room. 상품·CS·방문자 초대 고도화, 변경내역·관리자메모 신규 개발. CS 데이터를 LLM에 보내 분석 리포트를 만드는 기능, Recoil 전역 모달 시스템, react-query 점진 도입.

**센슈얼모먼트** · 2022.06 ~ 2023.07 · Frontend
오디오·웹소설 플랫폼 플링 웹앱, 출판사·크리에이터 CMS, 백오피스. Next.js App Router에서 GraphQL 응답 캐싱으로 ISR 구현, i18n·SEO·성능 최적화.

**올맵** · 2021.04 ~ 2021.11 · Web / Hybrid App
자사·외주 웹사이트와 웹뷰 하이브리드 앱 개발.

## 요즘 관심사
- AI 에이전트를 팀 워크플로우에 넣을 때 품질을 가르는 건 모델이 아니라 실데이터 검증이라는 걸 실험으로 확인한 뒤, 그걸 규칙으로 강제하는 방법
- 토큰 비용을 측정 가능하게 만들고 줄이기
- 브리디 앱 스토어 출시와 사용자 지표 기반 개선
