<template>
  <section :class="['main-nav', { 'nav-show': show }]">
    <router-link class="nav-item" :to="{ name: 'scene-start' }">
      <i class="iconfont icon-zuji2"></i>
      <div class="nav-text">首页</div>
    </router-link>
    <router-link class="nav-item" :to="{ name: 'scene-through' }">
      <i class="iconfont icon-hangren"></i>
      <div class="nav-text">穿行</div>
    </router-link>
    <router-link class="nav-item" :to="{ name: 'scene-about' }">
      <i class="iconfont icon-wode2"></i>
      <div class="nav-text">关于</div>
    </router-link>
    <router-link class="nav-item" :to="{ name: 'scene-whisper' }">
      <i class="iconfont icon-huabi"></i>
      <div class="nav-text">低语</div>
    </router-link>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, onMounted, Ref } from 'vue';
import api from '../api';
import stateConfig from '../../../config/state';
import { Topic, Article } from '../../../graphql';
export default defineComponent({
  name: 'bottomNav',
  props: {
    show: Boolean
  },
  setup: (props: any) => {

    return {};
  },
  methods: {

  }
});
</script>

<style lang="scss">
.main-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid currentColor;
  display: flex;
  flex-wrap: wrap;
  background: #18191b;
  font-size: 14px;
  padding-top: 20px;
  z-index: 100000;
  transform: translateY(100%);
  opacity: 0;
  transition: all .3s ease-in-out;
  .nav-item {
    color: #fff;
    width: 50%;
    text-align: center;
    line-height: 40px;
    height: 60px;
  }
  .iconfont {
    color: #e9432a;
    font-size: 30px;
    display: inline-block;
    vertical-align: top;
  }
  .nav-text {
    display: inline-block;
    vertical-align: top;
  }
}
.nav-show {
  transform: translateY(0);
  opacity: 1;
}
</style>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
 