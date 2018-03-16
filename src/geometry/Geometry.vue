<template>
    <span></span>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'Geometry',
  methods: {
    createGeometry () {
      var geometry = new THREE.BoxGeometry(1, 1, 1)
      return geometry
    },
    generateGeometry () {
      this.$_v3r_Geometry_old = this.$_v3r_Geometry

      this.$_v3r_Geometry = this.createGeometry()
      this.$parent.$_v3r_object3D.geometry = this.$_v3r_Geometry

      this.$_v3r_Geometry_old && this.$_v3r_Geometry_old.dispose()
      delete this.$_v3r_Geometry_old
    }
  },
  created () {
    this.generateGeometry()
  },
  beforeDestroy () {
    if (this.$parent.$_v3r_object3D.geometry === this.geometry) {
      this.$parent.$_v3r_object3D.geometry = null
    }
    this.$_v3r_Geometry && this.$_v3r_Geometry.dispose()
  }
}
</script>