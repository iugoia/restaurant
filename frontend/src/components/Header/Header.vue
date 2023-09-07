<template>
    <header>
        <div class="container">
            <div class="header_row">
                <div class="header_logo">
                    <img src="/logo.png" alt="Логотип">
                </div>
                <nav class="user_nav">
                    <ul class="user_nav_list">
                        <li class="user_nav_item">
                            <a href="#" class="user_nav_link">Меню</a>
                        </li>
                        <li class="user_nav_item">
                            <a href="#" class="user_nav_link">Заказать торт</a>
                        </li>
                        <li class="user_nav_item">
                            <a href="#" class="user_nav_link">О ресторане</a>
                        </li>
                        <li class="user_nav_item">
                            <a href="#" class="user_nav_link">Новости</a>
                        </li>
                        <li class="user_nav_item">
                            <a href="#" class="user_nav_link">Контакты</a>
                        </li>
                        <li class="user_nav_item">
                            <a href="#" class="user_nav_link">Карта гостя</a>
                        </li>
                    </ul>
                </nav>
                <div class="langs">

                </div>
                <ul class="nav__add">
                    <li class="nav__add_item">
                        <router-link-component to="/">Заявка бронь</router-link-component>
                    </li>
                    <li class="nav__add_item">
                        <router-link-component to="/">Доставка</router-link-component>
                    </li>
                    <li class="nav__add_item">
                        <router-link-component to="/">Valet Parking</router-link-component>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    name: "HeaderMain"
}
</script>

<style scoped lang="scss">
@import '@/assets/global.scss';
@import '@/components/Header/Header.module.scss';
</style>
