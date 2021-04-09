import { createApp } from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import store from "./store";
import router from "./router";
import App from "./App.vue";
import "./index.css";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(Antd);
app.mount("#app");
