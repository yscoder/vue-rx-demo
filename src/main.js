import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Rx from 'rxjs/Rx'
import VueRx from 'vue-rx'

Vue.use(VueRx, Rx)

export default new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
