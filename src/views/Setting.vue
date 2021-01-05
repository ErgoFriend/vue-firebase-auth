<template>
  <div class="view">
    <h1>Setting</h1>
    <label for="displayName">displayName</label>
    <input type="text" v-model="displayName" />
    <button :disabled="!canModify" @click="update()">Update</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue';
import useUser from '@/store';
import Firebase from '@/firebase'
export default defineComponent({
  name: 'Setting',
  setup() {
    const {user} = useUser()
    
    const canModify = ref(!!user.value?.displayName)
    const displayName = ref<string>(user.value?.displayName ?? '')
    const update = () => {
      console.log('update to', displayName.value)
      displayName.value && Firebase.updateDisplayName(displayName.value)
    }

    return { canModify, displayName, update, Firebase }
  }
});
</script>

<style scoped>
</style>

