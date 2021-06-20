<template>
  <div class="cities-list-wrapper content-section">
    <h1>Cities</h1>
    <div class="cities-list-content mt-4">
      <button
        class="btn btn-yellow btn-sm btn-icon"
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
      <div class="card mt-3" v-for="city in cities" :key="city">
        <div class="card-content">
          <p>{{ city }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import citiesService from "@/services/cities.service";

@Component
export default class CitiesList extends Vue {
  isASC = true;
  cities = citiesService.getCitiesOrdered(this.isASC);

  toggleSort(): void {
    this.isASC = !this.isASC;
    this.cities = citiesService.getCitiesOrdered(this.isASC);
  }
}
</script>
