<template>
    <span><slot></slot></span>
</template>

<script>
import Object3D from 'src/core/Object3D.vue'
import * as THREE from 'three'

export default {
  name: 'Mesh',
  extends: Object3D,
  props: {
    geometry: {
      type: String,
      default: ''
    }
  },
  methods: {
    createObject3D () {
      var mesh = new THREE.Mesh()
      var geometryAsset = this.$_v3r_geometryAsset = this.$_v3r_asset.getAsset(this.geometry)

      if (geometryAsset) {
        mesh.geometry = geometryAsset.asset
        geometryAsset.addEventListener('change', this.assetChange)
      }

      return mesh
    },
    assetChange (event) {
      this.$_v3r_object3D.geometry = event.asset
    },
    destoryObject3D () {
      console.log('destoryObject3D')
      if (this.$_v3r_geometryAsset) {
        this.$_v3r_geometryAsset.removeEventListener('change', this.assetChange)
      }
    }
  }
}
</script>