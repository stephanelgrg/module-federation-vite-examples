const isDev = process.env.NODE_ENV !== "production";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@module-federation/nuxt"],

  app: {
    baseURL: "/host/",
  },

  experimental: {
    buildCache: false,
  },

  moduleFederation: {
    remoteComponents: {
      remote: ["Widget", "Counter"],
    },
    config: {
      name: "host",
      hostInitInjectLocation: "entry",
      remotes: {
        remote: {
          type: "module",
          name: "remote",
          entry: isDev
            ? "http://localhost:4174/remote/_nuxt/remoteEntry.js"
            : "http://localhost:4174/remote/mf-manifest.json",
          entryGlobalName: "remote",
          shareScope: "default",
        },
      },
      exposes: {},
      filename: "remoteEntry.js",
      manifest: true,
      shared: {
        vue: { singleton: true, requiredVersion: "3.5.45" },
        "vue-router": { singleton: true, requiredVersion: "5.5.0" },
      },
    },
  },
});
