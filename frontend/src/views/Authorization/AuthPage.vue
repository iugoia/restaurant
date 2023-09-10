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
                        <primary-checkbox title="Запомнить меня" v-model="checkboxValue"></primary-checkbox>
                        <primary-button class="button-primary">Войти</primary-button>
                        <div class="error" v-if="error">{{error}}</div>
                    </form>
                </div>
            </div>
            <div class="bg-overlay"></div>
        </main>

        <footer-main></footer-main>
    </div>
</template>

<script>
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
            checkboxValue: false,
            error: null,
        }
    },
    methods: {
        async login() {
            try{
                axios.get('/sanctum/csrf-cookie')
                    .then(() => {
                        axios.post('/api/auth', {
                            login: this.loginValue,
                            password: this.passwordValue
                        })
                            .then(r => {
                                if (r.status === 200){
                                    this.$router.push('/personal');
                                }
                            })
                            .catch(error => {
                                if (error.response.status === 401) {
                                    this.error = "Пользователь не найден";
                                }
                                console.log(error);
                            })
                    })
            }
            catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        axios.get('/sanctum/csrf-cookie', {
            withCredentials: true
        })
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/global.scss';
@import '@/views/Authorization/Auth.module.scss';
</style>
