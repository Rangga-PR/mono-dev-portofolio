<template>
  <section
    id="about"
    class="flex flex-col justify-center p-4 bg-primary dark:bg-secondary h-96"
    ref="heroRef"
  >
    <Transition :duration="950">
      <div v-show="onScreen">
        <Text type="h2" id="greeting" class="content" :class="transitionClasses"
          >Hi,</Text
        >
        <Text
          type="h1"
          id="name"
          class="content delay-[250ms]"
          :class="transitionClasses"
          >I'am Rangga</Text
        >
        <Text
          class="mt-4 max-w-lg content delay-[500ms]"
          id="caption"
          :class="transitionClasses"
        >
          I’m a software engineer specializing in building web applications.
          Mostly I work on frontend, but i also enjoy working on backend.
        </Text>
        <Button
          class="mt-6 content delay-[500ms]"
          :class="transitionClasses"
          type="a"
          :href="`mailto:${email}`"
          id="contact-me"
          >CONTACT ME
        </Button>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import Text from "../common/Text/Text.vue";
import Button from "../common/Button/Button.vue";
import { email } from "../../data";
import useIsIntersecting from "../../composables/useIsIntersecting";
import { ref } from "vue";

const transitionClasses =
  "transition-[opacity,transform] duration-500 ease-in-out ";

const heroRef = ref();
const onScreen = useIsIntersecting(heroRef, { once: true });
</script>

<style scoped>
.v-enter-from .content,
.v-leave-to .content {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
