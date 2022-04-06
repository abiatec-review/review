import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';
import BaseButton from './components/atoms/BaseButton.vue';
import BaseImage from './components/atoms/BaseImage.vue';
import BaseInput from './components/atoms/BaseInput.vue';

const app = createApp(App);

app.use(store, key).use(router);

app.component('base-button', BaseButton);
app.component('base-image', BaseImage);
app.component('base-input', BaseInput);

app.mount('#app');
