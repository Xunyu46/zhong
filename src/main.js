import { createApp } from "vue";
import App from "./App.vue";

/* 导入 Font Awesome 核心组件 */
import { library } from "@fortawesome/fontawesome-svg-core";
/* 导入字体图标组件 */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* 导入你需要的图标 */
import {
  faUserSecret,
  faAngleLeft,
  faEye,
  faAngleDown,
  faAngleUp,
  faUpload,
  faDownload,
  faTh,
} from "@fortawesome/free-solid-svg-icons";

/* 将图标添加到库中 */
library.add(
  faUserSecret,
  faAngleLeft,
  faEye,
  faAngleDown,
  faAngleUp,
  faUpload,
  faDownload,
  faTh
);

/* 创建 Vue 应用 */
const app = createApp(App);

/* 注册全局组件 */
app.component("font-awesome-icon", FontAwesomeIcon);

/* 挂载应用 */
app.mount("#app");
