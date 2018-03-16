export default {
  props: {
    scaleX: {
      type: [Number, String],
      default: 1
    },
    scaleY: {
      type: [Number, String],
      default: 1
    },
    scaleZ: {
      type: [Number, String],
      default: 1
    }
  },
  watch: {
    scaleX: function (value) {
      if (this.$_v3r_object3D) {
        this.$_v3r_object3D.scale.x = Number(value)
      }
    },
    scaleY: function (value) {
      if (this.$_v3r_object3D) {
        this.$_v3r_object3D.scale.y = Number(value)
      }
    },
    scaleZ: function (value) {
      if (this.$_v3r_object3D) {
        this.$_v3r_object3D.scale.z = Number(value)
      }
    }
  },
  beforeMount: function () {
    this.$_v3r_object3D.scale.x = Number(this.scaleX)
    this.$_v3r_object3D.scale.y = Number(this.scaleY)
    this.$_v3r_object3D.scale.z = Number(this.scaleZ)
  }
}
