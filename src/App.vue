<template>
  <div>
    <Beverage :isIced="currentTemp === 'Cold'" />
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
  <Base :base="currentBase" />
  <ul>
    <li>
      <template v-for="base in bases" :key="base.id">
        <label>
          <input
            type="radio"
            name="base"
            :id="`r${base.id}`"
            :value="base.id"
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
              :value="syrup.id"
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
        <template v-for="c in creamers" :key="c.id">
          <label>
            <input
            type="radio"
            name="creamer"
            :value="c.id"
            v-model="currentCreamer"
            />
          {{ c.name }}
          </label>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Base from "./components/Base.vue";
import Beverage from "./components/Beverage.vue";
import Creamer from "./components/Creamer.vue";
import Syrup from "./components/Syrup.vue";
import { temps, currentTemp } from "./stores/beverage";

import { bases } from "./stores/beverage";
import { syrups } from "./stores/beverage";
import { creamers } from "./stores/beverage";

const currentBase = ref(bases.value[0].id);
const currentSyrup = ref(syrups.value[1]); // "Vanilla"
const currentCreamer = ref(creamers.value[1]); // "Milk"
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
