<template>
    <div class="user" v-if="store.state.user.uid">
      <img class="photoURL" :src="store.state.user.photoURL" alt="">
      <h3 class="displayName">{{ store.state.user.displayName }}</h3>
      <button
        type="button"
        class="button is-small is-info is-outlined"
        @click="Firebase.logout()"
      >
        Sign out
      </button>
    </div>
    <div class="user" v-else>
      <LoginButton />
    </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { key } from '@/store'
import LoginButton from "@/components/LoginButton.vue";
import Firebase from '@/firebase'

export default defineComponent({
  name: "User",
  components: {
    LoginButton,
  },
  setup () {
    const store = inject(key)
    if (!store) {
      throw new Error('inject store')
    }
      console.log(store.state.user)
    return {
      store,
      Firebase
    }
  }
});
</script>

<style scoped>
.user {
  height: 50px;
  float: right;
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
}
.displayName, button {
  white-space: nowrap
}
.displayName {
  margin: 0 20px 0 10px
}
button {
  font-weight: 600;
}
.photoURL {
  border-radius: 50%;
  object-fit: cover;
  width: 50px;
  height: 50px;
}
</style>