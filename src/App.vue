<template>
  <div>
    <Beverage 
      :isIced="currentTemp === 'Cold'"
      :base="currentBase"
      :creamer="currentCreamer"
      :syrup="currentSyrup"
    />
    <ul>
      <li>
        <template v-for="temp in temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
    </ul>
  </div>
  
  <div>
    <Base :base="currentBase"/>
    <ul>
      <li>
        <template v-for="base in bases" :key="base.id">
          <label>
            <input
              type="radio"
              name="base"
              :id="`r${base.id}`"
              :value="base"
              v-model="currentBase"
            />
            {{ base.name }}
          </label>
        </template>
      </li>
    </ul>
  </div>

  <div>
    <Syrup :syrup="currentSyrup" />
    <ul>
      <li>
        <template v-for="syrup in syrups" :key="syrup.id">
          <label>
            <input
              type="radio"
              name="syrup"
              :id="`r${syrup.id}`"
              :value="syrup"
              v-model="currentSyrup"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>
    </ul>
  </div>

  <div>
    <Creamer :creamer="currentCreamer" />
    <ul>
      <li>
        <template v-for="creamer in creamers" :key="creamer.id">
          <label>
            <input
              type="radio"
              name="creamer"
              :id="`r${creamer.id}`"
              :value="creamer"
              v-model="currentCreamer"
            />
            {{ creamer.name }}
          </label>
        </template>
      </li>
    </ul>
  </div>

  <div>
    <h2>Current Beverage</h2>
    <p>
      {{ currentTemp }} {{ currentBase.name }}
      with {{ currentSyrup.name }} and {{ currentCreamer.name }}
    </p>

    <form @submit.prevent="handleSubmit">
      <label for="bname">Beverage Name:</label>
      <input type="text" id="bname" v-model="beverageName" />
      <br /><br />
      <input type="submit" value="Make Beverage" />
    </form>
  </div>

  <div id="beverage-container">
    <h2>Saved Beverages</h2>
    <ul>
      <li v-for="(bev, index) in store.beverage" :key="index">
        <button @click="store.showBeverage(bev)">
          {{ bev.name || "Unnamed Beverage" }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useBeverageStore } from "./stores/beverageStore";
import { storeToRefs } from "pinia";

import Beverage from "./components/Beverage.vue";
import Base from "./components/Base.vue";
import Syrup from "./components/Syrup.vue";
import Creamer from "./components/Creamer.vue";

const store = useBeverageStore();

const {
  temps, bases, syrups, creamers,
  currentTemp, currentBase, currentCreamer, currentSyrup
} = storeToRefs(store);

const beverageName = ref("");

function handleSubmit() {
  store.makeBeverage(beverageName.value);
  beverageName.value = "";
}
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
  text-align: center;
}
ul {
  list-style: none;
}
</style>