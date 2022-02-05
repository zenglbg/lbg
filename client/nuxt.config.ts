import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    typescript: {
        shim: false
    },
    css: [
        "assets/scss/reset.scss",
        "assets/scss/layout.scss",
        "assets/scss/global.scss",
    ],
    buildModules: [
        '@vueuse/nuxt',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                }
            }
        }
    }

})
