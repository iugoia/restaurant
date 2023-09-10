<template>
    <section class="contacts">
        <div class="container contacts__container">
            <ul class="contacts__list">
                <li class="contacts__item">
                    <h2 class="contacts__title">Адрес</h2>
                    <a href="https://yandex.ru/maps/org/sempre/6531532095/?ll=37.612851%2C55.763409&mode=search&sll=37.404213%2C55.723736&sspn=0.123253%2C0.040885&text=sempre&z=17" class="contacts__link">ул. Большая Дмитровка, 22</a>
                </li>
                <li class="contacts__item">
                    <h2 class="contacts__title">Телефон</h2>
                    <a href="tel:+74951353195" class="contacts__link">8 (495) 135-31-95</a>
                </li>
                <li class="contacts__item">
                    <h2 class="contacts__title">Время работы</h2>
                    <p class="contacts__link">ПН — ПТ с 11:00 до 23:00<br>СБ — ВС с 10:00 до 23:00</p>
                </li>
                <li class="contacts__item">
                    <h2 class="contacts__title">Email</h2>
                    <a href="mailto:hi@sempre.moscow" class="contacts__link">hi@sempre.moscow</a>
                </li>
                <li class="contacts__item">
                    <router-link-component to="/" class="ft_link">Реквизиты</router-link-component>
                </li>
            </ul>
            <div class="social">
                <h2 class="contacts__title">Подписывайтесь</h2>
                <div class="social__list">
                    <a href="https://t.me/sempre_moscow" class="social__item tg"></a>
                    <a href="https://vk.com/sempre.moscow" class="social__item vk"></a>
                </div>
            </div>
            <div class="press">
                <h2 class="contacts__title">Пресса</h2>
                <ul class="press__list">
                    <li class="press__item">
                        <a href="https://www.thevoicemag.ru/lifestyle/news/15-06-2023/restoran-sempre-prezentoval-obnovlennoe-letnee-menyu/" class="press__link voice"></a>
                    </li>
                    <li class="press__item">
                        <a href="https://www.thevoicemag.ru/lifestyle/news/15-06-2023/restoran-sempre-prezentoval-obnovlennoe-letnee-menyu/" class="press__link umagazine"></a>
                    </li>
                    <li class="press__item">
                        <a href="https://moskvichmag.ru/restorany-i-bary/v-sempre-privychnye-koktejli-dopolneny-russkimi-nastojkami-i-dazhe-sovetskimi-multfilmami/" class="press__link moskvich"></a>
                    </li>
                    <li class="press__item">
                        <a href="https://www.ok-magazine.ru/style/menu/336601-novye-zavtraki-v-sempre" class="press__link okmagazine"></a>
                    </li>
                    <li class="press__item">
                        <a href="https://nownownow.ru/women/culture-women/chem-zanyatsya-v-eti-vyhodnye-10-12-iyunya/" class="press__link now"></a>
                    </li>
                    <li class="press__item">
                        <a href="https://hellomagrussia.ru/sobytia/kuda-poiti/50072-kuda-pojti-na-etoj-nedele-10-gastrolynyh-uzhinov-vinnye-degustacii-v-okeanariume-i-ustricy-s-shampanskim.html" class="press__link hello"></a>
                    </li>
                    <li class="press__item">
                        <a href="https://www.timeout.ru/msk/feature/letnyaya-kollaboracziya-tez-tour-x-sempre" class="press__link timeout"></a>
                    </li>
                    <li class="press__item">
                        <a href="https://www.marieclaire.ru/stil-zjizny/velikii-post-v-kakikh-restoranakh-gotovyat-samye-vkusnye-postnye-blyuda/?ysclid=lfwq39q169825949302" class="press__link marieclaire"></a>
                    </li>
                    <li class="press__item">
                        <a href="https://peopletalk.ru/article/plany-na-vyhodnye-13-14-maya-vecherinka-radugi-i-radio-ustritsy-v-sempre-i-zuma-v-simache/" class="press__link peopletalk"></a>
                    </li>
                    <li class="press__item">
                        <a href="https://chef.ru/news/ustriczy-v-sempre/" class="press__link chef"></a>
                    </li>
                    <li class="press__item">
                        <a href="https://bg.ru/bg/weekend/weekend-news/9009-sempre-topstretching?ysclid=ld1fipxox5164398217" class="press__link bigcity"></a>
                    </li>
                    <li class="press__item">
                        <a href="https://thecity.m24.ru/articles/8262?ysclid=ldu2wzd72o950566219" class="press__link thecity"></a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "contactsMain"
}
</script>

<style scoped lang="scss">
@import '@/assets/global.scss';
@import '@/components/Contacts/Contacts.module.scss';
</style>
