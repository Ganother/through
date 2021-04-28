<template>
  <section class="manager-wrapper">
    <el-container>
      <el-input v-model="secret" placeholder="请开始吟唱咒语"></el-input>
      <el-header>{{ title }}</el-header>
      <el-main>
        <el-row>
          <el-col :span="12">{{ user }}</el-col>
          <el-col :span="12">{{ stateText }}</el-col>
        </el-row>
        <el-card>
          <div v-html="context"></div>
        </el-card>
        <el-button type="warning" @click="publish">发布文章</el-button>
        <el-button type="danger" @click="del">删除文章</el-button>
      </el-main>
    </el-container>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, Ref, computed } from 'vue';
import { Article, ArticleInput, Dialog, DialogInput } from '../../../graphql';
import { useRoute } from 'vue-router';
import { ElLoading } from 'element-plus';
import api from '../api';
import stateConfig from '../../../config/state';
export default defineComponent({
  name: 'manager',
  props: {},
  components: {},
  setup: () => {
    const routes = useRoute();
    const title = ref('');
    const context = ref('');
    const user = ref('');
    const state = ref(0);
    const secret = ref('');
    const stateText = computed(() => {
      for (const key in stateConfig) {
        if (stateConfig[key as keyof typeof stateConfig] == state.value) {
          return key;
        }
      }
      return '暂无';
    });
    function getData(data:any) {
      title.value = data.title;
      context.value = data.context;
      user.value = data.user;
      state.value = data.state;
    }
    onMounted(() => {
      api.article
        .getArticleDetail({ id: routes.params.id })
        .then((data: any) => {
          getData(data.data.articleDetail);
        });
    });
    return { title, context, user, state, stateText, secret, getData };
  },
  methods: {
    changeState(state:number) {
      const id = this.$route.params.id;
      const loadingInstance = ElLoading.service({ fullscreen: true });
      api.article
        .updateArticle({
          input: { id, state, secret: this.secret },
        })
        .then((data:any) => {
          this.getData(data.data.updateArticle);
          loadingInstance.close();
        }).catch((err:any) => {
             loadingInstance.close();
        });
    },
    publish() {
      this.changeState(stateConfig.online);
    },
    del() {
      this.changeState(stateConfig.offline);
    },
  },
});
</script>

<style lang="scss">
.manager-wrapper {
  a {
    color: #42b983;
  }
  .el-card {
    margin: 30px 0;
  }
}
</style>