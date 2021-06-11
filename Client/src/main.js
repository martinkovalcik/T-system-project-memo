import Vue from 'vue'
import AppComponent from './components/app/app.js'
import vuetify from './plugins/vuetify';

import './assets/styles/index.css';


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(AppComponent)
}).$mount('#app')
