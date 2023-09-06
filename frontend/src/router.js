import { createRouter, createWebHistory } from "vue-router/dist/vue-router";
import Home from "@/views/Home";

const routes = [
    {
        path: '/',
        component: Home,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
