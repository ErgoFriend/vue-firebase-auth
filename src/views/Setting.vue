<template>
  <div class="view">
    <h1>Setting</h1>
    <label for="displayName">displayName</label>
    <input type="text" v-model="displayName" />
    <button @click="update()">Update</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue';
import { key } from '@/store';
import Firebase from '@/firebase'
export default defineComponent({
  name: 'Setting',
  setup() {
    const store = inject(key)
    if (!store) {
      throw new Error('inject store')
    }
  
    const displayName = ref(store.state.user.displayName)
    const update = () =>
      displayName.value && Firebase.updateDisplayName(displayName.value)

    return { displayName, update, Firebase }
  }
});
</script>

<style scoped>
</style>

