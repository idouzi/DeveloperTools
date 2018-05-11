import Vue from 'vue'
import Router from 'vue-router'
import Code from '../../../components/background/code'
import ColorPicker from '../../../components/background/colorPicker'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    base:'#/',
    routes: [
        {
            path: '/',
            name: 'code',
            component: Code
        }, {
            path: '/colorPicker',
            name: 'colorPicker',
            component: ColorPicker
        }
    ]
  })