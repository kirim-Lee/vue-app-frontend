import { defineComponent } from 'vue';
import Profile from '../components/Profile.vue';
import Application from '../components/Application.vue';

const NotFound = defineComponent({
  template: `<div>Not Found</div>`,
});

const routes = [
  { path: '/', redirect: '/profile' },
  { path: '/profile', name: 'profile', component: Profile, alias: '/home' },
  { path: '/application', component: Application },
  { path: '/:(.*)+', component: NotFound },
];

export default routes;
