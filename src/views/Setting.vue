<template>
  <div class="view">
    <h1>Setting</h1>
    <label for="displayName">displayName</label>
    <input type="text" v-model="displayName" />
    <button @click="update()">Update</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { useAuthStore } from "@/stores/auth";
export default defineComponent({
  name: "Setting",
  setup() {
    const { state, updateDisplayName } = useAuthStore();
    const displayName = ref('');
    const update = () => updateDisplayName(displayName.value);

    watchEffect(() => (displayName.value = state.displayName));

    return { displayName, update };
  },
});
</script>

<style scoped>
</style>

