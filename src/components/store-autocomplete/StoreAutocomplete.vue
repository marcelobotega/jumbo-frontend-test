<template>
  <div class="store-autocomplete-wrapper form-group">
    <div class="form-control-icon">
      <input
        placeholder="Search stores or cities"
        type="text"
        name="search"
        autocomplete="off"
        class="form-control"
        v-model="inputValue"
        @input="doSearchDebounced"
        @keydown.down.prevent="onArrowDown"
        @keydown.up.prevent="onArrowUp"
        @keydown.enter.prevent="onEnter"
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
    <div v-if="inputValue && typed" class="store-autocomplete-panel">
      <p class="text-xs text-gray-500">
        Use the up and down arrow keys to move the selection
      </p>
      <h4>Stores</h4>
      <div class="ml-2">
        <div v-if="stores.length === 0">
          <p class="text-sm font-semibold mt-1">
            Sorry we couldn't find any stores with your search term.
          </p>
        </div>
        <div v-else>
          <a
            class="block hover:bg-red-100 focus:bg-red-100"
            href="#"
            tabindex="0"
            v-for="(store, i) in stores"
            :key="i"
            :class="{ 'bg-red-100': i === listPosition }"
            @click.prevent="itemSelected(store)"
          >
            {{ store }}
          </a>
          <p v-if="stores.length === 10" class="text-sm font-semibold mt-1">
            Search limited to 10 stores. Refine search terms to make your search
            results more precise
          </p>
        </div>
      </div>

      <h4 class="mt-1">Cities</h4>
      <div class="ml-2">
        <div v-if="cities.length === 0">
          <p class="text-sm font-semibold mt-1">
            Sorry we couldn't find any city with your search term.
          </p>
        </div>
        <div v-else>
          <a
            class="block hover:bg-green-100 focus:bg-green-100"
            href="#"
            tabindex="0"
            v-for="(city, i) in cities"
            :key="i + stores.length"
            :class="{ 'bg-green-100': i + stores.length === listPosition }"
            @click.prevent="itemSelected(city)"
          >
            {{ city }}
          </a>
          <p v-if="cities.length === 10" class="text-sm font-semibold mt-1">
            Search limited to 10 cities. Refine search terms to make your search
            results more precise
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";
import _debounce from "lodash/debounce";
import storeService from "@/services/store.service";
import citiesService from "@/services/cities.service";
import { IStore } from "@/domain/store";

@Component
export default class StoreAutocomplete extends Vue {
  doSearchDebounced = _debounce(this.doSearch, 300);
  stores: string[] = [];
  cities: string[] = [];
  inputValue = "";
  listPosition = 0;
  typed = false;

  private resultsLimit = 10;
  private results: string[] = [];

  mounted(): void {
    document.addEventListener("click", this.handleClickOutside);
  }

  destroyed(): void {
    document.removeEventListener("click", this.handleClickOutside);
  }

  handleClickOutside(event: Event): void {
    if (event && !this.$el.contains(event.target as HTMLDivElement)) {
      this.resetState();
    }
  }

  doSearch(e: Event): void {
    this.resetState();
    const search = (e.target as HTMLInputElement).value.trim();
    if (search) {
      this.typed = true;

      this.stores = storeService
        .getStoresOrdered(true, "addressName", search)
        .map((store: IStore) => store.addressName)
        .slice(0, this.resultsLimit);

      this.cities = citiesService
        .getCitiesOrdered(true, search)
        .slice(0, this.resultsLimit);

      this.results = [...this.stores, ...this.cities];
    } else {
      this.itemSelected("");
    }
  }

  onArrowDown(): void {
    if (this.listPosition < this.results.length - 1) {
      this.listPosition++;
    } else {
      this.listPosition = 0;
    }
  }

  onArrowUp(): void {
    if (this.listPosition > 0) {
      this.listPosition--;
    } else {
      this.listPosition = this.results.length - 1;
    }
  }

  onEnter(): void {
    const autoCompleteItem = this.results[this.listPosition];

    if (autoCompleteItem) {
      this.itemSelected(this.results[this.listPosition]);
    } else {
      this.itemSelected("");
    }

    this.resetState();
  }

  @Emit()
  itemSelected(item: string): string {
    this.resetState();
    this.inputValue = item;
    return item;
  }

  private resetState(): void {
    this.typed = false;
    this.listPosition = 0;
    this.stores = [];
    this.cities = [];
    this.results = [];
  }
}
</script>
<style scoped lang="scss">
.store-autocomplete-wrapper {
  @apply md:w-1/2
    lg:w-1/4
    sm:w-full
    relative;

  .store-autocomplete-panel {
    @apply bg-white
      z-50
    absolute
    px-4
    py-2
    rounded
    shadow-lg
    border border-gray-400;
  }
}
</style>
