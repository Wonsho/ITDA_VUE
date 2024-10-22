<script setup>

</script>

<template>
  <main class="container">
    <h1 style="display: none;">공지사항의 메인</h1>
    <div class="notice-main-head">
      <h1>공지사항</h1>
    </div>
    <div class="home_tab_search-content">
      <form action="GET"  id="seach-form">
        <label for="seach-bar" style="visibility: hidden;"></label>
        <input type="text" id="seach-bar" placeholder="검색">
        <button type="submit" id="search-btn"></button>
      </form>
    </div>
    <ul class="notice-list">
      <!-- 공지사항 항목들 -->
      <a href="">
        <li class="notice-item">
          <div class="notice-content">
            <h2 class="notice-title">업데이트 공지입니다.</h2>
            <p>2024-09-02 기준 업데이트가 진행되었습니다. 해당 업데이트는 다음과 같습니다. 부트캠프 진행도 업데이트 ....</p>
            <div>
              <span class="notice-date">2024-02-01</span>
            </div>
          </div>
          <img src="../image/image.png" alt="공지 이미지" class="notice-image">
        </li>
      </a>
      <a href="">
        <li class="notice-item">
          <div class="notice-content">
            <h2 class="notice-title">업데이트 공지입니다.</h2>
            <p>2024-09-02 기준 업데이트가 진행되었습니다. 해당 업데이트는 다음과 같습니다. 부트캠프 진행도 업데이트 ....</p>
            <div>
              <span class="notice-date">2024-02-01</span>
            </div>
          </div>
          <img src="../image/image.png" alt="공지 이미지" class="notice-image">
        </li>
      </a>
      <a href="">
        <li class="notice-item">
          <div class="notice-content">
            <h2 class="notice-title">업데이트 공지입니다.</h2>
            <p>2024-09-02 기준 업데이트가 진행되었습니다. 해당 업데이트는 다음과 같습니다. 부트캠프 진행도 업데이트 ....</p>
            <div>
              <span class="notice-date">2024-02-01</span>
            </div>
          </div>
          <img src="../image/image.png" alt="공지 이미지" class="notice-image">
        </li>
      </a>
      <a href="">
        <li class="notice-item">
          <div class="notice-content">
            <h2 class="notice-title">업데이트 공지입니다.</h2>
            <p>2024-09-02 기준 업데이트가 진행되었습니다. 해당 업데이트는 다음과 같습니다. 부트캠프 진행도 업데이트 ....</p>
            <div>
              <span class="notice-date">2024-02-01</span>
            </div>
          </div>
          <img src="../image/image.png" alt="공지 이미지" class="notice-image">
        </li>
      </a>
    </ul>
    <div class="pagination">
      <a href="">
        <img src="../icon/vector_left.svg" class="skipPage" alt="맨 처음 페이지">
      </a>
      <a href="" class="active">1</a>
      <a href="">2</a>
      <a href="">3</a>
      <a href="">4</a>
      <a href="">5</a>
      <a href="">
        <img src="../icon/vector_right.svg" class="skipPage" alt="맨 처음 페이지">
      </a>
    </div>
  </main>
</template>

<style scoped>
@import url("/css/notice.css");
</style>