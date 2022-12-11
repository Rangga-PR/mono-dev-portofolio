<template>
  <svg
    :width="props.w"
    :height="props.h"
    viewBox="-1 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="rng-logo" data-testid="rng-logo">
      <g id="Logo">
        <path
          :class="fillClasses"
          id="Polygon 2"
          d="M15.598 6.49142C16.6163 7.05858 16.6269 8.51967 15.6169 9.10158L10.804 11.8746C9.8082 12.4484 8.56356 11.7351 8.5552 10.5858L8.51539 5.11001C8.50704 3.96077 9.74118 3.22943 10.7452 3.78864L15.598 6.49142Z"
          :fill="props.color"
        />
        <path
          :class="strokeClasses"
          id="Polygon 6"
          d="M11.1079 1.975L17.5943 5.58528C18.3077 5.98237 18.75 6.73478 18.75 7.55127V14.3091C18.75 15.0963 18.3385 15.8263 17.6651 16.2339L11.1796 20.1594C10.4576 20.5963 9.5519 20.5926 8.8336 20.1497L2.49378 16.2405C1.82931 15.8308 1.42468 15.106 1.42468 14.3253V7.53531C1.42468 6.7252 1.86018 5.97764 2.56488 5.57805L8.90383 1.98373C9.58669 1.59653 10.422 1.59322 11.1079 1.975Z"
          :stroke="props.color"
          stroke-width="1.5"
        />
        <line
          :class="strokeClasses"
          id="Line 11"
          x1="6.75"
          y1="3"
          x2="6.75"
          y2="19"
          :stroke="props.color"
          stroke-width="1.5"
        />
        <line
          :class="strokeClasses"
          id="Line 12"
          x1="1.35294"
          y1="9.33824"
          x2="16.3529"
          y2="17.3382"
          :stroke="props.color"
          stroke-width="1.5"
        />
      </g>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{ color?: string; h?: string; w?: string }>(),
  {
    h: "22",
    w: "22",
  }
);

const strokeClasses = computed(() =>
  props.color ? "" : "stroke-secondary dark:stroke-primary"
);

const fillClasses = computed(() =>
  props.color ? "" : "fill-secondary dark:fill-primary"
);
</script>
