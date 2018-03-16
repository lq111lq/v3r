<template>
    <span><slot></slot></span>
</template>

<script>
import Object3D from 'src/core/Object3D.vue'
import * as THREE from 'three'

export default {
  name: 'ArrowHelper',
  extends: Object3D,
  methods: {
    createObject3D () {
      var dir = new THREE.Vector3(0, 0, 1)

      dir.normalize()

      var origin = new THREE.Vector3(0, 0, 0)
      var length = 1
      var hex = 0xffff00

      var arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex, 0.2 * length, 0.2 * length)

      // this.$emit('update:positionX', arrowHelper.position.x)
      // this.$emit('update:positionY', arrowHelper.position.y)
      // this.$emit('update:positionZ', arrowHelper.position.z)

      // this.$emit('update:rotationX', arrowHelper.rotation.x)
      // this.$emit('update:rotationY', arrowHelper.rotation.y)
      // this.$emit('update:rotationZ', arrowHelper.rotation.z)

      var group = new THREE.Group()
      group.add(arrowHelper)

      return group
    },
    destoryObject3D () {
      console.log('destoryObject3D')
    }
  }
}
</script>