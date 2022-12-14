import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm.min.js';
import { store } from '/@/store';
import { router } from '/@/router';

createApp(App).use(store).use(router).mount('#app');
