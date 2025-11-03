---
title: "머신러닝 기반 공유오피스 결제 유도 전략"
excerpt: "유저 행동 데이터를 기반으로 결제 전환 가능성을 예측하고, 회원권 개선안을 도출한 프로젝트"
layout: single
classes: wide
author_profile: false
categories: [projects]
header:
  overlay_color: "#2b2b2b"
  overlay_filter: 0.3
  caption: "공유오피스 체험 데이터 기반 유저 유형 분류 및 결제 예측"
  actions:
    - label: "PDF 보고서 보기"
      url: /assets/docs/office-payment.pdf
    - label: "분석 노트북 보기"
      url: /assets/notebooks/office-payment.ipynb
---

## 프로젝트 개요  

공유오피스 플랫폼의 **3일 무료체험 유저 로그 데이터**를 분석하여  
결제 전환을 유도할 수 있는 **핵심 행동 패턴과 회원권 전략**을 도출했습니다.  

| 항목 | 내용 |
|------|------|
| 기간 | 2024.06 ~ 2024.07 |
| 인원 | 팀 프로젝트 (3명) |
| 역할 | 데이터 통합 및 정제, 클러스터링, 분류모델 구축 |
| 기술 | Python(pandas, matplotlib, seaborn, LightGBM, GMM, KMeans), SQL |
| 데이터 | trial_register, trial_visit_info, trial_access_log, trial_payment, site_area |

---

## 분석 과정  

### 1️⃣ 데이터 전처리 및 통합
- 5개 테이블(trial_register, visit_info, access_log, payment, site_area) 통합  
- 중복 로그 및 비정상 입퇴실 제거  
- 입퇴실 시간 기반 파생변수 생성 (총 체류시간, 입·퇴실 시각, 주말방문비율 등)

---

### 2️⃣ 유저 유형 분석 (Clustering)
결제자와 비결제자를 구분해 각각 **3개 클러스터(K=3)** 로 분류함.  
모델 비교 결과 **KMeans (실루엣=0.93)** 선택.

| 결제자 유형 | 특징 | 전략 |
|--------------|------|------|
| 자주 방문형 | 짧게 자주 방문, 체류시간 길지 않음 | 장기 회원권 유도 |
| 평일 규칙형 | 평일 오전·오후 일정하게 방문 | 정기권 최적화 대상 |
| 주말 집중형 | 주말 몰아서 장시간 이용 | 주말 특화 요금제 타겟 |

| 비결제자 유형 | 특징 | 전략 |
|---------------|------|------|
| 주말 체험형 | 주말만 단기 체험 | 주말 전용 저가 요금제 제안 |
| 불만족형 | 하루만 체험 후 이탈 | 첫 체험 경험 개선 필요 |
| 고가치 체험형 | 체험량 많고 장시간 이용 | 결제 전환 타겟 |

<img src="/assets/images/office-cluster-summary.png" alt="유저 유형별 군집 결과" width="700">

> 결제자와 비결제자 모두 3개의 주요 군집(K=3)으로 분류  
> **KMeans 실루엣 계수 0.93**으로 가장 높은 설명력 확인


---

### 3️⃣ 결제 여부 예측 모델 (Classification)
다양한 모델을 비교한 결과, **LightGBM**이 가장 우수한 성능을 보임.

| 모델 | Accuracy | Precision | Recall | F1-score | ROC-AUC |
|------|-----------|------------|---------|-----------|----------|
| LightGBM | 0.5018 | 0.4263 | **0.8165** | 0.5601 | **0.6065** |
| CatBoost | 0.6207 | 0.5245 | 0.2518 | 0.3402 | 0.5996 |
| XGBoost | 0.6033 | 0.4854 | 0.3529 | 0.4087 | 0.5915 |
| RandomForest | 0.6152 | 0.5065 | 0.3694 | 0.4272 | 0.5912 |

> ✅ **결론:** Recall 중심의 모델로 결제 가능성이 높은 고객군을 놓치지 않도록 설계

<img src="/assets/images/office-model-comparison.png" alt="모델별 성능 비교" width="700">

> LightGBM이 **Recall 0.8165, ROC-AUC 0.6065**로 가장 우수한 성능을 보임  
> 결제 가능성이 높은 고객군을 놓치지 않도록 Recall 중심으로 설계


---

### 4️⃣ 주요 피처 중요도 (Feature Importance)

| 중요도 순위 | 변수명 | 의미 |
|--------------|--------|------|
| 1 | stay_hour_sum | 총 체류시간 |
| 2 | last_leave_hour | 마지막 퇴실 시각 |
| 3 | first_enter_hour | 최초 입실 시각 |
| 4 | mean_checkout_hour | 평균 퇴실 시각 |
| 5 | mean_checkin_hour | 평균 입실 시각 |

> **Insight:** 결제 전환에는 “얼마나 오래, 언제 이용하는가”가 핵심 변수임.

<img src="/assets/images/office-feature-importance.png" alt="LightGBM Feature Importance" width="650">
<img src="/assets/images/office-eda-staytime.png" alt="결제 여부별 체류시간 분포" width="650">
<img src="/assets/images/office-eda-checkinout.png" alt="입퇴실 시간대 분포" width="650">

> “얼마나 오래, 언제 이용하는가”가 결제 전환의 핵심 요인



---

## 주요 인사이트  

| 구분 | 내용 |
|------|------|
| 유저 패턴 | 전체 유저 중 주말 선호형 18%, 평일 선호형 29% |
| 결제 결정 요인 | 체류시간·입퇴실 시간대가 가장 큰 영향 |
| 비즈니스 전략 | 요일·시간대별 회원권 설계 (예: 주말 집중형, 평일 규칙형) |
| 서비스 개선 | ‘불만족형’ 유저의 첫 방문 경험 개선으로 전환율 향상 가능 |

<img src="/assets/images/office-insight-summary.png" alt="주요 인사이트 요약" width="750">

> 평일 선호형 29%, 주말 선호형 18%  
> → 요일·시간대별 **회원권 리디자인** 전략 제안


---

## 결과 요약  

- 유저를 행동 기반으로 6개 유형으로 분류하여 결제 전환 가능성 도출  
- LightGBM 모델을 활용한 예측 정확도 향상 (ROC-AUC 0.6065)  
- **체류시간, 입퇴실 시각 중심의 회원권 상품 리디자인 제안**

---

## 📎 참고자료
- [프로젝트 보고서 (PDF)](/assets/docs/office-payment.pdf)  
- [분석 노트북 (Jupyter)](/assets/notebooks/office-payment.ipynb)
