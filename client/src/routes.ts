import Scene from './scenes/index.vue'
import Start from './scenes/Start.vue'
import Story from './scenes/Story.vue'
import Through from './scenes/Through.vue'
import Edit from './scenes/Edit.vue'
import Managers from './managers/index.vue'
import ManagersArticleDetail from './managers/articleDetail.vue'
import ManagersDialogDetail from './managers/dialogDetail.vue'
const routes = [
  {
    path: "/",
    name: "scene",
    redirect: '/start',
    children:[
      {path: 'start', name:'scene-start', component: Start},
      {path: 'story', name:'scene-story', component: Story},
      {path: 'through', name:'scene-through', component: Through},
      {path: 'edit', name:'scene-edit', component: Edit}
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