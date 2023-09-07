<template>
    <router-view></router-view>
</template>

<script>

export default {
    name: 'App',
    beforeRouteEnter(to, from, next) {
        document.title = to.meta.title;
        next();
    }
}
</script>

<style>

</style>
