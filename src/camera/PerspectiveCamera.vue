<template>
    <span></span>
</template>

<script>
import Object3D from 'src/core/Object3D.js'
import * as THREE from 'three'

export default {
  name: 'PerspectiveCamera',
  extends: Object3D,
  mounted () {
    this.$_v3r_object3D = new THREE.PerspectiveCamera(50, 1, 0.1, 2000)
    this.$parent.self.$_v3r_camera = this.$_v3r_object3D
    this.$emit('object3DCreated')
  }
}
</script>

<style>

</style>