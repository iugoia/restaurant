import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import './assets/global.scss';
import store from './store';
import axios from '@/axios';
import VueCookies from 'vue-cookies';

// компоненты

import HeaderMain from "@/components/Header/Header";
import RouterLinkComponent from "@/components/UI/RouterLink/RouterLinkComponent";
import ContactsMain from "@/components/Contacts/Contacts";
import FooterMain from "@/components/Footer/Footer";
import PrimaryInput from "@/components/UI/Input/PrimaryInput";
import PrimaryCheckbox from "@/components/UI/Checkbox/PrimaryCheckbox";

axios.withCredentials = true;

const app = createApp(App)

app
    .use(router)
    .use(store)
    .use(VueCookies)
    .component('HeaderMain', HeaderMain)
    .component('RouterLinkComponent', RouterLinkComponent)
    .component('ContactsMain', ContactsMain)
    .component('FooterMain', FooterMain)
    .component('PrimaryInput', PrimaryInput)
    .component('PrimaryCheckbox', PrimaryCheckbox)
    .mount('#app')
