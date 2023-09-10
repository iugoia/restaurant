<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "PrimaryButton"
}
</script>

<style scoped lang="scss">
@import '@/assets/global.scss';
    .button{
        width: 100%;
        background-color: $base-white;
        border: none;
        padding: 10px 15px;
        border-radius: 15px;
        font-family: "Montserrat";
        font-weight: 500;
        cursor: pointer;
    }
</style>
