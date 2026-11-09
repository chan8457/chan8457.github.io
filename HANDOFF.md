# 포트폴리오 개편 — 작업 기록과 이어하기 가이드 (HANDOFF)

> 마지막 업데이트: 2026-11-08
> 다른 컴퓨터에서 이 파일 하나만 보고 이어서 작업할 수 있도록 정리한 문서입니다.
> Claude에게 이어서 시키려면 이 파일과 `CONTENT.md`를 먼저 읽게 하세요.

---

## 1. 프로젝트 목적

- 기존 포트폴리오(`https://chan8457.github.io/`, Jekyll + Minimal Mistakes)를 전면 개편
- 방향 전환: **데이터 분석가 → "AI를 잘 다루는 전문가" (AI 활용 파트타임·프리랜서)**
- 타깃: 외주·프리랜서 의뢰 담당자 + AI 활용 파트타임 채용 담당자 (둘 다)
- 가격 정보는 사이트에 넣지 않음
- 파머프렌즈 표기: **작업물 설명 등 본문 글에서는 "농산물 브랜드"**, **Résumé 회사 이력에서만 "파머프렌즈"** (결정 사항)
- 기존 데이터 분석 프로젝트는 삭제하지 않고 **별도 페이지(`analysis.html`)로 분리**
- 삭제한 것: GitHub 활동 요약·통계 카드, RSS/팔로우, 체중 감량 이야기, 생활기록부 이미지, 데이터 분석 중심 "현재 목표"

## 2. 핵심 메시지 (현재 적용된 안)

- 메인 멘트: **AI를 다루는 실력, 결과로 보여드립니다.** (이전 안: "결과물의 완성도까지 책임지고, 반복되는 일은 자동화합니다.")
- 포지션 표기: 로고 **조성찬 · AI 활용 전문가**, 히어로 상단 배지(AI Specialist / AI활용지도사 1급 / GA4 인증)
- About 제목: "AI를 쓰는 사람은 많습니다. 하지만 잘 다루는 사람은 많지 않습니다."
- 차별점(About 4가지): ① 완성도(AI 티 안 나게 다듬기) ② 작업에 맞는 도구 선택·조합 ③ 반복되는 일의 자동화로 효율 향상(과하지 않게, 판단 단계는 사람) ④ 기록·재현
- 톤 결정: 자동화는 "끝까지/전부" 같은 극단 표현을 쓰지 않고 "효율을 위해"로 표현
- 히어로 통계 숫자(작업물 수 등)는 삭제하고 그 자리에 버튼(작업물 보기/함께 일하기) 배치

## 3. 파일 위치

### 3-1. 새 포트폴리오 (작업 폴더)

