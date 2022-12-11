<template>
  <svg
    :width="props.w"
    :height="props.h"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :class="fillClasses"
      d="M22.5 2.5H2.5C1.125 2.5 0 3.625 0 5V20C0 21.375 1.125 22.5 2.5 22.5H22.5C23.875 22.5 25 21.375 25 20V5C25 3.625 23.875 2.5 22.5 2.5ZM22.5 20H20V9L12.5 13.75L5 9V20H2.5V5H4L12.5 10.25L21 5H22.5V20Z"
      :fill="props.color"
    />
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{ color?: string; h?: string; w?: string }>(),
  {
    h: "25",
    w: "25",
  }
);

const fillClasses = computed(() =>
  props.color ? "" : "fill-secondary dark:fill-primary"
);
</script>
