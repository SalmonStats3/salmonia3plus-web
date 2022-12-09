import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { IonicVue } from "@ionic/vue";

import "@ionic/vue/css/ionic.bundle.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* Theme fonts */
import "./assets/sass/style.scss";
import "./theme/style.scss";

/* I18n */
import { createI18n } from "vue-i18n";
import ja from "/locales/ja.yaml";
import en from "/locales/en.yaml";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  allowComposition: true,
  messages: {
    ja: ja,
    en: en,
  },
  fallbackLocale: "en",
  fallbackRoot: true,
  availableLocales: ["en", "ja"],
});

const app = createApp(App)
  .use(IonicVue, {
    animated: true,
    rippleEffect: true,
    mode: "md",
    swipeBackEnabled: false,
  })
  .use(router)
  .use(i18n);
router.isReady().then(() => {
  app.mount("#app");
});