`C:\Users\jscro\Desktop\조성찬\포폴\`

```
포폴/
├─ index.html        메인 페이지 (Hero, About, Selected, Works, Résumé, Contact)
├─ analysis.html     데이터 분석 프로젝트 별도 페이지
├─ style.css         전체 스타일 (색상 변수는 맨 위 :root)
├─ main.js           동작 (작업물 렌더링, 필터, 모달, 스크롤 연출)
├─ data/
│  └─ works.js       ★ 작업물 데이터 (WORKS, ANALYSIS, CATS)
├─ assets/           이미지·영상을 넣을 폴더 (현재 비어 있음)
├─ CONTENT.md        사이트 전체 텍스트를 섹션별로 정리한 문서
└─ HANDOFF.md        이 문서
```

### 3-2. 기존 포트폴리오 소스 (참고용, 수정하지 않음)

`C:\Users\jscro\Desktop\조성찬\github\chan8457.github.io\`
- `_pages/about.md` — 이력, 자격증, 자기소개 원문
- `_pages/contact.md` — 연락처 원문
- `_pages/projects/*.md` — 기존 프로젝트 8개 원문 (ai-ad-operations-optimization, ai-creative-works, bike-analysis, office-payment-predict, recruit-funnel, smartstore-citrus-commerce, travel-assistant, votee-analysis)
- `_insights/*.md` — 기존 Insights 글 4개 (새 방향과 맞지 않아 이번 버전에서는 미사용)
- `portfolio_pdf/` — 기존 PDF 포트폴리오
- `_config.yml` — 기존 프로필·링크 설정

### 3-3. 작업물 소재 출처 (사이트 문구의 근거 자료)

| 작업물 | 출처 |
|---|---|
| 댓글 자동 DM | Notion `성찬의 노션 / 자동화 모음 / 자동 DM` |
| 네이버 블로그 자동 작성 도구 | Notion `자동화 모음 / 네이버 블로그 자동 작성 툴 제작 프롬프트 (범용)` |
| 회사 전담 AI 위키 · 일일 브리핑 | GitHub `chan8457/chan-ai-wiki` (`CLAUDE.md`, `02_AI_Wiki/`, `02_AI_Wiki/log.md`) — "찬위키". Drive 사본도 있음 |
| 블로그 제작 멀티에이전트 | 같은 저장소 `도레미_블로그_자동화/` (`README.md`, `.claude/agents/`) |
| 월간 편지 도구 | 같은 저장소 `03_Templates/도레미_월간편지_템플릿/` |
| 후기 카드 생성기 | 같은 저장소 `03_Templates/리뷰카드_생성.py`, `리뷰카드_웹생성기.html` |
| 상세페이지 템플릿·AI 문구 프롬프트 | 같은 저장소 `03_Templates/상품_상세페이지_디자인템플릿.html`, `04_산출물/03_제작/AI_문구생성_프롬프트.md` |
| CRM 캠페인 전략·RFM 보고서 | 같은 저장소 `04_산출물/04_완성본/01_보고서/` |
| Threads 운영 SOP | Drive `스레드_운영_SOP.md`, `스레드_게시글_원본.md` |
| 추석 AI 영상, 포토리얼 프롬프트, 상세페이지 모듈, 릴스, 감귤 농가 | 이전 대화 기록(Claude 메모리) 기반 — 상세 보강 필요 |

## 4. 현재 진행 상태

### 완료
- [x] 기존 사이트 구조 분석, 새 구조·방향 확정
- [x] v1 프로토타입 제작 (Hero 헤드라인 모션, 도구 마퀴, 스크롤 진행 바, Selected 카드 스택, Works 필터+상세 패널, Résumé, Contact)
- [x] 히어로 개편(통계 삭제, 배지·버튼 재배치), 로고 문구, About 제목·원칙 수정 (2026-11-08)
- [x] chan-ai-wiki 저장소 기반 작업물 추가·보강 (블로그 파이프라인, 월간 편지, 후기 카드, CRM 전략 신규 / AI 위키, 상세페이지, Threads 보강), 카테고리 `데이터·리포트` 추가
- [x] 색상 변경: 어두운 배경 → **파스텔 블루** (히어로 `#dbe9ff→#c9dcff`, Selected `#dbe8ff`, Contact `#c6dbff`, 포인트 `#2f55e6`)
- [x] 메인 멘트·About·Résumé·Contact를 새 방향으로 전면 수정 (기존 이력·자격증 이식)
- [x] 이력 확정 반영: 파머프렌즈 2026.06.19~2026.10.31 팀장 / 한국고용플랫폼 유한회사 2025.12.09~2026.04.03 매니저 (현재 재직 중인 곳 없음)
- [x] 데스크톱·모바일 폭 렌더링 확인, JS 오류 없음
- [x] `CONTENT.md`, `HANDOFF.md` 작성

### 미완료 (다음에 할 일)
- [ ] Résumé 빈칸: 빅데이터학과 학교명, 재학/졸업 여부 (이력 기간·직급은 입력 완료)
- [ ] chan-ai-wiki 저장소의 이미지(카드뉴스, 월간편지 시안, 카페 대문, 후기 카드 등)를 포폴에 쓸지 결정 — 브랜드 로고·고객 정보 노출 여부 확인 필요
- [ ] **작업물의 실제 이미지·영상 연결**: 파일을 `assets/`에 넣고 `data/works.js`의 `media: []`에 경로 추가
- [ ] **상세 작성 중인 작업물 보강** (`draft: true`): 상세페이지 모듈, 릴스 제작, 감귤 농가, 스케치업 Ruby, 게임 클랜 자동화·사이트·이미지, 스마트스토어
- [ ] 스케치업 Ruby 작업은 연도와 설명이 비어 있음 (고다희 폴더 자료 참고 가능)
- [ ] `analysis.html`의 프로젝트별 상세 페이지 이식 (기존 `_pages/projects/*.md` 기반)
- [ ] 프로필 사진 추가 여부 결정 (기존: `assets/images/profile.png`)
- [ ] Open Graph 공유 이미지 추가 (카카오톡·SNS 미리보기)
- [ ] 배포 방식 결정 (아래 6번)
- [ ] 마지막 점검: 모바일 실기기, 접근성, 로딩 속도

## 5. 작업 방법 (다른 컴퓨터에서 이어하기)

### 5-1. 폴더 옮기기
이 컴퓨터의 폴더는 클라우드로 동기화되어 있지 않습니다. 다음 중 하나로 옮기세요.
- `포폴` 폴더 전체를 USB·클라우드(드라이브)로 복사
- 또는 GitHub 저장소에 올려서 다른 컴퓨터에서 clone (4번 이후 6번 참고)

### 5-2. 미리보기
- `index.html`을 더블클릭하면 브라우저에서 바로 열림 (서버 불필요, 데이터가 `works.js`라 로컬에서도 동작)
- 글꼴(Pretendard)은 CDN이라 인터넷 연결이 필요함

### 5-3. 자주 하는 수정
| 하고 싶은 것 | 어디를 고치나 |
|---|---|
| 작업물 추가·수정 | `data/works.js`의 `WORKS` 배열에 객체 추가 |
| 작업물 이미지/영상 | `assets/`에 파일 넣고 해당 작업의 `media: ["assets/파일명"]` |
| 대표 작업(Selected) 변경 | 해당 작업의 `featured: true/false` |
| 상세 미완성 표시 끄기 | 해당 작업의 `draft: true` 삭제 |
| 카테고리 이름 | `data/works.js`의 `CATS` |
| 헤드라인·About·Résumé·Contact 문구 | `index.html` (섹션 위치는 `CONTENT.md` 참고) |
| 색상 | `style.css` 맨 위 `:root` (`--dark` 배경 블루, `--accent` 포인트, `--hl` 형광펜) |
| 도구 마퀴 | `main.js`의 `tools` 배열 |
| 분석 프로젝트 목록 | `data/works.js`의 `ANALYSIS` 배열 |

작업물 객체 형식:
```js
{ id:"영문-id", title:"제목", cat:"ai-media|automation|commerce|content|dev",
  year:"2026", featured:false, org:"농산물 브랜드",
  summary:"한 줄 요약", problem:"문제", process:["과정1","과정2"],
  result:"결과", tools:["도구"], media:["assets/파일.jpg"], draft:false }
```

### 5-4. Claude에게 이어서 시킬 때
1. 새 대화에서 `포폴` 폴더를 연결(폴더 접근 허용)
2. "HANDOFF.md와 CONTENT.md를 읽고 이어서 작업해줘"라고 요청
3. 필요한 소재(Notion 자동화 모음, Drive 위키)는 Claude에게 커넥터로 읽게 하면 됨

## 6. 배포 계획 (미정)

- 기존 저장소: `chan8457/chan8457.github.io` (Jekyll, GitHub Pages)
- 새 사이트는 빌드가 필요 없는 정적 파일이라 **저장소 루트에 파일을 그대로 올리면 배포됨**
- 주의: 기존 Jekyll 파일(`_config.yml`, `_pages` 등)이 남아 있으면 충돌할 수 있음
  - 방법 A: 새 브랜치에서 기존 파일을 정리하고 새 파일만 두기 (기존은 브랜치로 보존)
  - 방법 B: 새 저장소를 만들어 별도 주소로 먼저 공개해 보기
- 결정 후 진행. **아직 GitHub에는 아무것도 올리지 않았음**

## 7. 디자인 결정 기록

- 분위기: 밝고 세련된 에디토리얼, 큰 타이포, 스크롤 연출 (기업·고객 둘 다 보기 때문에 호불호가 적은 쪽 선택)
- 색: 파스텔 블루 배경 + 먹색 글자 + 선명한 블루 포인트, 본문 영역은 따뜻한 오프화이트(`#f5f3ee`)
- 글꼴: Pretendard Variable (CDN)
- 스크롤 연출: 헤드라인 줄 단위 등장, 섹션 등장, 히어로 글로우 패럴랙스, 스크롤 진행 바, Selected 카드 겹쳐 쌓이기, 마퀴
- 접근성: `prefers-reduced-motion` 설정 시 애니메이션 제거, 모달 ESC 닫기, 키보드 포커스 지원
- 작업물 카드 대표 이미지가 없을 때는 카테고리 색 그라데이션으로 대체 (이미지 넣으면 자동 교체)

## 8. 알려진 사항

- 사이트 이메일·SNS는 기존 사이트에 공개되어 있던 값(jscro@naver.com, LinkedIn, Instagram `__ch_an.97`, GitHub `chan8457`)을 사용
- 아직 사실 확인이 안 된 작업물(상세페이지 모듈, 릴스, 감귤 농가)은 `draft: true`로 표시되어 "상세 작성 중" 안내가 뜸
- 사이트 문구에는 근거 없는 수치를 넣지 않았음 (히어로의 작업물 수·영역 수는 데이터 개수에서 자동 계산)

## 배포 (2026-11-08 결정)
- 목표: https://chan8457.github.io/ 를 이 포트폴리오로 교체하고 이후 계속 업데이트.
- 이 포폴 폴더 내용(index.html, analysis.html, style.css, main.js, data/, assets/)을 `chan8457/chan8457.github.io` 저장소 루트에 넣고 기존 Jekyll 파일(_config.yml, Gemfile, _pages 등)은 제거한 뒤 main 브랜치에 push. CONTENT.md/HANDOFF.md는 올리지 않아도 됨.
- 현재 상태: 클라우드 세션의 GitHub 앱 권한이 없어 push 불가(Claude GitHub App 설치 필요). 로컬 PC에서 git/GitHub Desktop으로 push하면 즉시 가능.
- 업데이트 방식: `data/works.js`에 항목 추가 + 이미지는 `assets/<작업명>/`에 넣고 media에 경로 기록 → push.
## 이미지 처리 규칙
- 결과물 이미지는 반드시 넣는다. 브랜드명·로고·얼굴은 모자이크 후 사용.
- 스마트스토어 상세페이지 12장: `assets/smartstore/` (cover.jpg + detail-01~12.jpg, 모자이크 적용본).
- 육절기 마감일지(slicer-log): 샤브샤브 매장 의뢰 작업. 사이트 주소·브랜드명 비공개, 담당자 이름 모자이크. 이미지 `assets/slicer/`.
- 스케치업 Ruby 부품 수량 집계기(sketchup-ruby): 도면 작업자 의뢰, 이미지 `assets/sketchup/`(모델명 모자이크). 도구 태그 AI는 Claude로 가정 — 확인 필요.
- 실제 상품 사진 기반 AI 이미지(product-ai-images): assets/ai-product/, 프로모션 로고 모자이크. 도구는 GPT Image.
- 게임 클랜 웹앱(game-clan): 게임 클랜 웹앱 (클랜명·게임명 비공개), ChatGPT 사용, 닉네임 모자이크, assets/iuv/. 접속 주소 미기재.

## Works 섹션 구조 (2026-11-09 변경)
- 사진(media) 있는 작업만 카드로 표시, 사진 없는 작업은 "그 밖의 작업 N건 보기" 접이식 목록(클릭 시 상세 모달).
- `draft: true`이고 사진 없는 작업(릴스)은 목록에서 숨김. 사진을 `media`에 추가하면 자동으로 카드로 승격됨.
- Selected(대표 4개): smartstore, slicer-log, sketchup-ruby, game-clan, review-card (`ORDER` 배열은 main.js).
