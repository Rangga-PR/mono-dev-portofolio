<template>
  <svg
    :width="props.w"
    :height="props.h"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :class="strokeClasses"
      d="M13.6768 7.50002C13.6768 11.393 10.7009 14.5 7.08841 14.5C3.47595 14.5 0.5 11.393 0.5 7.50002C0.5 3.60706 3.47595 0.500015 7.08841 0.500015C10.7009 0.500015 13.6768 3.60706 13.6768 7.50002Z"
      :stroke="props.color"
    />
    <ellipse
      cx="7.08843"
      cy="7.50002"
      rx="3.15041"
      ry="3.33333"
      :fill="props.color"
      :class="fillClasses"
    />
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{ color?: string; h?: string; w?: string }>(),
  {
    h: "15",
    w: "15",
  }
);

const strokeClasses = computed(() =>
  props.color ? "" : "stroke-secondary dark:stroke-primary"
);

const fillClasses = computed(() =>
  props.color ? "" : "fill-secondary dark:fill-primary"
);
</script>
