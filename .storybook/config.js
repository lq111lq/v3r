import { configure } from '@storybook/vue';

import Vue from 'vue';
import v3r from 'src/index.js'
import DatGui from './DatGui.vue'
import DatFolder from './DatFolder.vue'
import DatNumberController from './DatNumberController.vue'
import DatTextController from './DatTextController.vue'
import PreviewContainer from './PreviewContainer.vue'
import DatColorController from './DatColorController.vue'

Vue.use(v3r)
Vue.component('DatGui', DatGui)
Vue.component('DatFolder', DatFolder)
Vue.component('DatTextController', DatTextController)
Vue.component('DatNumberController', DatNumberController)
Vue.component('DatColorController', DatColorController)
Vue.component('PreviewContainer', PreviewContainer)

function loadStories() {
  require('../stories');
}

configure(loadStories, module);