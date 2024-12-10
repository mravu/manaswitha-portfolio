import { createApp } from 'vue';
import App from './App.vue';
import { provideAppStore } from '@/store/appStore'; // Import the store
import router from './router';
// Import Font Awesome core
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


// Import Font Awesome icons (brands)
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Add icons to the library
library.add(faGithub, faLinkedin);

// Create Vue app and register FontAwesomeIcon globally
const app = createApp(App);




// Provide the global store using the provideAppStore function
app.use(router);
app.use(provideAppStore); // Make sure to call this to provide the store
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(Vue3Toastify, {
    autoClose: 3000,
  } as ToastContainerOptions);

app.mount('#app');
