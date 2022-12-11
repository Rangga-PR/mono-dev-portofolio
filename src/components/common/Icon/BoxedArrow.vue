<template>
  <svg
    :width="props.w"
    :height="props.h"
    viewBox="0 0 24 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :class="fillClasses"
      d="M20.5714 1.85715C22.4625 1.85715 24 3.39465 24 5.28572V22.4286C24 24.3196 22.4625 25.8571 20.5714 25.8571H3.42857C1.5375 25.8571 0 24.3196 0 22.4286V5.28572C0 3.39465 1.5375 1.85715 3.42857 1.85715H20.5714ZM8.57143 7.85715C7.85893 7.85715 7.28571 8.43036 7.28571 9.14286C7.28571 9.85536 7.85893 10.4286 8.57143 10.4286H13.6125L6.375 17.6607C5.87143 18.1643 5.87143 18.9786 6.375 19.4768C6.87857 19.975 7.69286 19.9804 8.19107 19.4768L15.4232 12.2446V17.7143C15.4232 18.4268 15.9964 19 16.7089 19C17.4214 19 17.9946 18.4268 17.9946 17.7143V9.14286C17.9946 8.43036 17.4214 7.85715 16.7089 7.85715H8.57143Z"
      :fill="props.color"
    />
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{ color?: string; h?: string; w?: string }>(),
  {
    h: "28",
    w: "24",
  }
);

const fillClasses = computed(() =>
  props.color ? "" : "fill-secondary dark:fill-primary"
);
</script>
