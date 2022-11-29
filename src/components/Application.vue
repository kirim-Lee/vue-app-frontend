<template>
  <p class="m-2">
    총 {{ applications_count }} 개의 애플리케이션 중
    {{ applications.length }} 개가 보여집니다.
  </p>
  <hr />
  <div class="row row-cols-1 row-cols-sm-3 g-2 m-0">
    <div class="col" v-for="data in applications" :key="data.id">
      <app-card
        :data="data"
        :selected="selected_id"
        @click="onClickApplication"
      />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, provide } from 'vue';
import { useStore } from 'vuex';
import { axiosGet } from '../modules/axios';
import AppCard from './AppCard.vue';

export default {
  name: 'Application',
  setup() {
    const store = useStore();

    const applications = computed(() =>
      store.getters['applications/applications']()
    );

    const applications_count = computed(
      () => store.getters['applications/applications_count']
    );

    const selected_id = ref(-1);

    const onClickApplication = (data) => {
      selected_id.value = data.id;
    };

    onMounted(() => {
      if (!store.getters.applications_count) {
        axiosGet('/db/applications', ({ data }) => {
          store.dispatch('applications/setApplications', data);
        });
      }
    });

    return {
      applications_count,
      applications,
      selected_id,
      onClickApplication,
    };
  },
  components: { AppCard },
};
</script>
