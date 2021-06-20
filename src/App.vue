<template>
  <div class="app-wrapper">
    <MainNavbar />
    <div class="app-main-content xl:container xl:mx-auto px-3 py-6">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainNavbar from "@/components/main-navbar/MainNavbar.vue";

@Component({
  components: {
    MainNavbar,
  },
})
export default class App extends Vue {}
</script>
