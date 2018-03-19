import WebGLRenderer from 'src/renderer/WebGLRenderer.vue'

import Scene from 'src/scene/Scene.vue'

import Mesh from 'src/object/Mesh.vue'

import Camera from 'src/camera/Camera.vue'
import PerspectiveCamera from 'src/camera/PerspectiveCamera.vue'

import Geometry from 'src/geometry/Geometry.vue'
import BoxGeometry from 'src/geometry/BoxGeometry.vue'

import Material from 'src/material/Material.vue'
import MeshBasicMaterial from 'src/material/MeshBasicMaterial.vue'

import ArrowHelper from 'src/helper/ArrowHelper.vue'

export default {
  install (Vue, options) {
    Vue.component('WebglRenderer', WebGLRenderer)

    Vue.component('Scene', Scene)

    Vue.component('Camera', Camera)
    Vue.component('PerspectiveCamera', PerspectiveCamera)

    Vue.component('Mesh', Mesh)
    Vue.component('ArrowHelper', ArrowHelper)

    Vue.component('Geometry', Geometry)
    Vue.component('BoxGeometry', BoxGeometry)

    Vue.component('Material', Material)
    Vue.component('MeshBasicMaterial', MeshBasicMaterial)
  }
}
