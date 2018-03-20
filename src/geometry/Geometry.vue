<template>
    <span></span>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'Geometry',
  props: {
    assetName: {
      type: String,
      default: ''
    }
  },
  methods: {
    createGeometry () {
      var geometry = new THREE.Geometry()
      return geometry
    },
    generateGeometry () {
      this.$_v3r_oldGeometry = this.$_v3r_geometry
      this.$_v3r_geometry = this.createGeometry()

      if (this.$parent.$_v3r_object3D) {
        this.$parent.$_v3r_object3D.geometry = this.$_v3r_geometry
      }

      this.$_v3r_oldGeometry && this.$_v3r_oldGeometry.dispose()

      if (this.assetName) {
        this.$_v3r_asset.registryAsset(this.assetName, 'geometry', this.$_v3r_geometry)
      }
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

    if (this.assetName) {
      this.$_v3r_asset.deleteAsset(this.assetName)
    }
  }
}
</script>