<script setup lang="ts">
// const router = useRouter();
// const client = useSupabaseClient();
// const user = useSupabaseUser();
// const logout = async () => {
//   await client.auth.signOut();
//   router.push('/');
// };
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
.logo-font {
  font-family: 'Pacifico', cursive;
}
</style>

<template>
  <header
    class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent"
  >
    <div class="max-w-[90rem] mx-auto">
      <div
        class="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0"
      >
        <div class="relative flex items-center">
          <button
            type="button"
            class="mr-3 flex flex-row w-[2.0625rem] overflow-hidden md:w-auto"
            @click="
              () => {
                navigateTo('/');
              }
            "
          >
            <img
              class="hidden dark:inline text-slate-900 dark:text-white h-7 w-auto"
              src="~/assets/images/dino-white.png"
              alt="Dino"
              data-v-33d85123=""
            />
            <img
              class="dark:hidden text-slate-900 dark:text-white h-7 w-auto"
              src="~/assets/images/dino.png"
              alt="Dino"
              data-v-33d85123=""
            />
            <h2
              class="logo-font ml-1 mr-2 text-center text-xl font-extrabold text-slate-700 dark:text-slate-100"
            >
              Dino
            </h2>
          </button>
          <div class="relative hidden lg:flex items-center ml-auto">
            <nav
              class="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200"
            >
              <ul class="flex space-x-8">
                <li>
                  <a
                    class="hover:text-sky-500 dark:hover:text-sky-400"
                    href="/docs/installation"
                    >Docs</a
                  >
                </li>
                <li>
                  <a
                    href="https://tailwindui.com"
                    class="hover:text-sky-500 dark:hover:text-sky-400"
                    >About us</a
                  >
                </li>
                <li>
                  <a
                    class="hover:text-sky-500 dark:hover:text-sky-400"
                    href="/blog"
                    >Blog</a
                  >
                </li>
              </ul>
            </nav>
            <div
              class="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800"
            >
              <label class="sr-only" id="headlessui-listbox-label-31"
                >Theme</label
              >
              <ButtonsDarkMode />
              <a
                href="https://github.com/dinokeys"
                class="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                ><span class="sr-only">Tailwind CSS on GitHub</span
                ><svg
                  viewBox="0 0 16 16"
                  class="w-5 h-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  ></path></svg
              ></a>
              <button
                type="button"
                @click="
                  () => {
                    navigateTo('/login');
                  }
                "
                class="ml-6 inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-semibold rounded-md shadow-sm text-slate-600 dark:text-white bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
              >
                Log in
              </button>
            </div>
          </div>
          <button
            type="button"
            class="ml-auto text-slate-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-600 lg:hidden dark:text-slate-400 dark:hover:text-slate-300"
          >
            <span class="sr-only">Search</span
            ><svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="m19 19-3.5-3.5"></path>
              <circle cx="11" cy="11" r="6"></circle>
            </svg>
          </button>
          <div class="ml-2 -my-1 lg:hidden">
            <button
              type="button"
              class="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <span class="sr-only">Navigation</span
              ><svg width="24" height="24" fill="none" aria-hidden="true">
                <path
                  d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
