<template>
  <section class="start-wrapper">
    <img src="../assets/logo.png" alt="" class="logo" />
    <!-- <div class="btn" @click="toStory">故事</div> -->
    <router-link class="main-btn" :to="{ name: 'scene-whisper' }"
      >低语</router-link
    >
    <router-link class="main-btn" :to="{ name: 'scene-through' }"
      >穿行</router-link
    >
    <a href="https://beian.miit.gov.cn" class="copyright">粤ICP备18113078号</a>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import SceneManager from './manager';

export default defineComponent({
  name: 'Start',
  props: {},
  setup: () => {
    const count = ref(0);
    return { count };
  },
  methods: {
    toStory() {
      SceneManager.instance.loadScene('Story');
    },
    toThrough() {
      SceneManager.instance.loadScene('Through');
    },
  },
});
</script>

<style lang="scss">
.start-wrapper {
  .logo {
    width: 127.5px;
    height: 60px;
    display: block;
    margin: 120px auto 40px;
  }
  .main-btn {
    display: block;
    margin-bottom: 20px;
  }
  .copyright {
    text-align: center;
    font-size: 12px;
    // position: fixed;
    // bottom: 30px;
    // left: 0;
    // right: 0;
    display: block;
    margin-top: 20px;
  }
}
</style>
