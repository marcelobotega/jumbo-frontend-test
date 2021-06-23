<template>
  <div class="stores-list-wrapper content-section">
    <h1>Stores</h1>
    <div class="stores-list-content mt-4">
      <div class="stores-list-search mb-3">
        <StoreAutocomplete @item-selected="doSearch" />
      </div>
      <hr />
      <div v-if="stores.length === 0" class="mt-3">
        <p class="text-sm font-semibold mt-1">
          Sorry we couldn't find any stores with your search term.
        </p>
      </div>
      <div v-else>
        <StoreCard
          v-for="store in stores"
          :key="store.uuid"
          class="mt-3"
          :store="store"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IStore } from "@/domain/store";
import storeService from "@/services/store.service";
import StoreCard from "@/components/store-card/StoreCard.vue";
import StoreAutocomplete from "@/components/store-autocomplete/StoreAutocomplete.vue";

@Component({
  components: { StoreAutocomplete, StoreCard },
})
export default class StoreList extends Vue {
  stores: IStore[] = storeService.getStoresOrdered(true, "addressName");

  doSearch(searchValue: string): void {
    this.stores = storeService.getStoresOrdered(
      true,
      "addressName",
      searchValue
    );
  }
}
</script>
