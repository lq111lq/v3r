<template>
  <span></span>
</template>
<script>
import datgui from 'dat.gui'
export default {
  data () {
    return {
      vc: {}
    }
  },
  props: {
    value: {
      type: [Boolean, String],
    },
    label: {
      type: String,
    }
  },
  watch: {
    value (value) {
      this.$_controller && this.$_controller.setValue(value)
    }
  },
  created () {
    this.$set( this.vc, this.label, this.value )
    this.$watch('vc.' + this.label, function (newVal, oldVal) {
      this.$emit('input', newVal)
    })
    this.$_controller = this.$parent.$_gui.add(this.vc, this.label)
  }
}
</script>