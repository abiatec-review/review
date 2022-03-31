import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BaseButton from './components/atoms/BaseButton.vue';

const app = createApp(App);

app.use(store).use(router);

app.component('base-button', BaseButton);

app.mount('#app');
