<template>
    <span><slot></slot></span>
</template>

<script>
import Object3D from 'src/core/Object3D.vue'
import * as THREE from 'three'

export default {
  name: 'Mesh',
  extends: Object3D,
  methods: {
    createObject3D () {
      var mesh = new THREE.Mesh()
      return mesh
    },
    destoryObject3D () {
      console.log('destoryObject3D')
    }
  }
}
</script>