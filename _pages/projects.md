---
title: "Projects"
permalink: /projects/
layout: single
author_profile: false
---

<style>
.project-list {
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-top: 30px;
}

.project-card {
  display: flex;
  gap: 22px;
  padding: 22px 0;
  border-bottom: 1px solid #e5e5e5;
  align-items: flex-start;
}

.project-thumb {
  width: 220px;
  min-width: 220px;
  height: 135px;
  border-radius: 12px;
  object-fit: cover;
  border: 1px solid #eeeeee;
  background: #f7f7f7;
}

.project-info {
  flex: 1;
}

.project-title {
  font-size: 24px;
  font-weight: 800;
  margin: 0 0 8px 0;
  line-height: 1.35;
}

.project-title a {
  color: #444;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
}

.project-excerpt {
  font-size: 16px;
  line-height: 1.7;
  color: #555;
  margin: 0 0 10px 0;
}

.project-date {
  font-size: 13px;
  color: #999;
}

@media (max-width: 768px) {
  .project-card {
    flex-direction: column;
  }

  .project-thumb {
    width: 100%;
    height: auto;
    min-width: 0;
  }

  .project-title {
    font-size: 21px;
  }
}
</style>

프로젝트 목록입니다.

<div class="project-list">
{% assign projects = site.pages | where_exp: "page", "page.categories contains 'projects'" | sort: "date" | reverse %}

{% for project in projects %}
  <div class="project-card">
    {% if project.header.teaser %}
      <a href="{{ project.url | relative_url }}">
        <img 
          class="project-thumb"
          src="{{ project.header.teaser | relative_url }}" 
          alt="{{ project.title }}"
        >
      </a>
    {% else %}
      <a href="{{ project.url | relative_url }}">
        <div class="project-thumb"></div>
      </a>
    {% endif %}

    <div class="project-info">
      <h2 class="project-title">
        <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
      </h2>

      {% if project.excerpt %}
        <p class="project-excerpt">{{ project.excerpt }}</p>
      {% endif %}

      {% if project.date %}
        <div class="project-date">
          {{ project.date | date: "%Y.%m.%d" }}
        </div>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>