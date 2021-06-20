<template>
  <div>
    <h1>Stores</h1>

    <button @click.prevent="show = 'stores'" class="btn btn-blue mr-8">
      Show stores
    </button>
    <button @click.prevent="show = 'cities'" class="btn btn-blue">
      Show cities
    </button>
    <ul v-if="show === 'stores'">
      <li v-for="store in stores" :key="store.uuid">{{ store.addressName }}</li>
    </ul>
    <ul v-if="show === 'cities'">
      <li v-for="city in cities" :key="city">{{ city }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import stores from "../../data/stores-data";
import { Component, Vue } from "vue-property-decorator";
import { IStore } from "@/domain/store";

@Component
export default class Stores extends Vue {
  show = "";
  cities = ["Amsterdam", "Veghel"];
  stores: IStore[] = stores;
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}

li {
  background: #fdc513;
  display: inline-block;
  margin: 5px;
}
</style>
