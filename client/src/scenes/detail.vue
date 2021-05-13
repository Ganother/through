<template>
  <section class="detail-wrapper">
    <div class="error-message" v-show="erroring">文章审核中</div>
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
    const erroring = ref(false)
    let article = reactive<Article>({
      _id: '',
      title: '',
      context: '',
      user: ''
    });
    function getArticle() {
      api.article.getArticleDetail({ state: stateConfig.online, id: routes.query.id }).then((data: any) => {
        let detail
        erroring.value = false
        if (detail = data.data.articleDetail) {
          article.title = detail.title
          article.context = detail.context
          article.user = detail.user
        }
      }, (err: any) => {
        erroring.value = true
        console.log(err)
      });
    }
    onMounted(() => {
      getArticle();
    });
    return { article, erroring };
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
    margin-top: 20px;
    font-size: 13px;
    p{
      margin: 5px 0;
    }
  }
}
</style>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
 