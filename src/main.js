import { createApp } from 'vue';

import App from './App.vue';
import router from './router.js';

const app = createApp(App);

app.use(router); // to link router and app

app.mount('#app');
