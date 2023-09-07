<template>
    <router-link :to="to" class="link">
        <slot></slot>
    </router-link>
</template>

<script>
import '@/assets/global.scss';
export default {
    name: "RouterLinkComponent",
    props: {
        to: {
            type: String,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";
    .link{
        text-transform: uppercase;
        font-size: 15px;
        padding: 12px;
        border: 1px solid $base-white;
        border-radius: 6px;
        transition: all .3s;
        display: block;
        width: fit-content;

        &:hover{
            background-color: $baseGreen;
            border-color: $baseGreen;
        }
    }
</style>
