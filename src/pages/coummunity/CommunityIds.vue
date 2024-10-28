<script setup>

</script>

<template>
    <main>
        <section class="board">
            <h1 class="text-none">게시글</h1>
            <header>
                <div class="bd-head">
                    <!-- 더보기 버튼 -->
                    <span class="bd-title">게시물 제목</span>
                        <label id="btn2" onclick='addBtn()' class="material-icons add">
                            <img src="/public/icon/more_horiz.svg" alt="">
                            </label>
                <div class="bd-sub">
                    <span>5 분 전</span>
                    <span>조회 15</span>
                    <span>닉네임</span>
                </div>
                    <div class="add-box">
                        <span id='btn1'>
                            <a href="">수정</a>
                        
                            <a href="">삭제</a>
                        
                            <a href="">신고</a>   
                         </span>
                    </div>
                   
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
               <i><img src="" alt=""></i>
                <span class="rec-count">21</span>
            </button>
        </div>
        </section>
         <!----------- 댓글 ----------------->
        <section class="comment">
            <h1 class="text-none">댓글</h1>
            <div class="c-count">댓글 20 개</div>
            <div>
            <ul>
              <li class="comment-box">
                <div class="cm-pd">
                <div class="cm-header">
                        <span class="nickname cc">닉네임</span>
                        
                        <div class="function">
                        <span>
                            <a href="">신고</a>
                        </span>
                        <span>
                            <a href="">삭제</a>
                        </span>
                        <span>             
                            <a href="">댓글</a>
                        </span>   </div>                   
                    </div>
                    </div>
                <div>
                    댓글작성중입니다 댓글작성중이에요
                </div>
                <div class="cm-time">
                    20 분 전
                </div>
            </li>

            <!----------- 대 댓글 ----------------->
            <li class="comment-box">
                <div class="cm-pd">
                <i class="material-icons">
                    <img src="/public/icon/comments-arrow.svg" alt="">
                </i>
               
                <div class="cm-header">
                        <span class="nickname cc">닉네임</span>
                        <div class="function">
                        <span>
                            <a href="">신고</a>
                        </span>
                        <span>
                            <a href="">삭제</a>
                        </span>
                        <span>             
                            <a href="">댓글</a>
                        </span>   </div>                   
                    </div>
                    </div>
                <div class="cm-cm">
                    <span>@태그명</span>
                    <span>대댓글 작성입니다</span>
                </div>
                <div class="cm-time">
                    20 분 전
                </div>
            </li>
            </ul>
            </div>

            
           
        <div class="count">
            <span class="page-count">
                <a href="">
                    <i class=" c-icon">
                        <img src="/public/icon/arrow_left.svg" alt="">
                       
                    </i>
                </a>
                <a href="">1</a>
                <a href="">2</a>
                <a href="">3</a>
                <a href="">4</a>
                <a href="">5</a>
                <a href="">
                    <i >
                        <img src="/public/icon/arrow_right.svg" alt="">
                    </i>
                </a>
            </span>
        </div>
    </section>
        <!----------- 댓글작성 ----------------->
            <div class="write">
                <label for="">
                    <form action="" method="post">
                        <input type="text" placeholder="댓글을 남겨주세요" class="write-box">
                    <div>
                        <button class="write-btn">
                            <input type="submit" value="등록" class="btn-text"> 
                        </button>
                    </div>
                    </form>
                </label>   
                
            </div>
      </main>
</template>

<style scoped>
/* @import url("/css/community-board.css"); */
</style>