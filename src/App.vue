<template>
  <div>
    <Beverage
      :isIced="store.currentTemp === 'Cold'"
      :creamer="store.currentCreamer"
      :syrup="store.currentSyrup"
      :base="store.currentBase"
    />

    <ul>
      <li>
        <template v-for="temp in store.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :value="temp"
              v-model="store.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
    </ul>
  </div>

  <div>
    <Base :base="store.currentBase" />

    <ul>
      <li>
        <template v-for="base in store.bases" :key="base.id">
          <label>
            <input
              type="radio"
              name="base"
              :value="base"
              v-model="store.currentBase"
            />
            {{ base.name }}
          </label>
        </template>
      </li>
    </ul>
  </div>

  <div>
    <Syrup :syrup="store.currentSyrup" />

    <ul>
      <li>
        <template v-for="syrup in store.syrups" :key="syrup.id">
          <label>
            <input
              type="radio"
              name="syrup"
              :value="syrup"
              v-model="store.currentSyrup"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>
    </ul>
  </div>

  <div>
    <Creamer :creamer="store.currentCreamer" />

    <ul>
      <li>
        <template v-for="c in store.creamers" :key="c.id">
          <label>
            <input
              type="radio"
              name="creamer"
              :value="c"
              v-model="store.currentCreamer"
            />
            {{ c.name }}
          </label>
        </template>
      </li>
    </ul>
  </div>

  <div>
    <h2>Current Beverage</h2>
    <p>
      {{ store.currentTemp }} {{ store.currentBase.name }}
      with {{ store.currentSyrup.name }} and {{ store.currentCreamer.name }}
    </p>

    <form @submit.prevent="handleSubmit">
      <label for="bname">Beverage Name:</label>
      <input type="text" id="bname" v-model="beverageName" />
      <br /><br />
      <input type="submit" value="Submit" />
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

import Base from "./components/Base.vue";
import Beverage from "./components/Beverage.vue";
import Creamer from "./components/Creamer.vue";
import Syrup from "./components/Syrup.vue";

const store = useBeverageStore();
const beverageName = ref("");

function handleSubmit() {
  store.makeBeverage();
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
}

ul {
  list-style: none;
}
</style>