<template>
  <section
    id="about"
    class="flex flex-col justify-center p-4 bg-primary dark:bg-secondary h-96"
    :class="{ hide: !mounted }"
  >
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
      I’m a software engineer specializing in building web applications. Mostly
      I work on frontend, but i also enjoy working on backend.
    </Text>
    <Button
      class="mt-6 content delay-[500ms]"
      :class="transitionClasses"
      type="a"
      :href="`mailto:${email}`"
      id="contact-me"
      >CONTACT ME
    </Button>
  </section>
</template>

<script setup lang="ts">
import Text from "../common/Text/Text.vue";
import Button from "../common/Button/Button.vue";
import { email } from "../../data";
import { onMounted, ref } from "vue";

const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
});

const transitionClasses =
  "transition-[opacity,transform] duration-500 ease-in-out";
</script>

<style scoped>
.hide .content {
  opacity: 0.01;
  transform: translateY(-20px);
}
</style>
