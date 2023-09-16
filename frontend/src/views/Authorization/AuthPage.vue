<template>
    <div class="app_container">
        <header-main class="header_darken"></header-main>

        <main class="main">
            <div class="form">
                <div class="container">
                    <form @submit.prevent="login" method="post">
                        <h1>Авторизация</h1>
                        <label class="label">
                            <primary-input
                                v-model="loginValue"
                                name="login"
                                type="text"
                                id="login"
                                placeholder="Логин"
                            >
                            </primary-input>
                        </label>
                        <label class="label">
                            <primary-input
                                v-model="passwordValue"
                                name="password"
                                type="password"
                                id="password"
                                placeholder="Пароль"
                            >
                            </primary-input>
                        </label>
                        <primary-checkbox title="Запомнить меня" name="remember_token" v-model="remember"></primary-checkbox>
                        <primary-button class="button-primary">Войти</primary-button>
                        <div class="error" style="text-align: center; margin-top: 10px;" v-if="error">{{error}}</div>
                    </form>
                </div>
            </div>
            <div class="bg-overlay"></div>
        </main>

        <footer-main></footer-main>
    </div>
</template>

<script>
/* eslint-disable */

import PrimaryCheckbox from "@/components/UI/Checkbox/PrimaryCheckbox";
import axios from '@/axios';
import PrimaryButton from "@/components/UI/PrimaryButton/PrimaryButton";

export default {
    name: "AuthPage",
    components: {PrimaryButton, PrimaryCheckbox},
    data() {
        return {
            loginValue: "",
            passwordValue: "",
            titleCheckbox: "Запомнить меня",
            remember: false,
            error: null,
        }
    },
    methods: {
        async login() {
            try {
                await axios.get('/sanctum/csrf-cookie', {
                    withCredentials: true
                });
                const response = await axios.post('api/login', {
                    login: this.loginValue,
                    password: this.passwordValue,
                    remember: this.remember
                });
                if (response.status === 200){
                    localStorage.setItem('token', response.data['token']);
                    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['token']}`;
                    this.$router.push('/personal');
                } else {
                    console.log(response);
                }
            } catch (error) {
                if (error.response && error.response.status === 401){
                    this.error = "Пользователь не найден";
                } else {
                    this.error = "Произошла ошибка. Попробуйте позже";
                }
            }
        }
    },
    mounted() {

    }
}
</script>

<style scoped lang="scss">
@import '@/assets/global.scss';
@import '@/views/Authorization/Auth.module.scss';
</style>
