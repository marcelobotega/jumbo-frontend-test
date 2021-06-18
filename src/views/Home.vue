<template>
  <div class="home">
    <Stores />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Stores from "@/components/Stores.vue";

@Component({
  components: {
    Stores,
  },
})
export default class Home extends Vue {}
</script>
