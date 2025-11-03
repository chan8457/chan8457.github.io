---
title: "채용 플랫폼 지원 퍼널 진단 및 단계별 개선 제안"
excerpt: "구직자 여정 데이터를 기반으로 채용 퍼널 단계별 전환율 개선 전략 수립"
layout: single
classes: wide
author_profile: false
categories: [projects]
header:
  overlay_color: "#2b2b2b"
  overlay_filter: 0.3
  caption: "데이터 기반 사용자 퍼널 진단 및 개선 실험"
  actions:
    - label: "PDF 보고서 보기"
      url: /assets/docs/recruit-funnel.pdf
    - label: "분석 노트북 보기"
      url: /assets/notebooks/recruit-funnel.ipynb
---

## 프로젝트 개요  

스타트업·IT 전문 채용 플랫폼 **‘코드인’**의 퍼널 데이터를 분석하여,  
구직자의 지원 전환율을 높이기 위한 **핵심 전환 구간 진단 및 개선 실험**을 수행했습니다.  

전체 여정을 *사이트 방문 → 공고 열람 → 이력서 작성 → 지원 완료*의 퍼널로 정의하고,  
각 단계별 이탈 요인을 데이터 기반으로 파악했습니다.

| 항목 | 내용 |
|------|------|
| 기간 | 2024.05 ~ 2024.06 |
| 인원 | 팀 프로젝트 (4명) |
| 역할 | 데이터 전처리, 전환율 분석, 시각화, A/B 테스트 설계 |
| 기술 | Python(pandas, seaborn, matplotlib), SQL, PowerPoint |
| 데이터 | 구직자 로그, 채용 공고, 기업 정보 (2022~2023, 2년치) |

---

## 분석 과정  

### 1️⃣ 퍼널 구조 정의  
- 구직자의 여정을 “사이트 방문 → 공고 열람 → 이력서 작성 → 지원 완료”로 설정  
- 단계별 전환율 계산 → 최종 전환율 **19.9%**로 확인  
- 가장 큰 이탈은 **이력서 작성 → 지원 완료 구간**
<img src="/assets/images/recruit-funnel-overview.png" alt="전체 퍼널 구조" width="700">

> 방문→공고→이력서→지원 완료 단계별 전환율  
> **85% → 90% → 19.9%**


### 2️⃣ 방문 → 공고 열람  
- [경력 수준] 필터 사용량이 44.7% 감소  
- 회귀 분석 결과, 경력 수준 변수가 **전환율에 가장 큰 영향(β=1.15)**  
- ✅ 개선안: **경력 수준 세분화 (인턴/신입~1년/2~4년/5~8년/9년 이상)**  
  - 전환율: **71.6% → 77.9% (A/B 테스트 예측치)**  
<img src="/assets/images/recruit-funnel-filter-usage.png" alt="경력 수준 필터 사용량 변화" width="650">
<img src="/assets/images/recruit-funnel-abtest-career.png" alt="A/B 테스트 - 경력 필터 세분화" width="650">

> 경력 수준 필터 사용량이 **44.7% 감소**  
> A/B 테스트 결과, 전환율 **71.6% → 77.9% 상승 기대**


### 3️⃣ 공고 열람 → 이력서 작성  
- 스타트업 비중이 높아 신뢰도 판단 어려움 → 이탈 증가  
- 기업별 RFM 분석으로 활동성·조회수 기반 Top50 / Top100 기업 태그 부여  
- ✅ 개선안: **‘인기 기업 태그’ 표시로 탐색 피로 감소**  
  - 북마크 수 +56배, 지원 수 +84배(Top50 대비 일반 기업) 
<img src="/assets/images/recruit-funnel-topcompany.png" alt="Top50/100 기업 세그멘테이션" width="700">
<img src="/assets/images/recruit-funnel-beforeafter-companytag.png" alt="Before vs After: 기업 태그" width="700">

> Top50 기업은 일반 대비 **지원수 +84배**, **북마크수 +56배**  
> 신뢰도 높은 기업 우선 노출로 탐색 시간 절감
 

### 4️⃣ 이력서 작성 → 지원 완료  
- 세부 단계별 분석 결과 **Step4(마지막 페이지)**에서 이탈률 최고  
- ✅ 개선안: **지원 현황 박스 추가 (요약정보 시각화)**  
  - 전환율: **35.5% → 42.9% (A/B 테스트 예측)**  
<img src="/assets/images/recruit-funnel-resume-step4.png" alt="이력서 단계별 전환율" width="650">
<img src="/assets/images/recruit-funnel-abtest-statusbox.png" alt="A/B 테스트 - 지원 현황 박스 추가" width="700">

> Step4(이력서 마지막 페이지) 전환율 **35.5% → 42.9% 상승 기대**


---

## 주요 인사이트  

| 구간 | 문제 요약 | 개선 전략 | 효과 예측 |
|------|-------------|-------------|-------------|
| 방문 → 공고 열람 | 경력 필터 사용량 45%↓ | 경력 수준 세분화 | +6.3% 전환율 |
| 공고 열람 → 이력서 작성 | 기업 신뢰도 판단 어려움 | Top50/100 기업 태그 | 지원수 +84배 |
| 이력서 작성 → 지원 완료 | Step4 페이지 이탈 | 지원 현황 요약 박스 추가 | 전환율 +7.4% |

<img src="/assets/images/recruit-funnel-summary.png" alt="최종 인사이트 요약" width="750">

> 경력 필터 세분화, 기업 태그, 지원 현황 박스 추가  
> → **6개월 후 유저 MAU +36.9%, 기업 MAU +61.0% 상승 예측**


---

## 결과 요약  

- 단계별 A/B 테스트 설계 및 개선안 제안  
- 개선 적용 시, **6개월 뒤 유저 MAU 36.9%, 기업 MAU 61.0% 증가 추정**  
- 데이터 기반의 UX 개선으로 **플랫폼 활성화 지표 향상**

---

## 📎 참고자료  
- [프로젝트 보고서 (PDF)](/assets/docs/recruit-funnel.pdf)  
- [분석 노트북 (Jupyter)](/assets/notebooks/recruit-funnel.ipynb)
