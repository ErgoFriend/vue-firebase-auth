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
import firebase from "firebase";
import useUser from "@/store";

export default defineComponent({
  name: "App",
  components: {
    Header,
  },
});
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/water.css@2/out/water.css";
</style>
