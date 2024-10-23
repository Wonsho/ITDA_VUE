<script setup>

</script>

<template>
  <main class="community-write">
    <div class="main">
      <h1>글을 올려 다양한 사람과 만나보세요!</h1>
      <p>ITDA와 함께면 생각의 폭을 넓힐 수 있어요</p>
    </div>
    <section>
      <h1 style="display: none">글 작성</h1>
      <div class="container">
        <form class="write-form">
          <div class="input-group">
            <input type="text" placeholder="제목을 입력하세요. (100자 제한)">
          </div>
          <div class="input-group">
            <label for="file-input" class="file-label">
              <img src="/icon/add-pick.svg" alt="사진 추가 버튼">
            </label>
            <input type="file" id="file-input" class="file-input" accept="image/*">
          </div>
          <div class="input-group input-detail">
            <!-- <input type="text" placeholder="내용을 입력하세요. (500자 제한)"> -->
            <textarea type="text" placeholder="내용을 입력하세요.(500자 제한)"></textarea>
          </div>
          <button type="submit" class="submit-btn">등록하기</button>
        </form>
      </div>
    </section>
  </main>
</template>

<style scoped>
  @import url("/css/community-write.css");
</style>