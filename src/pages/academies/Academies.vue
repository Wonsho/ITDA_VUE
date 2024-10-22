<script setup>

</script>

<template>

 <section>
        <h1>검색</h1>
            <!-- 텍스트 박스 태두리없애고 배경투명하게함 -->             
            <form class="search-box" action="">
                <input class="search-text" type="text">
                <button class="search-btn" type="submit">
                    <i class="material-icons">search</i>
                </button>
            </input>
        </form>
    </section>
    <!-- ----------상단바-------------------------------- -->
    <section class="top-bar">
        <h1>목록</h1>
            <button class="main-list top-bar-filter">필터</button>
        <a href="#" class="main-list">
            <span class="nav-text">전체</span>
        </a>
        <a href="#" class="main-list">
            <span class="nav-text">웹개발</span>
        </a>
        <a href="#" class="main-list">
            <span class="nav-text">모바일</span>
        </a>
    </section>

    
   

    <!---------------------- 메인-------------------------------- -->

    <main class="list-bg">
        <div>
            <div class="text-none">filter_list</div>
            <input id="check-btn" type="checkbox">
             <label for="check-btn" class="order-btn material-icons">filter_list</label>
            <div class="orders order-list" role="none">
                <button style="color: var(--color-main-1);" class="order-lists">교육 시작 빠른순</button>
                <button class="order-lists">조회 높은순</button>
                <button class="order-lists">마감 임박순</button>
                <button class="order-lists">기수 많은순</button>
            </div>   
      </div>
         
    <!---------------------- 리스트-------------------------------- -->
    <section>

        <h1>학원리스트</h1>
        <ul class="accademy-list">
             <li class="heart">
                <img src="" alt="">
             </li>
            <a href="">
            <li class="on-off" style="color: rgb(112, 112, 112);">오프라인</li>
            <li class="subject">IT 개발자로 가는 JAVA 프로그래밍 기초</li>
            <li class="cash">수강료 41,000원</li>
            <li class="date">역삼 그린 컴퓨터 아카데미</li>
            <li class="region">서울 강남구</li>
            <li class="date">개강일:24.09.02</li>
            </a>
        </ul>
        </section>
    </main>
</template>

<style scoped>
@import url("css/academy.css");
</style>