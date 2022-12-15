<template>
  <Section id="works" title="02" subtitle="What I've Built">
    <div ref="workRef" class="min-h-[1140px] w-full">
      <Transition :duration="4000">
        <div
          class="grid grid-cols-[repeat(auto-fit,minmax(276px,1fr))] gap-4 p-4"
          v-show="onScreen"
        >
          <WorkCard
            v-for="(work, idx) in props.data"
            :work="work"
            class="transition-[opacity,transform] duration-500 ease-in-out card"
            :style="{ '--idx': idx }"
          />
        </div>
      </Transition>
    </div>
  </Section>
</template>

<script setup lang="ts">
import WorkCard from "../WorkCard/WorkCard.vue";
import Section from "../Section/Section.vue";
import type { Work } from "../../type";
import useIsIntersecting from "../../composables/useIsIntersecting";
import { ref } from "vue";

const props = defineProps<{
  data: Work[];
}>();

const workRef = ref();
const onScreen = useIsIntersecting(workRef, { once: true });
</script>

<style scoped>
.v-enter-active .card {
  transition-delay: calc(250ms * var(--idx));
}

.v-enter-from .card,
.v-leave-to .card {
  opacity: 0;
  transform: scale(0);
}
</style>
