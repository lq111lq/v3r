<template>
  <div class="container" ref='container'><slot></slot></div>
</template>
<script>
import datgui from 'dat.gui'
export default {
  created () {
    this.$_gui = new datgui.GUI({autoPlace: false})
  },
  mounted () {
    this.$refs.container.appendChild(this.$_gui.domElement)
  },
  beforeDestroy () {
    this.$_gui && this.$_gui.destroy()
  }
}
</script>

<style scoped>
  .container {
    height: 100%;
    overflow-y: auto;
  }
</style>

