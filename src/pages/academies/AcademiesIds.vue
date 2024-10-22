<script setup>
import { ref } from 'vue';

const activeSection = ref('course'); // 초기 활성 섹션
const isBookmarked = ref(false); // 초기값: 북마크가 안된 상태

const showCourseInfo = () => {
    activeSection.value = 'course'; // 훈련과정정보 섹션 표시
};

const showInstitutionInfo = () => {
    activeSection.value = 'institution'; // 훈련기관정보 섹션 표시
};


const toggleBookmark = () => {
    isBookmarked.value = !isBookmarked.value; // 북마크 상태 토글
};
</script>
<template>
    <main>
        <section>
            <h1>훈련정보카테고리</h1>
            <div class="d-category-layout" v-if="activeSection === 'course'" >
                <div><a href="#" @click.prevent="showCourseInfo">훈련과정정보</a></div>
                <div><a href="#" @click.prevent="showInstitutionInfo">훈련기관정보</a></div>
            </div>
            <div v-if="activeSection === 'course'" class="d-institution">한국ICT인재개발원</div>
        </section>
        <section v-if="activeSection === 'course'">
            <h1>기본정보들</h1>
            <div class="d-academy-title">
                <span>AI 활용 빅데이터 분석 및 응용 소프트 웨어 개발자</span>
                <div>
                    <button  @click="toggleBookmark" 
                    :class="[
                    'd-bookmark-button', 
                    isBookmarked ? 'filled' : 'empty'
                    ]"></button>
                </div>
            </div>
            <div class="d-count">
                <span>조회수 249</span>
                <span>북마크 수 3</span>
            </div>
            <section class="d-detail-info">
                <h1>상세정보</h1>
                <ul>
                    <li>NCS 직문분류</li>
                    <li>훈련시간</li>
                    <li>정원</li>
                    <li>취업률</li>
                    <li>담당자명</li>
                    <li>담당자 전화번호</li>
                    <li>담당자 이메일</li>
                </ul>
                <ul>
                    <li>응용SW엔지니어링(20010202)</li>
                    <li>2024-07-12 ~ 2025-01-11</li>
                    <li>30</li>
                    <li>-</li>
                    <li>정*호</li>
                    <li>02-2626-9476</li>
                    <li>leelee03302@nate.com</li>
                </ul>
            </section>
        </section>
        <section v-if="activeSection === 'course'"  class="d-cost">
            <h1>훈련비용</h1>
            <ul>
                <li>전체 훈련 비용</li>
                <li>정부 지원금</li>
                <li>실제 훈련 비용</li>
            </ul>
            <ul class="d-cost-color">
                <li>9,097,920원</li>
                <li>8,221,440원</li>
                <li>876,480원</li>
            </ul>
        </section>

        <div class="d2"  v-if="activeSection === 'institution'"> 
            <div class="d-category-layout">
                <div><a href="#" @click.prevent="showCourseInfo">훈련과정정보</a></div>
                <div><a href="#" @click.prevent="showInstitutionInfo">훈련기관정보</a></div>
            </div>
            <div class=" d-institution">한국ICT인재개발원</div>
            <section class="d-detail-info">
                    <h1>상세정보</h1>
                <ul>
                    <li>주소</li>
                    <li>홈페이지</li>
                    <li>전화번호</li>
                    <li>이메일</li>
                </ul>
                <ul>
                    <li>서울시 양천구 목동중앙로 763-5</li>
                    <li>http://jongro.greenart.co.kr/</li>
                    <li>02-2646-9476</li>
                    <li>leelee03302@nate.com</li>
                </ul>
            </section>
        </div>
        <div class="d-more-link">조회가 많은 과정 보러가기</div>
        <section class="d-hot-process">
            <h1 >조회가 많은 과정들</h1>
            <a href="">
                <div>
                    <span>정보통신</span>
                    <span>AI 활용 빅데이터 분석 및 응용 소프트 웨어 개발자 심화과정</span>
                    <span>2024-09-12 ~ 2025-03-11</span>
                </div>
            </a>
            <a href="">
                <div>
                    <span>정보통신</span>
                    <span>AI 활용 빅데이터 분석 및 응용 소프트 웨어 개발자 심화과정</span>
                    <span>2024-09-12 ~ 2025-03-11</span>
                </div>
            </a> 
            <a href="">
                <div>
                    <span>정보통신</span>
                    <span>AI 활용 빅데이터 분석 및 응용 소프트 웨어 개발자 심화과정</span>
                    <span>2024-09-12 ~ 2025-03-11</span>
                </div>
            </a> 
            <a href="">
                <div>
                    <span>정보통신</span>
                    <span>AI 활용 빅데이터 분석 및 응용 소프트 웨어 개발자 심화과정</span>
                    <span>2024-09-12 ~ 2025-03-11</span>
                </div>
            </a> 
            <a href="">
                <div>
                    <span>정보통신</span>
                    <span>AI 활용 빅데이터 분석 및 응용 소프트 웨어 개발자 심화과정</span>
                    <span>2024-09-12 ~ 2025-03-11</span>
                </div>
            </a> 
            <a href="">
                <div>
                    <span>정보통신</span>
                    <span>AI 활용 빅데이터 분석 및 응용 소프트 웨어 개발자 심화과정</span>
                    <span>2024-09-12 ~ 2025-03-11</span>
                </div>
            </a>  
        </section>
        <section>
            <h1>해당과정 hrd 링크바로가기</h1>
            <div class="d-go-hrd">
                <a href="">HRD-net 홈페이지</a>
            </div>
        </section>
    </main>
</template>

<style scoped>
@import url("/css/detail.css");
</style>