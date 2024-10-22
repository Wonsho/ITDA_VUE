<script setup>

</script>

<template>
    <body>

    <main>
    <section class="mypage-profile">
        <h1 style="display: none;">프로필</h1>
        <div class="myprofile-content">
            <div class="content-img_box">
                <img src="../icon/mypage/account.svg" alt="아이콘">
            </div>
            <div class="content-text_box">
                <div class="name_text">
                    재영바보
                </div>
                <div class="user_attribute">
                    네이버 회원
                </div>
            </div>
        </div>
    </section>

    <div class="title">마이픽</div>

    <!-- 정렬 버튼 -->
    <div class="btn">
        <div class="text-none">filter_list</div>
        <input id="check-btn" type="checkbox">
         <label for="check-btn" class="order-btn">
            <img src="/icon/mypage/add_list.svg" alt="">
         </label>
        <div class="orders order-list" role="none">
            <button style="color: var(--color-main-1);" class="order-lists">교육 시작 빠른순</button>
            <button class="order-lists">조회 높은순</button>
            <button class="order-lists">마감 임박순</button>
            <button class="order-lists">기수 많은순</button>
        </div>   
    </div>
    
    <section>
        <h1>학원리스트</h1>
        <ul class="accademy-list">
             <li>
                <img src="/icon/bookmark.svg" alt="" class="heart">
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
        <ul class="accademy-list">
            <li>
               <img src="/icon/bookmark.svg" alt="" class="heart">
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
       <ul class="accademy-list">
        <li>
           <img src="/icon/bookmark.svg" alt="" class="heart">
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
   <ul class="accademy-list">
    <li>
       <img src="/icon/bookmark.svg" alt="" class="heart">
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
    <ul class="accademy-list">
    <li>
       <img src="/icon/bookmark.svg" alt="" class="heart">
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
    <ul class="accademy-list">
    <li>
       <img src="/icon/bookmark.svg" alt="" class="heart">
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
</body>

</template>

<style scoped>
@import url("/css/mypic.css");
</style>