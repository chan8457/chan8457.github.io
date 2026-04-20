import pandas as pd
import streamlit as st
from pathlib import Path

st.set_page_config(
    page_title="광고 운영 성과 모니터링 대시보드",
    page_icon="📊",
    layout="wide",
)

DATA_PATH = Path(__file__).resolve().parents[1] / "data" / "sample_ad_performance.csv"

@st.cache_data
def load_data():
    df = pd.read_csv(
        DATA_PATH,
        encoding="utf-8-sig",
        encoding_errors="replace"
    )
    df["date"] = pd.to_datetime(df["date"])
    return df

df = load_data()

st.title("📊 광고 운영 성과 모니터링 대시보드")
st.caption("실제 회사 데이터가 아닌, 동일한 업무 구조를 재현한 샘플 데이터 기반 대시보드입니다.")

st.markdown(
    """
    이 대시보드는 고객사별 광고비, 지원자 수, 클릭률, 가용 인원, 면접 참석 수를 함께 확인하여
    광고비 대비 실제 채용 진행 가능성이 높은 고객사를 파악하는 것을 목표로 합니다.
    """
)

with st.expander("주요 용어 설명"):
    st.markdown(
        """
        - **지원자 수**: 공고를 보고 지원한 전체 인원
        - **가용 인원**: 연락 가능하거나 조건이 맞아 실제 면접 안내가 가능한 지원자
        - **비가용 인원**: 연락 불가, 조건 불일치, 중복 지원 등으로 실제 진행이 어려운 지원자
        - **면접 참석 수**: 면접 안내 이후 실제 면접에 참석한 인원
        - **지원당 비용**: 광고비를 지원자 수로 나눈 값
        - **가용 인원당 비용**: 광고비를 가용 인원 수로 나눈 값
        """
    )

st.sidebar.header("필터")

company_options = sorted(df["company"].unique())
selected_companies = st.sidebar.multiselect(
    "고객사 선택",
    options=company_options,
    default=company_options,
)

phase_options = ["Before", "Test", "After"]
selected_phases = st.sidebar.multiselect(
    "운영 단계",
    options=phase_options,
    default=phase_options,
)

date_min = df["date"].min()
date_max = df["date"].max()

selected_date_range = st.sidebar.date_input(
    "기간 선택",
    value=(date_min, date_max),
    min_value=date_min,
    max_value=date_max,
)

if len(selected_date_range) == 2:
    start_date = pd.to_datetime(selected_date_range[0])
    end_date = pd.to_datetime(selected_date_range[1])
else:
    start_date = date_min
    end_date = date_max

filtered_df = df[
    (df["company"].isin(selected_companies)) &
    (df["optimization_phase"].isin(selected_phases)) &
    (df["date"].between(start_date, end_date))
].copy()

total_spend = filtered_df["ad_spend"].sum()
total_applicants = filtered_df["applicants"].sum()
total_available = filtered_df["available_candidates"].sum()
total_unavailable = filtered_df["unavailable_candidates"].sum()
total_interviews = filtered_df["interviews"].sum()
total_clicks = filtered_df["clicks"].sum()
total_impressions = filtered_df["impressions"].sum()

avg_ctr = total_clicks / total_impressions * 100 if total_impressions > 0 else 0
avg_cpa = total_spend / total_applicants if total_applicants > 0 else 0
avg_cost_per_available = total_spend / total_available if total_available > 0 else 0
available_rate = total_available / total_applicants * 100 if total_applicants > 0 else 0

col1, col2, col3, col4 = st.columns(4)
col1.metric("총 광고비", f"{total_spend:,.0f}원")
col2.metric("총 지원자 수", f"{total_applicants:,.0f}명")
col3.metric("가용 인원 수", f"{total_available:,.0f}명")
col4.metric("평균 CTR", f"{avg_ctr:.2f}%")

col1, col2, col3, col4 = st.columns(4)
col1.metric("비가용 인원 수", f"{total_unavailable:,.0f}명")
col2.metric("면접 참석 수", f"{total_interviews:,.0f}명")
col3.metric("지원당 비용", f"{avg_cpa:,.0f}원")
col4.metric("가용 인원당 비용", f"{avg_cost_per_available:,.0f}원")

st.caption(f"전체 지원자 중 가용 인원 비율: {available_rate:.2f}%")

st.divider()

daily_df = (
    filtered_df
    .groupby("date", as_index=False)
    .agg({
        "ad_spend": "sum",
        "applicants": "sum",
        "available_candidates": "sum",
        "unavailable_candidates": "sum",
        "interviews": "sum",
        "clicks": "sum",
        "impressions": "sum",
    })
)

