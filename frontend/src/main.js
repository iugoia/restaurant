import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import './assets/global.scss';
import store from './store';

// компоненты

import HeaderMain from "@/components/Header/Header";
import RouterLinkComponent from "@/components/UI/RouterLink/RouterLinkComponent";
import FooterMain from '@/components/Footer/Footer';
import PrimaryInput from "@/components/UI/Input/PrimaryInput";
import PrimaryCheckbox from "@/components/UI/Checkbox/PrimaryCheckbox";

const app = createApp(App)

app
    .use(router)
    .use(store)
    .component('HeaderMain', HeaderMain)
    .component('RouterLinkComponent', RouterLinkComponent)
    .component('FooterMain', FooterMain)
    .component('PrimaryInput', PrimaryInput)
    .component('PrimaryCheckbox', PrimaryCheckbox)
    .mount('#app')
