<template>
  <div>
    <div>I am Q1main project</div>
    <Room></Room>
    <!-- <componentsBox></componentsBox> -->
  </div>
</template>

<script>
import Room from 'q1-1/src/components'
import Vue from 'vue'
Vue.use(Room)
// import componentsBox from 'q1-1'
// import Room from 'q1-1'
// import all from 'q1-1'
// const componentsBox = require('q1-1')
// const Room = componentsBox.room
// import Room from 'q1-1/src/components/room'
// Vue.use(componentsBox)
export default {
  data () {
    return {
    }
  },
  mounted () {
    // console.log(componentsBox)
    // console.log(all)

  },
  components: {
    // Room
    // componentsBox
  },
  methods: {}
}
</script>

<style scoped>
</style>
