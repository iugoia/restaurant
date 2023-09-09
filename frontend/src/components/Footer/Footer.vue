<template>
    <footer>
        <div class="container">
            <ul class="footer_list">
                <li class="footer_item">
                    <p class="footer_title">Адрес</p>
                    <a href="https://yandex.ru/maps/org/sempre/6531532095/?ll=37.612851%2C55.763409&mode=search&sll=37.404213%2C55.723736&sspn=0.123253%2C0.040885&text=sempre&z=17" class="footer_link">ул. Большая Дмитровка, 22</a>
                </li>
                <li class="footer_item">
                    <p class="footer_title">Телефон</p>
                    <a href="tel:+74951353195" class="footer_link">8 (495) 135-31-95</a>
                </li>
                <li class="footer_item">
                    <p class="footer_title">Время работы</p>
                    <p class="footer_link">ПН — ПТ с 11:00 до 23:00 СБ — ВС с 10:00 до 23:00</p>
                </li>
                <li class="footer_item">
                    <p class="footer_title">Email</p>
                    <a href="mailto:hi@sempre.moscow" class="footer_link">hi@sempre.moscow</a>
                </li>
                <li class="footer_item">
                    <p class="footer_title">Подписывайтесь</p>
                    <div class="footer_socials">
                        <a href="https://t.me/sempre_moscow" class="footer_icon">
                            <img src="../../../public/img/tg_icon.png" alt="Телеграм">
                        </a>
                        <a href="https://vk.com/sempre.moscow" class="footer_icon">
                            <img src="../../../public/img/vk_icon.png" alt="Вконтакте">
                        </a>
                    </div>
                </li>
            </ul>
            <div class="footer_rights">
                <p class="right_title">Все права защищены 2023</p>
                <a href="#" class="rights_politics">Политика обработки персональных данных</a>
                <p class="right_team">Разработано с любовью Хабибиком и Абобиком</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterMain"
}
</script>

<style scoped lang="scss">
@import '@/assets/global.scss';
@import '@/components/Footer/Footer.module.scss';
</style>
