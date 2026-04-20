---
title: "Insights"
permalink: /insights/
layout: single
author_profile: false
classes: insights-page
---

<style>
.insight-intro {
  margin: 0 0 28px 0;
  font-size: 15px;
  line-height: 1.7;
  color: #444;
}

.insight-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
  margin-top: 28px;
  align-items: stretch;
}

.insight-card {
  height: 100%;
  min-height: 470px;
  display: flex;
  flex-direction: column;
  background: #fffdf8;
  border: 1px solid rgba(233, 228, 219, 0.9);
  border-radius: 18px;
  padding: 16px 16px 18px;
  box-shadow: 0 10px 28px rgba(70, 55, 35, 0.045);
  overflow: hidden;
}

.insight-card > a {
  display: block;
  line-height: 0;
}

.insight-thumb {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  height: auto;
  object-fit: contain;
  object-position: center;
  border-radius: 12px;
  border: 1px solid rgba(233, 228, 219, 0.9);
  background: #f7f4ee;
  margin-bottom: 20px;
  padding: 10px;
}

.insight-title {
  font-size: 20px !important;
  font-weight: 850 !important;
  line-height: 1.35 !important;
  margin: 0 0 12px 0 !important;
  padding-bottom: 12px !important;
  border-bottom: 1px solid #e9e4db !important;
  letter-spacing: -0.05em;
  min-height: 70px;
}

.insight-title a {
  color: #2f2f2f;
  text-decoration: none;
}

.insight-title a:hover {
  color: #9a743f;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.insight-excerpt {
  font-size: 14px;
  line-height: 1.7;
  color: #666;
  margin: 0 0 18px 0;
  min-height: 74px;
}

.insight-date {
  margin-top: auto;
  font-size: 12.5px;
  line-height: 1.3;
  color: #aaa;
}

@media (max-width: 1100px) {
  .insight-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .insight-grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .insight-card {
    min-height: auto;
  }

  .insight-thumb {
    aspect-ratio: 16 / 9;
    height: auto;
  }

  .insight-title,
  .insight-excerpt {
    min-height: auto;
  }
}
</style>

<p class="insight-intro">여러 가지 인사이트를 정리한 글들입니다.</p>

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