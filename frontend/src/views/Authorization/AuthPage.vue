<template>
    <div class="app_container">
        <header-main class="header_darken"></header-main>

        <main class="main">
            <div class="form">
                <div class="container">
                    <form @submit="login">
                        <label>
                            <span>Логин</span>
                            <primary-input
                                v-model="loginValue"
                                name="login"
                                type="text"
                                icon="user"
                                id="login"
                            >
                            </primary-input>
                        </label>
                        <label>
                            <span>Пароль</span>
                            <primary-input
                                v-model="passwordValue"
                                name="login"
                                type="password"
                                icon="user"
                                id="password"
                            >
                            </primary-input>
                        </label>
                        <primary-checkbox title="Запомнить меня" v-model="checkboxValue"></primary-checkbox>
                        <button type="submit">Войти</button>
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
import axios from 'axios';
export default {
    name: "AuthPage",
    components: {PrimaryCheckbox},
    data() {
        return {
            loginValue: "",
            passwordValue: "",
            titleCheckbox: "Запомнить меня",
            checkboxValue: false
        }
    },
    methods: {
        async login() {
            try{
                axios.post('http://127.0.0.1:8000/api/auth', {
                    login: this.loginValue,
                    password: this.passwordValue
                });
                this.$router.push('/personal');
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/global.scss';
@import '@/views/Authorization/Auth.module.scss';
</style>
