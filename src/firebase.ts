import firebase from "firebase/app";
import "firebase/auth";
import store from "@/store";

const config = {
  apiKey: "AIzaSyC65X-Nz7uVsrPR1x6rI2tx_Mjdny6pAl8",
  authDomain: "vue-firebase-demo-ebdef.firebaseapp.com",
  projectId: "vue-firebase-demo-ebdef",
  storageBucket: "vue-firebase-demo-ebdef.appspot.com",
  messagingSenderId: "213709504759",
  appId: "1:213709504759:web:40aac8e6d6cc38cbeb53f2",
  measurementId: "G-EVD8ZEB5M3"
}

export default {
  init() {
    console.log('Firebase init')
    firebase.initializeApp(config);
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  },
  onAuth() {
    console.log('Firebase onAuth')
    firebase.auth().onAuthStateChanged(user => {
      console.log('on chenged user', user?.displayName)
      user && store.updateUser(user)
      !user && store.deleteUser()

    });
    firebase.auth().currentUser?.reload().then(() => {
      const refreshUser = firebase.auth().currentUser;
      console.log({refreshUser})
    })
  },
  login() {
    console.log('Firebase login')
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
  },
  logout() {
    console.log('Firebase logout')
    firebase.auth().signOut()
  },
  updateDisplayName: (name: string) => {
  firebase.auth().currentUser?.updateProfile({
      displayName: name
    })
  }
};