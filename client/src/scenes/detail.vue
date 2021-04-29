<template>
  <section class="detail-wrapper">
    <div class="main-title">{{ article.title }}</div>
    <div class="topic-title">{{ article.user }}</div>
    <div class="detail-context" v-html="article.context"></div>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, onMounted, Ref } from 'vue';
import api from '../api';
import stateConfig from '../../../config/state';
import { Topic, Article } from '../../../graphql';
import SceneManager from './manager';
import { useRoute } from 'vue-router';
export default defineComponent({
  name: 'Through',
  props: {},
  setup: (props: any) => {
    const routes = useRoute();
    let article = reactive<Article>({
      _id: '',
      title: '',
      context: '',
      user: ''
    });
    function getArticle() {
      api.article.getArticleDetail({ state: stateConfig.online, id: routes.query.id }).then((data: any) => {
        let detail
        if (detail = data.data.articleDetail) {
          article.title = detail.title
          article.context = detail.context
          article.user = detail.user
        }
      });
    }
    onMounted(() => {
      getArticle();
    });
    return { article };
  },
  methods: {
    // addArticle() {
    //   SceneManager.instance.loadScene('Edit', { topicId: this.topic._id })
    // }
  }
});
</script>

<style lang="scss">
.detail-wrapper {
  text-align: center;
  margin-top: 5px;
  .detail-context {
    text-align: left;
      color: #52555a;
  }
}
</style>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
 