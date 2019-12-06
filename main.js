import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import * as helper from './static/js/helper.js'
Vue.prototype.$helper = helper

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
