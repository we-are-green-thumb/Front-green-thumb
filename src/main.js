import Vue from 'vue'
import router from './router/router'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  vuetify: new Vuetify(),
}).$mount('#app')

// new Vue({
//   el : "#app",
//   router,
//   template:<App/>,
//   components: {App}
// });