import { storiesOf } from '@storybook/vue'
import {
  withKnobs,
  // text,
  number
} from '@storybook/addon-knobs/vue'

storiesOf('MyButton', module)
  .addDecorator(withKnobs)
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
      <div style="background: black;">
        <webgl-renderer style="width:600px;height:300px;float:left;">
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
        <dat-gui style="float:right;">
          <dat-number-controller label="positionX" v-model="positionX" :max="10" :min="-10"/>
          <dat-number-controller label="positionY" v-model="positionY" :max="10" :min="-10"/>
          <dat-number-controller label="positionZ" v-model="positionZ" :max="10" :min="-10"/>

          <dat-number-controller label="rotationX" v-model="rotationX" :max="180" :min="-180"/>
          <dat-number-controller label="rotationY" v-model="rotationY" :max="180" :min="-180"/>
          <dat-number-controller label="rotationZ" v-model="rotationZ" :max="180" :min="-180"/>

          <dat-number-controller label="scaleX" v-model="scaleX" :max="10" :min="0"/>
          <dat-number-controller label="scaleY" v-model="scaleY" :max="10" :min="0"/>
          <dat-number-controller label="scaleZ" v-model="scaleZ" :max="10" :min="0"/>
        </dat-gui>
        <div style="clear: both;"></div>
      </div>
      `,
      data () {
        return data
      }
    }
  })
  .add('story as a component2', () => {
    return {template: '<p>haha</p>'}
  })
