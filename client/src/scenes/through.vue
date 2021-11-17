<template>
  <section class="through-wrapper">
    <div class="main-title">穿行</div>
    <div class="topic-title">#{{ topic.title }}#</div>
    <!-- <router-link
      class="main-btn"
      :to="{ name: 'scene-edit', query: { topicId: topic._id } }"
      >添加</router-link
    > -->
    <div :class="['article-list', { 'show-animation': !inited }]">
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
    <a href="https://beian.miit.gov.cn" class="copyright">粤ICP备18113078号</a>
  </section>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  reactive,
  onMounted,
  Ref,
  onActivated,
  onBeforeMount,
} from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
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
    const inited = ref(false);
    const articles: Ref<Article[]> = ref([]);
    function getTopic() {
      api.topic
        .getTopicList({ state: stateConfig.online })
        .then((data: any) => {
          if (data.data.topicList && data.data.topicList.length) {
            let t = data.data.topicList[0];
            const list = data.data.topicList;
            for (const item of list) {
              if (item.desc != 'my') {
                t = item;
                break;
              }
            }
            topic._id = t._id;
            topic.title = t.title;
            getArticles();
          }
        });
    }
    function getArticles() {
      api.article
        .getArticleList({ state: stateConfig.online, topic: topic._id })
        .then((data: any) => {
          if (data.data.articleList && data.data.articleList.length) {
            articles.value = data.data.articleList;
          }
        });
    }
    onMounted(() => {
      getTopic();
    });
    return { topic, articles, inited };
  },

  beforeRouteEnter(to, from) {
    if (to.name !== 'scene-detail') {
      window.scrollTo(0, 0);
    }
  },

  beforeRouteLeave(to, from) {
    this.inited = to.name === 'scene-detail';
  },
  methods: {
    addArticle() {
      SceneManager.instance.loadScene('Edit', { topicId: this.topic._id });
    },
  },
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
.show-animation {
  .article-item {
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
