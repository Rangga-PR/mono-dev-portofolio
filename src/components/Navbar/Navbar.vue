<template>
  <header
    class="px-4 h-14 items-center justify-between flex sticky top-0 bg-primary dark:bg-secondary z-10"
  >
    <Logo h="40" w="40" />
    <div class="flex items-center">
      <ToggleScreenMode class="mr-6" />
      <nav class="hidden lg:flex">
        <Button class="mr-4" type="a" href="#about">About</Button>
        <Button class="mr-4" type="a" href="#experiences">Experiences</Button>
        <Button class="mr-4 lg:mr-0" type="a" href="#works">Works</Button>
      </nav>
      <NavDrawer class="block lg:hidden" />
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from "../common/Icon/Logo.vue";
import NavDrawer from "../NavDrawer/NavDrawer.vue";
import Button from "../common/Button/Button.vue";
import ToggleScreenMode from "../ToggleScreenMode/ToggleScreenMode.vue";
</script>
