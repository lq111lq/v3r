<template>
    <span></span>
</template>

<script>
import base from 'src/core/base.js'
import position from 'src/core/mixin/object3d/position.js'

export default {
  name: 'Object3D',
  extends: base,
  mixins: [position],
  data: function () {
    return {
      mouseover: false
    }
  },
  watch: {},
  beforeMount: function () {
    this.$on('object3DCreated', () => {
      this.$_v3r_object3D.userData.element = this.$el
      this.$_v3r_object3D.userData.vm = this

      this.$parent &&
      this.$parent.$_v3r_object3D &&
      this.$_v3r_object3D &&
      this.$parent.$_v3r_object3D.add(this.$_v3r_object3D)

      this.$children.forEach(function (child) {
        child.$_v3r_object3D &&
        this.$_v3r_object3D &&
        this.$_v3r_object3D.add(child.$_v3r_object3D)
      })
    })

    this.$on('object3DDestroy', () => {
      if (this.$_v3r_object3D) {
        this.$_v3r_object3D.userData.element = null
        this.$_v3r_object3D.userData.vm = null

        this.$parent &&
        this.$parent.$_v3r_object3D &&
        this.$parent.$_v3r_object3D.remove(this.$_v3r_object3D)
      }

      this.$children.forEach(function (child) {
        child.$_v3r_object3D &&
        this.$_v3r_object3D &&
        this.$_v3r_object3D.remove(child.$_v3r_object3D)
      })
    })
  }
}
</script>