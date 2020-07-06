import Vue from 'vue'
import RoomDisplayView from './RoomDisplayView.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(RoomDisplayView),
}).$mount('#app')
