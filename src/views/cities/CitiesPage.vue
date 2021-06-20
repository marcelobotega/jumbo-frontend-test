<template>
  <div class="cities-page-wrapper">
    <CitiesList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CitiesList from "@/components/cities-list/CitiesList.vue";

@Component({
  components: {
    CitiesList,
  },
})
export default class CitiesPage extends Vue {}
</script>
