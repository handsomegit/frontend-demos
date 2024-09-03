import { createApp } from "vue";

// import '@/doc' // 文档教程 不需要请注释掉
import "ant-design-vue/dist/reset.css";
import Antd from "ant-design-vue";
import { createFromIconfontCN } from "@ant-design/icons-vue";

import App from "./index.vue";

// 项目中使用到的图标
const UIcon = createFromIconfontCN({
  extraCommonProps: { style: { fontSize: "15px" } },
  scriptUrl: ["/icon/iconfont.js", "//at.alicdn.com/t/c/font_4559266_h849n6u6tp.js"]
  // scriptUrl: '//at.alicdn.com/t/c/font_1174643_b18422r6b47.js',
});

let app = createApp(App).use(Antd).component("UIcon", UIcon);

app.mount("#app");
