<template>
    <span></span>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'Geometry',
  methods: {
    createGeometry () {
      var geometry = new THREE.Geometry()
      return geometry
    },
    generateGeometry () {
      this.$_v3r_oldGeometry = this.$_v3r_geometry
      this.$_v3r_geometry = this.createGeometry()
      this.$parent.$_v3r_object3D.geometry = this.$_v3r_geometry
      this.$_v3r_oldGeometry && this.$_v3r_oldGeometry.dispose()
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