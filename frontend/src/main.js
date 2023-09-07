import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import './assets/global.scss';

// компоненты

import HeaderMain from "@/components/Header/Header";
import RouterLinkComponent from "@/components/UI/RouterLink/RouterLinkComponent";

const app = createApp(App)

app
    .use(router)
    .component('HeaderMain', HeaderMain)
    .component('RouterLinkComponent', RouterLinkComponent)
    .mount('#app')
