<template>
  <div class="city-card card">
    <div
      class="card-content cursor-pointer flex justify-between"
      @click="toggleOpen()"
    >
      <p>{{ city }}</p>
      <div>
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <svg
          v-if="isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </div>
    </div>
    <hr v-show="isOpen" />
    <div class="city-card-expansion" v-show="isOpen">
      <p class="text-sm font-semibold mt-1">Stores in city:</p>
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
import { Component, Prop, Vue } from "vue-property-decorator";
import storeService from "@/services/store.service";
import { IStore } from "@/domain/store";
import StoreCard from "@/components/store-card/StoreCard.vue";

@Component({
  components: { StoreCard },
})
export default class CityCard extends Vue {
  @Prop() city!: string;
  stores: IStore[] = [];
  isOpen = false;

  toggleOpen(): void {
    if (this.stores.length === 0) {
      this.stores = storeService.getStoresByCity(this.city);
    }
    this.isOpen = !this.isOpen;
  }
}
</script>
<style scoped lang="scss">
.city-card {
  .city-card-expansion {
    @apply m-3;
  }
}
</style>
