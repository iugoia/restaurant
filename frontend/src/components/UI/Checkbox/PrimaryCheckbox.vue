<template>
    <label>
        <input type="checkbox" v-bind="$attrs" v-model="checkboxValue">
        <span>{{title}}</span>
    </label>
</template>

<script>
export default {
    name: "PrimaryCheckbox",
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            checkboxValue: this.value
        }
    },
    watch: {
        value(newVal) {
            this.checkboxValue = newVal;
        },
        checkboxValue(newVal) {
            this.$emit("input", newVal);
        }
    }
}
</script>

<style scoped>

</style>
