<template>
  <div>
    <div class="baseBeverage" :style="baseStyle"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  base: {
    id: string;
    name: string;
    color: string;
  };
}>();

const baseStyle = computed(() => ({
  backgroundColor: props.base.color || "transparent"
}));
</script>

<style scoped>
.baseBeverage {
  width: 150px;
  height: 200px;
  bottom: 0;
  border: 2px solid black;
  border-radius: 10px;
  animation: pour-tea 2s;
}
</style>