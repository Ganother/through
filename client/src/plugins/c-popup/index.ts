import { createVNode, render } from 'vue'
import CPopup from './index.vue'
interface popOptions {
  title: string
  message: string
}
const CommonPop = (options: any) => {
  const container = document.getElementById('commonPop') || document.createElement('div')
  container.id = 'commonPop'
  const vm = createVNode(CPopup, options)
  render(vm, container)
  document.body.appendChild(container)
}

export default {
  install: (app: any) => {
    app.config.globalProperties.$cpop = CommonPop
  }
}

