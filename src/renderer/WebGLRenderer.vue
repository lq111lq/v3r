<template>
    <div>
        <resize-sensor @resize="resize"/>
        <span style="display: none;" @click.stop><slot></slot></span>
    </div>
</template>
<script>
import base from 'src/core/base.js'
import * as THREE from 'three'

export default {
  name: 'WebGLRenderer',
  extends: base,
  data () {
    return {
      width: 0,
      height: 0
    }
  },
  methods: {
    resize (event) {
      this.width = event.width
      this.height = event.height

      if (this.$_v3r_renderer) {
        this.$_v3r_renderer.setSize(this.width, this.height)
      }

      if (this.$_v3r_camera) {
        this.$_v3r_camera.aspect = this.width / this.height
        this.$_v3r_camera.updateProjectionMatrix()
      }
    }
  },
  mounted () {
    var self = this

    this.$_v3r_renderer = new THREE.WebGLRenderer({})
    this.$_v3r_renderer.domElement.style.display = 'block'
    this.$_v3r_renderer.setSize(this.width, this.height)

    this.$el.append(this.$_v3r_renderer.domElement)

    var scene = new THREE.Scene()
    var camera = new THREE.PerspectiveCamera(75, this.innerWidth / this.innerHeight, 0.1, 1000)

    var geometry = new THREE.BoxGeometry(1, 1, 1)
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    var cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    camera.position.z = 5

    self.$_v3r_scene = scene
    self.$_v3r_camera = camera

    function render () {
      self.$_v3r_rafIndex = requestAnimationFrame(render)
      if (self.$_v3r_scene && self.$_v3r_camera) {
        self.$_v3r_renderer.render(
          self.$_v3r_scene,
          self.$_v3r_camera
        )
      }
    }

    render()
  },
  beforeDestory () {
    cancelAnimationFrame(self.$_v3r_rafIndex)
  }
}
</script>