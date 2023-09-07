import { createRouter, createWebHistory } from "vue-router/dist/vue-router";
import Home from "@/views/HomePage/Home";
import TourThreeD from "@/views/TourThreeD";

const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            title: "Главная страница"
        }
    },
    {
        path: '/3d_tour',
        component: TourThreeD,
        meta: {
            title: "Виртуальный тур"
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
