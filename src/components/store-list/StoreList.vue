<template>
  <div class="stores-list-wrapper content-section">
    <h1>Stores</h1>
    <div class="stores-list-content mt-4">
      <div class="stores-list-filter mb-3 flex items-center flex-wrap">
        <StoreAutocomplete
          @item-selected="doSearch"
          :open-until="openUntil"
          class="sm:mr-3"
        />
        <StoreOpenUntil
          @selected-time="selectTime"
          class="mt-1 md:mt-0"
        ></StoreOpenUntil>
      </div>
      <hr />
      <div v-if="stores.length === 0" class="mt-3">
        <p class="text-sm font-semibold mt-1">
          Sorry we couldn't find any stores with your search terms.
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
import StoreOpenUntil from "@/components/store-open-until/StoreOpenUntil.vue";

@Component({
  components: { StoreOpenUntil, StoreAutocomplete, StoreCard },
})
export default class StoreList extends Vue {
  stores: IStore[] = storeService.getStoresOrdered(true, "addressName");
  private searchValue!: string;
  private openUntil = "";

  doSearch(searchValue: string): void {
    this.searchValue = searchValue;
    this.stores = storeService.getStoresOrdered(
      true,
      "addressName",
      this.searchValue,
      this.openUntil
    );
  }

  selectTime(openUntil: string): void {
    this.openUntil = openUntil;
    this.stores = storeService.getStoresOrdered(
      true,
      "addressName",
      this.searchValue,
      this.openUntil
    );
  }
}
</script>
