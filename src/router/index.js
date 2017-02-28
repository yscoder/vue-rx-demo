import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'view/Vuex'
import RX from 'view/RX'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/vuex', component: Vuex },
        { path: '/rx', component: RX }
    ]
})
