import { createApp } from 'vue'
import firebase from "firebase/app"
import 'firebase/auth'
import App from '@/App.vue'
import router from '@/router'
import authStore, { authStoreKey } from '@/stores/auth'

const config = {
  apiKey: "AIzaSyC65X-Nz7uVsrPR1x6rI2tx_Mjdny6pAl8",
  authDomain: "vue-firebase-demo-ebdef.firebaseapp.com",
  projectId: "vue-firebase-demo-ebdef",
  storageBucket: "vue-firebase-demo-ebdef.appspot.com",
  messagingSenderId: "213709504759",
  appId: "1:213709504759:web:40aac8e6d6cc38cbeb53f2",
  measurementId: "G-EVD8ZEB5M3"
}

firebase.initializeApp(config);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

const app = createApp(App)
app.use(router)
app.provide(authStoreKey, authStore())
app.mount('#app')