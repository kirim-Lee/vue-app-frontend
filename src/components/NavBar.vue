<template>
  <nav class="navbar" navbar-expand-lg navbar-dark bg-dark>
    <div class="container-fluid">
      <a class="navbar-brand" href="/">TripleK</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul
          :class="{ 'navbar-nav': true, 'me-auto': menu.me_auto }"
          v-for="menu in menu_category"
          :key="menu.id"
        >
          <li
            class="nav-item"
            v-for="menu_object in menu.value"
            :key="menu_object.key"
          >
            <router-link :to="menu_object.URL" class="nav-link">{{
              menu_object.value
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed, ref } from 'vue';

const menus = [
  { key: 'home', value: '홈', URL: '/', position: 'left' },
  { key: 'app', value: '애플리케이션', URL: '/application', position: 'left' },
  { key: 'me', value: 'Profile', URL: '/profile', position: 'right' },
];

export default {
  name: 'NavBar',
  setup() {
    const left_menus = computed(() =>
      menus.filter((i) => i.position === 'left')
    );

    const right_menus = computed(() =>
      menus.filter((i) => i.position === 'right')
    );

    return {
      menu_category: [
        { id: 1, me_auto: true, value: left_menus.value },
        { id: 2, me_auto: false, value: right_menus.value },
      ],
    };
  },
};
</script>
