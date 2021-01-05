import firebase from 'firebase'
import { InjectionKey, reactive, readonly, toRefs } from 'vue'



const useUser = () => {
  const state = reactive({ user: firebase.auth().currentUser });
  const setUser = (user: firebase.User | null) => state.user = user

  firebase.auth().onAuthStateChanged(() => {
    console.log('onAuthChanged', firebase.auth().currentUser?.displayName)
    setUser(firebase.auth().currentUser)
  });

  return { ...toRefs(state), setUser }
}

export default useUser