<template>
  <div class="store-open-until form-group md:w-1/2 lg:w-1/4 w-full">
    <label class="form-label">Open until:</label>
    <select
      name="open-until"
      autocomplete="off"
      class="form-control"
      v-model="selectValue"
      @change="selectedTime"
    >
      <option value="">Select time</option>
      <option
        v-for="openUntil in openUntilList"
        :key="openUntil"
        :value="openUntil"
      >
        {{ openUntil }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";
import storeService from "@/services/store.service";

@Component
export default class StoreOpenUntil extends Vue {
  selectValue = "";
  openUntilList = storeService.getStoresOpenUntilValues();

  @Emit()
  selectedTime(): string {
    return this.selectValue;
  }
}
</script>
