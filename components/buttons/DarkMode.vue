<script setup lang="ts">
import { useDarkmodeStore } from '~/store/darkmode';

const darkmodeStore = useDarkmodeStore();

const data = reactive({
  darkmode: computed(() => darkmodeStore.getMode),
  performance: performance.now(),
});

const updateDarkmode = () => {
  darkmodeStore.update(data.darkmode.mode);
};

// onBeforeMount(async () => {
//   updateDarkmode();
// });

watch(
  () => data.darkmode,
  (mode, prevMode) => {
    //console.log(mode, ' value changed from ', prevMode);
  }
);
</script>

<template>
  <button
    type="button"
    @click="updateDarkmode()"
    id="headlessui-listbox-button-32"
    aria-haspopup="true"
    aria-expanded="false"
    aria-labelledby="headlessui-listbox-label-31 headlessui-listbox-button-32"
  >
    <span class="dark:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="fill-sky-100/20 stroke-zinc-400 h-6 w-6"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
    <span class="hidden dark:inline">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="fill-sky-400/20 stroke-zinc-500 h-6 w-6"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
        />
      </svg>
    </span>
  </button>
</template>
