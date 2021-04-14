<template>
  <section class="manager-wrapper">
    <el-container>
      <el-header>让我来管理下这些没人看的东西</el-header>
      <el-main>
        <el-button>文章列表</el-button>
        <el-button>对话列表</el-button>
        <el-card class="article-manager">
          <el-row v-for="item in articles" :key="item._id">
            <el-col :span="8">{{ item.user }}</el-col>
            <el-col :span="8">{{ item.context }}</el-col>
            <el-col :span="8"
              ><router-link :to="{ name: 'manager-article-detail' }"
                ><el-button type="primary">看看详情 </el-button></router-link
              >
            </el-col>
          </el-row>
        </el-card>
        <div class="dialog-manager">
          <el-row v-for="item in dialogs" :key="item._id">
            <el-col :span="8">{{ item.user }}</el-col>
            <el-col :span="8">{{ item.context }}</el-col>
            <el-col :span="8">
              <router-link :to="{ name: 'manager-dialog-detail' }"
                ><el-button type="primary">看看详情 </el-button></router-link
              >
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, Ref } from 'vue';
import { Article, ArticleInput, Dialog, DialogInput } from '../../../graphql';
import api from '../api';
export default defineComponent({
  name: 'manager',
  props: {},
  components: {},
  setup: () => {
    const articles = ref([]);
    onMounted(() => {
      console.log(2333222);
      api.article.getArticleList().then((data: any) => {
        console.log(data);
        articles.value = data.data.articleList;
      });
    });
    return { articles };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>