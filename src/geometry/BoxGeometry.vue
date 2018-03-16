<template>
    <span></span>
</template>

<script>
import * as THREE from 'three'
import Geometry from './Geometry.vue'

export default {
  name: 'BoxGeometry',
  extends: Geometry,
  props: {
    width: {
      type: [Number, String],
      default: 1
    },
    height: {
      type: [Number, String],
      default: 1
    },
    depth: {
      type: [Number, String],
      default: 1
    },
    widthSegments: {
      type: [Number, String],
      default: 1
    },
    heightSegments: {
      type: [Number, String],
      default: 1
    },
    depthSegments: {
      type: [Number, String],
      default: 1
    }
  },
  watch: {
    width: 'generateGeometry',
    height: 'generateGeometry',
    depth: 'generateGeometry',
    widthSegments: 'generateGeometry',
    heightSegments: 'generateGeometry',
    depthSegments: 'generateGeometry'
  },
  methods: {
    createGeometry () {
      var geometry = new THREE.BoxGeometry(
        Number(this.width),
        Number(this.height),
        Number(this.depth),
        Number(this.widthSegments),
        Number(this.heightSegments),
        Number(this.depthSegments)
      )
      return geometry
    }
  }
}
</script>
