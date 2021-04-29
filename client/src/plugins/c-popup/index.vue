<template>
  <div class="common-popup" v-show="show">
    <div class="popup-inner">
      <div class="popup-title">{{ title }}</div>
      <div class="popup-desc">{{ desc }}</div>
      <div class="main-btn" @click="closePop">关闭</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, PropType, onMounted, onBeforeUnmount } from 'vue'
export default defineComponent({
  name: 'CommonPopup',
  props: {
    title: { type: String, default: '提示' },
    desc: { type: String, default: '' },
    show: {type: Boolean, default: false}
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
      this.$emit('close', false)
    }
  }
})
</script>
<style lang="scss">
@keyframes innerPop {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes innerPopTrans {
  0% {
    transform: translate(-50%, -70%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
}
.common-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100000;
  animation: innerPop 0.3s ease-in-out;
  .popup-inner {
    position: absolute;
    width: 70%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: innerPopTrans 0.3s cubic-bezier(.25,.1,.3,1.5);
    background: #fff;
  }
  .popup-title {
    background-color: #e9432a;
    color: #fff;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
  }
  .popup-desc {
    padding: 1em 2em;
    font-size: 14px;
  }
  .main-btn {
    width: 80%;
    margin: 20px auto;
  }
}
</style>