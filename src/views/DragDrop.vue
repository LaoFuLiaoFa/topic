<template>
  <!-- <div class="parent">
    <DraggableContainer :adsorbParent="true" :referenceLineVisible="true">
      <Vue3DraggableResizable :parent="true" :resizable="false"> 2023 </Vue3DraggableResizable>
      <Vue3DraggableResizable :parent="true" :resizable="false"> 你好 </Vue3DraggableResizable>
    </DraggableContainer>
  </div> -->
  <DraggableContainer :adsorbParent="true" class="styleCard">
    <Vue3DraggableResizable :resizable="false" :parent="true">
      <a-card>
        <a-card-grid style="width: 100%; text-align: center">千山鸟飞绝</a-card-grid>
      </a-card>
    </Vue3DraggableResizable>
    <Vue3DraggableResizable :resizable="false" :parent="true">
      <a-card>
        <a-card-grid style="width: 100%; text-align: center">独钓寒江雪</a-card-grid>
      </a-card>
    </Vue3DraggableResizable>
    <Vue3DraggableResizable :resizable="false" :parent="true">
      <a-card>
        <a-card-grid style="width: 100%; text-align: center">万径人踪灭</a-card-grid>
      </a-card>
    </Vue3DraggableResizable>
    <Vue3DraggableResizable :resizable="false" :parent="true">
      <a-card>
        <a-card-grid style="width: 100%; text-align: center">孤舟蓑笠翁</a-card-grid>
      </a-card>
    </Vue3DraggableResizable>
  </DraggableContainer>
</template>

<script>
import { defineComponent } from 'vue'
import Vue3DraggableResizable from 'vue3-draggable-resizable'
// 这个组件不是默认导出的，
// 如果你之前是通过“app.use(Vue3DraggableResizable)”注册的，
// 那么你这里就不需要再引入了，因为DraggableContainer这个已经被全局注册了，你可以直接使用
import { DraggableContainer } from 'vue3-draggable-resizable'
//default styles
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
export default defineComponent({
  components: { Vue3DraggableResizable, DraggableContainer },
  data() {
    return {}
  }
})
</script>

<style>
.styleCard {
  background-color: #ececec;
  padding: 0px;
  border: 1px solid #000;
  min-height: 69vh;
}
</style>
