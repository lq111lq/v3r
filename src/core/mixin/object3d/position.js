export default {
  props: {
    positionX: {
      type: [Number, String],
      default: 0
    },
    positionY: {
      type: [Number, String],
      default: 0
    },
    positionZ: {
      type: [Number, String],
      default: 0
    }
  },
  watch: {
    positionX: function (value) {
      if (this.$_v3r_object3D) {
        this.$_v3r_object3D.position.x = Number(value)
      }
    },
    positionY: function (value) {
      if (this.$_v3r_object3D) {
        this.$_v3r_object3D.position.y = Number(value)
      }
    },
    positionZ: function (value) {
      if (this.$_v3r_object3D) {
        this.$_v3r_object3D.position.z = Number(value)
      }
    }
  },
  beforeMount: function () {
    this.$_v3r_object3D.position.x = Number(this.positionX)
    this.$_v3r_object3D.position.y = Number(this.positionY)
    this.$_v3r_object3D.position.z = Number(this.positionZ)
  }
}
