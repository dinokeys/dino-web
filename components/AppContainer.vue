<script setup lang="ts">
import { useDarkmodeStore } from '~/store/darkmode';

const darkmodeStore = useDarkmodeStore();

const data = reactive({
  darkmode: computed(() => darkmodeStore.getMode),
});

onMounted(async () => {
  console.log(data.darkmode);
});

watch(
  () => data.darkmode,
  (mode, prevMode) => {
    console.log(mode, ' value changed from ', prevMode);
  }
);
</script>

<template>
  <div :class="data.darkmode.mode === 'dark' ? 'dark' : ''">
    <div
      class="min-h-screen relative w-full antialiased text-zinc-500 dark:text-zinc-400 bg-white dark:bg-zinc-900"
    >
      <slot />
    </div>
  </div>
</template>
