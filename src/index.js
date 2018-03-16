import WebGLRenderer from 'src/renderer/WebGLRenderer.vue'

import Scene from 'src/scene/Scene.vue'

import Mesh from 'src/object/Mesh.vue'

import Geometry from 'src/geometry/Geometry.vue'
import BoxGeometry from 'src/geometry/BoxGeometry.vue'

import ArrowHelper from 'src/helper/ArrowHelper.vue'

export default {
  install (Vue, options) {
    Vue.component('WebglRenderer', WebGLRenderer)

    Vue.component('Scene', Scene)

    Vue.component('Mesh', Mesh)
    Vue.component('ArrowHelper', ArrowHelper)

    Vue.component('Geometry', Geometry)
    Vue.component('BoxGeometry', BoxGeometry)
  }
}
