<template>
  <section v-bind="$attrs" ref="sectionRef" class="h-28">
    <Transition>
      <div
        v-show="onScreen"
        class="flex flex-col p-4 mb-8"
        :class="classes.text"
      >
        <Text type="h2" class="mb-1 text" :class="transitionClasses">{{
          props.title
        }}</Text>
        <div class="flex items-center">
          <div
            id="arrow"
            class="h-1 w-[70%] absolute bg-secondary dark:bg-primary my-1"
            :class="[classes.arrowHand, transitionClasses]"
          >
            <Arrow
              class="absolute bottom-[-14px]"
              :class="[classes.arrowHead, transitionClasses]"
              h="32"
              w="25"
            />
          </div>
        </div>
        <Text
          type="h3"
          class="mt-2 !font-bold text"
          :class="transitionClasses"
          >{{ props.subtitle }}</Text
        >
      </div>
    </Transition>
  </section>
  <slot />
</template>

<script setup lang="ts">
import { computed } from "vue";
import Arrow from "../common/Icon/Arrow.vue";
import Text from "../common/Text/Text.vue";
import useIsIntersecting from "../../composables/useIsIntersecting";
import { ref } from "vue";

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

const transitionClasses = "transition-[opacity,width] duration-500 ease-in-out";

const sectionRef = ref();
const onScreen = useIsIntersecting(sectionRef, { once: true });
</script>

<style scoped>
.v-enter-from #arrow,
.v-leave-to #arrow {
  opacity: 0.01;
  width: 10%;
}

.v-enter-from .text,
.v-leave-to .text {
  opacity: 0.01;
}
</style>
