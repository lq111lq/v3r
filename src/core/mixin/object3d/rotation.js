import * as THREE from 'three'

export default {
  props: {
    rotationX: {
      type: [Number, String],
      default: 0
    },
    rotationY: {
      type: [Number, String],
      default: 0
    },
    rotationZ: {
      type: [Number, String],
      default: 0
    }
  },
  watch: {
    rotationX: function (value) {
      if (this.$_v3r_object3D) {
        this.$_v3r_object3D.rotation.x = Number(value)
      }
    },
    rotationY: function (value) {
      if (this.$_v3r_object3D) {
        this.$_v3r_object3D.rotation.y = Number(value)
      }
    },
    rotationZ: function (value) {
      if (this.$_v3r_object3D) {
        this.$_v3r_object3D.rotation.z = Number(value)
      }
    }
  },
  methods: {
    lookAt: function (x, y, z) {
      if (this.$_v3r_object3D) {
        this.$_v3r_object3D.lookAt(new THREE.Vector3(x, y, z))

        this.$emit('update:rotationX', this.$_v3r_object3D.rotation.x)
        this.$emit('update:rotationY', this.$_v3r_object3D.rotation.y)
        this.$emit('update:rotationZ', this.$_v3r_object3D.rotation.z)
      }
    }
  },
  beforeMount: function () {
    this.$_v3r_object3D.rotation.x = Number(this.rotationX)
    this.$_v3r_object3D.rotation.y = Number(this.rotationY)
    this.$_v3r_object3D.rotation.z = Number(this.rotationZ)
  }
}
