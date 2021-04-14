<template>
  <section class="scene-wrapper">
    <!-- <keep-alive :include="needKeepScene.join(',')"> -->
      <component
        v-if="currentScene"
        :is="currentScene"
        :params="params.value"
      ></component>
    <!-- </keep-alive> -->
  </section>
</template>

<script lang="ts">
/// <reference path="../scene.d.ts" />
import { ref, defineComponent, onMounted, Ref, reactive } from 'vue';
import Start from './Start.vue';
import Story from './Story.vue';
import Through from './Through.vue';
import Edit from './Edit.vue';
import SceneManager from './manager';
import SceneList from './list';
export default defineComponent({
  name: 'IndexScene',
  props: {},
  components: { Start, Story, Through, Edit },
  setup: () => {
    const currentScene: Ref<string> = ref('');
    const needKeepScene: Ref<string[]> = ref([]);
    const params = reactive<any>({ value: '' });
    onMounted(() => {
      SceneManager.instance.bindMainScene({
        onLoadOne(scene: Scene.config, data?: any): void {
          currentScene.value = scene.name;
          if (data) {
            params.value = data;
          } else {
            params.value = {};
          }
        },
        onPreloadOne() {},
        onRecOne() {},
      });
      // 注册场景
      for (const scene of SceneList) {
        if (scene.keepAlive) {
          needKeepScene.value.push(scene.name);
          console.log(needKeepScene);
        }
        SceneManager.instance.register(scene);
      }
      SceneManager.instance.loadScene('Start');
    });
    console.log(params)
    return { currentScene, needKeepScene, params };
  },
  mounted() {},
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>