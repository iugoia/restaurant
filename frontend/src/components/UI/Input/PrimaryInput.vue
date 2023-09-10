<template>
    <div class="input_wrapper">
        <input
            v-bind="$attrs"
            v-model="internalValue"
            class="input"
            :class="{'width-icon' : icon}"
        >
        <span v-if="icon" class="input_icon">
            <font-awesome-icon :icon="icon" />
        </span>
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
    name: "PrimaryInput",
    components: {
        FontAwesomeIcon,
    },
    props: {
        value: String,
        icon: Object
    },
    data() {
        return {
            internalValue: this.value
        }
    },
    watch: {
        value(newVal) {
            this.internalValue = newVal;
        },
        internalValue(newVal) {
            this.$emit("input", newVal);
        }
    }
}
</script>

<style scoped lang="scss">
    @import '@/assets/global.scss';

    .input_wrapper {
        position: relative;
        display: inline-block;
    }

    .input {
        outline: none;
        border: 1px solid $base-white;
        padding: 5px 10px;
        font-size: 16px;
        border-radius: 15px;
        background: transparent;
        color: $base-white;
        font-family: "Montserrat";
        padding-right: 30px;

        &::placeholder{
            color: rgba($base-white, .7);
        }
    }

    .input_icon {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
    }

    .width-icon .input_icon {
        color: $base-white;
    }
</style>
