<template>
  <section class="edit-wrapper">
    <div class="main-title">添加路程</div>
    <input
      type="text"
      name="secret"
      id="secret"
      v-model="secret"
      class="short-input title-input"
      placeholder="吟唱正确的咒语，免于审核"
    />
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
    <div class="save-tips" v-show="timerKey">已于{{ timerKey }}自动保存在此浏览器中</div>
    <div class="main-btn" @click="submit">提交路程</div>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, onMounted, Ref } from 'vue';
import api from '../api';
import moment from 'moment'
import { Topic, Article } from '../../../graphql';
import Editor from 'wangeditor';
export default defineComponent({
  name: 'Edit',
  props: {},
  data() {
    return {

    };
  },
  setup: (props: any) => {
    const articles: Ref<Article[]> = ref([]);
    const title = ref('')
    const user = ref('')
    const secret = ref('')
    let editor: any;
    let localStorageTimer: any
    let timerKey: Ref<string> = ref('')
    const content: Ref<string> = ref('');
    localStorageTimer = setInterval(() => {
      if (window.localStorage && content.value) {
        const store = window.localStorage
        timerKey.value = moment().format('YYYY年MM月DD日, h:mm:ss a');
        const storeItem = {
          title: title.value,
          user: user.value,
          secret: secret.value,
          content: content.value,
          time: timerKey.value
        }
        store.setItem('sylvanasSpeaking', JSON.stringify(storeItem))
      }
    }, 30000)
    return { editor, content, localStorageTimer, timerKey, title, user, secret };
  },
  mounted() {
    this.editor = new Editor('#editor');
    this.editor.config.menus = [
      'head', //
      'bold', //
      'list', // 列表
      'justify', // 对齐方式
      'undo', // 撤销
    ];
    this.editor.config.onchange = (html: any) => {
      this.content = html;
    };
    this.editor.create();
    if (window.localStorage) {
      const store = window.localStorage
      const storeItemString = store.getItem('sylvanasSpeaking')
      if (storeItemString) {
        const storeItem = JSON.parse(storeItemString)
        this.title = storeItem.title
        this.user = storeItem.user
        this.secret = storeItem.secret
        this.timerKey = storeItem.time
        this.content = storeItem.content
        this.editor.txt.html(storeItem.content)
      }
    }
  },
  beforeUnmount() {
    document.getElementById("editor")!.innerHTML = ''
    clearInterval(this.localStorageTimer)
  },
  methods: {
    onEditorBlur() { },
    onEditorFocus() { },
    onEditorReady() { },
    submit() {
      // if (!this.secret) {
      //   (this as any).$cpop({ title: '提示', desc: '请先吟唱咒语' })
      //   return;
      // }
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
          secret: this.secret,
          context: this.content,
          topicID: (this as any).$route.query.topicId
        }
      }).then((data: any) => {
        console.log(data)
        if (data.data.addArticle) {
          (this as any).$cpop({ title: '提示', desc: '提交成功了，小王正在看看里面有没有奇怪的东西' })
          this.$router.push({ name: 'scene-detail', query: { id: data.data.addArticle._id } })
          if (window.localStorage) {
            const store = window.localStorage
            store.setItem('sylvanasSpeaking', '')
          }
        } else {
          (this as any).$cpop({ title: '提示', desc: '提交失败了，联系小王吧' })
        }

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
  .main-btn {
    margin-top: 20px;
  }
  .save-tips{
    line-height: 2;
  }
}
</style>
