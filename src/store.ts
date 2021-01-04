import firebase from 'firebase'
import { InjectionKey, reactive, readonly } from 'vue'

interface Store {
  state: {
    readonly user: firebase.UserInfo;
  };
  updateUser: (user: firebase.UserInfo) => void;
  deleteUser: () => void;
}
const user: firebase.UserInfo = {
    displayName: null,
    email: null,
    phoneNumber: null,
    photoURL: null,
    providerId: '',
    uid: ''
  }

const state = reactive({user})

const updateUser = (user: firebase.UserInfo) =>
  state.user = user 

const deleteUser = () => state.user = user

export default {
  state: readonly(state),
  updateUser,
  deleteUser
}

export const key: InjectionKey<Store> = Symbol('key')