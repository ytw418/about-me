# 윤성준 · Frontend Engineer · AI Builder

AI로 제품을 끝까지 내고, 반복되는 일을 AI 에이전트로 바꾸는 프론트엔드 개발자입니다.
회사에서는 **AI 법률 에이전트**와 전자서명 · 계약서 검토 · 작성 · 리뷰 · 이행관리를 하는 **계약 관리 SaaS(앨리비)** 의 프론트엔드를 만들고, 팀 개발 흐름에 AI 에이전트를 도입했습니다.
개인으로는 생물 커뮤니티 플랫폼 **브리디**를 기획부터 웹 · 앱 · 마케팅까지 혼자 만들고, 운영 업무 대부분을 에이전트 일정으로 돌립니다.

- 이메일: ytw418@naver.com
- 이력서: [원티드](https://social.wanted.co.kr//community/profile/8xuyY3Btrdg33yd7Fbbfkt?utm_source=wanted&utm_medium=share)

---

## 🤖 AX — 사람이 하던 일을 AI 에이전트로

AI 모델을 만드는 게 아니라, 이미 있는 모델(Claude · Codex · Gemini)을 실제 업무에 붙여 **혼자서 팀 단위 일을 돌리는 것**을 합니다.

### 숫자로 보면

| | |
|---|---|
| ⏰ 매일 도는 에이전트 일정 | **19개** (Paseo 스케줄, Claude · Codex 혼용, 새벽 2시 ~ 자정) |
| 🧰 직접 만든 스킬 | **79개** ([ytw418-agent-skills](https://github.com/ytw418/ytw418-agent-skills)) — 배포 · PR 완주 · 콘텐츠 · 영업 · 브리핑 |
| 🛡️ 에이전트 가드레일 훅 | DB 파괴 명령 차단 · 승인 없는 메시지 전송 차단 · 질문당 사용량 예산 · 보고 언어 강제 (테스트 포함) |
| 📈 개인 스레드 | [@lcaros_rn](https://www.threads.com/@lcaros_rn) — 매일 자동 게시로 운영, 최근 30일 조회 약 7만 |

### 에이전트가 매일 하는 일

| 영역 | 사람이 하던 일 | 지금 |
|---|---|---|
| 지표 브리핑 | 아침마다 대시보드 열어 숫자 보기 | PostHog 숫자를 모아 좋아진 점 · 나빠진 점 · 원인 추정을 메모로 받음 (브리디 · 언니노트) |
| 배포 | 버전 올리고 빌드 · 스토어 제출 | 스킬 한 번으로 코드푸시 또는 스토어 빌드 · 제출 · 태그까지 |
| SNS 콘텐츠 | 글 쓰고, 카드 만들고, 올리기 | 소재 수집 → 초안 → 'AI 티' 검사(별도 에이전트) → 게시 → 기록. 인스타는 카드 이미지까지 자동 생성 |
| 숏폼 | 밈 찾고 영상 만들기 | 유행 밈 조사 → Gemini(Veo)로 영상 생성 → 인스타 릴스 · 유튜브 쇼츠 · 틱톡 |
| 카페 운영 | 매일 뉴스 · 정보글 작성 | 하루 세 칸 편성표대로 원문 확인 → 작성 → 말투 · 출처 검사 → 등록 |
| 영업 | 브리더에게 DM | 하루 한도 · 문구 · 재확인 규칙 안에서 발송, 표 밖의 답장은 사람에게 넘김 |
| 개인 할 일 | 흩어진 결정 · 로그인 요청 챙기기 | 지난 세션을 훑어 내가 직접 해야 할 일만 아침에 정리 |

### 어떻게 안전하게 돌리나

- **실패하면 다시 시도하지 않는다** — 계정이 다르거나 게시 확인에 실패하면 멈추고 이유만 남깁니다. 중복 게시 · 오발송보다 빈 슬롯이 낫다는 기준입니다.
- **규칙은 문서가 아니라 코드로** — 지켜야 할 것은 훅과 스크립트 종료 코드로 강제합니다(계정 확인 · 본문 일치 · 하루 한도 · 중복 첫 줄).
- **비용도 측정한다** — 질문당 토큰을 주간 한도 %로 환산해 예산을 넘으면 도구 호출을 막습니다. 쉬운 일은 싼 모델, 설계 판단만 상위 모델로 나눕니다.
- **브라우저는 하나로** — 운영 계정 작업은 전용 자동화 크롬 하나에 붙어서 하고, 작업마다 자기 탭을 열고 닫으며 사이트별 잠금으로 충돌을 막습니다.

---

## 🦎 브리디 (Bredy) — 곤충·파충류·물고기, 키우는 사람들이 모이는 곳

[![bredy.app](https://img.shields.io/badge/bredy.app-F97316?style=for-the-badge&logo=googlechrome&logoColor=white)](https://bredy.app/)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/bredy_breeder/)
[![Threads](https://img.shields.io/badge/Threads-000000?style=for-the-badge&logo=threads&logoColor=white)](https://www.threads.com/@bredy_breeder)
[![Naver Blog](https://img.shields.io/badge/Naver%20Blog-03C75A?style=for-the-badge&logo=naver&logoColor=white)](https://blog.naver.com/bredy_team)

<img src="assets/bredy/banner.jpg" alt="브리디 — 곤충·파충류·물고기, 키우는 사람들이 모이는 곳" width="100%" />

생물을 키우는 사람들이 사진으로 기록하고, 분양하고, 경매하고, 혈통을 관리하는 커뮤니티입니다.
**기획 · 디자인 · 웹 · 서버 · 앱 · 운영 · 마케팅을 전부 혼자** 합니다.
v1(Firebase) → v2 → v3(Next.js + Prisma)로 세 번 다시 만들었고, 2026년 6월부터 Expo 앱을 함께 만들고 있습니다.

[웹 레포](https://github.com/ytw418/breeder_web) · 앱 레포는 비공개

### 숫자로 보면

| | |
|---|---|
| 🚀 배포 속도 | 운영 첫 태그 `web-v1.0.0`(10/6) → `web-v1.21.1`(10/14), **9일 동안 운영 배포 29번** |
| 🔥 최근 2주 | 웹 커밋 300+ · 앱 커밋 230+ (2026.09.30 ~ 10.14) |
| 🌐 웹 | 커밋 750+ · 머지 PR 220+ · 테스트 파일 197개 (Jest + Playwright E2E) |
| 📱 앱 | 커밋 270+ · 화면 60+ · Google Play 비공개 테스트 · App Store 심사 중 |
| 📝 기획 | 수용 기준(AC)이 있는 PRD 17개 · HTML 디자인 시안 17세트 |

<table>
  <tr>
    <td><img src="assets/bredy/01-home.jpg" alt="홈" width="240" /></td>
    <td><img src="assets/bredy/02-posts.jpg" alt="반려생활" width="240" /></td>
    <td><img src="assets/bredy/03-auctions.jpg" alt="경매" width="240" /></td>
  </tr>
  <tr>
    <td align="center">홈 — 우리 동네 브리더 · TOP 브리더</td>
    <td align="center">반려생활 — HOT 토론</td>
    <td align="center">경매</td>
  </tr>
</table>

### 만든 기능

- **기록 · 커뮤니티**: 사진과 글을 섞어 쓰는 블록 에디터(직접 구현, 앱·웹 같은 본문 포맷), HOT 토론, 안 본 글 표시, 질문 답변 알림
- **분양 · 경매**: 분양글 등록과 거래, 입찰·낙찰·유찰, 유찰·노쇼 뒤 같은 회차로 다시 시작
- **혈통카드**: 개체 혈통 기록, 정사각형 사진 자르기, 혈통에 분양글 연결
- **프로필**: 인스타그램형 사진 프로필(커버·앨범·사진 고정), '지금 분양 중' 줄, 거래 완료 수·활동 기간 신뢰 지표
- **우리 동네 브리더**: 위치는 동의한 사람만, 좌표는 저장하지 않고 시·군·구만 저장, 가까운 브리더 추천과 동네 인사
- **TOP 브리더 랭킹**: 게시글·댓글·입찰·낙찰·거래에 가중치를 준 점수, 활동에 맞춘 칭호(경매왕 · 혈통 부자 · 사진 맛집)
- **채팅 · 알림**: 1:1 채팅과 읽음 동기화, 날짜별로 묶은 알림 화면, FCM · Web Push
- **운영**: 관리자 페이지, 숨김·기간 정지·경고 제재와 이력, 신고 처리
- **로그인**: 카카오 · 구글 · 애플, 탈퇴 철회

### 어떻게 만들었나

**1. 웹과 앱을 혼자 같이 굴리는 구조**
- 웹은 Next.js 16 App Router + Prisma + PostgreSQL, 앱은 Expo SDK 56 + Expo Router + NativeWind입니다. 앱은 웹 API를 그대로 쓰고, JWT access/refresh 재발급은 single-flight로 묶었습니다.
- 화면 규칙(용어 변환, 본문 포맷, 알림 문구, 신뢰 지표 등)은 웹 `libs/shared`에 두고, 앱은 같은 파일 사본을 같은 테스트 케이스로 검증합니다.
- 커밋마다 `Parity: both | app-only | web-only` 트레일러를 훅으로 강제해 한쪽만 바뀐 화면이 남지 않게 했습니다. 경로 대조 스크립트로 웹·앱 라우트 일치율 100%를 유지합니다.

**2. 시안 → PRD → 구현**
- 화면마다 HTML 시안을 2~3안 만들고, 고른 안을 수용 기준(AC)이 있는 PRD로 정리한 뒤 구현합니다. 이 흐름으로 앱·웹 전체를 당근마켓 톤으로 다시 디자인했습니다.
- 라이트·다크·시스템 테마를 지원하고, 색은 토큰만 쓰도록 검사 스크립트로 막습니다.

**3. AI 에이전트와 사고 없이 일하기**
- 코드 대부분을 Claude Code 에이전트와 함께 씁니다. 대신 지켜야 할 규칙은 문서가 아니라 훅과 CI로 강제합니다.
- 에이전트가 dev DB를 비운 사고(2026.10.08)가 난 날, 위험한 DB 명령을 막는 훅과 그 테스트, 데이터를 지우는 마이그레이션은 표시가 없으면 빌드가 멈추는 CI 검사, 암호화한 일간 자동 백업을 붙였습니다.
- 화면 캡처가 없으면 PR 생성을 막는 훅과, 캡처를 공개 저장소에 올려 PR 표로 붙이는 스크립트를 만들었습니다.

**4. 빠르게 출시하고 숫자로 보기**
- dev → main 릴리스 PR이 품질 게이트를 통과하면 Vercel이 운영에 자동 배포합니다.
- EAS Build와 Google Play Developer API로 출시 노트·스토어 스크린샷 교체를 자동화했고, 스토어 제출 이미지도 스크립트로 찍습니다.
- PostHog 이벤트를 서버·웹·앱 한 기준표로 관리해 가입·기능 사용 흐름을 보고, Sentry로 오류를 추적합니다.
- Android R8을 켜 DEX 크기를 62MB → 25MB로 줄였습니다.

**5. 마케팅도 직접**
- [인스타그램](https://www.instagram.com/bredy_breeder/) · [스레드](https://www.threads.com/@bredy_breeder) · [네이버 블로그](https://blog.naver.com/bredy_team)를 운영합니다. 카드뉴스 제작부터 게시까지 Playwright로 자동화했습니다.
- 브리더에게 직접 인스타 DM으로 영업하고, '창립 브리더 No.001' 번호 뱃지로 초기 분양자를 모읍니다.
- 메타 광고를 집행하고, 위 배너 같은 스토어 이미지도 HTML로 직접 렌더링합니다.

---

## 하는 일

| 영역 | 주로 쓰는 것 |
|---|---|
| Frontend | React, Next.js(App Router), SvelteKit, TypeScript, Tailwind, react-query, SWR |
| Backend | Next.js API Routes, Prisma, PostgreSQL, iron-session, Vercel Serverless |
| Mobile | React Native(Expo), Expo Router, NativeWind, EAS Build, FCM |
| 운영 | PostHog, Sentry, Playwright E2E, Jest/Vitest, GitHub Actions |
| AI · AX | Claude Code, Codex, Gemini(Veo), Paseo 스케줄 에이전트, 자작 스킬 79개, 가드레일 훅, 토큰 비용 측정·절감 도구 |

## 그 밖의 프로젝트

### ralph-codex — AI 코딩 에이전트용 스펙 기반 실행 루프
[레포](https://github.com/ytw418/ralph-codex)

PRD를 읽기 전용 진실로 두고, 매 반복마다 새 프로세스로 에이전트를 실행하며, 테스트가 통과할 때만 커밋하는 무인 실행 컨트롤러입니다. 학습 내용은 append-only 파일에 쌓아 컨텍스트 오염 없이 누적됩니다.

### ytw418-agent-skills — Claude Code · Codex 스킬 모음
[레포](https://github.com/ytw418/ytw418-agent-skills)

실무에서 반복되던 작업을 스킬로 만든 것들입니다. 대표적으로:
- `pr-completion-loop`: PR 생성 후 검증·리뷰 봇 대응·CI·i18n 액션·스크린샷 첨부까지 머지 가능 상태가 될 때까지 반복
- `token-usage` / `token-diet`: 세션 기록에서 질문당 토큰 사용처를 집계하고, 미사용 MCP·스킬을 이력 대조로 정리
- `bredy-*`: 브리디 앱 배포, 스모크 테스트, PostHog 이벤트 추가, 인스타 영업 같은 서비스 운영 작업
- `deploy-*`, `worktree-*`, `session-search` 등 배포·워크트리·과거 세션 검색

### 그 외
- [NeoNews](https://nextneonews.vercel.app/) — 실시간 K-POP 뉴스 플랫폼 (개인)
- [도수리](https://www.dosuri.site/) — 도수치료 예약 서비스 (팀) · [Android](https://play.google.com/store/apps/details?id=com.ytw418.dosuriapp)

## 경력

**BHSN (앨리비)** · 2025.06 ~ 현재 · Frontend
AI 법률 에이전트와 전자서명·계약서 검토·작성·리뷰·이행관리를 하는 계약 관리 SaaS의 프론트엔드. 신규 AI 계약 앱 Cue의 목록·상세·전자서명·업로드 영역 FE 리드, 삼성SDS 법무시스템 참여(계약서 비교·전자결재), 통합 회원가입·SSO·결제. 머지 PR 352건. AI 에이전트 개발 워크플로우(스킬·규칙·비용 관리)를 팀에 도입.

**핀포인트** · 2023.08 ~ 2025.06 · Frontend
빌딩 관리 CMS ctrl.room. 상품·CS·방문자 초대 고도화, 변경내역·관리자메모 신규 개발. CS 데이터를 LLM에 보내 분석 리포트를 만드는 기능, Recoil 전역 모달 시스템, react-query 점진 도입.

**센슈얼모먼트** · 2022.06 ~ 2023.07 · Frontend
오디오·웹소설 플랫폼 플링 웹앱, 출판사·크리에이터 CMS, 백오피스. Next.js App Router에서 GraphQL 응답 캐싱으로 ISR 구현, i18n·SEO·성능 최적화.

**올맵** · 2021.04 ~ 2021.11 · Web / Hybrid App
자사·외주 웹사이트와 웹뷰 하이브리드 앱 개발.

## 요즘 관심사
- 브리디 앱 스토어 정식 출시와 초기 사용자 모으기 — 만드는 것만큼 알리는 것도 직접 실험 중
- AI 에이전트에게 일을 맡길 때 품질과 안전을 가르는 건 모델이 아니라 실데이터 검증과 강제되는 규칙이라는 것, 그걸 훅·CI로 만드는 방법
- 토큰 비용을 측정 가능하게 만들고 줄이기
