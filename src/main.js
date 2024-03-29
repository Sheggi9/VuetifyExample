import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import vuetify from './plugins/vuetify';
import firebaseConfig from './config/firebaseconfig'
import firebase from 'firebase'

Vue.config.productionTip = false;

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
