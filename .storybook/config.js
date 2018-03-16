import { configure } from '@storybook/vue';

import Vue from 'vue';
import v3r from 'src/index.js'
import DatGui from './DatGui.vue'
import DatNumberController from './DatNumberController.vue'


Vue.use(v3r)
Vue.component('DatGui', DatGui)
Vue.component('DatNumberController', DatNumberController)

function loadStories() {
  require('../stories');
}

configure(loadStories, module);