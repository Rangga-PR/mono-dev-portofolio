<template>
  <component
    :is="props.type"
    :class="classes"
    class="text-secondary dark:text-primary"
    ><slot
  /></component>
</template>

<script setup lang="ts">
import { computed } from "vue";

type TextType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

const props = withDefaults(
  defineProps<{
    type?: TextType;
  }>(),
  { type: "p" }
);

const paragraph = "font-sub text-xs";
const heading = "font-medium leading-none";
const heading1 = "!font-bold text-7xl";
const heading2 = "!font-bold text-4xl";
const heading3 = "text-xl";
const heading4 = "text-lg";
const heading5 = "text-md";
const heading6 = "text-sm";

const classes = computed(() => ({
  [heading]: ["h1", "h2", "h3", "h4", "h5", "h6"].includes(props.type),
  [heading1]: props.type === "h1",
  [heading2]: props.type === "h2",
  [heading3]: props.type === "h3",
  [heading4]: props.type === "h4",
  [heading5]: props.type === "h5",
  [heading6]: props.type === "h6",
  [paragraph]: props.type === "p",
}));
</script>
