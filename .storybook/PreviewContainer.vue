<template>
  <div :style="{
    width: w + 'px',
    height: h + 'px',
    position: 'relative',
    borderRadius: '4px',
    overflow: 'hidden'
  }">
    <slot></slot>
    <a v-if="iframeSrc" class="new_tab" :href="iframeSrc" target="_blank">OPEN IN NEW TAB</a>
  </div>
</template>
<script>
import datgui from 'dat.gui'
export default {
  data () {
    return {
      w: 0,
      h: 0,
      iframeSrc: ''
    }
  },
  methods: {
    onResize () {
      this.w = window.innerWidth - 16
      this.h = window.innerHeight - 16
    }
  },
  created () {
    var iframe = parent.document.getElementById('storybook-preview-iframe')
    if (iframe) {
      this.iframeSrc = iframe.src
    }
    window.addEventListener('resize',this.onResize)
  },
  mounted () {
    this.onResize()
  },
  beforeDestroy () {

  }
}
</script>

<style scoped>
  .new_tab {
		position: fixed;
		top: 20px;
		left: 20px;
		padding: 8px;
		color: #fff;
		background-color: #555;
		opacity: 0.7;
    outline: none !important;
    text-decoration: none;
	}

	.new_tab:hover {
		cursor: pointer;
		opacity: 1;
	}
</style>


