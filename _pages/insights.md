---
title: "Insights"
permalink: /insights/
layout: single
author_profile: false
---

<style>
.insight-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
  margin-top: 30px;
}

.insight-card {
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 20px;
}

.insight-thumb {
  width: 100%;
  height: 135px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #eeeeee;
  background: #f7f7f7;
  margin-bottom: 14px;
}

.insight-title {
  font-size: 21px;
  font-weight: 800;
  line-height: 1.45;
  margin: 0 0 10px 0;
}

.insight-title a {
  color: #444;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
}

.insight-excerpt {
  font-size: 15px;
  line-height: 1.7;
  color: #555;
  margin: 0 0 10px 0;
}

.insight-date {
  font-size: 13px;
  color: #999;
}

@media (max-width: 900px) {
  .insight-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .insight-grid {
    grid-template-columns: 1fr;
  }
}
</style>

여러 가지 인사이트를 정리한 글들입니다.

<div class="insight-grid">
{% assign insight_pages = site.insights | where_exp: "p", "p.date" | sort: "date" | reverse %}

{% for p in insight_pages %}
  <article class="insight-card">
    <a href="{{ p.url | relative_url }}">
      {% if p.header.teaser %}
        <img class="insight-thumb" src="{{ p.header.teaser | relative_url }}" alt="{{ p.title }}">
      {% elsif p.teaser %}
        <img class="insight-thumb" src="{{ p.teaser | relative_url }}" alt="{{ p.title }}">
      {% else %}
        <div class="insight-thumb"></div>
      {% endif %}
    </a>

    <h2 class="insight-title">
      <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
    </h2>

    {% if p.excerpt %}
      <p class="insight-excerpt">{{ p.excerpt | strip_html | truncate: 90 }}</p>
    {% endif %}

    <div class="insight-date">
      {{ p.date | date: "%Y.%m.%d" }}
    </div>
  </article>
{% endfor %}
</div>