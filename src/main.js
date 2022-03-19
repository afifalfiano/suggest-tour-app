import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from './routes';
import {store} from './store/store';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueToast);

const router = new VueRouter({
  mode: 'history',
  routes: Routes
})


Vue.http.interceptors.push(function(request, next){
  const user = localStorage.getItem('user');
  const token = JSON.parse(user)?.token || null;
  console.log(user, 'usr');
  request.headers.set('token', `${token}`);
  request.headers.set('Access-Control-Allow-Origin', '*');
  request.headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  request.headers.set("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
  if (token === null) {
    if (window.location.href.match(/login/g) || window.location.href.match(/signup/g)) {
      next();
    } else {
      return request.respondWith({
        status: 404,
        message: 'Not Authorized'
      })
    }
  }
  next();
})

new Vue({
  vuetify,
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')
