/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";
import router from "./router";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
import vuetify from "./plugins/vuetify";
import { createPinia } from "pinia";

const app = createApp(App);

registerPlugins(app);

app.use(vuetify).use(createPinia()).use(router).mount("#app");
