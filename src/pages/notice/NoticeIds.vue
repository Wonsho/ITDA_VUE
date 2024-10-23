<script setup>

</script>

<template>
    <main>
        <section class="board">
            <h1 class="text-none">게시글</h1>
            <header>
                <div class="bd-head">
                    <!-- 더보기 버튼 -->
                    <span class="bd-title">공지사항입니다.</span>
                    <div class="btn">
                        <input id="check-btn" type="checkbox">
                        <label for="check-btn" class="order-btn">
                            <img src="/icon/more_horiz.svg" alt="">
                        </label>
                        <div class="orders order-list" role="none">
                            <button class="order-lists">수정</button>
                            <button class="order-lists">삭제</button>
                        </div>
                </div>    
                </div>        
                <div class="bd-sub">
                    <span>2024-10-23</span>
                    <span>조회 15</span>
                    <span>관리자명</span>
                </div>
            </header>
             <!----------- 게시물 ----------------->
            <article>
                <div style="min-height: 200px;">
                    <p class="img-bg">
                        <img src="/icon/himediea.jpg" alt="게시물이미지" class="img">
                    </p>
                    <p style="padding-top: 20px;">
                        텍스트 제한수를 고려한 게시물 글씨를 쓰고있는데 몇글자를 해야할까
                      
                    </p>
                </div>
            </article> 
        </section>        
    </main>
</template>

<style scoped>
@import url("/css/notice-detail.css");
</style>
