const Scene = () => import('./scenes/index.vue')
const Start = () => import('./scenes/start.vue')
const Story = () => import('./scenes/story.vue')
const Through = () => import('./scenes/through.vue')
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
      { path: 'start', name: 'scene-start', component: Start },
      { path: 'story', name: 'scene-story', component: Story },
      { path: 'through', name: 'scene-through', component: Through },
      { path: 'edit', name: 'scene-edit', component: Edit },
      { path: 'detail', name: 'scene-detail', component: Detail },
      {
        path: "/about",
        name: "scene-about",
        component: About,
      },
    ],
    component: Scene,
  },
  {
    path: "/manager",
    name: "manager",
    component: Managers,
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