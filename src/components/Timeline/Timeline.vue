<template>
  <div ref="timelineRef" class="flex items-center h-full">
    <Transition>
      <div
        v-show="onScreen"
        class="transition-[opacity,transform] duration-500 ease-in-out"
      >
        <article class="flex flex-col w-fit" v-for="(exp, idx) in props.data">
          <div class="flex flex-col">
            <Point :text="exp.start" />
            <Line>
              <div class="p-4 max-w-xl">
                <Text type="h5">{{ exp.company }}</Text>
                <Text class="font-medium mt-1 mb-3 opacity-70">{{
                  exp.title
                }}</Text>
                <Text>{{ exp.desc }}</Text>
              </div>
            </Line>
            <Point :text="exp.end" />
            <Line v-show="idx !== props.data.length - 1" />
          </div>
        </article>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import Point from "./Point.vue";
import Line from "./Line.vue";
import Text from "../common/Text/Text.vue";
import type { Experience } from "../../type";
import useIsIntersecting from "../../composables/useIsIntersecting";
import { ref } from "vue";

const props = defineProps<{ data: Experience[] }>();

const timelineRef = ref();
const onScreen = useIsIntersecting(timelineRef, { once: true });
</script>

<style scoped>
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
</style>
