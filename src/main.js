import Vue from 'vue';
import App from './App.vue';
import awesome from './plugins/awesome';
import { store } from './store/store.js';

Vue.use(awesome);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
