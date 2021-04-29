<template>
  <section class="edit-wrapper">
    <div class="main-title">添加路程</div>
    <input
      type="text"
      name="title"
      id="title"
      v-model="title"
      class="short-input title-input"
      placeholder="请输入标题"
    />
    <input
      type="text"
      name="user"
      id="user"
      class="short-input user-input"
      v-model="user"
      placeholder="请输入昵称"
    />
    <div class="editor" id="editor"></div>
    <div class="main-btn" @click="submit">提交路程</div>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, onMounted, Ref } from 'vue';
import api from '../api';
import stateConfig from '../../../config/state';
import { Topic, Article } from '../../../graphql';
import Editor from 'wangeditor';
export default defineComponent({
  name: 'Edit',
  props: {},
  data() {
    return {
      title: '',
      user: ''
    };
  },
  setup: (props: any) => {
    const articles: Ref<Article[]> = ref([]);
    let editor;
    const content: Ref<string> = ref('');
    onMounted(() => {
      editor = new Editor('#editor');
      console.log(editor.config);
      editor.config.menus = [
        'head', //
        'bold', //
        'list', // 列表
        'justify', // 对齐方式
        'undo', // 撤销
      ];
      editor.config.onchange = (html: any) => {
        content.value = html;
      };
      editor.create();
    });
    return { editor, content };
  },
  methods: {
    onEditorBlur() { },
    onEditorFocus() { },
    onEditorReady() { },
    submit() {
      if (!this.title) {
        (this as any).$cpop({ title: '提示', desc: '请输入标题' })
        return;
      }
      if (!this.user) {
        (this as any).$cpop({ title: '提示', desc: '虽然不重要，但署个名8' })
        return;
      }
      if (!this.content) {
        (this as any).$cpop({ title: '提示', desc: '您还没写呢' })
        return;
      }
      console.log('sub')
      api.article.addArticle({
        input: {
          title: this.title,
          user: this.user,
          context: this.content,
          topicID: this.$route.query.topicId
        }
      }).then((data: any) => {
        // todo 跳转到详情页
      })
    }
  },
});
</script>

<style lang="scss">
#editor {
  // border: 1px solid #333;
  text-align: left;
}
.edit-wrapper {
  .main-title {
    margin-bottom: 1em;
  }
  .short-input {
    border-bottom: 1px solid #ddd;
    display: block;
    line-height: 30px;
    font-size: 14px;
    margin: 0 auto;
    margin-bottom: 1em;
    text-align: center;
  }
  .title-input {
    width: 60%;
  }
  .user-input {
    width: 30%;
  }
}
</style>
