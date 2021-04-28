<template>
  <div class="common-popup" v-show="visible">
    <div class="popup-title">{{ title }}</div>
    <div class="popup-desc">{{ desc }}</div>
    <div class="popup-btn" @click="closePop">关闭</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, PropType, onMounted, onBeforeUnmount } from 'vue'
export default defineComponent({
  name: 'CommonPopup',
  props: {
    title: { type: String, default: '提示' },
    desc: { type: String, default: '' }
  },
  data() {
    return {
      visible: true
    }
  },
  setup(props) {

  },
  methods: {
    closePop() {
      this.visible = false
    }
  }
})
</script>