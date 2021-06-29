const Scene = () => import('./scenes/index.vue')
const Start = () => import('./scenes/start.vue')
const Story = () => import('./scenes/story.vue')
const Through = () => import('./scenes/through.vue')
const Whisper = () => import('./scenes/whisper.vue')
const Edit = () => import('./scenes/edit.vue')
const Detail = () => import('./scenes/detail.vue')
const Managers = () => import('./managers/index.vue')
const ManagersArticleDetail = () => import('./managers/articleDetail.vue')
const ManagersDialogDetail = () => import('./managers/dialogDetail.vue')
const About = () => import('./scenes/about.vue')
const routes = [
  {
    path: "/",
    name: "scene",
    redirect: '/start',
    children: [
      { path: 'start', name: 'scene-start', component: Start, meta: { title: '起始-透' } },
      { path: 'story', name: 'scene-story', component: Story, meta: { title: '故事集' } },
      { path: 'through', name: 'scene-through', component: Through, meta: { title: '穿行' } },
      { path: 'whisper', name: 'scene-whisper', component: Whisper, meta: { title: '低语' } },
      { path: 'edit', name: 'scene-edit', component: Edit, meta: { title: '编辑-穿行' } },
      { path: 'detail', name: 'scene-detail', component: Detail, meta: { title: '详情-穿行' } },
      {
        path: "/about",
        name: "scene-about",
        component: About,
        meta: { title: '起始-透' }
      },
    ],
    component: Scene,
  },
  {
    path: "/manager",
    name: "manager",
    component: Managers,
    meta: { title: '管理-透' }
  },

  {
    path: "/manager/detail/article/:id",
    name: "manager-article-detail",
    component: ManagersArticleDetail,
  },
  {
    path: "/manager/detail/dialog/:id",
    name: "manager-dialog-detail",
    component: ManagersDialogDetail,
  },
];

export default routes