// might have to use createWebHashHistory if we're gonna use github pages

import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        component: AboutView,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
