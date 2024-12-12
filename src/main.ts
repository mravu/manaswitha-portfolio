import { createApp } from 'vue';
import App from './App.vue';
import { provideAppStore } from '@/store/appStore';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue3Toastify   from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faLinkedin);

const app = createApp(App);


app.use(router);
app.use(provideAppStore);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(Vue3Toastify);

app.mount('#app');
