<template>
  <div class="stores-page-wrapper">
    <StoreList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StoreList from "@/components/store-list/StoreList.vue";

@Component({
  components: {
    StoreList,
  },
})
export default class StoresPage extends Vue {}
</script>
