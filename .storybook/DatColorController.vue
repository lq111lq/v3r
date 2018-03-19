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
      type: [Number, String],
    },
    label: {
      type: String,
    }
  },
  created () {
    this.$set( this.vc, this.label, this.value )
    this.$watch('vc.' + this.label, function (newVal, oldVal) {
      this.$emit('input', newVal)
    })
    this.$parent.$_gui.addColor(this.vc, this.label)
  }
}
</script>