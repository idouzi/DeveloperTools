// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import '../../config/element-ui/element-variables.scss'
import '../../asset/reset.scss'

import { 
    Button, 
    Select 
} from 'element-ui';

Vue.use(Button)
Vue.use(Select)

/* eslint-disable no-new */
new Vue({
  el: '#idouzi',
  components: { App },
  router,
  template: '<App/>'
})
