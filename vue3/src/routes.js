import HomePage from "./Pages/HomePage.vue";
import SearchPage from "./Pages/SearchPage.vue";
import LoginPage from "./Pages/LoginPage.vue";
import ProfilePage from "./Pages/ProfilePage.vue";
import ProfileEdittingPage from "./Pages/ProfileEdittingPage.vue";
import { createRouter,createWebHistory } from "vue-router";
const routes = [
    {
        path:"/",
        name:"home",
        component:HomePage,
    },
    {
        path:"/search_result",
        name:"search_result",
        component:SearchPage,
    },
    {
        path:"/profile",
        name:"profile",
        component:ProfilePage,
    },
    {
        path:"/profile/edit",
        name:"profileEdit",
        component:ProfileEdittingPage
    },
    {
        path:"/login",
        name:"login",
        component:LoginPage,
    },
];
const router = createRouter({
    routes:routes,
    history:createWebHistory(),
});
export { router };