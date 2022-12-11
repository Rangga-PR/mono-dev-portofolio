<template>
  <svg
    :width="props.w"
    :height="props.h"
    viewBox="0 0 25 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="{ open: props.open }"
  >
    <line
      :class="strokeClasses"
      id="top-line"
      x1="1"
      y1="1"
      x2="24"
      y2="1"
      :stroke="props.color"
      stroke-width="2"
      stroke-linecap="round"
    />
    <line
      :class="strokeClasses"
      id="mid-line"
      x1="13"
      y1="9"
      x2="24"
      y2="9"
      :stroke="props.color"
      stroke-width="2"
      stroke-linecap="round"
    />
    <line
      :class="strokeClasses"
      id="btm-line"
      x1="1"
      y1="17"
      x2="24"
      y2="17"
      :stroke="props.color"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{ color?: string; h?: string; w?: string; open?: boolean }>(),
  {
    h: "18",
    w: "25",
  }
);

const strokeClasses = computed(() =>
  props.color ? "" : "stroke-secondary dark:stroke-primary"
);
</script>

<style scoped>
line {
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.open #top-line {
  transform: rotate(45deg) translate(3px, -2.5px);
  /* transform: rotate(45deg); */
}
.open #btm-line {
  transform: rotate(-45deg) translate(-11px, -1.5px);
}

.open #mid-line {
  transform: translateX(100%);
}
</style>
