<template>
    <div>
        Вы попали в личный кабинет!
        <a @click.prevent="logout">Выйти</a>
    </div>
</template>

<script>
import axios from '@/axios';
export default {
    name: "PersonalAcc",
    methods: {
        logout() {
            axios.get('/api/logout');
        }
    }
}
</script>

<style scoped>

</style>
