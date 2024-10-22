<script setup>

</script>

<template>
  <main>
    <h1 style="display: none;">닉네임변경</h1>

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

    <section class="mypage-update_form">
      <h1 style="display: none;">닉네임 변경</h1>

      <div class="update_box">
        <form action="#" class="update_form">
          <div class="update_title">닉네임 변경</div>
          <div class="update_text"><input type="text" placeholder="재영바보"></div>
          <div class="update_btn"><button type="submit">변경</button></div>
        </form>
      </div>

    </section>
  </main>
</template>

<style scoped>
@import url("/css/mypage-update.css");
</style>