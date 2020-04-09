import Vue from 'vue'
import App from './App'
import Room from 'q1-1/src/components/Room'

console.log(Room, 'main.js')
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
