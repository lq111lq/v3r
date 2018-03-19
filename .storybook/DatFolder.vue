<template>
  <span><slot></slot></span>
</template>
<script>
import datgui from 'dat.gui'
export default {
  props: {
    name: {
      type: String,
      default: 'folder'
    }
  },
  created () {
    this.$_gui = this.$parent.$_gui.addFolder(this.name)
  }
}
</script>