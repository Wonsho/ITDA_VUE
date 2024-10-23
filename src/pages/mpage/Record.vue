<script>

</script>

<template>
    <main>
            <!----------- 활동기록 목록찾기 ----------------->
            <section class="ar-list-search">
                <h1>활동 기록</h1>
                <div>
                    <form action="#" id="ar-search-form">
                        <select name="" id="">
                            <option value="1">게시글</option>
                            <option value="2">댓글</option>
                        </select>
                    </form>
                </div>
            </section>
            <!----------- 활동기록 검색 ----------------->
            <section class="ar-search">
                <h1 style="display: none;">검색</h1>
                <form action="" method="">
                    <label for="seach-bar" style="visibility: hidden;"></label>
                    <input type="text" id="ar-search-bar" placeholder="검색어를 입력해주세요">
                    <button type="submit" id="ar-search-btn"></button>
                </form>
            </section>
             <!-----------커뮤니티 게시글 및 댓글 목록 ----------------->
             <section class="ar-board-comment-list">
                <h1 style="display: none;">커뮤니티 게시글 및 댓글</h1>
                <p><a href="">ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴㅁㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ</a></p>
                <div>
                    <div>2024-01-12</div>
                    <div class="ar-board-comment-list-link">
                        <a href="">수정</a>
                        <button class="ar-board-comment-list-button">삭제</button>
                    </div>
                </div>
             </section>
             <section class="ar-board-comment-list">
                <h1 style="display: none;">커뮤니티 게시글 및 댓글</h1>
                <div class="ar-tag">
                    <p>
                        <span>@TAG_NAME</span>    
                        <a href="">ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴㅁㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ
                        </a>    
                    </p>
                </div>
                <div>
                    <div>2024-01-12</div>
                    <div class="ar-board-comment-list-link">
                        <a href="">수정</a>
                        <button class="ar-board-comment-list-button">삭제</button>
                    </div>
                </div>
             </section>
             <section class="ar-board-comment-list">
                <h1 style="display: none;">커뮤니티 게시글 및 댓글</h1>
                <p><a href="">ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴㅁㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ</a></p>
                <div>
                    <div>2024-01-12</div>
                    <div class="ar-board-comment-list-link">
                        <a href="">수정</a>
                        <button class="ar-board-comment-list-button">삭제</button>
                    </div> 
                </div>
             </section>
             <!---------- 게시글 목록 ---------->
             <section class="community_list">
                <h1 style="display: none;">커뮤니티 리스트</h1>
                 <!-- 게시글 하나 -->
        <section class="community_item">
            <a href="#" class="item_action">
                <div class="item_content">
                        <p class="item_time">방금전</p>
                        <div class="item_title"><p>네이버 웹툰 추천 좀ddddddddddddddddddddddddddddddddddddddddddddddddddddd</p></div>
                        <div class="item_detail"><p>아무거나 추천해줘봐</p></div>
                        <div class="item_count">
                            <p class="item_user-id">아이디</p>
                            <div class="item_num">
                                <span class="item_comment">
                                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.90625 8.23975H7.59375V7.17725H2.90625V8.23975ZM2.90625 6.11475H10.0938V5.05225H2.90625V6.11475ZM2.90625 3.98975H10.0938V2.92725H2.90625V3.98975ZM0.5625 13.4024V1.55149C0.5625 1.19366 0.671875 0.890788 0.890625 0.642871C1.10938 0.394954 1.37661 0.270996 1.69234 0.270996H11.3077C11.6234 0.270996 11.8906 0.394954 12.1094 0.642871C12.3281 0.890788 12.4375 1.19366 12.4375 1.55149V9.61551C12.4375 9.97333 12.3281 10.2762 12.1094 10.5241C11.8906 10.772 11.6234 10.896 11.3077 10.896H2.77406L0.5625 13.4024ZM2.375 9.8335H11.3077C11.3558 9.8335 11.3998 9.81077 11.4398 9.76532C11.4799 9.71999 11.5 9.67005 11.5 9.61551V1.55149C11.5 1.49694 11.4799 1.44701 11.4398 1.40167C11.3998 1.35622 11.3558 1.3335 11.3077 1.3335H1.69234C1.64422 1.3335 1.60016 1.35622 1.56016 1.40167C1.52005 1.44701 1.5 1.49694 1.5 1.55149V10.8144L2.375 9.8335Z" fill="#3E68FF"/>
                                    </svg>  
                                    5
                                </span>
                                <span class="item_views">조회 5</span>
                            </div>
                        </div>
                </div>
                <div class="item_img-content">
                    <img src="/img/도형이취향.jpeg">
                </div>
            </a>
        </section>
        </section>          
            <section>
                <h1 style="display: none;">커뮤니티 네비게이션</h1>
                <div class="community_nav">
                    <a href="#" class="pgL"></a>
                    <a href="#" class="on">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#" class="pgR"></a>
                </div>
            </section>
        </main>
</template>

<style scoped>
@import url("/css/active-record.css");
</style>
