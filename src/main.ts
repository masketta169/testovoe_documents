import { createPinia } from 'pinia';
import { createApp } from 'vue';
import '@/assets/scss/_global.scss';
import '@/assets/scss/_reset.scss';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
