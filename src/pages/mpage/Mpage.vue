<script setup>

</script>

<template>
  <main>
    <h1 style="display: none;">마이페이지</h1>

    <section class="mypage-profile">
      <h1 style="display: none;">프로필</h1>
      <div class="myprofile-content">
        <div class="content-img_box">
          <img src="/icon/mypage/account.svg" alt="아이콘">
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

    <section class="mypage-action">
      <h1 style="display: none;">마이페이지 버튼</h1>
      <div class="action_nickName action-box">
        <a href="#">
          <div><img src="/icon/mypage/nick_name.svg" alt="프로필 아이콘"></div>
          <div>닉네임 변경</div>
        </a>
      </div>
      <div class="action_mypick">
        <a href="#">
          <div><img src="/icon/mypage/mypick.svg" alt="찜 아이콘"></div>
          <div>찜 목록</div>
        </a>
      </div>
      <div class="action_activity">
        <a href="#">
          <div><img src="/icon/mypage/recode.svg" alt="기록 아이콘"></div>
          <div>활동 기록</div>
        </a>
      </div>
      <div class="action_notice">
        <a href="#">
          <div><img src="/icon/mypage/campain.svg" alt="공지사항 아이콘"></div>
          <div>공지사항</div>
        </a>
      </div>
      <div class="action_alarm">
        <a href="#">
          <div>
            <span class="notification badge"></span>
            <img src="/icon/mypage/notion.svg" alt="알림 아이콘">
          </div>
          <div>알림</div>
        </a>
      </div>
      <div class="action_sign-out">
        <a href="#">
          <div><img src="/icon/mypage/account_deletion.svg" alt="탈퇴 아이콘"></div>
          <div>회원탈퇴</div>
        </a>
      </div>
    </section>
  </main>
</template>

<style scoped>
  @import "/css/mypage.css";
</style>