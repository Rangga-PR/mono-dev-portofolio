<template>
  <Section id="works" title="02" subtitle="What I've Built">
    <div class="grid grid-cols-[repeat(auto-fit,minmax(276px,1fr))] gap-4 p-4">
      <WorkCard v-for="work in props.data" :work="work" /></div
  ></Section>
</template>

<script setup lang="ts">
import WorkCard from "../WorkCard/WorkCard.vue";
import Section from "../Section/Section.vue";
import type { Work } from "../../type";

const props = defineProps<{
  data: Work[];
}>();
</script>
