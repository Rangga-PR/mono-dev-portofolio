<template>
  <article
    class="flex shadow-md bg-primaryshade dark:bg-secondaryshade rounded-sm h-52"
  >
    <div class="flex flex-col w-[88%]">
      <div class="p-4 grow">
        <Text type="h3" class="h-10">{{ props.work.title }}</Text>
        <Text class="mt-4">{{ props.work.desc }}</Text>
      </div>
      <div class="bg-secondary dark:bg-primary h-1 w-full" />
      <div class="p-4 flex">
        <Text
          class="font-medium opacity-70 mr-6"
          v-for="stack in props.work.stacks"
          :key="stack"
          >{{ stack }}</Text
        >
      </div>
    </div>
    <div
      class="w-[12%] h-24 border-secondary dark:border-primary border-l-4 pt-2 flex justify-center"
    >
      <a
        v-show="!!props.work.url"
        :href="props.work.url"
        target="_blank"
        class="h-fit w-fit"
        ><BoxedArrow w="24" h="24"
      /></a>
    </div>
  </article>
</template>

<script setup lang="ts">
import Text from "../common/Text/Text.vue";
import BoxedArrow from "../common/Icon/BoxedArrow.vue";
import type { Work } from "../../type";

const props = defineProps<{ work: Work }>();
</script>
