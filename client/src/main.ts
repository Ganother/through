import { createApp } from 'vue'
import App from './App.vue'
import api from './api'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import elementPlus from './element'
import Cpop from './plugins/c-popup/index'
import './assets/_reset.scss'
async function initApp() {
  await api.init()
  const router = createRouter({ routes, history: createWebHashHistory() })
  const app = createApp(App).use(router)
  elementPlus.components.forEach(component => {
    app.component(component.name, component)
  })

  elementPlus.plugins.forEach(plugin => {
    app.use(plugin)
  })

  app.use(Cpop)

  // app.use(VueQuillEditor)

  app.mount('#app')
}
initApp()
