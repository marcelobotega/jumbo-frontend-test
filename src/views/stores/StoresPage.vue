<template>
  <div class="stores-page-wrapper">
    <Stores />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Stores from "@/components/stores/Stores.vue";

@Component({
  components: {
    Stores,
  },
})
export default class StoresPage extends Vue {}
</script>
