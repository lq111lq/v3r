import { storiesOf } from '@storybook/vue'
import {
  withKnobs,
  // text,
  boolean,
  color,
  number
} from '@storybook/addon-knobs/vue'

storiesOf('Base', module)
  .addDecorator(withKnobs)
  .add('a cube', () => {
    // const name = text('Name', 'John Doe')

    var data = {
      positionX: number('positionX', 0),
      positionY: number('positionY', 0),
      positionZ: number('positionZ', 0),

      rotationX: number('rotationX', 0),
      rotationY: number('rotationY', 0),
      rotationZ: number('rotationZ', 0),

      scaleX: number('scaleX', 1),
      scaleY: number('scaleY', 1),
      scaleZ: number('scaleZ', 1),

      transparent: boolean('transparent', false),
      opacity: number('opacity', 1),
      color: color('color', '#ff00ff'),
      wireframe: boolean('wireframe', false),

      width: number('width', 1),
      height: number('height', 1),
      depth: number('depth', 1),
      widthSegments: number('widthSegments', 1),
      heightSegments: number('heightSegments', 1),
      depthSegments: number('depthSegments', 1)
    }

    return {
      template: `
      <preview-container>
        <webgl-renderer style="width:100%;height:100%;">
          <scene ref="scene">
            <mesh 
              :positionX="positionX" 
              :positionY="positionY" 
              :positionZ="positionZ"

              :rotationX="Math.PI * rotationX / 180" 
              :rotationY="Math.PI * rotationY / 180" 
              :rotationZ="Math.PI * rotationZ / 180"

              :scaleX="scaleX" 
              :scaleY="scaleY" 
              :scaleZ="scaleZ"
            >
              <box-geometry 
                :width="width"
                :height="height"
                :depth="depth"
                :widthSegments="widthSegments"
                :heightSegments="heightSegments"
                :depthSegments="depthSegments"
              ></box-geometry>
              <mesh-basic-material :color="color" :opacity="opacity" :transparent="transparent" :wireframe="wireframe"/>
            </mesh>
          </scene>
        </webgl-renderer>
        <dat-gui style="position: absolute;right: 0px;top: 0px">
          <dat-folder name="position">
            <dat-number-controller label="positionX" v-model="positionX" :max="10" :min="-10"/>
            <dat-number-controller label="positionY" v-model="positionY" :max="10" :min="-10"/>
            <dat-number-controller label="positionZ" v-model="positionZ" :max="10" :min="-10"/>
          </dat-folder>

          <dat-folder name="rotation">
            <dat-number-controller label="rotationX" v-model="rotationX" :max="180" :min="-180"/>
            <dat-number-controller label="rotationY" v-model="rotationY" :max="180" :min="-180"/>
            <dat-number-controller label="rotationZ" v-model="rotationZ" :max="180" :min="-180"/>
          </dat-folder>

          <dat-folder name="scale">
            <dat-number-controller label="scaleX" v-model="scaleX" :max="10" :min="0"/>
            <dat-number-controller label="scaleY" v-model="scaleY" :max="10" :min="0"/>
            <dat-number-controller label="scaleZ" v-model="scaleZ" :max="10" :min="0"/>
          </dat-folder>
          
          <dat-folder name="Geometry">
            <dat-number-controller label="width" v-model="width" :min="0" :max="10"/>
            <dat-number-controller label="height" v-model="height" :min="0" :max="10"/>
            <dat-number-controller label="depth" v-model="depth" :min="0" :max="10"/>
            <dat-number-controller label="widthSegments" v-model="widthSegments" :min="0" :max="10"/>
            <dat-number-controller label="heightSegments" v-model="heightSegments" :min="0" :max="10"/>
            <dat-number-controller label="depthSegments" v-model="depthSegments" :min="0" :max="10"/>
          </dat-folder>

          <dat-folder name="Material">
            <dat-text-controller label="transparent" v-model="transparent"/>
            <dat-number-controller label="opacity" v-model="opacity" :min="0" :max="1"/>
            <dat-text-controller label="wireframe" v-model="wireframe"/>
          </dat-folder>
          <dat-folder name="MeshBasicMaterial">
            <dat-color-controller label="color" v-model="color"/>
          </dat-folder>
        </dat-gui>
        <div style="clear: both;"></div>
      </preview-container>
      `,
      data () {
        return data
      }
    }
  })
  .add('position,rotation,scale', () => {
    // const name = text('Name', 'John Doe')

    var data = {
      positionX: number('positionX', 0),
      positionY: number('positionY', 0),
      positionZ: number('positionZ', 0),

      rotationX: number('rotationX', 0),
      rotationY: number('rotationY', 0),
      rotationZ: number('rotationZ', 0),

      scaleX: number('scaleX', 1),
      scaleY: number('scaleY', 1),
      scaleZ: number('scaleZ', 1)
    }

    return {
      template: `
      <preview-container>
        <webgl-renderer style="width:100%;height:100%;">
          <scene ref="scene">
            <mesh 
              :positionX="positionX" 
              :positionY="positionY" 
              :positionZ="positionZ"

              :rotationX="Math.PI * rotationX / 180" 
              :rotationY="Math.PI * rotationY / 180" 
              :rotationZ="Math.PI * rotationZ / 180"

              :scaleX="scaleX" 
              :scaleY="scaleY" 
              :scaleZ="scaleZ"
            >
              <box-geometry></box-geometry>
            </mesh>
          </scene>
        </webgl-renderer>
        <dat-gui style="position: absolute;right: 0px;top: 0px">
          <dat-folder name="position">
            <dat-number-controller label="positionX" v-model="positionX" :max="10" :min="-10"/>
            <dat-number-controller label="positionY" v-model="positionY" :max="10" :min="-10"/>
            <dat-number-controller label="positionZ" v-model="positionZ" :max="10" :min="-10"/>
          </dat-folder>

          <dat-folder name="rotation">
            <dat-number-controller label="rotationX" v-model="rotationX" :max="180" :min="-180"/>
            <dat-number-controller label="rotationY" v-model="rotationY" :max="180" :min="-180"/>
            <dat-number-controller label="rotationZ" v-model="rotationZ" :max="180" :min="-180"/>
          </dat-folder>

          <dat-folder name="scale">
            <dat-number-controller label="scaleX" v-model="scaleX" :max="10" :min="0"/>
            <dat-number-controller label="scaleY" v-model="scaleY" :max="10" :min="0"/>
            <dat-number-controller label="scaleZ" v-model="scaleZ" :max="10" :min="0"/>
          </dat-folder>
        </dat-gui>
        <div style="clear: both;"></div>
      </preview-container>
      `,
      data () {
        return data
      }
    }
  })
  .add('material', () => {
    var data = {
      transparent: boolean('transparent', false),
      opacity: number('opacity', 1),
      color: color('color', '#ff00ff'),
      wireframe: boolean('wireframe', false)
    }

    return {
      template: `
      <preview-container>
        <webgl-renderer style="width:100%;height:100%;">
          <scene ref="scene">
            <mesh>
              <box-geometry/>
              <mesh-basic-material :color="color" :opacity="opacity" :transparent="transparent" :wireframe="wireframe"/>
            </mesh>
          </scene>
        </webgl-renderer>
        <dat-gui style="position: absolute;right: 0px;top: 0px">
          <dat-folder name="Material">
            <dat-text-controller label="transparent" v-model="transparent"/>
            <dat-number-controller label="opacity" v-model="opacity" :min="0" :max="1"/>
            <dat-text-controller label="wireframe" v-model="wireframe"/>
          </dat-folder>
          <dat-folder name="MeshBasicMaterial">
            <dat-color-controller label="color" v-model="color"/>
          </dat-folder>
        </dat-gui>
        <div style="clear: both;"></div>
      </preview-container>
      `,
      data () {
        return data
      }
    }
  })
