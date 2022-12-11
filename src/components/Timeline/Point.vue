<template>
  <div class="flex flex-row-reverse lg:flex-row items-center w-fit">
    <Text
      class="ml-2 lg:ml-0 lg:mr-2 w-[102px] text-start lg:text-end"
      type="h6"
      >{{ props.text }}</Text
    >
    <Point w="20" h="20" />
  </div>
</template>

<script setup lang="ts">
import Point from "../common/Icon/Point.vue";
import Text from "../common/Text/Text.vue";

const props = defineProps<{
  text: string;
}>();
</script>
