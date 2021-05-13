<template>
  <section class="through-wrapper">
    <div class="main-title">穿行</div>
    <div class="topic-title">目的地 #{{ topic.title }}#</div>
    <router-link
      class="main-btn"
      :to="{ name: 'scene-edit', query: { topicId: topic._id } }"
      >添加路程</router-link
    >
    <div class="article-list">
      <div class="article-item" v-for="article in articles" :key="article._id">
        <div class="article-title">
          <span class="core-text">{{ article.title }}</span>
        </div>
        <div class="article-desc" v-html="article.context"></div>
        <router-link
          class="to-detail"
          :to="{ name: 'scene-detail', query: { id: article._id } }"
          >OPEN >>
        </router-link>
      </div>
    </div>
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
      api.topic.getTopicList({ state: stateConfig.online }).then((data: any) => {
        if (data.data.topicList && data.data.topicList.length) {
          const t = data.data.topicList[0];
          topic._id = t._id;
          topic.title = t.title;
          getArticles()
        }
      });
    }
    function getArticles() {
      api.article.getArticleList({ state: stateConfig.online }).then((data: any) => {
        if (data.data.articleList && data.data.articleList.length) {
          articles.value = data.data.articleList
        }
      });
    }
    onMounted(() => {
      getTopic();
    });
    return { topic, articles };
  },
  methods: {
    addArticle() {
      SceneManager.instance.loadScene('Edit', { topicId: this.topic._id })
    }
  }
});
</script>

<style lang="scss">
@keyframes slideUp {
  0% {
    transform: translateY(-10%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.through-wrapper {
  .topic-title {
    text-align: center;
    margin-top: 5px;
  }
  .main-btn {
    margin-top: 20px;
    display: block;
  }
  .article-item {
    margin: 20px 0 40px;
    animation: opacity 1.6s ease-in-out;
    animation-fill-mode: both;
    @for $i from 1 through 4 {
      &:nth-child(#{$i}) {
        animation: slideUp 0.4s ease-in-out;
        animation-delay: #{($i) * 0.4}s;
        animation-fill-mode: both;
      }
    }
  }
  .article-title {
    line-height: 40px;
    padding-top: 5px;
    font-size: 16px;
    margin-bottom: 10px;
    position: relative;
    color: #18191b;
    &:after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 2em;
      height: 2px;
      background: #18191b;
    }
  }
  .article-desc {
    font-size: 14px;
    text-indent: 2em;
    color: #52555a;
    max-height: 42px;
    overflow: hidden;
  }
  .to-detail {
    display: block;
    text-align: left;
    margin-top: 20px;
    color: #e9432a;
    font-size: 14px;
  }
}
</style>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
 