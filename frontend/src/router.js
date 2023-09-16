/* eslint-disable */
// import { createRouter, createWebHistory } from "vue-router/dist/vue-router";
import Home from "@/views/HomePage/Home";
import AuthPage from "@/views/Authorization/AuthPage";
import PersonalAcc from "@/views/PersonalAcc";
import { createRouter, createWebHistory } from 'vue-router'; // Импортируйте createRouter
import auth from "@/middleware/auth";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
            meta: {
                title: "Главная страница"
            }
        },
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
                title: "Личный кабинет",
                auth: true
            },
            middleware: [
                auth
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)){
        var token = localStorage.getItem('token');
        if (!token){
            next({path: '/auth'})
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
