<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
.logo-font {
  font-family: 'Pacifico', cursive;
}
</style>

<template>
  <client-only>
    <AppContainer>
      <AppHeader />
      <NuxtPage />
    </AppContainer>
    <!-- loading indicator, rendered on server-side -->
    <template #placeholder>
      <div
        class="min-h-screen relative w-full antialiased text-white bg-white flex flex-col justify-center items-center"
      >
        <div class="mr-3 flex flex-row w-[2.0625rem] overflow-hidden md:w-auto">
          <img
            class="text-zinc-900 h-14 w-auto"
            src="~/assets/images/dino.png"
            alt="Dino"
            data-v-33d85123=""
          />
          <h2
            class="logo-font ml-1 mr-2 text-center text-5xl font-extrabold text-zinc-700"
          >
            Dino
          </h2>
        </div>
        <svg
          class="animate-spin -ml-1 mr-3 h-8 w-8 mt-5 text-zinc-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    </template>
  </client-only>
</template>
