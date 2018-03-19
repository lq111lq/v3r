<template>
    <span></span>
</template>

<script>
import Camera from './Camera.vue'
import * as THREE from 'three'

export default {
  name: 'PerspectiveCamera',
  extends: Camera,
  props: {
    fov: {
      type: Number,
      default: 50
    },
    aspect: {
      type: Number,
      default: 1
    },
    near: {
      type: Number,
      default: 0.1
    },
    far: {
      type: Number,
      default: 2000
    }
  },
  watch: {
    fov (fov) {
      this.$_v3r_camera.fov = fov
      this.$_v3r_camera.updateProjectionMatrix()
    },
    aspect (aspect) {
      this.$_v3r_camera.aspect = aspect
      this.$_v3r_camera.updateProjectionMatrix()
    },
    near (near) {
      this.$_v3r_camera.near = near
      this.$_v3r_camera.updateProjectionMatrix()
    },
    far (far) {
      this.$_v3r_camera.far = far
      this.$_v3r_camera.updateProjectionMatrix()
    }
  },
  methods: {
    createCamera () {
      var camera = new THREE.PerspectiveCamera(this.fov, this.aspect, this.near, this.far)
      return camera
    }
  }
}
</script>

<style>

</style>