<script setup>
</script>

<template>
    <main class="main">
        <section class="main-header">
            <h1 style="display: none;">메인의 헤더 부분</h1>
            <div>
                <p class="purpose">신고 관리</p>
            </div>
            <div>
                <p class="count">(124/523)</p>
            </div>
            <div class="home_tab_search-content">
                <form action="GET"  id="seach-form">
                    <label for="seach-bar"></label>
                    <input type="text" id="seach-bar" placeholder="카테고리 항목">
                    <button type="submit" id="search-btn"></button>
                </form>
            </div>
        </section>
        <section class="main-main">
            <h1 style="display: none;">메인의 메인</h1>
            <section class="data-column">
                <h1 style="display: none;">데이터 컬럼명</h1>
                <div>
                    <p>처리</p>
                </div>
                <div>
                    <p>닉네임</p>
                </div>
                <div>
                    <p>타입</p>
                </div>
                <div>
                    <p>가입일</p>
                </div>
            </section>
            <section class="data-record">
                <h1 style="display: none;">데이터 레코드</h1>
                <div>
                    <p class="id">미처리</p>
                </div>
                <div>
                    <p>도형</p>
                </div>
                <div>
                    <p>댓글</p>
                </div>
                <div>
                    <p>20.12.02</p>
                </div>
            </section>
            <section class="data-record">
                <div>
                    <p class="id">미처리</p>
                </div>
                <div>
                    <p>경민</p>
                </div>
                <div>
                    <p>게시글</p>
                </div>
                <div>
                    <p>20.12.02</p>
                </div>
            </section>
            <section class="data-record">
                <div>
                    <p class="id">처리완료</p>
                </div>
                <div>
                    <p>경민</p>
                </div>
                <div>
                    <p>게시글</p>
                </div>
                <div>
                    <p>20.12.02</p>
                </div>
            </section>
            <section class="data-record">
                <div>
                    <p class="id">미처리</p>
                </div>
                <div>
                    <p>깝죽</p>
                </div>
                <div>
                    <p>댓글</p>
                </div>
                <div>
                    <p>20.12.02</p>
                </div>
            </section>
        </section>
        <div class="pagination">
      <a href="">
        <img src="/icon/vector_left.svg" class="skipPage" alt="맨 처음 페이지">
      </a>
      <a href="" class="active">1</a>
      <a href="">2</a>
      <a href="">3</a>
      <a href="">4</a>
      <a href="">5</a>
      <a href="">
        <img src="/icon/vector_right.svg" class="skipPage" alt="맨 처음 페이지">
      </a>
    </div>
    </main>
</template>

<style scoped>
@import url("/css/admin-management.css");
</style>