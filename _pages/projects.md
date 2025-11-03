---
title: "Projects"
permalink: /projects/
layout: single
author_profile: false
---

프로젝트 목록입니다.

{% assign project_pages = site.pages | where_exp: "p", "p.categories contains 'projects'" %}
{% if project_pages.size > 0 %}
  <div class="entries-grid">
  {% for p in project_pages %}
    <article class="archive__item">
      <h2 class="archive__item-title">
        <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
      </h2>
      {% if p.excerpt %}
        <p class="archive__item-excerpt">{{ p.excerpt }}</p>
      {% endif %}
    </article>
  {% endfor %}
  </div>
{% else %}
  아직 등록된 프로젝트가 없습니다.
{% endif %}
