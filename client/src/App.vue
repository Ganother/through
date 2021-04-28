<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Scene from "./scenes/Index.vue";

export default defineComponent({
  name: "App",
  components: {
    Scene,
  },
  mounted() { 
   
  },
});
</script>

<style>

</style>