<template>
  <section
    id="about"
    class="flex flex-col justify-center p-4 aspect-[21/9] bg-primary dark:bg-secondary"
  >
    <Text type="h2">Hi,</Text>
    <Text type="h1">I'am Rangga</Text>
    <Text class="mt-4 max-w-lg">
      I’m a software engineer specializing in building web applications. Mostly
      I work on frontend, but i also enjoy working on backend.
    </Text>
    <Button class="mt-6" type="a" :href="`mailto:${email}`">CONTACT ME </Button>
  </section>
</template>

<script setup lang="ts">
import Text from "../common/Text/Text.vue";
import Button from "../common/Button/Button.vue";
import { email } from "../../data";
</script>
