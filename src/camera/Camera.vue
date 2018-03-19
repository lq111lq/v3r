<template>
    <span></span>
</template>

<script>
import * as THREE from 'three'
import Object3D from 'src/core/Object3D.vue'

export default {
  name: 'Camera',
  extends: Object3D,
  methods: {
    createCamera () {
      var camera = new THREE.Camera()
      return camera
    },
    generateCamera () {
      this.$_v3r_object3D = this.createCamera()
      this.$parent.$_v3r_camera = this.$_v3r_object3D
    }
  },
  created () {
    this.generateCamera()
  }
}
</script>