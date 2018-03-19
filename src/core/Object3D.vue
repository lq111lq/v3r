<template>
    <span><slot></slot></span>
</template>

<script>
import base from 'src/core/base.js'
import position from 'src/core/mixin/object3d/position.js'
import rotation from 'src/core/mixin/object3d/rotation.js'
import scale from 'src/core/mixin/object3d/scale.js'

export default {
  name: 'Object3D',
  extends: base,
  mixins: [position, rotation, scale],
  data: function () {
    return {
      mouseover: false
    }
  },
  watch: {},
  methods: {
    $_v3r_handelCreated () {
      if (typeof this.createObject3D === 'function') {
        this.$_v3r_object3D = this.createObject3D()

        this.$_v3r_object3D.userData.element = this.$el
        this.$_v3r_object3D.userData.vm = this

        this.$parent &&
        this.$parent.$_v3r_object3D &&
        this.$parent.$_v3r_object3D.add(this.$_v3r_object3D)
      }
    },
    $_v3r_handelBeforeDestroy () {
      this.$parent &&
      this.$parent.$_v3r_object3D &&
      this.$parent.$_v3r_object3D.remove(this.$_v3r_object3D)

      if (typeof this.destoryObject3D === 'function') {
        this.destoryObject3D()
      }
    }
  },
  created () {
    this.$_v3r_handelCreated()
    this.$on('sync', () => {
      if (!this.$_v3r_object3D) {
        return
      }
      this.$emit('update:positionX', this.$_v3r_object3D.position.x)
      this.$emit('update:positionY', this.$_v3r_object3D.position.y)
      this.$emit('update:positionZ', this.$_v3r_object3D.position.z)

      this.$emit('update:rotationX', this.$_v3r_object3D.rotation.x)
      this.$emit('update:rotationY', this.$_v3r_object3D.rotation.y)
      this.$emit('update:rotationZ', this.$_v3r_object3D.rotation.z)

      this.$emit('update:scaleX', this.$_v3r_object3D.scale.x)
      this.$emit('update:scaleY', this.$_v3r_object3D.scale.y)
      this.$emit('update:scaleZ', this.$_v3r_object3D.scale.z)
    })
  },
  beforeDestroy () {
    this.$_v3r_handelBeforeDestroy()
  }
}
</script>

  // beforeMount: function () {
  //   this.$on('object3DCreated', () => {
  //     this.$_v3r_object3D.userData.element = this.$el
  //     this.$_v3r_object3D.userData.vm = this

  //     this.$parent &&
  //     this.$parent.$_v3r_object3D &&
  //     this.$_v3r_object3D &&
  //     this.$parent.$_v3r_object3D.add(this.$_v3r_object3D)

  //     this.$children.forEach(function (child) {
  //       child.$_v3r_object3D &&
  //       this.$_v3r_object3D &&
  //       this.$_v3r_object3D.add(child.$_v3r_object3D)
  //     })
  //   })

  //   this.$on('object3DDestroy', () => {
  //     if (this.$_v3r_object3D) {
  //       this.$_v3r_object3D.userData.element = null
  //       this.$_v3r_object3D.userData.vm = null

  //       this.$parent &&
  //       this.$parent.$_v3r_object3D &&
  //       this.$parent.$_v3r_object3D.remove(this.$_v3r_object3D)
  //     }

  //     this.$children.forEach(function (child) {
  //       child.$_v3r_object3D &&
  //       this.$_v3r_object3D &&
  //       this.$_v3r_object3D.remove(child.$_v3r_object3D)
  //     })
  //   })
  // }
