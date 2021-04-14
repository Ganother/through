import Scene from './scenes/index.vue'
import Managers from './managers/index.vue'
import ManagersArticleDetail from './managers/articleDetail.vue'
import ManagersDialogDetail from './managers/dialogDetail.vue'
const routes = [
  {
    path: "/",
    name: "scene",
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