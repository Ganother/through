<template>
  <section class="start-wrapper">
    <div class="btn" @click="toStory">故事</div>
    <div class="btn" @click="toThrough">穿行</div>
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

<style scoped>
a {
  color: #42b983;
}
</style>