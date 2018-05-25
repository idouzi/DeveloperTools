import Vue from 'vue'
import Router from 'vue-router'
import CodeParam from '../../../components/background/codeParam'
import ColorPicker from '../../../components/background/colorPicker'
import Json from '../../../components/background/json'
import TimeStamp from '../../../components/background/timeStamp'
import BaseImage from '../../../components/background/baseImage'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    base:'#/',
    routes: [
        {
            path: '/',
            redirect: 'codeParam'
        }, {
            path: '/codeParam',
            name: 'codeParam',
            component: CodeParam
        }, {
            path: '/colorPicker',
            name: 'colorPicker',
            component: ColorPicker
        }, {
            path: '/json',
            name: 'json',
            component: Json
        }, {
            path: '/timeStamp',
            name: 'timeStamp',
            component: TimeStamp
        }, {
            path: '/baseImage',
            name: 'baseImage',
            component: BaseImage
        }
    ]
  })
