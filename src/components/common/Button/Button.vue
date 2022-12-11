<template>
  <component
    :is="props.type"
    :class="[commonClasses, darkClasses, lightClasses]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
type ButtonType = "button" | "a";

const darkClasses =
  "dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-secondary";
const lightClasses =
  "border-secondary text-secondary hover:bg-secondary hover:text-primary";
const commonClasses =
  "border rounded-sm w-fit py-1 px-6 font-thin flex items-center shadow-md";

const props = withDefaults(
  defineProps<{
    type: ButtonType;
  }>(),
  { type: "button" }
);
</script>
