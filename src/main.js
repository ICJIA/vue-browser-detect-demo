import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import browserDetect from "@/plugins/browserDetect";

Vue.config.productionTip = false;
Vue.use(browserDetect);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
