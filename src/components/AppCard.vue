<template>
  <div
    class="card h-100 border-2"
    :class="{ 'border-primary': selected_id === data.id }"
  >
    <img :src="data.image" class="card-img-top" alt="Image" />
    <div class="card-body">
      <h5 class="card-title">{{ data.name }}</h5>
      <p class="card-text">{{ data.content }}</p>
      <p class="card-text" v-if="data.url !== 'null'">
        <a :href="data.url" @click="$emit('click', data)" target="_blank"
          >클릭</a
        >
      </p>
    </div>
    <div class="card-footer">
      <small class="text-muted">{{ data.date }} 에 등록됨</small>
    </div>
  </div>
</template>

<script>
import { toRef } from 'vue';

export default {
  name: 'AppCard',
  props: {
    data: Object,
    selected: Number,
  },
  emits: ['click'],
  setup(props) {
    const data = props.data;

    const selected_id = toRef(props, 'selected');

    return { data, selected_id };
  },
};
</script>
