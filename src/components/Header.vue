<template>
  <div class="header">
    <router-link to="/">Home</router-link> /
    <router-link to="/setting">Setting</router-link>
    <User />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import User from "@/components/User.vue";
export default defineComponent({
  name: "Header",
  components: {
    User,
  },
});
</script>

<style scoped>
</style>


