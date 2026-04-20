---
title: "Insights"
permalink: /insights/
layout: single
author_profile: false
---

<style>
.insight-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 26px;
  margin-top: 30px;
}

.insight-card {
  background: #fff;
  border: 1px solid #eeeeee;
  border-radius: 16px;
  padding: 14px 14px 18px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.035);
}

.insight-thumb {
  width: 100%;
  height: 118px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid #eeeeee;
  background: #f7f7f7;
  margin-bottom: 13px;
}

.insight-title {
  font-size: 18px;
  font-weight: 800;
  line-height: 1.45;
  margin: 0 0 8px 0;
  letter-spacing: -0.045em;
}

.insight-title a {
  color: #333;
  text-decoration: none;
}

.insight-title a:hover {
  color: #9a743f;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.insight-excerpt {
  font-size: 14px;
  line-height: 1.65;
  color: #666;
  margin: 0 0 10px 0;
}

.insight-date {
  font-size: 12px;
  color: #aaa;
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