import { createRouter, createWebHistory } from "vue-router/dist/vue-router";
import Home from "@/views/HomePage/Home";
import AuthPage from "@/views/Authorization/AuthPage";
import PersonalAcc from "@/views/PersonalAcc";

const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            title: "Главная страница"
        }
    },
    // {
    //     path: '/3d_tour',
    //     component: TourThreeD,
    //     meta: {
    //         title: "Виртуальный тур"
    //     }
    // },
    {
        path: '/auth',
        component: AuthPage,
        meta: {
            title: "Авторизация"
        }
    },
    {
        path: '/personal',
        component: PersonalAcc,
        meta: {
            title: "Личный кабинет"
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
