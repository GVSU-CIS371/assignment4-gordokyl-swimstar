<template>
  <div>
    <div class="baseSyrup" :style="baseStyle"></div>

    <select v-model="selectedSyrupId">
      <option v-for="s in syrups" :key="s.id" :value="s.id">
        {{ s.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { syrups } from "../stores/beverage";

// store selected syrup by id (more reliable than storing objects)
const selectedSyrupId = ref(syrups.value[0].id);

// find the selected syrup object
const selectedSyrup = computed(() =>
  syrups.value.find(s => s.id === selectedSyrupId.value)
);

// dynamic style
const baseStyle = computed(() => ({
  backgroundColor: selectedSyrup.value?.color || "transparent"
}));
</script>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  background-color: #c6c6c6;
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
}
</style>
