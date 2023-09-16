<template>
    <div>
        Вы попали в личный кабинет!
        <a href="#" @click.prevent="logout">Выйти</a>
    </div>
</template>

<script>
/* eslint-disable */
import axios from '@/axios';
export default {
    name: "PersonalAcc",
    methods: {
        async logout() {
            try{
                await axios.get('/sanctum/csrf-cookie', {
                    withCredentials: true
                });
                const response = axios.get('/api/logout');
                localStorage.removeItem('token');
                axios.defaults.headers.common['Authorization'] = null;
                this.$router.push('/auth');
            } catch (e) {
                console.log("Ошибка при попытке выхода из системы", e);
            }
        }
    }
}
</script>

<style scoped>

</style>
