<template>
    <div class="slider" @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide">
        <ul class="slider_list" :style="sliderStyle">
            <li
                class="slider_item"
                v-for="item in items"
                :key="item.id"
            >
                <img :src="item.src" :alt="item.alt">
            </li>
        </ul>
        <a href="#" class="slider_btn slider_btn_next" @click="nextSlide"></a>
        <a href="#" class="slider_btn slider_btn_prev" @click="prevSlide"></a>
    </div>
</template>

<script>
export default {
    name: "SliderMain",
    props: {
        images: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            currentIndex: 0,
            autoSlideInterval: null,
        };
    },
    computed: {
        items() {
            return this.images.map((src, index) => ({
                src,
                alt: `картинка ${index + 1}`,
            }));
        },
        sliderStyle() {
            return {
                transform: `translateX(-${this.currentIndex * 100}%)`,
            };
        },
    },
    methods: {
        nextSlide(e) {
            e.preventDefault();
            this.currentIndex = (this.currentIndex + 1) % this.items.length;
        },
        prevSlide(e) {
            e.preventDefault();
            this.currentIndex =
                (this.currentIndex - 1 + this.items.length) % this.items.length;
        },
        startAutoSlide() {
            this.stopAutoSlide();
            this.autoSlideInterval = setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.items.length;
            }, 3000); // Интервал 2 секунды
        },
        stopAutoSlide() {
            clearInterval(this.autoSlideInterval);
        },
    },
    mounted() {
        this.startAutoSlide();
    },
};
</script>

<style scoped lang="scss">
.slider {
    overflow: hidden;
    width: 100%;
    position: relative;
}

.slider_btn {
    position: absolute;
    width: 11px;
    height: 19px;
    background-image: url('@/../public/img/arrow.png');
    top: 50%;
    right: 24px;

    &.slider_btn_prev {
        transform: rotate(180deg);
        right: unset;
        left: 24px;
    }
}

.slider_list {
    display: flex;
    transition: .6s;
}

.slider_item {
    flex: 0 0 100%;

    & > img {
        width: 100%;
        height: 100%;
    }
}
</style>
