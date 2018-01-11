import WebGLRenderer from 'src/renderer/WebGLRenderer.vue'

export default {
  install (Vue, options) {
    Vue.component('WebglRenderer', WebGLRenderer)
  }
}
