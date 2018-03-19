<template>
    <span></span>
</template>

<script>
import * as THREE from 'three'
import Material from './Material.vue'

export default {
  name: 'MeshBasicMaterial',
  extends: Material,
  props: {
    color: {
      type: [Number, String],
      default: 0xffffff
    }
  },
  watch: {
    color: function (color) {
      if (this.$_v3r_material) {
        this.$_v3r_material.color = new THREE.Color(color)
        this.$_v3r_material.needsUpdate = true
      }
    }
  },
  methods: {
    createMaterial () {
      var material = new THREE.MeshBasicMaterial()
      material.color = new THREE.Color(this.color)
      material.needsUpdate = true

      return material
    }
  }
}
</script>
