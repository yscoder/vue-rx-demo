import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './store'

import Rx from 'rxjs/Rx'
import VueRx from 'vue-rx'
Vue.use(VueRx, Rx)

Vue.use(VueResource)

export default new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
