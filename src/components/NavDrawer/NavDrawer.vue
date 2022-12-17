<template>
  <div>
    <Burger h="40" w="40" :open="expand" @click="handleExpand" />
    <nav
      class="flex flex-col px-4 py-6 fixed top-14 items-end z-10 shadow-md transition-all duration-500 ease-in-out bg-primary dark:bg-secondary w-full"
      :class="expand ? 'left-0' : 'left-[-100vw]'"
    >
      <Button type="a" href="#about" @click="handleExpand">About</Button>
      <Button class="mt-6" type="a" href="#experiences" @click="handleExpand"
        >Experiences</Button
      >
      <Button class="mt-6" type="a" href="#works" @click="handleExpand"
        >Works</Button
      >
      <Button
        class="mt-6"
        type="a"
        :href="github"
        target="__blank"
        @click="handleExpand"
      >
        Github
        <Github class="ml-2" w="18" h="18" />
      </Button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Burger from "../common/Icon/Burger.vue";
import Button from "../common/Button/Button.vue";
import Github from "../common/Icon/Github.vue";
import { github } from "../../data";

const expand = ref(false);

const handleExpand = () => (expand.value = !expand.value);
</script>
