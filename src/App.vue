<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import {
  defineComponent,
  provide
} from "vue";
import Header from "@/components/Header.vue";
import Firebase from "@/firebase";
import store, { key } from "@/store";

export default defineComponent({
  name: "App",
  components: {
    Header,
  },
  setup() {
    provide(key, store);
    Firebase.onAuth();
    return { store };
  },
});
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/water.css@2/out/water.css";
</style>
