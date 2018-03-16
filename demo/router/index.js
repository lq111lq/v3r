import Vue from 'vue'
import Router from 'vue-router'
import Position from '@/components/Position'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/position',
      name: 'Position',
      component: Position
    }
  ]
})
