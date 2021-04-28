<template>
  <section class="through-wrapper">
    <div class="main-title">穿行</div>
    <div class="topic-title">目的地#{{ topic.title }}#</div>
    <router-link class="main-btn" :to="{name:'scene-edit', query: {'topicId': topic._id}}">添加路程</router-link>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, onMounted, Ref } from 'vue';
import api from '../api';
import stateConfig from '../../../config/state';
import { Topic, Article } from '../../../graphql';
import SceneManager from './manager';
export default defineComponent({
  name: 'Through',
  props: {},
  setup: (props: any) => {
    const topic = reactive<Topic>({
      _id: '',
      title: '',
    });
    const articles: Ref<Article[]> = ref([]);
    function getTopic() {
      api.topic.getTopicList({ state: stateConfig.online }).then((data:any) => {
        if (data.data.topicList && data.data.topicList.length) {
          const t = data.data.topicList[0];
          topic._id = t._id;
          topic.title = t.title;
          getArticles()
        }
      });
    }
    function getArticles() {
      api.article.getArticleList({ state: stateConfig.online,  }).then((data:any) => {
        if (data.data.articleList && data.data.articleList.length) {
          articles.value = data.data.articleList
        }
      });
    }
    onMounted(() => {
      getTopic();
    });
    return { topic };
  },
  methods: {
    addArticle(){
      SceneManager.instance.loadScene('Edit', {topicId: this.topic._id})
    }
  }
});
</script>

<style lang="scss">
  .topic-title{
    text-align: center;
  }
  .main-btn{
    margin-top: 20px;
    display: block;
  }
</style>