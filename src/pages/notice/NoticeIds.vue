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
                        <div>
                            <button></button>
                        </div>    
                </div>        
                <div class="bd-sub">
                    <span>5 분 전</span>
                    <span>조회 15</span>
                    <span>관리자명</span>
                </div>
            </header>
             <!----------- 게시물 ----------------->
            <article>
                <div>
                    <p class="img-bg">
                        <img src="" alt="게시물이미지" class="img">
                    </p>
                    <p>
                        텍스트 제한수를 고려한 게시물 글씨를 쓰고있는데 몇글자를 해야할까
                    </p>
                </div>
            </article>
            <div class="rec">
                <button class="rec-btn">
                <!-- <i class="fa-regular fa-thumbs-up fa-2x"></i> -->
                <i><img src="/img/thumbs_up.svg" alt=""></i>
                    <span class="rec-count">21</span>
                </button>
            </div>    
        </section>        
    </main>
</template>

<style scoped>
@import url("/css/notice-detail.css");
</style>
