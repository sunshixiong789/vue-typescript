import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import "./router/routerprogress";
import store from "./store/store";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/en";
import "element-ui/lib/theme-chalk/index.css";
import "normalize.css/normalize.css"; // 将所有基础html元素样式重置

Vue.use(ElementUI, {
  locale
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
