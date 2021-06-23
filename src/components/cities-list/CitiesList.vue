<template>
  <div class="cities-list-wrapper content-section">
    <h1>Cities</h1>
    <div class="cities-list-content mt-4">
      <div class="cities-list-filter">
        <div class="form-group md:w-1/2 lg:w-1/4 sm:w-full">
          <div class="form-control-icon">
            <input
              placeholder="Search cities"
              type="text"
              name="search"
              autocomplete="off"
              class="form-control"
              v-model="inputValue"
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
        <button
          class="btn btn-yellow btn-sm btn-icon ml-3"
          @click.prevent="toggleSort()"
        >
          <span>Sort</span>
          <svg
            v-if="!isASC"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-3 fill-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
            />
          </svg>
          <svg
            v-if="isASC"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-3 fill-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
            />
          </svg>
        </button>
      </div>
      <div v-if="cities.length === 0" class="mt-3">
        <p class="text-sm font-semibold mt-1">
          Sorry we couldn't find any city with your search term.
        </p>
      </div>
      <div v-else>
        <div class="card mt-3" v-for="city in cities" :key="city">
          <div class="card-content">
            <p>{{ city }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import citiesService from "@/services/cities.service";
import _debounce from "lodash/debounce";

@Component
export default class CitiesList extends Vue {
  doSearchDebounced = _debounce(this.doSearch, 300);
  inputValue = "";
  isASC = true;
  cities = citiesService.getCitiesOrdered(this.isASC);

  toggleSort(): void {
    this.isASC = !this.isASC;
    this.cities = this.searchCities();
  }

  doSearch(): void {
    this.cities = this.searchCities();
  }

  private searchCities(): string[] {
    return citiesService.getCitiesOrdered(this.isASC, this.inputValue);
  }
}
</script>
<style scoped lang="scss">
.cities-list-filter {
  @apply flex items-center;
}
</style>
