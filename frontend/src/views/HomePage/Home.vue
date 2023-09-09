<template>
    <div>
        <header-main></header-main>
        <main>
            <section class="video_sec">
                <video
                    class="video"
                    :src="require('@/../public/sempre.mp4')"
                    autoplay
                    loop
                    muted
                >
                </video>
            </section>
            <section class="about_rest">
                <div class="container">
                    <div class="about_rest_row">
                        <div class="about_rest_col about_rest_col_slider">
                            <slider-main :images="imageArray1" />
                        </div>
                        <div class="about_rest_col about_rest_col_content">
                            <div class="about_rest_col_content_ctn">
                                <h2>О ресторане</h2>
                                <p>
                                    Ресторан SEMPRE — зелёный уголок в центре столицы с европейской кухней в авторской интерпретации и дизайнерским эко-интерьером, не имеющим аналогов в Москве и мире.
                                </p>
                                <p>
                                    Дизайн интерьера SEMPRE — творение бельгийского дизайнера Гюста Семпре. Таинственный сад, вдохновленный зеленью северной флоры, стирает границы города и природы. Лианы, свисающие с потолка, лесной мох на стенах, колоритная мебель из массива натурального дерева, посуда и столовые приборы ручной работы. Самобытность каждой детали и отсутствие стереотипного деления пространства — свобода, как в джунглях.
                                </p>
                                <router-link-component to="/3d_tour">3D-Тур</router-link-component>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg_main">

            </section>
            <section class="about_rest">
                <div class="container">
                    <div class="about_rest_row">
                        <div class="about_rest_col about_rest_col_content">
                            <div class="about_rest_col_content_ctn">
                                <h2>Кухня</h2>
                                <p>
                                    Кухня Sempre — это авторская гастрономия бренд-шефа Анатолия Клочкова с хитрым сплетением европейской кухни и азиатского фьюжн. Анатолий называет своим главным вдохновением природу, в которой все находится в гармонии друг с другом. Поэтому каждое блюдо Sempre — это баланс: вкуса, цвета и текстуры.
                                </p>
                                <div class="about_col_btns">
                                    <router-link-component to="/">Завтраки</router-link-component>
                                    <router-link-component to="/">Основное меню</router-link-component>
                                </div>
                            </div>
                        </div>
                        <div class="about_rest_col about_rest_col_slider">
                            <slider-main :images="imageArray2" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>

import RouterLinkComponent from "@/components/UI/RouterLink/RouterLinkComponent";
import SliderMain from "@/components/UI/Slider";
export default {
    name: "HomePage",
    components: {SliderMain, RouterLinkComponent},
    data() {
        return {
            imageArray1: [
                '/img/slider_about/1.png',
                '/img/slider_about/2.png',
                '/img/slider_about/3.png',
                '/img/slider_about/4.png',
                '/img/slider_about/5.png',
            ],
            imageArray2: [
                '/img/slider_food/1.png',
                '/img/slider_food/2.png',
                '/img/slider_food/3.png',
                '/img/slider_food/4.png',
                '/img/slider_food/5.png',
                '/img/slider_food/6.png',
            ]
        }
    }
}
</script>

<style scoped lang="scss">
    @import '@/assets/global.scss';
    @import '@/views/HomePage/Home.module.scss';
</style>
