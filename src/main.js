// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;

// Initialize Firebase
var config = {
apiKey: "AIzaSyBQWciT72lOFDJhUZ69LEOI2CUPY9C5WH4",
authDomain: "vue-firebase-tutorial-95c9a.firebaseapp.com",
databaseURL: "https://vue-firebase-tutorial-95c9a.firebaseio.com",
projectId: "vue-firebase-tutorial-95c9a",
storageBucket: "",
messagingSenderId: "291835329896"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function (user) {
	if(!app) {
		/* eslint-disable no-new */
		app = new Vue({
			el: '#app',
			template: '<App/>',
			components: { App },
			router
		})
	}
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
