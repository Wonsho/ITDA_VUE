<script setup>
import { ref } from 'vue';


const isBookmarked = ref(false); // 초기값: 북마크가 안된 상태

const toggleBookmark = (event) => {
  isBookmarked.value = !isBookmarked.value; // 북마크 상태 토글
    event.preventDefault(); // a 태그 기본 동작 방지
  event.stopPropagation(); // 클릭 이벤트가 상위 요소로 전파되는 것을 막음
};
</script>

<template>

  <section class="search">
    <h1>검색</h1>
    <!-- 텍스트 박스 태두리없애고 배경투명하게함 -->
    <form class="search-box" action="">
      <input class="search-text" type="text">
      <button class="search-btn" type="submit">
        <img src="/icon/search-icon.svg" alt="">
      </button>
    </form>
  </section>
  <!-- ----------상단바-------------------------------- -->
  <section class="top-bar">
    <h1>목록</h1>
    <a href="#filter-container" class=" top-bar-filter">필터
    </a>
    <a href="" class="main-list">
      <span class="nav-text">전체</span>
    </a>
    <a href="" class="main-list">
      <span class="nav-text">웹개발</span>
    </a>
    <a href="" class="main-list">
      <span class="nav-text">모바일</span>
    </a>
  </section>




  <!---------------------- 메인-------------------------------- -->

  <main class="list-bg">
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

    <!---------------------- 리스트-------------------------------- -->
    <section>
      <h1>학원리스트</h1>

      <a href="">
        <ul class="accademy-list">
          <li>
            <button  @click="toggleBookmark" 
                    :class="[
                    'd-bookmark-button', 
                    isBookmarked ? 'filled' : 'empty'
                    ]"></button>
          </li>
          
          <li class="subject">IT 개발자로 가는 JAVA 프로그래밍 기초</li>
          <li class="cash">수강료 41,000원</li>
          <li class="date">역삼 그린 컴퓨터 아카데미</li>
          <li class="region">서울 강남구</li>
          <li class="date">개강일:24.09.02</li>  
      </ul>
     </a>

     <a href="">
        <ul class="accademy-list">
          <li>
            <button  @click="toggleBookmark" 
                    :class="[
                    'd-bookmark-button', 
                    isBookmarked ? 'filled' : 'empty'
                    ]"></button>
          </li>
          
          <li class="subject">IT 개발자로 가는 JAVA 프로그래밍 기초</li>
          <li class="cash">수강료 41,000원</li>
          <li class="date">역삼 그린 컴퓨터 아카데미</li>
          <li class="region">서울 강남구</li>
          <li class="date">개강일:24.09.02</li>  
      </ul>
     </a>

     <a href="">
        <ul class="accademy-list">
          <li>
            <button  @click="toggleBookmark" 
                    :class="[
                    'd-bookmark-button', 
                    isBookmarked ? 'filled' : 'empty'
                    ]"></button>
          </li>
          
          <li class="subject">IT 개발자로 가는 JAVA 프로그래밍 기초</li>
          <li class="cash">수강료 41,000원</li>
          <li class="date">역삼 그린 컴퓨터 아카데미</li>
          <li class="region">서울 강남구</li>
          <li class="date">개강일:24.09.02</li>  
      </ul>
     </a>

     <a href="">
        <ul class="accademy-list">
          <li>
            <button  @click="toggleBookmark" 
                    :class="[
                    'd-bookmark-button', 
                    isBookmarked ? 'filled' : 'empty'
                    ]"></button>
          </li>
          
          <li class="subject">IT 개발자로 가는 JAVA 프로그래밍 기초</li>
          <li class="cash">수강료 41,000원</li>
          <li class="date">역삼 그린 컴퓨터 아카데미</li>
          <li class="region">서울 강남구</li>
          <li class="date">개강일:24.09.02</li>  
      </ul>
     </a>

     <a href="">
        <ul class="accademy-list">
          <li>
            <button  @click="toggleBookmark" 
                    :class="[
                    'd-bookmark-button', 
                    isBookmarked ? 'filled' : 'empty'
                    ]"></button>
          </li>
          
          <li class="subject">IT 개발자로 가는 JAVA 프로그래밍 기초</li>
          <li class="cash">수강료 41,000원</li>
          <li class="date">역삼 그린 컴퓨터 아카데미</li>
          <li class="region">서울 강남구</li>
          <li class="date">개강일:24.09.02</li>  
      </ul>
     </a>
    </section>



    <!-- 필터창 -->
      <div id="filter-container" class="filter-container">
            <h2>필터 <a href="#" class="close-filter">닫기</a></h2>
            <div class="filter-section">
                <h3>관심분야/카테고리</h3>
                <select id="category">
                    <option value="">웹개발</option>
                    <option value="web">웹개발</option>
                    <option value="mobile">모바일 개발</option>
                    <option value="ai">AI/머신러닝</option>
                </select>
            </div>
    
            <div class="filter-section">
            <h3>온/오프라인</h3>
            <div class="toggle-buttons">
                <input type="checkbox" id="online" class="toggle-input">
                <label for="online" class="toggle-label">온라인</label>
                <input type="checkbox" id="offline" class="toggle-input">
                <label for="offline" class="toggle-label">오프라인</label>
            </div>
            <label><input type="checkbox" name="fulltime"> 전체선택</label>
            </div>
    
            <div class="filter-section">
            <h3>지역</h3>
            <div class="region-buttons">
                <input type="checkbox" id="seoul" class="toggle-input">
                <label for="seoul" class="toggle-label">서울</label>
                <input type="checkbox" id="busan" class="toggle-input">
                <label for="busan" class="toggle-label">부산</label>
                <input type="checkbox" id="daegu" class="toggle-input">
                <label for="daegu" class="toggle-label">대구</label>
                <input type="checkbox" id="incheon" class="toggle-input">
                <label for="incheon" class="toggle-label">인천</label>
                <input type="checkbox" id="gyangju" class="toggle-input">
                <label for="gyangju" class="toggle-label">광주</label>
                <input type="checkbox" id="daejeon" class="toggle-input">
                <label for="daejeon" class="toggle-label">대전</label>
                <input type="checkbox" id="ulsan" class="toggle-input">
                <label for="ulsan" class="toggle-label">울산</label>
                <input type="checkbox" id="sejong" class="toggle-input">
                <label for="sejong" class="toggle-label">세종</label>
                <input type="checkbox" id="kyeongki" class="toggle-input">
                <label for="kyeongki" class="toggle-label">경기</label>
                <input type="checkbox" id="kangwon" class="toggle-input">
                <label for="kangwon" class="toggle-label">강원</label>
                <input type="checkbox" id="choongbuk" class="toggle-input">
                <label for="choongbuk" class="toggle-label">충북</label>
                <input type="checkbox" id="choongnam" class="toggle-input">
                <label for="choongnam" class="toggle-label">충남</label>
                <input type="checkbox" id="jeonbuk" class="toggle-input">
                <label for="jeonbuk" class="toggle-label">전북</label>
                <input type="checkbox" id="jeonnam" class="toggle-input">
                <label for="jeonnam" class="toggle-label">전남</label>
                <input type="checkbox" id="kyyngbuk" class="toggle-input">
                <label for="kyungbuk" class="toggle-label">경북</label>
                <input type="checkbox" id="kyungnam" class="toggle-input">
                <label for="kyungnam" class="toggle-label">경남</label>
                <input type="checkbox" id="jeju" class="toggle-input">
                <label for="jeju" class="toggle-label">제주</label>
            </div>
            <label><input type="checkbox" name="allregions"> 전체선택</label>
            </div>
    
            <div class="filter-section">
            <h3>수강료</h3>
            <div class="toggle-buttons">
                <input type="checkbox" id="free" class="toggle-input">
                <label for="free" class="toggle-label">전액지원</label>
                <input type="checkbox" id="paid" class="toggle-input">
                <label for="paid" class="toggle-label">일부무료</label>
            </div>
            <label><input type="checkbox" name="allfees"> 전체선택</label>
            </div>
      </div>

  </main>

</template>

<style scoped>
@import url("/css/academy.css");
</style>