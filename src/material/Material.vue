<template>
    <span></span>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'Material',
  props: {
    transparent: {
      type: Boolean,
      default: false
    },
    opacity: {
      type: Number,
      default: 1.0
    },
    wireframe: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    transparent: function (transparent) {
      if (this.$_v3r_material) {
        this.$_v3r_material.transparent = transparent
        this.$_v3r_material.needsUpdate = true
      }
    },
    opacity: function (opacity) {
      if (this.$_v3r_material) {
        this.$_v3r_material.opacity = opacity
        this.$_v3r_material.needsUpdate = true
      }
    },
    wireframe: function (wireframe) {
      if (this.$_v3r_material) {
        this.$_v3r_material.wireframe = wireframe
        this.$_v3r_material.needsUpdate = true
      }
    }
  },
  methods: {
    createMaterial () {
      var material = new THREE.Material()
      return material
    },
    generateMaterial () {
      this.$_v3r_material = this.createMaterial()

      this.$_v3r_material.transparent = this.transparent
      this.$_v3r_material.opacity = this.opacity
      this.$_v3r_material.wireframe = this.wireframe
      this.$_v3r_material.needsUpdate = true

      this.$parent.$_v3r_object3D.material = this.$_v3r_material
    }
  },
  created () {
    this.generateMaterial()
  },
  beforeDestroy () {
    if (this.$parent.$_v3r_object3D.material === this.material) {
      this.$parent.$_v3r_object3D.material = null
    }
    this.$_v3r_material && this.$_v3r_material.dispose()
  }
}
</script>