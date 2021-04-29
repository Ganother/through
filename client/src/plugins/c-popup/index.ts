import { createVNode, render } from 'vue'
import CPopup from './index.vue'
interface popOptions {
  title: string
  message: string
}
const CommonPop = (options: any) => {
  const container = document.getElementById('commonPop') || document.createElement('div')
  options.show = true
  container.id = 'commonPop'
  const vm = createVNode(CPopup, options)
  vm.props!.onClose = () => {
    render(null, container)
    // since the element is destroy, then the VNode should be collected by GC as well
    // we do not want cause any mem leak because we have returned vm as a reference to users
    // so that we manually set it to false.
  }
  render(vm, container)
  document.body.appendChild(container)
}

export default {
  install: (app: any) => {
    app.config.globalProperties.$cpop = CommonPop
  }
}

