<template>
    <span><slot></slot></span>
</template>

<script>
import Object3D from 'src/core/Object3D.vue'
import * as THREE from 'three'

export default {
  name: 'Scene',
  extends: Object3D,
  methods: {
    $_v3r_handelCreated () {
      if (typeof this.createObject3D === 'function') {
        this.$_v3r_object3D = this.createObject3D()

        this.$_v3r_object3D.userData.element = this.$el
        this.$_v3r_object3D.userData.vm = this

        if (this.$parent) {
          this.$parent.$_v3r_scene = this.$_v3r_object3D
        }
      }
    },
    createObject3D () {
      var scene = new THREE.Scene()
      return scene
    },
    destoryObject3D () {
      console.log('destoryObject3D')
    }
  }
}
</script>