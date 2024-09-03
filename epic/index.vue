<template>
  <div class="epic-designer-container">
    <EDesigner @save="handleSubmit" />
  </div>
</template>
<script setup>
import { EDesigner } from "epic-designer";
// 引入epic-designer样式
import "epic-designer/dist/style.css";

// 引入antd UI样式
import "ant-design-vue/dist/reset.css";

import { setupAntd } from "epic-designer/dist/ui/antd";
import axios from "axios";

setupAntd();

/**
 * 点击保存按钮操作
 * @param e
 */
function handleSubmit(e) {
  console.log(JSON.stringify(e));
  // axios.put(
  //   "http://127.0.0.1:48080/admin-api/workflow/eform/update",
  //   {
  //     id: 1,
  //     name: "diao",
  //     conf: e
  //   },
  //   {
  //     headers: {
  //       Authorization: "Bearer 653db67b394d4c20937627ed964e4d24",
  //       "Tenant-Id": 1,
  //       "Content-Type": "application/json"
  //     }
  //   }
  // );

  axios.post(
    "http://127.0.0.1:48080/admin-api/workflow/eform/create",
    {
      id: 1,
      name: "diao",
      conf: e
    },
    {
      headers: {
        Authorization: "Bearer 653db67b394d4c20937627ed964e4d24",
        "Tenant-Id": 1,
        "Content-Type": "application/json"
      }
    }
  );
}
</script>
<style>
.epic-designer-container {
  width: 100%;
  height: 100%;
  border: 1px solid var(--epic-border-color);
}
</style>
