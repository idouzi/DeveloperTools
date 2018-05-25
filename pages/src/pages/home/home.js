// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import '../../config/element-ui/element-variables.scss'
import '../../asset/reset.scss'

import { 
    Button, 
    Select 
} from 'element-ui';

Vue.use(Button)
Vue.use(Select)

// 字体组件
import Icon from 'vue-awesome/components/Icon'

// 引入字体组件文件 仅引入用到的图标以减小打包体积
import 'vue-awesome/icons/code'
import 'vue-awesome/icons/cog'
import 'vue-awesome/icons/ellipsis-h'
import 'vue-awesome/icons/brands/pushed'
import 'vue-awesome/icons/exchange-alt'
import 'vue-awesome/icons/retweet'
import 'vue-awesome/icons/eye-dropper'
import 'vue-awesome/icons/file-image'

Vue.component('icon', Icon);

/* eslint-disable no-new */
new Vue({
  el: '#idouzi',
  components: { App },
  template: '<App/>'
})
