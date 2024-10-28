<template>
    <main>
        <!-- 학원후기 정보 -->
       <section class="review-section">
          <ul>
            <li>
              <div class="img-box"><img src="/img/도형이취향.jpeg" alt=""></div>
              <dl class="info">
                <dt>이름</dt>
                <dd class="name">이도형</dd>
                <dt>지원 분야</dt>
                <dd class="part">백앤드</dd>
              </dl>
              <dl class="info2">
                <div class="item">
                  <dt>전&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;공</dt>
                  <input type="text">
                </div>
                <div>
                  <dt>취 업 나 이</dt>
                  <input type="text">
                </div>
                <div>
                  <dt>취 준 기 간</dt>
                  <input type="text">
                </div>
              </dl>
              <div class="text">
                    <div>내 용</div>
                    <input type="text" class="text-btn">
              </div>
              
            </li>
          </ul>
        </section>

          <!-- 취업후기 게시글 -->
    <section class="detail">
        <h1>취업후기 게시물</h1>
        
        <ul>
            <li class="question">
            <div>
                <dl>Q1. 자기소개 부탁드립니다</dl>
                <input type="text">
            </div>
            <div>
                <dl>Q2. 해당 기업이나 직무에 취업을 도전한 특별한 계기가 있나요?</dl>
                <input type="text">

            </div>
            <div>
                <dl>Q3. 취업 준비하면서 생긴 노하우나 팁이 있다면?</dl>
                <input type="text">

            </div>
            <div>
                <dl>Q4. 구직 방법</dl>
                <input type="text">

            </div>
            <div>
                <dl>Q5. 취준 당시 가장 힘들었던 점</dl>
                <input type="text">

            </div>
            <div>
                <dl>Q6. 취준생분들께 하고싶은 말</dl>
                <input type="text">

            </div>
            </li>
        </ul>
    </section>

    </main>
</template>

<style scoped>
@import "/css/review-write.css";
</style>