daily_df["ctr"] = daily_df["clicks"] / daily_df["impressions"] * 100
daily_df["cost_per_applicant"] = daily_df["ad_spend"] / daily_df["applicants"].replace(0, pd.NA)
daily_df["cost_per_available_candidate"] = daily_df["ad_spend"] / daily_df["available_candidates"].replace(0, pd.NA)

left, right = st.columns(2)

with left:
    st.subheader("일자별 지원 흐름")
    st.line_chart(
        daily_df.set_index("date")[[
            "applicants",
            "available_candidates",
            "unavailable_candidates",
            "interviews",
        ]]
    )

with right:
    st.subheader("일자별 광고비 변화")
    st.line_chart(
        daily_df.set_index("date")[["ad_spend"]]
    )

left, right = st.columns(2)

with left:
    st.subheader("일자별 CTR 변화")
    st.line_chart(
        daily_df.set_index("date")[["ctr"]]
    )

with right:
    st.subheader("일자별 비용 효율 변화")
    st.line_chart(
        daily_df.set_index("date")[[
            "cost_per_applicant",
            "cost_per_available_candidate",
        ]]
    )

st.divider()

st.subheader("고객사별 성과 요약")

company_summary = (
    filtered_df
    .groupby("company", as_index=False)
    .agg({
        "ad_spend": "sum",
        "impressions": "sum",
        "clicks": "sum",
        "applicants": "sum",
        "available_candidates": "sum",
        "unavailable_candidates": "sum",
        "interviews": "sum",
    })
)

company_summary["ctr"] = company_summary["clicks"] / company_summary["impressions"] * 100
company_summary["apply_rate"] = company_summary["applicants"] / company_summary["clicks"].replace(0, pd.NA) * 100
company_summary["available_rate"] = company_summary["available_candidates"] / company_summary["applicants"].replace(0, pd.NA) * 100
company_summary["cost_per_applicant"] = company_summary["ad_spend"] / company_summary["applicants"].replace(0, pd.NA)
company_summary["cost_per_available_candidate"] = company_summary["ad_spend"] / company_summary["available_candidates"].replace(0, pd.NA)
company_summary["applicants_per_10k_won"] = company_summary["applicants"] / company_summary["ad_spend"] * 10000

company_summary = company_summary.sort_values("cost_per_available_candidate", ascending=True)

st.dataframe(
    company_summary.style.format({
        "ad_spend": "{:,.0f}원",
        "impressions": "{:,.0f}",
        "clicks": "{:,.0f}",
        "applicants": "{:,.0f}",
        "available_candidates": "{:,.0f}",
        "unavailable_candidates": "{:,.0f}",
        "interviews": "{:,.0f}",
        "ctr": "{:.2f}%",
        "apply_rate": "{:.2f}%",
        "available_rate": "{:.2f}%",
        "cost_per_applicant": "{:,.0f}원",
        "cost_per_available_candidate": "{:,.0f}원",
        "applicants_per_10k_won": "{:.2f}명",
    }),
    use_container_width=True,
)

st.divider()

st.subheader("운영 효율 진단")

diagnosis_df = company_summary.copy()

cost_threshold_high = diagnosis_df["cost_per_available_candidate"].quantile(0.67)
cost_threshold_low = diagnosis_df["cost_per_available_candidate"].quantile(0.33)
available_rate_threshold = diagnosis_df["available_rate"].median()

def classify_status(row):
    if row["cost_per_available_candidate"] <= cost_threshold_low and row["available_rate"] >= available_rate_threshold:
        return "효율 우수"
    if row["cost_per_available_candidate"] >= cost_threshold_high or row["available_rate"] < available_rate_threshold:
        return "개선 필요"
    return "관찰 필요"

diagnosis_df["status"] = diagnosis_df.apply(classify_status, axis=1)

st.dataframe(
    diagnosis_df[[
        "company",
        "status",
        "ad_spend",
        "applicants",
        "available_candidates",
        "available_rate",
        "ctr",
        "cost_per_applicant",
        "cost_per_available_candidate",
    ]].style.format({
        "ad_spend": "{:,.0f}원",
        "applicants": "{:,.0f}명",
        "available_candidates": "{:,.0f}명",
        "available_rate": "{:.2f}%",
        "ctr": "{:.2f}%",
        "cost_per_applicant": "{:,.0f}원",
        "cost_per_available_candidate": "{:,.0f}원",
    }),
    use_container_width=True,
)

st.info(
    "해당 대시보드는 광고비를 단순 지출 금액으로만 보지 않고, "
    "지원자 수, 가용 인원, CTR, 지원당 비용, 가용 인원당 비용을 함께 확인하여 "
    "고객사별 광고 운영 효율을 비교하는 것을 목표로 합니다."
)
