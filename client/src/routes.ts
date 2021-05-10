import Scene from './scenes/index.vue'
import Start from './scenes/start.vue'
import Story from './scenes/story.vue'
import Through from './scenes/through.vue'
import Edit from './scenes/edit.vue'
import Detail from './scenes/detail.vue'
import Managers from './managers/index.vue'
import ManagersArticleDetail from './managers/articleDetail.vue'
import ManagersDialogDetail from './managers/dialogDetail.vue'
import About from './scenes/about.vue'
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