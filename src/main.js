import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import VueResource from 'vue-resource';

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.http.interceptors.push(function(request, next){
  request.headers.set('Authorization', 'Bearer 12345');
  if (request.headers['Authorization'] === null) {
    return request.respondWith({
      status: 404,
      message: 'Not Authorized'
    })
  }
  next();
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
