import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm.min.js';
import { store } from '/@/store';

import Profile from './components/Profile.vue';
import Application from './components/Application.vue';

const routes = [
  { path: '/profile', component: Profile },
  { path: '/application', component: Application },
];

const router = createRouter({ history: createWebHistory(), routes });

createApp(App).use(store).use(router).mount('#app');
