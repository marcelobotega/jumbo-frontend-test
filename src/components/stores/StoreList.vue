<template>
  <div class="stores-list-wrapper content-section">
    <h1>Stores</h1>
    <div class="stores-list-content mt-4">
      <div class="stores-list-search mb-3">
        <div class="md:w-1/2 lg:w-1/4 sm:w-full form-group">
          <label for="search" class="form-label">Search:</label>
          <div class="form-control-icon">
            <input
              type="text"
              name="search"
              id="search"
              autocomplete="off"
              class="form-control"
              @input="doSearchDebounced"
            />
            <div class="form-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <StoreCard
        v-for="store in stores"
        :key="store.uuid"
        class="mt-3"
        :store="store"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IStore } from "@/domain/store";
import storesService from "@/services/store.service";
import _debounce from "lodash/debounce";
import StoreCard from "@/components/store-card/StoreCard.vue";

@Component({
  components: { StoreCard },
})
export default class StoreList extends Vue {
  stores: IStore[] = storesService.getStoresOrdered(true, "addressName");

  doSearchDebounced = _debounce(this.doSearch, 500);

  doSearch(e: Event): void {
    const searchValue = (e.target as HTMLInputElement).value;

    this.stores = storesService.getStoresOrdered(
      true,
      "addressName",
      searchValue
    );
  }
}
</script>
