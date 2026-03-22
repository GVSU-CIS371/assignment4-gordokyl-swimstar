<template>
  <div>
    <div class="baseBeverage" :style="baseStyle"></div>

    <select v-model="selectedBaseId">
      <option v-for="b in bases" :key="b.id" :value="b.id">
        {{ b.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { bases } from "../stores/beverage";

// store selected base by id (more reliable than storing objects)
const selectedBaseId = ref(bases.value[0].id);

// find the selected base object
const selectedBase = computed(() =>
  bases.value.find(b => b.id === selectedBaseId.value)
);

// dynamic style
const baseStyle = computed(() => ({
  backgroundColor: selectedBase.value?.color || "transparent"
}));
</script>

<style scoped>
.baseBeverage {
  position: relative;
  width: 150px;
  height: 200px;
  bottom: 0;
  border: 2px solid black;
  border-radius: 10px;
  animation: pour-tea 2s;
  z-index: 300;
}
</style>
