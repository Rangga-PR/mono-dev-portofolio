<template>
  <section class="flex flex-col p-4 mb-8" :class="classes.text" v-bind="$attrs">
    <Text type="h2" class="mb-1">{{ props.title }}</Text>
    <div class="flex items-center">
      <div
        class="h-1 w-[70%] absolute bg-secondary dark:bg-primary my-1"
        :class="classes.arrowHand"
      >
        <Arrow
          class="absolute bottom-[-14px]"
          :class="classes.arrowHead"
          h="32"
          w="25"
        />
      </div>
    </div>
    <Text type="h3" class="mt-2 !font-bold">{{ props.subtitle }}</Text>
  </section>
  <slot />
</template>

<script setup lang="ts">
import { computed } from "vue";
import Arrow from "../common/Icon/Arrow.vue";
import Text from "../common/Text/Text.vue";

const props = defineProps<{
  leftFacing?: boolean;
  title: string;
  subtitle: string;
}>();

const classes = computed(() => ({
  text: props.leftFacing ? "items-end" : "items-start",
  arrowHand: props.leftFacing ? "right-0" : "left-0",
  arrowHead: props.leftFacing ? "rotate-180 left-[-8px]" : "right-[-8px]",
}));
</script>
