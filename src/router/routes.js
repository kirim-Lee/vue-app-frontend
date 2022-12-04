import Profile from '../components/Profile.vue';
import Application from '../components/Application.vue';
import NotFound from '../components/NotFound.vue';

const routes = [
  { path: '/', redirect: '/profile' },
  { path: '/profile', name: 'profile', component: Profile, alias: '/home' },
  { path: '/application', component: Application },
  { path: '/:catchAll(.*)+', component: NotFound },
];

export default routes;
