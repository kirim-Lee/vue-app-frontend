<template>
  <div v-if="show" class="col-sm py-2">
    <div
      class="card"
      :class="{ 'border-primary bg-primary text-light': top, shadow: top }"
    >
      <div class="card-body">
        <h4 class="card-title" :class="[top ? 'text-light' : 'text-muuted']">
          {{ resume.title }}
        </h4>
        <hr />
        <p class="card-text">{{ resume.content }}</p>
        <a
          v-if="resume.URL != 'null'"
          :href="resume.URL"
          target="_blank"
          :class="[top ? 'text-light' : 'text-primary']"
          >link</a
        >
      </div>
    </div>
  </div>
  <div v-if="!show" class="col-sm" />
</template>

<script>
export default {
  name: 'Card',
  props: {
    top: Boolean,
    show: Boolean,
    resume: Object,
  },
  setup() {},
};
</script>
