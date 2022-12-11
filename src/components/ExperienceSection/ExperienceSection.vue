<template>
  <Section id="experiences" left-facing title="01" subtitle="Where I've work">
    <div class="flex flex-col items-center p-4">
      <Timeline :data="data" />
    </div>
  </Section>
</template>

<script setup lang="ts">
import type { Experience } from "../../type";
import Section from "../Section/Section.vue";
import Timeline from "../Timeline/Timeline.vue";

const props = defineProps<{
  data: Experience[];
}>();
</script>
