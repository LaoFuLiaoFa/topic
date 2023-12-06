<template>
  <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="current"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item :key="'/ConnectDots'">
          <router-link to="ConnectDots">连线题</router-link>
        </a-menu-item>
        <a-menu-item :key="'/DragDrop'">
          <router-link to="DragDrop">拖拽题</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '40px 40px', marginTop: '64px', textAlign: 'center' }">
      <router-view />
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      ©2023 Created by LaoFuLiaoFa
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const current = ref<string[]>(['/ConnectDots'])
</script>

<style scoped>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}

.main {
  height: 100%;
}
.ant-layout {
  min-height: 100%;
}
.a-layout-content {
  min-height: 100%;
}
</style>
