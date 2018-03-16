<template>
  <div>
    <webgl-renderer style="width:600px;height:300px;">
      <scene ref="scene">
        <arrow-helper 
          :positionX.sync="positionX" 
          :positionY.sync="positionY" 
          :positionZ.sync="positionZ"

          :scaleX.sync="scaleX" 
          :scaleY.sync="scaleY" 
          :scaleZ.sync="scaleZ"

          :rotationX="3.1415926 * rotationX/180" 
          :rotationY="3.1415926 * rotationY/180" 
          :rotationZ="3.1415926 * rotationZ/180"

          @update:rotationX="val => rotationX = 180 * val/3.1415926"
          @update:rotationY="val => rotationY = 180 * val/3.1415926"
          @update:rotationZ="val => rotationZ = 180 * val/3.1415926"

          ref="arrow"
        >
        </arrow-helper>
      </scene>
    </webgl-renderer>
    positionX: <input type="range" v-model="positionX" min="-5" max="5"><input type="number" v-model="positionX"><br>
    positionY: <input type="range" v-model="positionY" min="-5" max="5"><input type="number" v-model="positionY"><br>
    positionZ: <input type="range" v-model="positionZ" min="-5" max="5"><input type="number" v-model="positionZ"><br>

    scaleX: <input type="range" v-model="scaleX" min="0" max="5"><input type="number" v-model="scaleX"><br>
    scaleY: <input type="range" v-model="scaleY" min="0" max="5"><input type="number" v-model="scaleY"><br>
    scaleZ: <input type="range" v-model="scaleZ" min="0" max="5"><input type="number" v-model="scaleZ"><br>

    rotationX: <input type="range" v-model="rotationX" min="-180" max="180"><input type="number" v-model="rotationX"><br>
    rotationY: <input type="range" v-model="rotationY" min="-180" max="180"><input type="number" v-model="rotationY"><br>
    rotationZ: <input type="range" v-model="rotationZ" min="-180" max="180"><input type="number" v-model="rotationZ"><br>

    lookAtX: <input type="range" v-model="lookAtX" min="-5" max="5"><input type="number" v-model="lookAtX"><br>
    lookAtY: <input type="range" v-model="lookAtY" min="-5" max="5"><input type="number" v-model="lookAtY"><br>
    lookAtZ: <input type="range" v-model="lookAtZ" min="-5" max="5"><input type="number" v-model="lookAtZ"><br>
  </div>
</template>

<script>
export default {
  name: 'Position',
  data () {
    return {
      positionX: 0,
      positionY: 0,
      positionZ: 0,

      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,

      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,

      lookAtX: 0,
      lookAtY: 0,
      lookAtZ: 0
    }
  },
  watch: {
    positionX: 'lookAt',
    positionY: 'lookAt',
    positionZ: 'lookAt',

    lookAtX: 'lookAt',
    lookAtY: 'lookAt',
    lookAtZ: 'lookAt'
  },
  methods: {
    lookAt () {
      this.$refs.arrow.lookAt(this.lookAtX, this.lookAtY, this.lookAtZ)
    }
  },
  mounted () {
    this.lookAt()
  }
}
</script>
