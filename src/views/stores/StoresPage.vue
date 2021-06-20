<template>
  <div class="stores-page-wrapper">
    <StoresList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StoreList from "@/components/stores/StoreList.vue";

@Component({
  components: {
    StoresList: StoreList,
  },
})
export default class StoresPage extends Vue {}
</script>
