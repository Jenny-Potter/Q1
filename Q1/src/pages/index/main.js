import Vue from 'vue'
import App from './index'
import Room from 'q1-1/src/components'
Vue.use(Room)
// import Room from 'q1-1'
console.log(Room)

// add this to handle exception
Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}

const app = new Vue(App)
app.$mount()
