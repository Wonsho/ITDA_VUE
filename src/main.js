import {createApp} from 'vue'
import App from './App.vue'
import {createMemoryHistory, createRouter, createWebHistory} from "vue-router";
import Index from "@/pages/Index.vue";
import Notice from "@/pages/notice/Notice.vue";
import NoticeIds from "@/pages/notice/NoticeIds.vue";
import Login from "@/pages/Login.vue";
import Academies from "@/pages/academies/Academies.vue";
import AcademiesIds from "@/pages/academies/AcademiesIds.vue";

import Coummunity from "@/pages/coummunity/Coummunity.vue";
import CommunityIds from "@/pages/coummunity/CommunityIds.vue";
import Mpage from "@/pages/mpage/Mpage.vue";
import Cname from "@/pages/mpage/Cname.vue";
import MyPic from "@/pages/mpage/MyPic.vue";
import Record from "@/pages/mpage/Record.vue";
import Alarm from "@/pages/Alarm.vue";
import Default from "@/layouts/Default.vue";
import CommunityWrite from "@/pages/coummunity/CommunityWrite.vue";

const router = createRouter({
        history: createWebHistory(),
        routes: [
            {
                path: '/', children: [
                    {path: 'index', component: Index}, /*기본*/
                    {path: 'notice', component: Notice},/*공지사항*/
                    {path: 'notice/:id', component: NoticeIds}, /*공지사항 누르면*/
                    {path: 'login', component: Login}, /*로그인*/
                    {path: 'academies', component: Academies}, /*학원 리스트*/
                    {path: 'academies/:id', component: AcademiesIds}, /*학원 리스트 누르면*/
                    {path: 'community', component: Coummunity},/*커뮤니티*/
                    {path: 'community/write', component: CommunityWrite},/*커뮤니티 누르면 */
                    {path: 'community/:id', component: CommunityIds},/*커뮤니티 누르면 */

                    {path: 'mpage', component: Mpage},/*마이페이지*/
                    {path: 'mpage/cname', component: Cname},/*이름 수정*/
                    {path: 'mpage/mypic', component: MyPic},/*마이픽*/
                    {path: 'mpage/record', component: Record},/*활동기록*/
                    {path: 'alarm', component: Alarm},/*커뮤니티*/
                ], component: Default, redirect: "/index"
            }

        ]
    }
)
let app = createApp(App);
app.use(router)
app.mount('#app')
