import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { formatNumber } from "@/utils";
Vue.filter('formatNumber', formatNumber);

new Vue({
  render: h => h(App),
}).$mount('#rciCalculator')
