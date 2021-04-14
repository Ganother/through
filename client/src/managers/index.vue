<template>
  <section class="manager-wrapper">
    <el-container>
      <el-header>让我来管理下这些没人看的东西</el-header>
      <el-input v-model="secret" placeholder="请开始吟唱咒语"></el-input>
      <el-main>
        <el-button @click="changeTab('topic')">话题列表</el-button>
        <el-button @click="changeTab('article')">文章列表</el-button>
        <el-button @click="changeTab('dialog')">对话列表</el-button>
        <el-card class="article-manager" v-if="curTab == 'article'">
          <el-row v-for="item in articles" :key="item._id">
            <el-col :span="8">{{ item.user }}</el-col>
            <el-col :span="8">{{ item.context }}</el-col>
            <el-col :span="8"
              ><router-link
                :to="{
                  name: 'manager-article-detail',
                  params: { id: item._id },
                }"
                ><el-button type="primary">看看详情 </el-button></router-link
              >
            </el-col>
          </el-row>
        </el-card>
        <el-card class="topic-manager" v-if="curTab == 'topic'">
          <el-button type="primary" @click="topicDialogVisible = true"
            >添加话题</el-button
          >
          <el-row v-for="item in topics" :key="item._id">
            <el-col :span="8">{{ item.title }}</el-col>
            <el-col :span="8">{{ item.desc }}</el-col>
            <el-col :span="8"
              ><el-button type="primary">看看详情 </el-button>
            </el-col>
          </el-row>
        </el-card>
        <div class="dialog-manager" v-if="curTab == 'dialog'">
          <el-row v-for="item in dialogs" :key="item._id">
            <el-col :span="8">{{ item.user }}</el-col>
            <el-col :span="8">{{ item.context }}</el-col>
            <el-col :span="8">
              <router-link
                :to="{
                  name: 'manager-dialog-detail',
                  params: { id: item._id },
                }"
                ><el-button type="primary">看看详情 </el-button></router-link
              >
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
    <el-dialog title="添加话题" v-model="topicDialogVisible" width="30%">
      <el-row>
        <el-col>
          <el-input
            v-model="topicInput.title"
            placeholder="输入一个标题"
          ></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-input
            v-model="topicInput.desc"
            placeholder="输入一个介绍"
          ></el-input>
        </el-col>
      </el-row>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="topicDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addTopic">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, Ref } from 'vue';
import { Article, ArticleInput, Dialog, DialogInput } from '../../../graphql';
import api from '../api';
import stateConfig from '../../../config/state';
export default defineComponent({
  name: 'manager',
  props: {},
  components: {},
  data() {
    return {
      topicInput: { title: '', desc: '' },
      secret: '',
      topicDialogVisible: false,
    };
  },
  setup: () => {
    const articles = ref([]);
    const dialogs = ref([]);
    const topics = ref([]);
    const curTab = ref('article');
    function getData(key) {
      let dataApi, dataSet, oriKey;
      if (key == 'article') {
        dataApi = api.article.getArticleList;
        dataSet = articles;
        oriKey = ['articleList'];
      } else if (key == 'dialog') {
        dataApi = api.dialog.getDialogList;
        dataSet = dialogs;
        oriKey = ['dialogList'];
      } else {
        dataApi = api.topic.getTopicList;
        dataSet = topics;
        oriKey = ['topicList'];
      }
      dataApi().then((data: any) => {
        console.log(data);
        dataSet.value = data.data[oriKey];
      });
    }
    onMounted(() => {
      getData(curTab.value);
    });
    return { articles, dialogs, curTab, getData, topics };
  },
  methods: {
    changeTab(key: string) {
      this.curTab = key;
      this.getData(key);
    },
    addTopic() {
      api.topic
        .addTopic({
          input: Object.assign(
            { secret: this.secret, state: stateConfig.online },
            this.topicInput,
          ),
        })
        .then((data) => {
          console.log(data);
        });
    },
  },
});
</script>

<style lang="scss">
.manager-wrapper {
  .el-row {
    margin: 20px 0;
  }
  .el-card {
    margin-top: 40px;
  }
}
</style>