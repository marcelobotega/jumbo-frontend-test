import Vue, { CreateElement } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h: CreateElement) => h(App),
}).$mount("#app");
