---
title: "Contact"
permalink: /contact/
layout: single
author_profile: false
---

<style>
.contact-wrap {
  max-width: 760px;
  margin-top: 10px;
}

.contact-intro {
  background: #ffffff;
  border: 1px solid #eee8df;
  border-radius: 20px;
  padding: 30px 32px;
  margin: 24px 0 28px 0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.035);
}

.contact-intro h2 {
  font-size: 26px;
  font-weight: 850;
  line-height: 1.35;
  letter-spacing: -0.055em;
  color: #222;
  margin: 0 0 12px 0;
  border-bottom: none;
  padding-bottom: 0;
}

.contact-intro p {
  font-size: 15px;
  line-height: 1.75;
  color: #555;
  margin: 0;
}

.contact-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.contact-list li {
  margin: 0;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 17px;
  padding: 18px 20px;
  text-decoration: none !important;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.03);
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}

.contact-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 9px 24px rgba(0, 0, 0, 0.055);
  border-color: #d9c6a7;
}

.contact-icon {
  width: 42px;
  height: 42px;
  min-width: 42px;
  border-radius: 13px;
  background: #f6f0e7;
  color: #8a6d3b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.contact-label {
  font-size: 12px;
  font-weight: 850;
  letter-spacing: 0.04em;
  color: #9a743f;
  margin-bottom: 4px;
}

.contact-value {
  font-size: 16px;
  font-weight: 750;
  color: #333;
  word-break: break-all;
}

.contact-desc {
  margin-top: 4px;
  font-size: 13.5px;
  line-height: 1.55;
  color: #777;
}

.contact-note {
  margin-top: 24px;
  padding: 16px 18px;
  border-radius: 14px;
  background: #faf8f3;
  border: 1px solid #eee3d3;
  color: #555;
  font-size: 14px;
  line-height: 1.7;
}

@media (max-width: 720px) {
  .contact-intro {
    padding: 25px 23px;
  }

  .contact-intro h2 {
    font-size: 23px;
  }

  .contact-card {
    padding: 16px;
  }
}
</style>

<div class="contact-wrap">

  <div class="contact-intro">
    <h2>궁금한 점이 있다면<br>편하게 연락 주세요.</h2>
    <p>
      포트폴리오, 프로젝트, 경력 관련 문의는 아래 채널로 연락 부탁드립니다.<br>
      확인 후 가능한 빠르게 답변드리겠습니다.
    </p>
  </div>

  <ul class="contact-list">
    <li>
      <a class="contact-card" href="mailto:jscro@naver.com">
        <span class="contact-icon"><i class="fas fa-envelope"></i></span>
        <span class="contact-info">
          <span class="contact-label">EMAIL</span>
          <span class="contact-value">jscro@naver.com</span>
          <span class="contact-desc">가장 빠르게 확인하는 연락 채널입니다.</span>
        </span>
      </a>
    </li>

    <li>
      <a class="contact-card" href="https://github.com/chan8457" target="_blank">
        <span class="contact-icon"><i class="fab fa-github"></i></span>
        <span class="contact-info">
          <span class="contact-label">GITHUB</span>
          <span class="contact-value">github.com/chan8457</span>
          <span class="contact-desc">프로젝트 코드와 포트폴리오 작업물을 정리하고 있습니다.</span>
        </span>
      </a>
    </li>

    <li>
      <a class="contact-card" href="https://www.linkedin.com/in/chan8457" target="_blank">
        <span class="contact-icon"><i class="fab fa-linkedin"></i></span>
        <span class="contact-info">
          <span class="contact-label">LINKEDIN</span>
          <span class="contact-value">linkedin.com/in/chan8457</span>
          <span class="contact-desc">경력과 프로젝트 이력을 확인할 수 있습니다.</span>
        </span>
      </a>
    </li>

    <li>
      <a class="contact-card" href="https://discord.com/users/328549211727724545" target="_blank">
        <span class="contact-icon"><i class="fab fa-discord"></i></span>
        <span class="contact-info">
          <span class="contact-label">DISCORD</span>
          <span class="contact-value">chan_97.</span>
          <span class="contact-desc">필요 시 디스코드로도 연락 가능합니다.</span>
        </span>
      </a>
    </li>
  </ul>

  <div class="contact-note">
    연락처는 포트폴리오 확인 및 프로젝트 관련 문의를 위한 용도로 정리했습니다.
  </div>

</div>