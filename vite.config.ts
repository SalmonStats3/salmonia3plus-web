import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import ViteYaml from "@modyfi/vite-plugin-yaml";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    VitePWA(),
    ViteYaml(),
    AutoImport({
      imports: ["vue", "vue-router", "vue-i18n"],
      vueTemplate: true,
    }),
  ],
});
