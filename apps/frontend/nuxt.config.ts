// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "nuxt-icon"],
  colorMode: {
    preference: "light",
  },
  ui: {
    global: true,
    // icons: ["mdi", "simple-icons"],
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  $production: {
    routeRules: {
      "/**": { isr: true },
    },
  },
  $development: {
    routeRules: {
      "/**": { isr: true },
    },
    //
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: process.env.NUXT_API_SECRET,
    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api",
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
      extensions: [".js", ".jsx", ".mjs", ".ts", ".vue", ".tsx"],
    },
    { path: "~/components/special-components", prefix: "Special" }, // <SpecialBtn />
  ],
});
