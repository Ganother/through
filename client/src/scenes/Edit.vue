<template>
  <section class="edit-wrapper">
    <div class="main-title">添加路程</div>
    <div class="editor" id="editor"></div>
    <input
      type="text"
      name="title"
      id="title"
      v-model="title"
      placeholder="请输入标题"
    />
    <input
      type="text"
      name="user"
      id="user"
      v-model="user"
      placeholder="请输入昵称"
    />
    <div class="sub-btn" @click="submit">提交路程</div>
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
      (this as any).$cpop({title: '',desc: ''})
      if (!this.title) {

        return;
      }
      if (!this.user) {
        return;
      }
    }
  },
});
</script>

<style lang="scss">
#editor {
  border: 1px solid #333;
  text-align: left;
}
</style>