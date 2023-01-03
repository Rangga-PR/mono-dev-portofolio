<template>
  <div :class="fixedClasses" class="top-0 left-[calc(((100vw-1000px)/2)-64px)]">
    <div class="mb-2" :class="barClasses" />
    <Text class="break-all w-2" v-for="char in text">{{ char }}</Text>
  </div>

  <div
    :class="fixedClasses"
    class="bottom-0 right-[calc(((100vw-1000px)/2)-64px)]"
  >
    <a class="mb-4" :href="`mailto:${email}`" target="_blank">
      <Mail w="20" h="20" />
    </a>

    <a class="mb-4" :href="github" target="_blank">
      <Github w="20" h="20" />
    </a>

    <a :href="dev" target="_blank">
      <Dev w="24" h="24" />
    </a>

    <div class="mt-2" :class="barClasses" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Text from "../common/Text/Text.vue";
import Github from "../common/Icon/Github.vue";
import Mail from "../common/Icon/Mail.vue";
import Dev from "../common/Icon/Dev.vue";
import { email, github, dev } from "../../data";

const fixedClasses =
  "hidden lg:flex flex-col items-center fixed z-10 bg-primary dark:bg-secondary px-1";
const barClasses = "h-72 w-1 bg-secondary dark:bg-primary";

const text = ref(email);
</script>
