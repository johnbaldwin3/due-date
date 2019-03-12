import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'


Vue.filter('zerofill', function (value) {
  //value = ( value < 0 ? 0 : value );
  return ( value < 10 && value > -1 ? '0' : '' ) + value;
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
